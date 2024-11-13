import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import About from "./Components/About";
import Contact from "./Components/Contact";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  /*Error Handling
  // useEffect(()=>{
  //   console.log('object');
  //   setIsLoggedIn(true)
  // })
  */
  return (
   
        <div className="w-screen h-screen bg-richblack-900 flex flex-col">
          <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} /> 
            <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
      </div>
   
  )}

export default App;
