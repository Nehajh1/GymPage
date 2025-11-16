import React from "react";
import { useParams } from "react-router-dom";
import "../Styles/About.css";

import MissionImg from "../assets/Cardio.jpg";
import FacilitiesImg from "../assets/Cardio.jpg";
import CommunityImg from "../assets/Cardio.jpg";

const aboutContent = {
  "our-mission": {
    title: "Our Mission",
    text: "FitLife Gym's mission is to empower everyone to achieve their fitness goals through expert training, modern equipment, and a supportive community.",
    image: MissionImg,
  },
  "our-facilities": {
    title: "Our Facilities",
    text: "We provide state-of-the-art gym equipment, group classes, and personalized training spaces to help you reach your full potential.",
    image: FacilitiesImg,
  },
  "our-community": {
    title: "Our Community",
    text: "Join a welcoming community of fitness enthusiasts, where motivation and support keep you on track every day.",
    image: CommunityImg,
  },
};

function About() {
  const { section } = useParams();
  const content = aboutContent[section] || aboutContent["our-mission"]; // default

  return (
    <div className="about">
      <section className="about-section">
        <div className="about-image">
          <img src={content.image} alt={content.title} />
        </div>
        <div className="about-text">
          <h2>{content.title}</h2>
          <p>{content.text}</p>
        </div>
      </section>
    </div>
  );
}

export default About;

