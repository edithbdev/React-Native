// https://date-fns.org/docs/Getting-Started
import { format } from "date-fns";

// intial state to be used in the reducer
export const initialState = {
  status: 'off', // "off" | "working" | "resting"
  settings: {
    workDuration: 25,
    breakDuration: 5,
  },
  sessions: [], //! to retrieve the sessions
};

// reducer to be used in the app to update the state and handle the actions
// reducer role to update the state and handle the actions
export const reducer = (state, action) => {
  //   console.log('STATE', state);
  //   console.log('ACTION', action);
  switch (action.type) {
    case 'ADD_SESSION':
      return {
        ...state,
        sessions: [
          ...state.sessions,
          {
            // date: new Date(),
            // be able to format the date like I want
            date: format(new Date(), "dd/MM/yyyy HH:mm"),
            ...state.settings,
          },
        ],
      };
    case 'START_TIMER':
      return {
        ...state,
        status: 'working',
      };
    case 'STOP_TIMER':
      return {
        ...state,
        status: 'off',
      };
    case 'SWITCH_MODE':
      return {
        ...state,
        status: state.status === 'working' ? 'resting' : 'working',
      };
    case 'SET_WORK_DURATION':
      return {
        // destructuring the state to get the current state
        ...state,
        // updating the state with the new value
        settings: {
          // destructuring the settings to get the current settings
          ...state.settings,
          // action.value is the new value
          workDuration: action.value,
        },
      };
    case 'SET_BREAK_DURATION':
      return {
        ...state,
        settings: {
          ...state.settings,
          breakDuration: action.value,
        },
      };
    // Other method to use workDuration and breakDuration to simplify the code
    // case "SET_DURATION":
    // return {
    //   ...state,
    //   settings: {
    //     ...state.settings,
    //     [action.key]: action.value,
    //   },
    // };
    default:
      return state;
  }
};
