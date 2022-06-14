import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Timer from './components/Timer/Timer';
import History from './components/History/History';
import Settings from './components/Settings/Settings';
import Footer from './components/Footer/Footer';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (

    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Timer">
          <Stack.Screen name="Timer" component={Timer} />
          <Stack.Screen name="History" component={History} />
          <Stack.Screen name="Settings" component={Settings} />
        </Stack.Navigator>
        <Footer />
        <StatusBar style="auto" />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

// css styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text: {
    fontSize: 45,
  },
});
