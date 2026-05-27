import React, { useEffect, useRef, useState } from "react";
import "../styles/AboutMobile.css";


const AboutMobile = () => {
  const image = "/assets/uk_about.jpeg";
  const [show, setShow] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
  const isMobile = window.innerWidth <= 768;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setShow(true);   // instant show
      } else {
        setShow(false);  // 👈 instant hide (FIX)
      }
    },
    {
      threshold: isMobile ? 0.15 : 0.3,
    }
  );

  if (sectionRef.current) {
    observer.observe(sectionRef.current);
  }

  return () => observer.disconnect();
}, []);


  return (
    <section
      id="about"
      className="about-mobile" ref={sectionRef}>
      
      <div className={`about-mobile-wrapper ${show ? "show" : ""}`}>
        {/* BACK LAYER (blurred background effect) */}
        <div
          className={`legacy-bg ${show ? "show" : ""}` }
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className={`about-mobile-overlay ${show ? "show" : ""}`}>
          <h1>ABOUT ME</h1>
        </div>
        {/* MAIN CARD */}
        <div className={`about-mobile-card ${show ? "show" : ""}`}>
          <img src={image} alt="Creativity team" className="about-mobile-image" />

          {/* <div className="about-mobile-overlay">
          <h1>OUR LEGACY OF CREATIVITY</h1>
        </div> */}
        </div>
      </div>
      <div className={`mobile-about-content ${show ? "show" : ""}`}>
        <h2>Building Scalable Digital Solutions</h2>
        <p>
          I am a Full Stack Developer specializing in building secure,
          scalable, and high-performance web applications using modern
          technologies like React, Node.js, and MongoDB.
          I enjoy transforming complex problems into clean,
          maintainable solutions.
        </p>
        <h3>The Mindset Behind My Code</h3>
        <p>
          My approach goes beyond just writing code. I focus on
          clean architecture, optimized API communication,
          authentication security, and performance-driven design.
          I believe great software should be scalable, reliable,
          and easy to maintain.
        </p>
        <div className="mobile-about-tags">
          <span>Frontend Architecture</span>
          <span>Backend & APIs</span>
          <span>Mobile Development</span>
          <span>Database Design</span>
          <span>Authentication & Security</span>
          <span>Cloud & Deployment</span>
        </div>

      </div>
    </section>
  );
};

export default AboutMobile;