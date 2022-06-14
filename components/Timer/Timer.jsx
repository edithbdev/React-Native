import { Box, Button, Heading, Text } from 'native-base';
// We can import a stylesheet from a file
import { styles } from './TimerStyles';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import { useState } from 'react';
// import { StyleSheet } from "react-native";

const MyTimer = ({ remainingTime }) => {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime - minutes * 60;
    return <Text fontSize="lg">
         {minutes}m{seconds}
         </Text>
}
const Timer = () => {

    const [launch, setLaunch] = useState(false);

  return (
   <Box width="100%" height="100%" alignItems="center">
      <Heading>Timer</Heading>
      <Button onPress={() => setLaunch(!launch)}> C'est parti!</Button>
      {launch && (
        <CountdownCircleTimer
          isPlaying
          duration={25} // en secondes
          colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
          colorsTime={[7, 5, 2, 0]}
        >
          {MyTimer}
          {/* {({ remainingTime }) => <Text>{remainingTime}</Text>} */}
        </CountdownCircleTimer>
      )}
    </Box>
  );
};

// const styles = StyleSheet.create({
//     container: {
//         border: "1px solid black",
//         padding: "10px",
//         margin: "10px",
//         width: "100%",
//         height: "100%",
//     },
// });

export default Timer;
