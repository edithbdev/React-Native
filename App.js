import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';
// import * as Location from 'expo-location';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Timer from './components/Timer/Timer';
import History from './components/History/History';
import Settings from './components/Settings/Settings';
import Footer from './components/Footer/Footer';
import { useReducer, useEffect } from 'react';
import { initialState, reducer } from './components/reducer/reducer';

// Necessary if I want receive the notification when the app is open
Notifications.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldShowAlert: true,
    };
  },
});

export default function App() {
  const Stack = createNativeStackNavigator();

  // create a new instance of the reducer with the initial state and the reducer
  // this will be used to update the state and handle the actions in the app and all the components
  const [state, dispatch] = useReducer(reducer, initialState);

  // fonction asynchrone to send a notification to the user
  // I can define content and title of the notification
  // and when the notification will be sent
  const triggerNotifications = async () => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Timer's up!",
        body: `Votre session de ${state.settings.workDuration}min avec ${state.settings.breakDuration}m de pause est terminée`,
      },
      trigger: null,
    });
  };

  // https://stackoverflow.com/questions/68668152/react-native-expo-permission-deprecated-what-to-use-now
  // To ask for permission to IOS
  // If the first time the app is launched, the user will be prompted to allow notifications
 useEffect(() => {
    Permissions.getAsync(Permissions.NOTIFICATIONS)
      .then((statusObj) => {
        if (statusObj.status !== "granted") {
          return Permissions.askAsync(Permissions.NOTIFICATIONS);
        }
        return statusObj;
      })
      .then((statusObj) => {
        if (statusObj.status !== "granted") {
          return;
        }
      });
  }, []);

// NavigationContainer can be used to create a "router" for the navigation in react native
// I can create a stack navigator to create a stack of screens
// Each screen of my stack will send to a particular component to navigate to my app
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Timer'>
          <Stack.Screen name='Timer'>
            {() => (
              <Timer
                state={state}
                dispatch={dispatch}
                triggerNotifications={triggerNotifications}
              />
            )}
          </Stack.Screen>
          <Stack.Screen name='History'>
            {() => <History state={state} dispatch={dispatch} />}
          </Stack.Screen>
          <Stack.Screen name='Settings'>
            {() => <Settings state={state} dispatch={dispatch} />}
          </Stack.Screen>
        </Stack.Navigator>
        {/* <Button
          onPress={triggerNotifications}
          title='Trigger Local Notifications'
          color='#841584'
          accessibilityLabel='Trigger Local Notifications'
        /> */}
        <Footer />
        <StatusBar style='auto' />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text: {
    fontSize: 12,
  },
});
