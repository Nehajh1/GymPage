import React from "react";
import ContactImage from "../assets/gymForm.jpg";
import "../Styles/Contact.css";

function Contact() {
  return (
    <section id="gymContactUs">
      <div className="gymContactUs-signup-section">
        <div className="gymContactUs-signup-box">
          <div className="gymContactUs-form-content">
            <h2>Contact Us & Get Your Free Trial!</h2>
            <p>
              Join our fitness community today! Start your fitness journey with a
              free personal training session. No commitment — just motivation!
            </p>

            <form>
              <div className="gymContactUs-form-group">
                <label>Full Name</label>
                <input type="text" placeholder="John Smith" />
              </div>

              <div className="gymContactUs-form-group">
                <label>Email Address</label>
                <input type="email" placeholder="john@example.com" />
              </div>

              <div className="gymContactUs-form-group">
                <label>Phone Number</label>
                <input type="tel" placeholder="+977 9800000000" />
              </div>

              <div className="gymContactUs-form-group gymContactUs-full-width">
                <label>Preferred Training Type</label>
                <select>
                  <option>Please choose one option:</option>
                  <option>Strength Training</option>
                  <option>Yoga & Flexibility</option>
                  <option>HIIT & Cardio</option>
                  <option>Weight Loss Program</option>
                  <option>Others</option>
                </select>
              </div>

              <div className="gymContactUs-form-group gymContactUs-full-width">
                <label>&nbsp;</label>
                <button type="submit" className="gymContactUs-submit-button">
                  Join Now
                </button>
              </div>
            </form>
          </div>

          <div className="gymContactUs-form-image">
            <img src={ContactImage} alt="Gym member training" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;