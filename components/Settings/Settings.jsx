import { Box, FormControl, Heading, Select } from 'native-base';
// import { useState } from "react";

// we add props to the component to pass the state to the component and the dispatch to the component
const Settings = ({ state, dispatch }) => {
  // we dont't need to use useState below here because we use props.state of reducer to get the state
  // const [workDuration, setWorkDuration] = useState(25);
  // const [breakDuration, setBreakDuration] = useState(10);

  return (
   <Box width="100%">
      <Heading size="lg">Settings</Heading>
      <FormControl isRequired>
        <FormControl.Label>Work Duration</FormControl.Label>
        <Select
          accessibilityLabel="Choose Work Duration"
          placeholder="Choose Work Duration"
          selectedValue={state.settings.workDuration}
          // we changed the value of the select to the value of the state.settings.workDuration
          // we use dispatch to change the state of the reducer
        onValueChange={
            (value) => dispatch({ type: "SET_WORK_DURATION", value: value })

          // Other method with SET_DURATION in the APP.js file
          // onValueChange={(value) =>
          //   dispatch({
          //     type: "SET_DURATION",
          //     value: value,
          //     key: "workDuration", // the same name we used in the initialState of the reducer
          //   })
          // }
       }
        >
          <Select.Item label="10 minutes" value={10} />
          <Select.Item label="15 minutes" value={15} />
          <Select.Item label="20 minutes" value={20} />
          <Select.Item label="25 minutes" value={25} />
          <Select.Item label="30 minutes" value={30} />
          <Select.Item label="35 minutes" value={35} />
          <Select.Item label="40 minutes" value={40} />
          <Select.Item label="45 minutes" value={45} />
        </Select>
        <FormControl.Label>Break Duration</FormControl.Label>
        <Select
          accessibilityLabel="Choose Break Duration"
          placeholder="Choose Break Duration"
          selectedValue={state.settings.breakDuration}
          onValueChange={(value) =>
            dispatch({ type: "SET_BREAK_DURATION", value: value })
          }
        >
          <Select.Item label="5 minutes" value={5} />
          <Select.Item label="10 minutes" value={10} />
          <Select.Item label="15 minutes" value={15} />
          <Select.Item label="20 minutes" value={20} />
        </Select>
      </FormControl>
    </Box>
  );
};

export default Settings;
