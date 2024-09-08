import React, { useState } from "react";
import "./styles.css";
import SignInForm from "./SignIn";
import SignUpForm from "./SignUp"; 

function Verification(){
  const [type, setType] = useState("signIn");
  const handleOnClick = text => {
    if (text !== type) {
      setType(text);
      return;
    }
  };
  const containerClass =
    "container " + (type === "SignUp" ? "right-panel-active" : "");
  return (
    <body className="welcome">
      <div className="Verification">
      <h2><b>GDSC KCE</b></h2>
      <div className={containerClass} id="container-hello">
        <SignUpForm />
        <SignInForm />
        <div className="overlay-container-hello">
          <div className="overlay-hello">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button
                className="ghost"
                id="SignIn"
                onClick={() => handleOnClick("SignIn")}
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button
                className="ghost "
                id="SignUp"
                onClick={() => handleOnClick("SignUp")}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </body>
  );
}
export default Verification;
