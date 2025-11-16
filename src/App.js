import React from "react";
import { BrowserRouter as Router } from "react-router-dom";


import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Programs from "./Pages/Programs";
import Trainers from "./Pages/Trainers";
import Membership from "./Pages/Membership";
import Info from "./Pages/Info";
import Contact from "./Pages/Contact";
import FooterPage from "./Pages/FooterPage";
import Footer from "./Pages/Footer";


function App() {
  return (
     <Router>
      <Navbar />
      <Home/>
      <About/>
      <Programs/>
      <Trainers/>
      <Membership/>
      <Info/>
      <Contact/>
      <FooterPage/>
      <Footer/>

    </Router>
  );
}

export default App;