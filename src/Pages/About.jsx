import React from "react";
import "../Styles/About.css";
import Gym1 from '../assets/Gym1.jpg';

function About() {
  return (
    <div className="about">
      <section className="about-section">
        <div className="about-image">
          <img src={Gym1} alt="About Gym" />
        </div>
        <div className="about-text">
          <h2>About FitLife Gym</h2>
          <p>FitLife Gym is dedicated to helping you achieve your fitness goals. Our expert trainers, modern equipment, and community-driven approach make fitness fun and effective. Join us and experience a healthier, stronger you!</p>
        </div>
      </section>
    </div>
  );
}

export default About;
