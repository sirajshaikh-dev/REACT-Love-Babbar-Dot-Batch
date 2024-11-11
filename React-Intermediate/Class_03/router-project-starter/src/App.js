import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  /*Error Handling
  // useEffect(()=>{
  //   console.log('object');
  //   setIsLoggedIn(true)
  // })
  */
  return (
   
      <div>
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} /> 
          <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
   
  )}

export default App;
