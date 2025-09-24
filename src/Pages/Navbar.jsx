import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";
import logo from "../assets/logo.png"; 

function Navbar() {
  return (
    <header className="page1-header">
      <div className="page1-logo">
        <img src={logo} alt="Gym Logo"/>
        <span className="page1-logo-text">FitLife Gym</span>
      </div>

      <div className="page1-list">
        <input type="checkbox" id="nav-toggle" className="nav-toggle" />
        <label htmlFor="nav-toggle" className="nav-toggle-label">
          <span className="hamburger-icon"></span>
        </label>

        <nav className="page1-main-nav">
          <ul className="page1-main-nav-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/programs">Programs</Link></li>
            <li><Link to="/trainers">Trainers</Link></li>
            <li><Link to="/membership">Membership</Link></li>
            <li><Link to="/contact" className="page1-nav-cta">Join Now</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
