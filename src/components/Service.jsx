import React, { useEffect, useRef, useState } from "react";
import '../styles/Service.css';

const servicesData = [
  {
    id: 1,
    title: "Server Application",
    description: "I will create a responsive and user-friendly web application that meets your business needs. I will ensure that your web...",
    subDescription:`I specialize in designing and developing secure, scalable, and high-performance RESTful APIs using Java (Spring Boot) and Node.js (Express.js). My approach focuses on building clean, maintainable, and production-ready backend architectures that efficiently handle real-world application demands.
I implement robust authentication and authorization mechanisms such as JWT-based authentication and role-based access control (RBAC) to ensure secure access to resources. I follow best practices for input validation, centralized error handling, middleware architecture, and structured logging to maintain reliability and consistency across the application.
I have experience integrating APIs with relational and non-relational databases such as MySQL and MongoDB, designing optimized schemas, writing efficient queries, and ensuring proper indexing for performance. I also focus on writing modular and reusable code following MVC and layered architecture principles.
My APIs are built with scalability in mind — capable of handling high traffic, supporting pagination, filtering, caching strategies, and rate limiting when necessary. I also design APIs that seamlessly integrate with frontend applications, mobile apps, and third-party services.
Whether it's building a backend from scratch, creating microservices, or improving an existing system, I ensure the API layer is secure, efficient, and future-proof. My goal is to deliver backend systems that provide smooth communication between client and server while maintaining performance, security, and maintainability.`,
    icon: "💻",
    highlight: true ,// This matches the purple card in your image
        image:"/assets/server_app.gif"

  },
  {
    id: 2,
    title: "Web Development",
    description: "I will provide both front-end and back-end development services for your website. I will ensure that your website...",
     subDescription:`I specialize in designing and developing secure, scalable, and high-performance RESTful APIs using Java (Spring Boot) and Node.js (Express.js). My approach focuses on building clean, maintainable, and production-ready backend architectures that efficiently handle real-world application demands.
I implement robust authentication and authorization mechanisms such as JWT-based authentication and role-based access control (RBAC) to ensure secure access to resources. I follow best practices for input validation, centralized error handling, middleware architecture, and structured logging to maintain reliability and consistency across the application.
I have experience integrating APIs with relational and non-relational databases such as MySQL and MongoDB, designing optimized schemas, writing efficient queries, and ensuring proper indexing for performance. I also focus on writing modular and reusable code following MVC and layered architecture principles.
My APIs are built with scalability in mind — capable of handling high traffic, supporting pagination, filtering, caching strategies, and rate limiting when necessary. I also design APIs that seamlessly integrate with frontend applications, mobile apps, and third-party services.
Whether it's building a backend from scratch, creating microservices, or improving an existing system, I ensure the API layer is secure, efficient, and future-proof. My goal is to deliver backend systems that provide smooth communication between client and server while maintaining performance, security, and maintainability.`,
   
    icon: "⚙️",
    highlight: false,
    image:"/assets/web_app.gif"
  },
  {
    id: 3,
    title: "App Development",
    description: "I will provide both front-end and back-end development services for your website. I will ensure that your website...",
     subDescription:`I specialize in designing and developing secure, scalable, and high-performance RESTful APIs using Java (Spring Boot) and Node.js (Express.js). My approach focuses on building clean, maintainable, and production-ready backend architectures that efficiently handle real-world application demands.
I implement robust authentication and authorization mechanisms such as JWT-based authentication and role-based access control (RBAC) to ensure secure access to resources. I follow best practices for input validation, centralized error handling, middleware architecture, and structured logging to maintain reliability and consistency across the application.
I have experience integrating APIs with relational and non-relational databases such as MySQL and MongoDB, designing optimized schemas, writing efficient queries, and ensuring proper indexing for performance. I also focus on writing modular and reusable code following MVC and layered architecture principles.
My APIs are built with scalability in mind — capable of handling high traffic, supporting pagination, filtering, caching strategies, and rate limiting when necessary. I also design APIs that seamlessly integrate with frontend applications, mobile apps, and third-party services.
Whether it's building a backend from scratch, creating microservices, or improving an existing system, I ensure the API layer is secure, efficient, and future-proof. My goal is to deliver backend systems that provide smooth communication between client and server while maintaining performance, security, and maintainability.`,
   
    icon: "📱",
    highlight: false,
        image:"/assets/app_dev.gif"

  },
  {
    id: 4,
    title: "Database Management",
    description: "I will provide both front-end and back-end development services for your website. I will ensure that your website...",
     subDescription:`I specialize in designing and developing secure, scalable, and high-performance RESTful APIs using Java (Spring Boot) and Node.js (Express.js). My approach focuses on building clean, maintainable, and production-ready backend architectures that efficiently handle real-world application demands.
I implement robust authentication and authorization mechanisms such as JWT-based authentication and role-based access control (RBAC) to ensure secure access to resources. I follow best practices for input validation, centralized error handling, middleware architecture, and structured logging to maintain reliability and consistency across the application.
I have experience integrating APIs with relational and non-relational databases such as MySQL and MongoDB, designing optimized schemas, writing efficient queries, and ensuring proper indexing for performance. I also focus on writing modular and reusable code following MVC and layered architecture principles.
My APIs are built with scalability in mind — capable of handling high traffic, supporting pagination, filtering, caching strategies, and rate limiting when necessary. I also design APIs that seamlessly integrate with frontend applications, mobile apps, and third-party services.
Whether it's building a backend from scratch, creating microservices, or improving an existing system, I ensure the API layer is secure, efficient, and future-proof. My goal is to deliver backend systems that provide smooth communication between client and server while maintaining performance, security, and maintainability.`,
   
    icon: "💾",
    highlight: false,
        image:"/assets/db_manage.gif"

  },
  {
    id: 5,
    title: "Data Analysis",
    description: "I will provide both front-end and back-end development services for your website. I will ensure that your website...",
     subDescription:`I specialize in designing and developing secure, scalable, and high-performance RESTful APIs using Java (Spring Boot) and Node.js (Express.js). My approach focuses on building clean, maintainable, and production-ready backend architectures that efficiently handle real-world application demands.
I implement robust authentication and authorization mechanisms such as JWT-based authentication and role-based access control (RBAC) to ensure secure access to resources. I follow best practices for input validation, centralized error handling, middleware architecture, and structured logging to maintain reliability and consistency across the application.
I have experience integrating APIs with relational and non-relational databases such as MySQL and MongoDB, designing optimized schemas, writing efficient queries, and ensuring proper indexing for performance. I also focus on writing modular and reusable code following MVC and layered architecture principles.
My APIs are built with scalability in mind — capable of handling high traffic, supporting pagination, filtering, caching strategies, and rate limiting when necessary. I also design APIs that seamlessly integrate with frontend applications, mobile apps, and third-party services.
Whether it's building a backend from scratch, creating microservices, or improving an existing system, I ensure the API layer is secure, efficient, and future-proof. My goal is to deliver backend systems that provide smooth communication between client and server while maintaining performance, security, and maintainability.`,
   
    icon: "📊",
    highlight: false,
            image:"/assets/video_edit.gif"

  },
  {
    id: 6,
    title: "Web Design",
    description: "I will provide both front-end and back-end development services for your website. I will ensure that your website...",
     subDescription:`I specialize in designing and developing secure, scalable, and high-performance RESTful APIs using Java (Spring Boot) and Node.js (Express.js). My approach focuses on building clean, maintainable, and production-ready backend architectures that efficiently handle real-world application demands.
I implement robust authentication and authorization mechanisms such as JWT-based authentication and role-based access control (RBAC) to ensure secure access to resources. I follow best practices for input validation, centralized error handling, middleware architecture, and structured logging to maintain reliability and consistency across the application.
I have experience integrating APIs with relational and non-relational databases such as MySQL and MongoDB, designing optimized schemas, writing efficient queries, and ensuring proper indexing for performance. I also focus on writing modular and reusable code following MVC and layered architecture principles.
My APIs are built with scalability in mind — capable of handling high traffic, supporting pagination, filtering, caching strategies, and rate limiting when necessary. I also design APIs that seamlessly integrate with frontend applications, mobile apps, and third-party services.
Whether it's building a backend from scratch, creating microservices, or improving an existing system, I ensure the API layer is secure, efficient, and future-proof. My goal is to deliver backend systems that provide smooth communication between client and server while maintaining performance, security, and maintainability.`,
   
    icon: "🎨",
    highlight: false
  }
];
const ServicesPage = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
    const [selectedService, setSelectedService] = useState(null);


  useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      setVisible(entry.isIntersecting);
    },
    {
      threshold: 0.3,
    }
  );

  if (sectionRef.current) {
    observer.observe(sectionRef.current);
  }

  return () => observer.disconnect();
}, []);

  return (
    <div id="service"
      ref={sectionRef}
      className={`services-container ${visible ? "show" : ""}`}
    >
      <div className={`services-header ${visible ? "header-show" : ""}`}>
    <h2>My Services</h2>
    <p>
      I am a skilled web developer with expertise in creating responsive
      and user-friendly websites.
    </p>
  </div>


      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div
            key={service.id}
            className={`service-card ${visible ? "animate" : ""}`}
            style={{ transitionDelay: `${index * 0.2}s` }}
          >
            <div className="icon-box">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
           <a
              href="#"
              className="learn-more"
              onClick={(e) => {
                e.preventDefault();
                setSelectedService(service);
              }}
            >
              Learn More →
            </a>
          </div>
        ))}
      </div>
       {/* Modal */}
     {selectedService && (
  <div className="modal-overlay" onClick={() => setSelectedService(null)}>
    <div
      className="modal-box"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="modal-content">

        {/* Left Side Text */}
        <div className="modal-text">
          <h3>{selectedService.title}</h3>
          <p>{selectedService.subDescription}</p>
          <button onClick={() => setSelectedService(null)}>Close</button>
        </div>

        {/* Right Side Image */}
        <div className="modal-image">
          <img src={selectedService.image} alt={selectedService.title} />
        </div>

      </div>
    </div>
  </div>
)}
    
    </div>
    
  );
};


export default ServicesPage;