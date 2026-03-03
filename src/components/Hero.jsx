import React, { useEffect, useRef, useState } from "react";
import "../styles/Hero.css";

const Hero = () => {
  const heroRef = useRef(null);
  const [show, setShow] = useState(false);
  const herImage = "/assets/uk.jpeg";
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShow(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={heroRef} className="hero" id="home">
      <div className="hero-container">

        {/* LEFT SIDE */}
        <div className={`hero-left ${show ? "animate-left" : ""}`}>
          <p className="top-tag">
            I AM <span>Full Stck Developer</span>
          </p>

          <h1>
            Building Scalable <span className="purple">Full Stack</span> <br />
            Applications with Clean Architecture <br />
            & High Performance <span className="purple underline">Solutions</span>
          </h1>

          <p className="sub-text">
            I design and develop secure, scalable web applications using modern
            technologies like React, Node.js, Java and MongoDB, Cloud— focused on performance,
            maintainability, and real-world impact.
          </p>

          <div className="buttons">
            <button className="btn-primary">Get In Touch →</button>
            <button className="btn-outline">Download CV</button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className={"hero-right"}>
          <div className={`image-wrapper ${show ? "animate-image" : ""}`}>
            <div className="blob"></div>
            <img src={herImage} alt="developer" />
          </div>

          <div className={`badge badge-left ${show ? "fade-up delay-1" : ""}`}>
            30+ <br /> Clients
          </div>

          <div className={`badge badge-right ${show ? "fade-up delay-2" : ""}`}>
            130+ <br /> Projects
          </div>

          <div className="social-icons">
            <a href="#" className={`icon ${show ? "icon-anim delay-1" : ""}`}>💼</a>
            <a href="#" className={`icon ${show ? "icon-anim delay-2" : ""}`}>🔗</a>
            <a href="#" className={`icon ${show ? "icon-anim delay-3" : ""}`}>🌐</a>
            <a href="#" className={`icon ${show ? "icon-anim delay-4" : ""}`}>📘</a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;