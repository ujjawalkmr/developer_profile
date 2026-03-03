import React from 'react';
import '../styles/Service.css';

const servicesData = [
  {
    id: 1,
    title: "Web Application",
    description: "I will create a responsive and user-friendly web application that meets your business needs. I will ensure that your web...",
    icon: "💻",
    highlight: true // This matches the purple card in your image
  },
  {
    id: 2,
    title: "Web Development",
    description: "I will provide both front-end and back-end development services for your website. I will ensure that your website...",
    icon: "⚙️",
    highlight: false
  },
  {
    id: 3,
    title: "App Development",
    description: "I will provide both front-end and back-end development services for your website. I will ensure that your website...",
    icon: "📱",
    highlight: false
  },
  {
    id: 4,
    title: "Database Management",
    description: "I will provide both front-end and back-end development services for your website. I will ensure that your website...",
    icon: "💾",
    highlight: false
  },
  {
    id: 5,
    title: "Data Analysis",
    description: "I will provide both front-end and back-end development services for your website. I will ensure that your website...",
    icon: "📊",
    highlight: false
  },
  {
    id: 6,
    title: "Web Design",
    description: "I will provide both front-end and back-end development services for your website. I will ensure that your website...",
    icon: "🎨",
    highlight: false
  }
];

const ServicesPage = () => {
    
  return (
    <div className="services-container">
      <div className="services-header">
        <h2>My Services</h2>
        <p>
          I am a skilled web developer with expertise in creating responsive and user-friendly websites. 
          My passion for coding and my attention to detail allow me to create custom websites that perfectly match the needs of my clients.
        </p>
      </div>

      <div className="services-grid">
        {servicesData.map((service) => (
          <div 
            key={service.id} 
            className={`service-card ${service.highlight ? 'highlight' : ''}`}
          >
            <div className="icon-box">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <a href="#" className="learn-more">Learn More →</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;