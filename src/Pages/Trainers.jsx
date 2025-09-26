import React from "react";
import "../Styles/Trainers.css";

import Trainer1 from "../assets/Trainer1.jpg";
import Trainer2 from "../assets/Trainer2.jpg";
import Trainer3 from "../assets/Trainer3.jpg";

export default function Trainers() {
  const trainers = [
    { name: "Alex Johnson", specialty: "HIIT & Strength", img: Trainer1 },
    { name: "Sara Lee", specialty: "Yoga & Flexibility", img: Trainer2 },
    { name: "Mike Brown", specialty: "Cardio & Endurance", img: Trainer3 },
  ];

  return (
    <div className="trainers">
      <h2>Meet Our Trainers</h2>
      <div className="trainers-container">
        {trainers.map((trainer, index) => (
          <div key={index} className="trainer-card">
            <img src={trainer.img} alt={trainer.name} />
            <h3>{trainer.name}</h3>
            <p>{trainer.specialty}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
