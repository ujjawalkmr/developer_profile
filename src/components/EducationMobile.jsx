import React from 'react';
import '../styles/EducationMobile.css';

const educationData = [
    { id: 1,
        year: "2022 - 2023",
        title: "Java Full Stack Development",
        institute: "JSpider (Bangalore)",
        img: "/assets/jspider.png",
        desc: "Completed Java full stck development course with real project experiance on (Spring boot, java, jdbc,J2EE, React, SQL etc)"
    },
    { id: 2,
        year: "2016 - 2020",
        title: "Bachelor of Technology (B.Tech)",
        institute: "DREAM INSTITUTE OF TECHNOLOGY (KOLKATA)",
        img: "/assets/makut.webp",
        desc: "Specialized in Computer Science & Engineering (CSE) stream with strong academic performance."
    },
    { id: 3,
        year: "2014 - 2016",
        title: "Higher Secondary (12th)",
        institute: "+2 ZILA SCHOOL, GAYA (BIHAR)",
        img: "/assets/bseb_logo.png",
        desc: "Specialized in Science stream with strong academic performance."
    },
    { id: 4,
        year: "2013 - 2014",
        title: "Secondary School (10th)",
        institute: "HIGH SCHOOL UMTA, DHARNAEE (JEHANABAD, BIHAR)",
        img: "/assets/bseb_logo.png",
        desc: "Completed SSC with good grades."
    }
];


export default function EducationMobile() {
    return (
        <section id="education" className="mobile-education-section">
            <div className="mobile-education-wrapper">
      <div className="mobile-education-container">
        <h2 className="mobile-education-title">My Education</h2>
        
        {/* Horizontal Scroll Container */}
       <div className="mobile-education-scroll-track">
  {educationData.map((card) => (
    <div key={card.id} className="mobile-education-card">
      
      {/* Decorative Pill Badges */}
      <div className="badge-pill top-pill" />
      <div className="badge-pill left-pill" />
      <div className="badge-pill right-pill" />

      {/* Left Column (Dark Area with Institute Image inside Globe Rings) */}
      <div className="card-left-panel">
        <div className="globe-outer-ring">
          <div className="globe-inner-ring" />
          {card.img ? (
            <img 
              src={card.img} 
              alt={`${card.institute} logo`} 
              className="globe-svg-icon object-contain p-1"
              onError={(e) => {
                // Fallback to original globe icon if the image fails to load
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
          ) : null}
          
          {/* Universal SVG Globe Fallback Element */}
          <svg 
            className="globe-svg-icon" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            viewBox="0 0 24 24"
            style={{ display: card.img ? 'none' : 'block' }}
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
          </svg>
        </div>
      </div>

      {/* Right Column (Light Blue Area with Arranged Academic Content) */}
      <div className="card-right-panel">
        <div className="card-scrollable-content">
          {/* 1. Title (Top Header) */}
          <h3 className="">
            {card.title}
          </h3>
          
          {/* 2. Institute Name */}
          <h5 className="education-institute-name">
            {card.institute}
          </h5>
          
          {/* 3. Academic Year */}
          <h5 className="academic-years">
            {card.year}
          </h5>

          {/* 4. Description Field */}
          <p className="academic-desc-text text-xs font-medium leading-relaxed px-1 text-justify">
            {card.desc}
          </p>
        </div>

        {/* Footer Interaction Action */}
        {/* <div className="card-footer-action">
          <a href="#details" className="learn-more-link">
            Learn more &rarr;
          </a>
        </div> */}
      </div>

    </div>
  ))}
</div>
      </div>
    </div>
        </section>
  );
}