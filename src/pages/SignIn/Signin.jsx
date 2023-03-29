import React from "react";
import "./login.scss";
import logo from "../../assets/logo.png";
// import logo from '../../assets/Home-Background.jpg'
const Signin = () => {
  return (
    <div className="login">
      <div className="nav">
        <div className="wrapper">
          <img className="logo" alt="" src={logo} />
        </div>
      </div>
      <div className="container">
      <div className="form">
        <div className="form-wrapper">
          <h1>Sign in</h1>
          <div className="inputs">
            <input type="text" placeholder="Email or phone number" />
            <input type="password" placeholder="Password" />
            <button className="login-button">Sign In</button>
          </div>
          <div className="checkbox">
            <input type="checkbox" />
            <h3>Remember me</h3>
          </div>
          <span className="bottom">
            New to Netflix? <span className="redirect-link">Sign Up Now</span>
          </span>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Signin;