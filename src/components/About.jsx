import React, { useEffect, useRef, useState } from "react";
import "../styles/About.css";
import aboutImg from "../assets/react.svg"; // replace with your image

const About = () => {
  const aboutRef = useRef(null);
  const [show, setShow] = useState(false);
  const aboutImage = "/assets/uk_about.jpeg"

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShow(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={aboutRef} className="about">
      <div className={`about-header ${show ? "animate-header" : ""}`}>
        <h2>About</h2>
        <div className="header-line"></div>
      </div>      <div className="about-container">

        {/* LEFT IMAGE */}
        <div className={`about-image ${show ? "animate-left" : ""}`}>
          <img src={aboutImage} alt="About" />
        </div>

        {/* RIGHT CONTENT */}
        <div className={`about-content ${show ? "animate-right" : ""}`}>
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

          <div className="about-tags">
            <span>Frontend Architecture</span>
            <span>Backend & APIs</span>
            <span>Mobile Development</span>
            <span>Database Design</span>
            <span>Authentication & Security</span>
            <span>Cloud & Deployment</span>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;