import React from "react";
import "../Styles/Home.css";
import heroImage from "../assets/Gym-Background.jpg"; 

function Home() {
  return (
    <div className="home">
      <section id="home" className="hero">
        <img src={heroImage} alt="Gym Hero" className="hero-img" />
        <div className="hero-text">
          <h1>Welcome to FitLife Gym</h1>
          <p>Transform your body, mind, and lifestyle with us.</p>
          <button
            className="hero-btn"
            onClick={() => {
              const contactSection = document.getElementById("contact");
              if (contactSection) {
                const yOffset = -70; // adjust for navbar height
                const y = contactSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: "smooth" });
              }
            }}
          >
            Join Now
          </button>
        </div>
      </section>
    </div>
  );
}

export default Home;
