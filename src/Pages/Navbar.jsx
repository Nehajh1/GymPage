import React, { useState } from "react";
import "../Styles/Navbar.css";
import logo from "../assets/logo.png";

function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleMenuClick = (menuName) => {
    setOpenDropdown((prev) => (prev === menuName ? null : menuName));
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -70; // navbar height offset
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setOpenDropdown(null); // close dropdown after scrolling
  };

  return (
    <header className="page1-header">
      <div className="page1-logo">
        <img src={logo} alt="Gym Logo" />
        <span className="page1-logo-text">FitLife Gym</span>
      </div>

      <div className="page1-list">
        <input type="checkbox" id="nav-toggle" className="nav-toggle" />
        <label htmlFor="nav-toggle" className="nav-toggle-label">
          <span className="hamburger-icon"></span>
        </label>

        <nav className="page1-main-nav">
          <ul className="page1-main-nav-list">

            {/* HOME */}
            <li className={openDropdown === "home" ? "dropdown-open" : ""}>
              <span className="nav-heading" onClick={() => handleMenuClick("home")}>
                Home
              </span>
              <ul className="page1-dropdown">
                <li><span onClick={() => scrollToSection("home")}>Overview</span></li>
                <li><span onClick={() => scrollToSection("home")}>Success Stories</span></li>
                <li><span onClick={() => scrollToSection("home")}>Gym Highlights</span></li>
              </ul>
            </li>

            {/* ABOUT US */}
            <li className={openDropdown === "about" ? "dropdown-open" : ""}>
              <span className="nav-heading" onClick={() => handleMenuClick("about")}>
                About Us
              </span>
              <ul className="page1-dropdown">
                <li><span onClick={() => scrollToSection("about")}>Our Mission</span></li>
                <li><span onClick={() => scrollToSection("about")}>Our Facilities</span></li>
                <li><span onClick={() => scrollToSection("about")}>Our Community</span></li>
              </ul>
            </li>

            {/* PROGRAMS */}
            <li className={openDropdown === "programs" ? "dropdown-open" : ""}>
              <span className="nav-heading" onClick={() => handleMenuClick("programs")}>
                Programs
              </span>
              <ul className="page1-dropdown">
                <li><span onClick={() => scrollToSection("programs")}>Strength Training</span></li>
                <li><span onClick={() => scrollToSection("programs")}>Cardio & HIIT</span></li>
                <li><span onClick={() => scrollToSection("programs")}>Yoga & Flexibility</span></li>
                <li><span onClick={() => scrollToSection("programs")}>Weight Loss Program</span></li>
              </ul>
            </li>

            {/* TRAINERS */}
            <li className={openDropdown === "trainers" ? "dropdown-open" : ""}>
              <span className="nav-heading" onClick={() => handleMenuClick("trainers")}>
                Trainers
              </span>
              <ul className="page1-dropdown">
                <li><span onClick={() => scrollToSection("trainers")}>Personal Trainers</span></li>
                <li><span onClick={() => scrollToSection("trainers")}>Female Trainers</span></li>
                <li><span onClick={() => scrollToSection("trainers")}>Certified Coaches</span></li>
              </ul>
            </li>

            {/* MEMBERSHIP */}
            <li className={openDropdown === "membership" ? "dropdown-open" : ""}>
              <span className="nav-heading" onClick={() => handleMenuClick("membership")}>
                Membership
              </span>
              <ul className="page1-dropdown">
                <li><span onClick={() => scrollToSection("membership")}>Basic Plan</span></li>
                <li><span onClick={() => scrollToSection("membership")}>Premium Plan</span></li>
                <li><span onClick={() => scrollToSection("membership")}>VIP Unlimited</span></li>
              </ul>
            </li>

            {/* JOIN NOW */}
            <li>
  <span 
    className="page1-nav-cta"
    onClick={() => {
      const contactSection = document.getElementById("gymContactUs");
      if (contactSection) {
        const yOffset = -70; // adjust this to your navbar height
        const y = contactSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
      setOpenDropdown(null); // close any open dropdown
    }}
  >
    Join Now
  </span>
</li>

          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
