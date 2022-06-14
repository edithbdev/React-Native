import { Box, Heading, Text, Button, HStack } from 'native-base';
// We can import a stylesheet from a file
// import { styles } from './TimerStyles';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import { Vibration } from "react-native";
// import { useState } from 'react';
// import { StyleSheet } from "react-native";

// remainingTime is a function that returns the remaining time in seconds
const MyTimer = ({ remainingTime }) => {
  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime - minutes * 60;
  return (
    <Text fontSize='lg'>
      {minutes}m{seconds}
    </Text>
  );
};
const Timer = ({ state, dispatch, triggerNotifications }) => {
  // const [launch, setLaunch] = useState(false);
  // console.log('STATE DANS TIMER', state);

// to set the vibration pattern, it will vibrate at intervals of 100ms
 const ONE_SECOND_IN_MS = 1000;
 const PATTERN = [1 * ONE_SECOND_IN_MS, 1 * ONE_SECOND_IN_MS];

  return (
    // <Box style={{ border: "solid", borderWidth: 2 }}>
   <Box width="100%" height="100%" alignItems="center">
      {state.status === "off" ? (
        <Heading mb="10" size="lg">
          Timer has not started yet
        </Heading>
      ) : (
        <Heading mb="10" size="lg">
          You are{" "}
          <Text color={state.status == "working" ? "#004777" : "#4DC71F"}>
            {state.status}
          </Text>
        </Heading>
      )}
      {state.status === "working" && (
        <CountdownCircleTimer
          isPlaying
          duration={state.settings.workDuration} // en secondes
          colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
          colorsTime={[7, 5, 2, 0]}
         onComplete={() => {
            Vibration.vibrate();
            dispatch({ type: "SWITCH_MODE" });
          }}
        >
          {MyTimer}
        </CountdownCircleTimer>
      )}
      {state.status === "resting" && (
        <CountdownCircleTimer
          isPlaying
          duration={state.settings.breakDuration} // en secondes
          colors={["#4DC71F", "#F7B801", "#A30000", "#A30000"]}
          colorsTime={[7, 5, 2, 0]}
         onComplete={() => {
            Vibration.vibrate(PATTERN);
            triggerNotifications();
            dispatch({ type: "SWITCH_MODE" });
            dispatch({ type: "ADD_SESSION" });
          }}
        >
          {MyTimer}
        </CountdownCircleTimer>
      )}
      <HStack space="4" mt={10}>
        <Button
          bg="green.600"
          onPress={() => dispatch({ type: "START_TIMER" })}
        >
          C'est parti!
        </Button>
        {state.status !== "off" && (
          <Button bg="red.600" onPress={() => dispatch({ type: "STOP_TIMER" })}>
            Stop!
          </Button>
        )}
        {/* <Button onPress={() => Vibration.vibrate(PATTERN)}>
          Vibrate my Device
        </Button> */}
      </HStack>
    </Box>
  );
};

// const styles = StyleSheet.create({
//   TimerContainer: {
//     border: "solid",
//     borderWidth: 2,
//   },
// });

export default Timer;
