import React from "react";
import { BrowserRouter as Router } from "react-router-dom";


import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";


function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Home />
        <About/>
      </div>
    </Router>
  );
}

export default App;

