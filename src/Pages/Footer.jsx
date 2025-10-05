import React from "react";
import "../Styles/Footer.css";
import Facebook from "../assets/facebook.png";
import Insta from "../assets/instagram.png";
import Twitter from "../assets/twitter.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} FitLife Gym. All Rights Reserved.</p>
        <div className="socials">
         <img src={Facebook} alt="Facebook" />
         <img src={Insta} alt="Instagram" />
         <img src={Twitter} alt="Twitter" />
        </div>
      </div>
    </footer>
  );
}
