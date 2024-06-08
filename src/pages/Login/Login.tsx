import { LoginContainer } from "./LoginContainer";
import logo from "../../images/logo.png";
import {useLogin} from './useLogin';


const Login = () => {
  const {
    isLoginAttempt,
    isRegisterAttempt,
    lUser,
    lPass,
    rUser,
    rPass,
    changeAttempts,
    loginUser,
    registerUser,
  } = useLogin();

  return (
    <LoginContainer>
      <img src={logo} alt="logo" />
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
          <button type="button" onClick={loginUser}>
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
