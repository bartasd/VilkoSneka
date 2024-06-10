import { LoginAttemptState, UserState } from "../types/reducerTypes";
import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

// ----------- LOGIN ATTEMPT SLICE ------------------------------------------------
const initialLoginAttemptState: LoginAttemptState = {
  loginAttempt: false,
  registerAttempt: false,
};

const loginAttemptSlice = createSlice({
  name: "login",
  initialState: initialLoginAttemptState,
  reducers: {
    loginAttempt(state) {
      state.loginAttempt = !state.loginAttempt;
    },
    registerAttempt(state) {
      state.registerAttempt = !state.registerAttempt;
    },
  },
});

export const { loginAttempt, registerAttempt } = loginAttemptSlice.actions;
// ----------- LOGIN ATTEMPT SLICE ------------------------------------------------

// ----------- USER SLICE  --------------------------------------------------------
const initialUser: UserState = {
  user: "",
};

const userSlice = createSlice({
  name: "user",
  initialState: initialUser,
  reducers: {
    setUser(state, action: PayloadAction<{ user: string }>) {
      state.user = action.payload.user;
    },
    clearUser(state) {
      state.user = "";
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
// ----------- USER SLICE  --------------------------------------------------------

const store = configureStore({
  reducer: {
    loginAttempt: loginAttemptSlice.reducer,
    userChange: userSlice.reducer,
  },
});

export default store;
