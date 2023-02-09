import React from "react";
import Header from "./components/Header/Header";
// import Body from "./components/Body/Body";
import Login from "./components/Login/Login"
import Signup from "./components/Signup/Signup"
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/Signup" element={<Signup/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/" element={<Header />} />
          {/* <Route path="/" element={<Body />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;