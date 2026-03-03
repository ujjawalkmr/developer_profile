import React, { useEffect, useRef, useState } from "react";
import "../styles/Skills.css";
import skillImage from "../assets/react.svg"; // your image
import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaGitAlt,
  FaDocker,
  FaAmazon, FaProjectDiagram, FaNetworkWired
} from "react-icons/fa";
import {
  SiFlutter,
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiJira, SiPostman,
  SiGooglecloud,
} from "react-icons/si";




const Skills = () => {
  const skillRef = useRef(null);
  const [show, setShow] = useState(false);
  const skillImg = "/assets/skill_img.png";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShow(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (skillRef.current) {
      observer.observe(skillRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={skillRef} className="skills">
      <div className="skills-container">

        {/* LEFT SIDE - GRID */}
        <div className={`skills-left ${show ? "animate-left" : ""}`}>
          <h2 className="skills-heading">Skills & Architecture</h2>

          <div className="skills-grid">

            <div className="skill-card">
              <h3>Frontend</h3>
              <div className="skill-item">
                <FaReact className="skill-icon react" />
                <span>React.js</span>
              </div>
              <div className="skill-item">
                <SiFlutter className="skill-icon flutter" />
                <span>Flutter</span>
              </div>

              <div className="skill-item">
                <SiJavascript className="skill-icon js" />
                <span>JavaScript</span>
              </div>

              <div className="skill-item">
                <FaReact className="skill-icon ui" />
                <span>Responsive UI</span>
              </div>
            </div>

            <div className="skill-card">
              <h3>Backend</h3>
              <div className="skill-item">
                <FaJava className="skill-icon java" />
                <span>Java</span>
              </div>

              <div className="skill-item">
                <FaNodeJs className="skill-icon node" />
                <span>Node.js</span>
              </div>

              <div className="skill-item">
                <SiExpress className="skill-icon express" />
                <span>Express.js</span>
              </div>

              <div className="skill-item">
                <FaNodeJs className="skill-icon api" />
                <span>REST APIs</span>
              </div>
              <div className="skill-item">
                <FaProjectDiagram className="skill-icon microservices" />
                <span>Microservices</span>
              </div>
            </div>

            <div className="skill-card">
              <h3>Database & Tools</h3>
              <div className="skill-item">
                <SiMongodb className="skill-icon mongo" />
                <span>MongoDB</span>
              </div>

              <div className="skill-item">
                <SiMysql className="skill-icon mysql" />
                <span>MySQL</span>
              </div>

              <div className="skill-item">
                <SiPostgresql className="skill-icon postgres" />
                <span>PostgreSQL</span>
              </div>
              <div className="skill-item">
                <SiJira className="skill-icon jira" />
                <span>Jira</span>
              </div><div className="skill-item">
                <SiPostman className="skill-icon postman" />
                <span>Postman</span>
              </div>
            </div>

            <div className="skill-card">
              <h3>Cloud & Tools</h3>
              <div className="skill-item">
                <FaAmazon className="skill-icon aws" />
                <span>AWS S3</span>
              </div><div className="skill-item">
                <SiGooglecloud className="skill-icon gcloud" />
                <span>Google Cloud</span>
              </div><div className="skill-item">
                <FaGitAlt className="skill-icon git" />
                <span>Git & GitHub</span>
              </div><div className="skill-item">
                <FaDocker className="skill-icon docker" />
                <span>Docker (Basics)</span>
              </div>

              <div className="skill-item">
                <FaNetworkWired className="skill-icon loadbalancer" />
                <span>Load Balancer</span>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className={`skills-right ${show ? "animate-right" : ""}`}>
          <img src={skillImg} alt="Skills Architecture" />
        </div>

      </div>
    </section>
  );
};

export default Skills;