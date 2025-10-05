import React from "react";
import "../Styles/Membership.css";

export default function Membership() {
  const plans = [
    { name: "Basic", price: "$30/month", features: ["Gym Access", "Locker Room"] },
    { name: "Standard", price: "$50/month", features: ["All Classes", "Pool & Sauna", "Extended Hours"], highlight: true },
    { name: "Premium", price: "$80/month", features: ["24/7 Access", "Personal Trainer", "VIP Lounge"] },
  ];

  return (
    <div className="membership">
      <h2>Membership Plans</h2>
      <div className="membership-container">
        {plans.map((plan, index) => (
          <div key={index} className={`plan-card ${plan.highlight ? "highlight" : ""}`}>
            <h3>{plan.name}</h3>
            <p className="price">{plan.price}</p>
            <ul>
              {plan.features.map((feat, i) => <li key={i}>✔ {feat}</li>)}
            </ul>
            <button className="btn-plan">Choose Plan</button>
          </div>
        ))}
      </div>
    </div>
  );
}
