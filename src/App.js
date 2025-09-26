import React from "react";
import { BrowserRouter as Router } from "react-router-dom";


import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Programs from "./Pages/Programs";


function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Home />
        <About/>
        <Programs/>
      </div>
    </Router>
  );
}

export default App;

