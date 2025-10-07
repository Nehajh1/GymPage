import React from "react";
import GymLogo1 from "../assets/ExpertsTrainers.jpg";
import GymLogo2 from "../assets/Equipment.jpg";
import GymLogo3 from "../assets/Membership.jpg";
import GymLogo4 from "../assets/Plans.jpg";
import "../Styles/Info.css";

function Info() {
  return (
    <section id="gymContactUs1">
      <div className="gymContactUs-features">
        <div className="gymContactUs-feature">
          <div className="gymContactUs-icon">
            <img src={GymLogo1} alt="Expert Trainers" />
          </div>
          <h3>Expert Trainers</h3>
          <p>Our certified coaches help you achieve your dream body safely and effectively.</p>
        </div>

        <div className="gymContactUs-feature">
          <div className="gymContactUs-icon">
            <img src={GymLogo2} alt="Modern Equipment" />
          </div>
          <h3>Modern Equipment</h3>
          <p>We offer state-of-the-art gym machines and free weights for every workout style.</p>
        </div>

        <div className="gymContactUs-feature">
          <div className="gymContactUs-icon">
            <img src={GymLogo3} alt="Flexible Memberships" />
          </div>
          <h3>Flexible Memberships</h3>
          <p>Join monthly, quarterly, or yearly — we adapt to your schedule and goals.</p>
        </div>

        <div className="gymContactUs-feature">
          <div className="gymContactUs-icon">
            <img src={GymLogo4} alt="Personalized Plans" />
          </div>
          <h3>Personalized Plans</h3>
          <p>Get customized workout and diet plans designed specifically for your body type.</p>
        </div>
      </div>
    </section>
  );
}

export default Info;
