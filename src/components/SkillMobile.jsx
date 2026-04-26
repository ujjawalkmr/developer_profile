import React, { useState, useEffect, useRef } from "react";
import "../styles/SkillMobile.css";
import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaGitAlt,
  FaDocker,
  FaAmazon,
  FaProjectDiagram,
  FaNetworkWired,
} from "react-icons/fa";
import {
  SiFlutter,
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiJira,
  SiPostman,
  SiGooglecloud,
  SiHtml5,
} from "react-icons/si";

const SkillMobile = () => {
  const [activeSkill, setActiveSkill] = useState(null);
  const [show, setShow] = useState(false);
  const sectionRef = useRef(null);

  const iconColorMap = {
    "Node.js": "#3C873A",
    Java: "#007396",
    Dart: "#0175C2",

    "Spring Boot": "#6DB33F",
    "Express js": "#000000",
    "REST APIs": "#00A6A6",

    React: "#61DBFB",
    JavaScript: "#F7DF1E",
    Flutter: "#02569B",
    "HTML & CSS": "#E34F26",

    MySQL: "#00758F",
    MongoDB: "#4DB33D",
    PostgreSQL: "#336791",

    AWS: "#FF9900",
    Docker: "#2496ED",
    "Google cloud": "#4285F4",
    Microservices: "#9C27B0",
    "Load Balancer": "#00BCD4",

    GitHub: "#181717",
    Postman: "#FF6C37",
    "VS Code": "#007ACC",
    Jira: "#0052CC",
  };
  const skills = [
    { name: "Backend", icon: "🎨" },
    { name: "Frontend", icon: "⚛️" },
    { name: "Database", icon: "🟢" },
    { name: "Cloud", icon: "✒️" },
    { name: "Tools", icon: "🛠️" },
  ];

  const handleClick = (name) => {
    if (name === "Backend") {
      setActiveSkill({
        title: "Backend",
        items: [
          { name: "Node.js", icon: <FaNodeJs /> },
          { name: "Java", icon: <FaJava /> },
          { name: "Dart", icon: <SiExpress /> },

          { name: "Spring Boot", icon: <FaJava /> },
          { name: "Express js", icon: <SiExpress /> },
          { name: "REST APIs", icon: <FaNodeJs /> },
        ],
      });
    } else if (name === "Frontend") {
      setActiveSkill({
        title: "Frontend",
        items: [
          { name: "React", icon: <FaReact /> },
          { name: "JavaScript", icon: <SiJavascript /> },
          { name: "Flutter", icon: <SiFlutter /> },
          { name: "HTML & CSS", icon: <SiHtml5 /> },
        ],
      });
    } else if (name === "Database") {
      setActiveSkill({
        title: "Database",
        items: [
          { name: "MySQL", icon: <SiMysql /> },
          { name: "MongoDB", icon: <SiMongodb /> },
          { name: "PostgreSQL", icon: <SiPostgresql /> },
        ],
      });
    } else if (name === "Cloud") {
      setActiveSkill({
        title: "Cloud",
        items: [
          { name: "AWS", icon: <FaAmazon /> },
          { name: "Docker", icon: <FaDocker /> },
          { name: "Google cloud", icon: <SiGooglecloud /> },
          { name: "Microservices", icon: <FaProjectDiagram /> },
          { name: "Load Balancer", icon: <FaNetworkWired /> },
        ],
      });
    } else if (name === "Tools") {
      setActiveSkill({
        title: "Tools",
        items: [
          { name: "GitHub", icon: <FaGitAlt /> },
          { name: "Postman", icon: <SiPostman /> },
          { name: "VS Code", icon: <FaDocker /> },
          { name: "Jira", icon: <SiJira /> },
        ],
      });
    }
  };

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      setShow(entry.isIntersecting && entry.intersectionRatio > 0.2);
    },
    {
      threshold: 0.3,
    }
  );

  const el = sectionRef.current;
  if (el) observer.observe(el);

  return () => {
    if (el) observer.unobserve(el);
    observer.disconnect();
  };
}, []);
  return (
    <section
      ref={sectionRef}
      className={`mobile-skills-container ${show ? "show" : ""}`}
    >
      <div className="skill-heading">Skills</div>
      <div className="underline-skill"></div>
      <div className={`sun-wrapper ${show ? "show" : ""}`}>
        {/* Center Image */}
        <div className="center-profile">
          <img
            src="/assets/uk_about.jpeg"
            alt="Profile"
            className="profile-img"
          />
        </div>

        {/* Skills */}
        {skills.map((skill, index) => (
          <div
            key={index}
            className="mobile-skill-ray"
            style={{ "--i": index, "--total": skills.length }}
          >
            <div
              className="mobile-skill-node clickable"
              onClick={() => handleClick(skill.name)}
            >
              <span className="mobile-skill-icon">{skill.icon}</span>
              <span className="mobile-skill-name">{skill.name}</span>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {activeSkill && (
        <div
          className="skill-modal-overlay"
          onClick={() => setActiveSkill(null)}
        >
          <div
            className="skill-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <h2>{activeSkill.title}</h2>

            {/* <ul>
              {activeSkill.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul> */}
            <ul>
              {activeSkill.items.map((item, i) => (
                <li
                  key={i}
                  className="modal-item"
                >
                  <span
                    className="modal-icon"
                    style={{ color: iconColorMap[item.name] || "#fff" }}
                  >
                    {item.icon}
                  </span>
                  <span className="modal-icons-name">{item.name}</span>
                </li>
              ))}
            </ul>

            <button onClick={() => setActiveSkill(null)}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default SkillMobile;
