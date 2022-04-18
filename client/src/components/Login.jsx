import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LoginContext } from "../context/LoginContext";


const Login = () => {
  const {
    errorMessage,
    sendLogin,
    loginEmail,
    setLoginEmail,
    loginPassword,
    setLoginPassword
  } = useContext(LoginContext);

  const handleOnChangeEmail = e => setLoginEmail(e.target.value);

  const handleOnChangePassword = e => setLoginPassword(e.target.value);

  return (
    <div className="login">
      <h1>Login</h1>
      <form action="" className="login__form">
        <input
          type="text"
          placeholder="email"
          value={loginEmail}
          onChange={handleOnChangeEmail}
          required
        />
        <input
          type="password"
          placeholder="password"
          value={loginPassword}
          onChange={handleOnChangePassword}
          required
        />
        <p className="error">{errorMessage}</p>
        <button type="submit" className="submit" onClick={sendLogin}>
          Login
        </button>
      </form>
      <Link to="/register">
        <p>Create An Account. </p>
      </Link>
    </div>
  );
};

export default Login;