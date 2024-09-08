import React, { useState } from "react";
import { Link } from "react-router-dom";

function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit=async (e)=>{
    e.preventDefault();
    try{
      console.log("Logginnng");
      const data = await fetch("http://localhost:3008/api/Login",{method: "POST",
      body: JSON.stringify({
        Useremail:email,
        Userpassword:password
      }),
      headers: {
        "Content-type": "application/json"
      }
    });
    
    }
    catch(e){
      console.log(e);
      
    }
  }
    
  return (
    <div className="form-container sign-in-container">
      <form onSubmit={handleSubmit}>
        <h1>Sign in</h1>
        <span>Use your account</span>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        
          <button type="submit" >
            Sign In
          </button>
        
      </form>
    </div>
  );
}

export default SignInForm;
