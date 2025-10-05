import React from "react";
import "../Styles/FooterPage.css";

import logo from "../assets/logo.png";
import insta from "../assets/instagram.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";

function FooterPage() {
  return (
    <section id="gymFooter">
      <div className="gymFooter-column gymFooter-brand">
        <img src={logo} alt="FitLife Gym Logo" className="gymFooter-logo" />

        <div className="gymFooter-socials">
          <img src={insta} alt="Instagram" />
          <img src={facebook} alt="Facebook" />
          <img src={twitter} alt="Twitter" />
        </div>

        <p className="gymFooter-copy">
          © 2025 FitLife Gym<br />
          All rights reserved.
        </p>
      </div>

      <div className="gymFooter-column">
        <h4>Contact Us</h4>
        <p>432 Fitness Street,<br />Kathmandu, Nepal</p>
        <p>+977-9800000000<br />contact@fitlifegym.com</p>
      </div>

      <div className="gymFooter-column">
        <h4>Membership</h4>
        <p>Join Now</p>
        <p>Login</p>
        <p>Plans & Pricing</p>
        <p>Personal Training</p>
      </div>

      <div className="gymFooter-column">
        <h4>About</h4>
        <p>Our Story</p>
        <p>Trainers</p>
        <p>Careers</p>
        <p>Blog</p>
      </div>

      <div className="gymFooter-column">
        <h4>Support</h4>
        <p>FAQs</p>
        <p>Contact Support</p>
        <p>Privacy Policy</p>
        <p>Terms & Conditions</p>
      </div>
    </section>
  );
}

export default FooterPage;
