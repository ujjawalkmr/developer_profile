import { useEffect, useRef, useState } from "react";
import "../styles/HeroMobile.css";

const HeroMobile = () => {
    const [show, setShow] = useState(false);
    const heroRef = useRef(null);
    const herImage = "/assets/uk.jpeg";

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Toggle 'show' state based on whether section is in view
                setShow(entry.isIntersecting);
            },
            { threshold: 0.3, rootMargin: "0px" } // Trigger when 20% of the section is visible
        );

        if (heroRef.current) {
            observer.observe(heroRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={heroRef} className="hero-mobile" id="home">
            <div className="main-container">

                {/* --- Image Group: Animates from Left --- */}
                <div className={`hero-mobile-container ${show ? "animate-left" : ""}`}>
                    <div className="bg-circle"></div>
                    <div className="image-container">
                        <img src={herImage} alt="developer" className="hero-img" />
                    </div>
                    <div className="info-box left-box">
                        <span>5+ Years</span>
                        <p>Experience</p>
                    </div>
                    <div className="info-box right-box">
                        <span>100+</span>
                        <p>Projects</p>
                    </div>
                </div>

                {/* --- Content Group: Animates from Right --- */}
                <div className={`text-section ${show ? "animate-right" : ""}`}>
                    <p className="top-tag">
                        I AM <span>Full Stack Developer</span>
                    </p>
                    <h1 className="mobile-heading">
                        Building Scalable <span className="purple">Full Stack</span> <br />
                        Applications with Clean Architecture
                    </h1>
                    <p className="sub-text">
                        I design and develop secure, scalable web applications using modern
                        technologies like React, Node.js, Java and MongoDB, Cloud— focused on performance,
                        maintainability, and real-world impact.
                    </p>
                </div>

                {/* --- Buttons: Animates from Right (with extra delay) --- */}
                <div className={`buttons ${show ? "animate-right" : ""}`} style={{ transitionDelay: '0.2s' }}>
                    <button className="btn-primary">Get In Touch →</button>
                    <button className="btn-outline">Download CV</button>
                </div>
            </div>
        </section>
    );
};

export default HeroMobile;