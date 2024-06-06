import { LoginContainer } from "./LoginContainer";
import logo from "../images/logo.png";
// ----- REDUX STUFF ----------
import { useDispatch, useSelector } from "react-redux";
import { LoginAttemptState } from "../types/reducerTypes";
// ----- useRef STUFF ---------
import { useRef } from "react";

const Login = () => {
  const isLoginAttempt = useSelector(
    (state: LoginAttemptState) => state.loginAttempt
  );
  const isRegisterAttempt = useSelector(
    (state: LoginAttemptState) => state.registerAttempt
  );
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
      if (loginUser.current && loginPass.current) {
        loginUser.current.value = "";
        loginPass.current.value = "";
      }
    }
    if (attempt === "registerClose") {
      dispatch({ type: "registerAttempt" });
      if (registerUser.current && registerPass.current) {
        registerUser.current.value = "";
        registerPass.current.value = "";
      }
    }
  };

  const loginUser = useRef<HTMLInputElement>(null);
  const loginPass = useRef<HTMLInputElement>(null);
  const registerUser = useRef<HTMLInputElement>(null);
  const registerPass = useRef<HTMLInputElement>(null);

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
          <input ref={loginUser} type="text" placeholder="Slapyvardis" />
          <input ref={loginPass} type="text" placeholder="Slaptažodis" />
          <button type="button">Prisijungti</button>
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
          <input ref={registerUser} type="text" placeholder="Slapyvardis" />
          <input ref={registerPass} type="text" placeholder="Slaptažodis" />
          <button type="button">Registruotis</button>
          <button type="button" onClick={() => changeAttempts("registerClose")}>
            Atgal
          </button>
        </div>
      </form>
    </LoginContainer>
  );
};

export default Login;
