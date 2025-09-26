import React from "react";
import "../Styles/programs.css";

import HiitImage from "../assets/Hiit.jpg";
import YogaImage from "../assets/Yoga.jpg";
import StrengthImage from "../assets/Strength.jpg";
import CardioImage from "../assets/Cardio.jpg";
// import Exercise from "../assets/exercise.jpg";

export default function Programs() {
 const programs = [
   { title: "HIIT Training", img: HiitImage },
    { title: "Yoga & Flexibility", img: YogaImage },
    { title: "Strength Training", img: StrengthImage },
    { title: "Cardio Blast", img: CardioImage },
];


  return (
    <div className="programs">
      <h2>Our Programs</h2>
      <div className="programs-container">
        {programs.map((program, index) => (
          <div key={index} className="program-card">
            <img src={program.img} alt={program.title} />
            <h3>{program.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
