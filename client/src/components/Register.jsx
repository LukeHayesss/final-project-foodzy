import React, { useContext } from "react";
import { LoginContext } from "../context/LoginContext";

const Register = () => {
  const {
    errorMessage,
    sendRegistration,
    regname,
    setRegname,
    regemail,
    setRegemail,
    regpassword,
    setRegpassword,
    regpassword2,
    setRegpassword2
  } = useContext(LoginContext);

  const handleChangeName = e => setRegname(e.target.value);

  const handleChangeEmail = e => setRegemail(e.target.value);

  const handleChangePassword = e => setRegpassword(e.target.value);

  const handleChangePassword2 = e => setRegpassword2(e.target.value);

  return (
    <div className="register">
      <h1>Register</h1>
      <form className="register__form" action="">
        <input
          type="text"
          placeholder="name"
          value={regname}
          onChange={handleChangeName}
          required
        />
        <input
          type="email"
          placeholder="email"
          value={regemail}
          onChange={handleChangeEmail}
          required
        />
        <input
          type="password"
          placeholder="password"
          value={regpassword}
          onChange={handleChangePassword}
          required
        />
        <input
          type="password"
          placeholder="repeat password"
          value={regpassword2}
          onChange={handleChangePassword2}
          required
        />
        <p className="error">{errorMessage}</p>
        <button className="register__button" onClick={sendRegistration}>
          Save
        </button>
      </form>
    </div>
  );
};

export default Register;