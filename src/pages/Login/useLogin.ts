// ----- REDUX STUFF ----------
import store, { loginAttempt, registerAttempt } from "../../store/index";
import { LoginAttemptState } from "../../types/reducerTypes";
import { useSelector } from "react-redux";
// ----- useRef STUFF ---------
import { useRef } from "react";
// ----- SOME ROUTING ---------
import { useNavigate } from "react-router-dom";
// ----- SOME IMPORTS ---------
import axios from "axios";
// ----- CONSTANTS -----------
import {
  userCreateUrl,
  authorizeUrl,
  userStatusUrl,
} from "../../constants/back_constants";

export const useLogin = () => {
  // NAV
  const navigate = useNavigate();

  // REDUX STORE STATES
  const isLoginAttempt = useSelector(
    (state: { loginAttempt: LoginAttemptState }) =>
      state.loginAttempt.loginAttempt
  );

  const isRegisterAttempt = useSelector(
    (state: { loginAttempt: LoginAttemptState }) =>
      state.loginAttempt.registerAttempt
  );

  // DISPATCH STATE
  const changeAttempts = async (attempt: string) => {
    if (attempt === "login") {
      const token = localStorage.getItem("VS_token");
      if (token) {
        // check my status
        const validate = await checkLogin(token);
        if (validate) {
          navigate("messenger");
          // fire the Toats messsage saying: user logined!
        } else {
          throw new Error("Something bad with token");
        }
      } else {
        store.dispatch(loginAttempt());
      }
    }
    if (attempt === "register") {
      store.dispatch(registerAttempt());
    }
    if (attempt === "loginClose") {
      store.dispatch(loginAttempt());
      if (lUser.current && lPass.current) {
        lUser.current.value = "";
        lPass.current.value = "";
      }
    }
    if (attempt === "registerClose") {
      store.dispatch(registerAttempt());
      if (rUser.current && rPass.current) {
        rUser.current.value = "";
        rPass.current.value = "";
      }
    }
  };

  // SOME REFS
  const lUser = useRef<HTMLInputElement>(null);
  const lPass = useRef<HTMLInputElement>(null);
  const rUser = useRef<HTMLInputElement>(null);
  const rPass = useRef<HTMLInputElement>(null);

  // SOME ACTIONS

  const registerUser = async () => {
    const user = rUser.current?.value;
    const pass = rPass.current?.value;
    if (user && pass) {
      try {
        const response = await axios.post(userCreateUrl, {
          username: user,
          password: pass,
        });
        if (response.status === 201) {
          changeAttempts("registerClose");
          // fire the Toats messsage saying: user registered!
        }
      } catch (error) {
        console.log(error); // ???
      }
    } else {
      // notify user to enter some values
    }
  };

  const checkLogin = async (token: string) => {
    const response = await axios.get(userStatusUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.status === 200;
  };

  const loginUser = async () => {
    const user = lUser.current?.value;
    const pass = lPass.current?.value;
    if (user && pass) {
      try {
        const response = await axios.post(authorizeUrl, {
          username: user,
          password: pass,
        });
        if (response.status === 201) {
          const token = response.data.access_token;
          localStorage.setItem("VS_token", token);
          const validate = await checkLogin(token);

          if (validate) {
            changeAttempts("loginClose");
            navigate("messenger");
            // fire the Toats messsage saying: user logined!
          } else {
            throw new Error("Something bad with token");
          }
        }
      } catch (error) {
        lUser.current.value = "";
        lPass.current.value = "";
        // fire the Toats messsage saying: BAD LOGIN DETAILS
      }
    } else {
      // notify user to enter some values
    }
  };
  return {
    changeAttempts,
    isLoginAttempt,
    isRegisterAttempt,
    lUser,
    lPass,
    rUser,
    rPass,
    loginUser,
    registerUser,
  };
};
