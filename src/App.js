
import './App.css';
import React from "react";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Nav from "./components/Nav/Nav"
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Header />
      <Body />
    </div>
  );
}

export default App;