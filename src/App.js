import React from "react";
import { BrowserRouter as Router } from "react-router-dom";


import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Programs from "./Pages/Programs";
import Trainers from "./Pages/Trainers";
import Membership from "./Pages/Membership";
import Contact from "./Pages/Contact";


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Home />
        <About/>
        <Programs/>
        <Trainers/>
        <Membership/>
        <Contact/>
      </div>
    </Router>
  );
}

export default App;

