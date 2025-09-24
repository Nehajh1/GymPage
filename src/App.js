import React from "react";
import { BrowserRouter as Router } from "react-router-dom";


import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home";


function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Home />
      </div>
    </Router>
  );
}

export default App;

