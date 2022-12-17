import React from "react";
import "./login.css";
import AM from '../../Assets/AM black.svg'

function Login() {
  return (
    <div className="assets__login">
      <div className="assets__login-content">
        <img src={AM} alt='AM'/>
        <label>
          <p>Email</p>
          <input type="text" placeholder="Your email here" />
        </label>
        <label>
          <p>Password</p>
          <input type="password" placeholder="password"/>
        </label>
        <button> Login </button>
      </div>
    </div>
  );
}

export default Login;
