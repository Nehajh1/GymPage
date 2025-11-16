import React from "react";
import "../Styles/About.css";

import MissionImg from "../assets/Cardio.jpg";

function About() {
  const content = {
    title: "Our Mission",
    text: "FitLife Gym's mission is to empower everyone to achieve their fitness goals through expert training, modern equipment, and a supportive community.",
    image: MissionImg,
  };

  return (
    <div className="about-section-row">
      <div className="about-image">
        <img src={content.image} alt={content.title} />
      </div>
      <div className="about-text">
        <h2>{content.title}</h2>
        <p>{content.text}</p>
      </div>
    </div>
  );
}

export default About;
