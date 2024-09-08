import React from "react";
function SignUpForm() {
  const [state, setState] = React.useState({
    name: "",
    email: "",
    password: ""
  });
  const handleChange = evt => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  };

  const handleOnSubmit = async (evt) => {
    evt.preventDefault();
    console.log("hii");
    
    try{
      const request = await fetch("http://localhost:3008/api/Signup",{method: "POST",
      body: JSON.stringify({
        Username: state.name,
        Useremail: state.email,
        Userpassword: state.password
      }),
      headers: {
        "Content-type": "application/json"
      }
    });
    console.log(request);
    
    }
    catch(e){
      console.log(e);
      
    }
    
    // alert(
    //   `You are sign up with name: ${name} email: ${email} and password: ${password}`
    // );
    // await fetch("http://localhost:3008/");

    for (const key in state) {
      setState({
        ...state,
        [key]: ""
      });
    }
  };

  return (
    <div className="form-container sign-up-container">
      <form onSubmit={handleOnSubmit}>
        <h1>Create Account</h1>
        <span>Use your email for registration</span>
        <input
          type="text"
          name="name"
          value={state.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          value={state.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpForm;
