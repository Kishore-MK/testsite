import React, { useState } from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Home.js';
import AskLead from './Components/AskLead.js';
import ApplicationStatus from './Components/ApplicationStatus.js';
import LeaderBoard from './Components/LeaderBoard.js';
import SignInForm from './SignIn.js';
import Verification from "./Verification.js";
import SignUpForm from './SignUp.js';
import NavBar from './Components/NavBar.js';

function App() {
  return(
    <BrowserRouter>
        <Routes>
          <Route path='/Home' element={<Home />}/>
          <Route path='/AskLead' element={<AskLead/>}/>
          <Route path='/LeaderBoard' element={<LeaderBoard/>}/>
          <Route path='/ApplicationStatus' element={<ApplicationStatus/>}/>
          <Route path='/SignIn' element={<SignInForm/>}/>
          <Route path='/SignUp' element={<SignUpForm/>}/>
          <Route path="/" element={<Verification />}/>
          <Route path='/SignIn' element={<NavBar/>}/>
          <Route path='/SignUp' element={<NavBar/>}/>
        </Routes>
      </BrowserRouter>
  );
}
export default App;