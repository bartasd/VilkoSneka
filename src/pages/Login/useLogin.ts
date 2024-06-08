// ----- REDUX STUFF ----------
import { useDispatch, useSelector } from "react-redux";
import { LoginAttemptState } from "../../types/reducerTypes";
// ----- useRef STUFF ---------
import { useRef } from "react";
// ----- SOME ROUTING ---------
import { useNavigate } from "react-router-dom";
// ----- SOME IMPORTS ---------
import axios from "axios";
// ----- CONSTANTS -----------
import { userCreateUrl, authorizeUrl} from "../../constants/back_constants";

export const useLogin = () => {
    // NAV
    const navigate = useNavigate();
  
    // REDUX STORE STATES
    const isLoginAttempt = useSelector(
      (state: LoginAttemptState) => state.loginAttempt
    );
    const isRegisterAttempt = useSelector(
      (state: LoginAttemptState) => state.registerAttempt
    );
  
    // DISPATCH STATE
    const dispatch = useDispatch();
    const changeAttempts = (attempt: string): void => {
      if (attempt === "login") {
        if(localStorage.getItem('VS_token')){ // how is validated????
          navigate('messenger');
        }
        else{
          dispatch({ type: "loginAttempt" });
        }
      }
      if (attempt === "register") {
        dispatch({ type: "registerAttempt" });
      }
      if (attempt === "loginClose") {
        dispatch({ type: "loginAttempt" });
        if (lUser.current && lPass.current) {
          lUser.current.value = "";
          lPass.current.value = "";
        }
      }
      if (attempt === "registerClose") {
        dispatch({ type: "registerAttempt" });
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
          if(response.status === 201){
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
  
  
    const loginUser = async () => {
      const user = lUser.current?.value;
      const pass = lPass.current?.value;
      if (user && pass) {
        try {
          const response = await axios.post(authorizeUrl, {
            username: user,
            password: pass,
          });
          if(response.status === 200){
            const token = response.data.access_token;
            localStorage.setItem('VS_token', token); // how is validated???....
            changeAttempts("loginClose");
            navigate('messenger');
            // fire the Toats messsage saying: user logined!
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
      registerUser
  };

}



