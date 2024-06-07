import { LoginContainer } from "./LoginContainer";
import logo from "../../images/logo.png";
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
import { userCreateUrl } from "../../constants/back_constants";

const Login = () => {
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
      dispatch({ type: "loginAttempt" });
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
      console.log(`user: ${user}, pass: ${pass}`);
      try {
        const response = await axios.post(userCreateUrl, {
          username: user,
          password: pass,
        });
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    } else {
      // notify user to enter some values
    }
  };

  return (
    <LoginContainer>
      <img src={logo} />
      <h1>Vilko Šneka</h1>
      <form
        style={{
          transform: `translateX(${
            isLoginAttempt
              ? "calc(100vw + 250px)"
              : isRegisterAttempt
              ? "calc(-100vw - 250px)"
              : "0"
          })`,
        }}
      >
        <div>
          <input ref={lUser} type="text" placeholder="Slapyvardis" />
          <input ref={lPass} type="text" placeholder="Slaptažodis" />
          <button type="button" onClick={() => navigate("/messenger")}>
            Prisijungti
          </button>
          <button type="button" onClick={() => changeAttempts("loginClose")}>
            Atgal
          </button>
        </div>

        <div>
          <button type="button" onClick={() => changeAttempts("login")}>
            Prisijungti
          </button>
          <button type="button" onClick={() => changeAttempts("register")}>
            Registruotis
          </button>
        </div>

        <div>
          <input ref={rUser} type="text" placeholder="Slapyvardis" />
          <input ref={rPass} type="text" placeholder="Slaptažodis" />
          <button type="button" onClick={registerUser}>
            Registruotis
          </button>
          <button type="button" onClick={() => changeAttempts("registerClose")}>
            Atgal
          </button>
        </div>
      </form>
    </LoginContainer>
  );
};

export default Login;
