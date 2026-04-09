import React from 'react';
import '../styles/SkillMobile.css';

const SkillMobile = () => {
  const skills = [
    { name: 'UI/UX', icon: '🎨' },
    { name: 'React', icon: '⚛️' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Figma', icon: '✒️' },
    { name: 'Python', icon: '🐍' },
    { name: 'SQL', icon: '💾' },
    { name: 'AWS', icon: '☁️' },
    { name: 'Agile', icon: '🔄' },
  ];

  return (
    <section className="mobile-skills-container">
      <div className="sun-wrapper">
        {/* Central Profile Image */}
        <div className="center-profile">
          <img 
            src="https://via.placeholder.com/100" 
            alt="Profile" 
            className="profile-img" 
          />
        </div>

        {/* Skill Rays */}
        {skills.map((skill, index) => (
          <div 
            key={index} 
            className="mobile-skill-ray" 
            style={{ '--i': index, '--total': skills.length }}
          >
            <div className="mobile-skill-node">
              <span className="mobile-skill-icon">{skill.icon}</span>
              <span className="mobile-skill-name">{skill.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillMobile;