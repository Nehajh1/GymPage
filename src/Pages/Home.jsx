// src/pages/Home.jsx
import React from "react";
import "../Styles/Home.css";
import heroImage from "../assets/Gym-Background.jpg"; // put your image inside src/assets/

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <img src={heroImage} alt="Gym Hero" className="hero-img" />
        <div className="hero-text">
          <h1>Welcome to FitLife Gym</h1>
          <p>Transform your body, mind, and lifestyle with us.</p>
          <button className="hero-btn">Join Now</button>
        </div>
      </section>
    </div>
  );
}

export default Home;
