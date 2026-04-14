import React, { useState } from 'react';
import '../styles/SkillMobile.css';
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

const SkillMobile = () => {
  const [activeSkill, setActiveSkill] = useState(null);

  const skills = [
    { name: 'Backend', icon: '🎨' },
    { name: 'Frontend', icon: '⚛️' },
    { name: 'Database', icon: '🟢' },
    { name: 'Cloud', icon: '✒️' },
    { name: 'Tools', icon: '🛠️' },
  ];

  const handleClick = (name) => {
    if (name === 'Backend') {
      setActiveSkill({
        title: 'Backend',
        items: [
          { name: 'Node.js', icon: <FaNodeJs /> },
          { name: 'Java', icon: <FaJava /> },
          { name: 'Dart', icon: <SiExpress /> },

          { name: 'Spring Boot', icon: <FaJava /> },
          { name: 'Express js', icon: <SiExpress /> },
          { name: 'REST APIs', icon: <FaNodeJs /> },
        ]
      });
    }
    else if (name === 'Frontend') {
      setActiveSkill({
        title: 'Frontend',
        items: [
          { name: 'React', icon: <FaReact /> },
          { name: 'JavaScript', icon: <SiJavascript /> },
          { name: 'Flutter', icon: <SiFlutter /> },
          { name: 'HTML & CSS', icon: <SiFlutter /> }


        ]
      });
    }
    else if (name === 'Database') {
      setActiveSkill({
        title: 'Database',
        items: [
          { name: 'MySQL', icon: <SiMysql /> },
          { name: 'MongoDB', icon: <SiMongodb /> },
          { name: 'PostgreSQL', icon: <SiPostgresql /> },

        ]
      });
    }
    else if (name === 'Cloud') {
      setActiveSkill({
        title: 'Cloud',
        items: [
          { name: 'AWS', icon: <FaAmazon /> },
          { name: 'Docker', icon: <FaDocker /> },
          { name: 'Google cloud', icon: <SiGooglecloud /> },
          { name: 'Microservices', icon: <FaProjectDiagram /> },
          { name: 'Load Balancer', icon: <FaNetworkWired /> }


        ]
      });
    }
    else if (name === 'Tools') {
      setActiveSkill({
        title: 'Tools',
        items: [
          { name: 'GitHub', icon: <FaGitAlt /> },
          { name: 'Postman', icon: <SiPostman /> },
          { name: 'VS Code', icon: <FaDocker /> },
          { name: 'Jira', icon: <SiJira /> },


        ]
      });
    }
  };

  return (
    <section className="mobile-skills-container">

      <div className="sun-wrapper">

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
            style={{ '--i': index, '--total': skills.length }}
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
        <div className="skill-modal-overlay" onClick={() => setActiveSkill(null)}>
          <div className="skill-modal" onClick={(e) => e.stopPropagation()}>

            <h2>{activeSkill.title}</h2>

            {/* <ul>
              {activeSkill.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul> */}
            <ul>
              {activeSkill.items.map((item, i) => (
                <li key={i} className="modal-item">
                  <span className="modal-icon">{item.icon}</span>
                  <span>{item.name}</span>
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