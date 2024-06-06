import { createStore } from "redux";
import { ActionType, LoginAttemptState } from "../types/reducerTypes";

// here you define states
const initialLoginAttemptState: LoginAttemptState = {
  loginAttempt: false,
  registerAttempt: false,
};

const someReducer = (
  state: LoginAttemptState = initialLoginAttemptState, // provide initial state to store
  action: ActionType
) => {
  switch (action.type) {
    case "loginAttempt":
    case "registerAttempt":
      return {
        ...state,
        [action.type]: !state[action.type],
      };
    default:
      return state;
  }
};

const store = createStore(someReducer);

export default store;
