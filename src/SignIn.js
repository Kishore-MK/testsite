import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useNavigate();

  async function submit(e) {
    e.preventDefault();
    try{
        await axios.post("http://localhost:3008/api/Login",{
          Useremail:email, Userpassword:password
        })
        .then(res =>{
          if(res.status === 200){
            history("/ApplicationStatus",{state:{id:email}})
          }else if(res.data === "notexist"){
            alert("User have not Sign Up")
          }
        })
        .catch(e=>{
          alert("Wrong details")
          console.log(e);
        })
    }catch(e){
      console.log(e);
    }
  }
    
  return (
    <div className="form-container sign-in-container">
      <form action="POST">
        <h1>Sign in</h1>
        <span>Use your account</span>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={(e) => {setEmail(e.target.value)}}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {setPassword(e.target.value)}}
        />
        
          <button type="submit" onClick={submit}>
            Sign In
          </button>
        
      </form>
    </div>
  );
}

export default SignInForm;
