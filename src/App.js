import React from "react";
import { BrowserRouter as Router } from "react-router-dom";


import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Programs from "./Pages/Programs";
import Trainers from "./Pages/Trainers";


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Home />
        <About/>
        <Programs/>
        <Trainers/>
      </div>
    </Router>
  );
}

export default App;

