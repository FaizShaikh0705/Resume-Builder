import React, { Fragment } from "react";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login"
import Signup from "./components/Signup/Signup"
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
   <div>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="*" element={<Header />} />
        </Routes>
      </Router> 
       </div>
    

  );
}

export default App;