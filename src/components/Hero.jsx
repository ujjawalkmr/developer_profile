import React, { useEffect, useRef, useState } from "react";
import "../styles/Hero.css";
import { FaInstagram, FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";



const contactMe = "assets/contact_me.png";

const Hero = () => {
  const heroRef = useRef(null);
  const [show, setShow] = useState(false);
  const [openContact, setOpenContact] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const herImage = "/assets/uk.jpeg";

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/assets/UjjawalKumar@.pdf"; // file path
    link.download = "Ujjawal_CV.pdf"; // file name after download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    if (openContact) {
      document.body.style.overflow = "hidden"; // stop scroll
    } else {
      document.body.style.overflow = "auto";   // enable scroll
    }

    return () => {
      document.body.style.overflow = "auto"; // cleanup
    };
  }, [openContact]);
  const handleClose = () => {
    setIsClosing(true); // start animation

    setTimeout(() => {
      setOpenContact(false); // actually close after animation
      setIsClosing(false);   // reset
    }, 300); // match CSS animation duration
  };
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
            <button
              className="btn-primary"
              onClick={() => setOpenContact(true)}
            >
              Get In Touch →
            </button>
            <button className="btn-outline" onClick={downloadCV}>Download CV</button>
          </div>
        </div>
        {openContact && (
          <div
            className={`get-in-touch-overlay ${isClosing ? "fade-out" : "fade-in"}`}
            onClick={handleClose}
          >
            <div
              className={`get-in-touch-box ${isClosing ? "slide-out" : "slide-in"}`}
              onClick={(e) => e.stopPropagation()}
            >
              <h2>Professional Summary</h2>

              <p>
                Let’s connect! You can reach me via email, LinkedIn or GitHub.
              </p>

              <div className="contact-divider"></div>

              <div className="contact-content">

                {/* LEFT SIDE */}
                <div className="contact-links">
                  <div>
                    <h4>Email</h4>
                    <p>
                      <a href="mailto:ujjawalkumar9211@gmail.com">
                        ujjawalkumar9211@gmail.com
                      </a>
                    </p>
                  </div>

                  <div>
                    <h4>Phone</h4>
                    <p>7294934350</p>
                  </div>

                  <div>
                    <h4>LinkedIn</h4>
                    <p>
                      <a
                        href="https://www.linkedin.com/in/ujjawal-kumar-b49277223/r"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        /ujjawal-kumar-b49277223/
                      </a>
                    </p>
                  </div>

                  <div>
                    <h4>GitHub</h4>
                    <p>
                      <a
                        href="https://github.com/ujjawalkmr"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        github.com/ujjawalkmr
                      </a>
                    </p>
                  </div>
                </div>

                {/* RIGHT SIDE IMAGE */}
                <div className="contact-image">
                  <img
                    src={contactMe}
                    alt="Contact"
                  />
                </div>

              </div>

              <button className="close-btn" onClick={handleClose}>
                Close
              </button>

            </div>
          </div>
        )}
        {/* RIGHT SIDE */}
        <div className={"hero-right"}>
          <div className={`image-wrapper ${show ? "animate-image" : ""}`}>
            <div className="blob"></div>
            <img src={herImage} alt="developer" />
          </div>

          <div className={`badge badge-left ${show ? "fade-up delay-1" : ""}`}>
            4+ <br /> Experience
          </div>

          <div className={`badge badge-right ${show ? "fade-up delay-2" : ""}`}>
            10+ <br /> Projects
          </div>

          <div className="social-icons">
            <a
              href="https://www.instagram.com/bhavishyaujjawalhai/"
              target="_blank"
              rel="noopener noreferrer"
              className={`icon ${show ? "icon-anim delay-1" : ""}`}
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.facebook.com/ujjawal.kumar.710908/"
              target="_blank"
              rel="noopener noreferrer"
              className={`icon ${show ? "icon-anim delay-2" : ""}`}
            >
              <FaFacebook />
            </a>

            <a
              href="https://www.linkedin.com/in/ujjawal-kumar-b49277223/"
              target="_blank"
              rel="noopener noreferrer"
              className={`icon ${show ? "icon-anim delay-3" : ""}`}
            >
              <FaLinkedin />
            </a>

            <a
              href="https://www.youtube.com/@ujjawalkumar4862/featured"
              target="_blank"
              rel="noopener noreferrer"
              className={`icon ${show ? "icon-anim delay-4" : ""}`}
            >
              <FaYoutube />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;