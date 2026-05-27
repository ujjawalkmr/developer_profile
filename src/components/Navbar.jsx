import React, { useState } from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false); // close sidebar after click
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          {/* Left Logo */}
          <div className="logo">
            <img
              src="assets/uk_logo.png"
              alt="logo"
            />
            <span className="logo-text">Ujjawal Kumar</span>{" "}
          </div>

          {/* Desktop Menu */}
          <ul className="nav-links">
            <li onClick={() => scrollToSection("home")}>Home</li>
            <li onClick={() => scrollToSection("about")}>About</li>
            <li onClick={() => scrollToSection("skills")}>Skills</li>
            <li onClick={() => scrollToSection("service")}>Service</li>
            <li onClick={() => scrollToSection("projects")}>Projects</li>
            <li onClick={() => scrollToSection("contact")}>Contact</li>
          </ul>

          {/* Hamburger Icon */}
          <div
            className="hamburger"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </div>
        </div>
      </nav>

      {/* Sidebar for Mobile */}
      <div className={`sidebar ${isOpen ? "active" : ""}`}>
        <div className="mobile-logo">
          <img
            src="assets/uk_logo.png"
            alt="mobile-logo"
          />
        </div>
        <ul>
          <li onClick={() => scrollToSection("home")}>Home</li>
          <li onClick={() => scrollToSection("about")}>About</li>
          <li onClick={() => scrollToSection("skills")}>Skills</li>
          <li onClick={() => scrollToSection("service")}>Service</li>
          <li onClick={() => scrollToSection("projects")}>Projects</li>
          <li onClick={() => scrollToSection("education")}>Education</li>
          <li onClick={() => scrollToSection("experience")}>Experience</li>
          <li onClick={() => scrollToSection("contact")}>Contact</li>
        </ul>
      </div>
      {/* Overlay */}
      {isOpen && (
        <div
          className="overlay"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Navbar;