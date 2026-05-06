import React, { useState, useEffect, useRef } from "react";
import "../styles/ServiceMobile.css";

const services = [
  {
    title: "SERVER APPLICATION",
    features: ["API Development & Integration"],
    description: `I specialize in designing and developing secure, scalable, and high-performance RESTful APIs using Java (Spring Boot) and Node.js (Express.js). My approach focuses on building clean, maintainable, and production-ready backend architectures that efficiently handle real-world application demands.
I implement robust authentication and authorization mechanisms such as JWT-based authentication and role-based access control (RBAC) to ensure secure access to resources. I follow best practices for input validation, centralized error handling, middleware architecture, and structured logging to maintain reliability and consistency across the application.
I have experience integrating APIs with relational and non-relational databases such as MySQL and MongoDB, designing optimized schemas, writing efficient queries, and ensuring proper indexing for performance. I also focus on writing modular and reusable code following MVC and layered architecture principles.
My APIs are built with scalability in mind — capable of handling high traffic, supporting pagination, filtering, caching strategies, and rate limiting when necessary. I also design APIs that seamlessly integrate with frontend applications, mobile apps, and third-party services.
Whether it's building a backend from scratch, creating microservices, or improving an existing system, I ensure the API layer is secure, efficient, and future-proof. My goal is to deliver backend systems that provide smooth communication between client and server while maintaining performance, security, and maintainability.`,
    icon: "💻",
  },
  {
    title: "WEB DEVELOPMENT",
    features: ["Responsive Front-End Design"],
    description: `I specialize in building modern full-stack web applications that are fast, scalable, and user-focused. My development approach focuses on clean architecture, performance optimization, and maintainable code to ensure long-term reliability of the application.
On the frontend, I build responsive and interactive user interfaces using technologies like React.js, Next.js, HTML5, CSS3, and JavaScript. I focus on creating smooth user experiences, mobile-friendly layouts, and optimized UI components that improve usability and performance.
On the backend, I develop secure and scalable server-side systems using Node.js with Express.js and Java (Spring Boot). I design RESTful APIs that efficiently handle data communication between the client and server.
I implement secure authentication systems such as JWT-based authentication and role-based access control (RBAC) to protect user data and application resources. I also ensure proper input validation, error handling, and middleware architecture to maintain application stability.
For databases, I work with both relational and NoSQL databases such as MySQL and MongoDB. I design optimized schemas, write efficient queries, and ensure proper indexing to improve performance and scalability.
Whether it's building a website from scratch, developing a full-stack platform, or improving an existing web system, I focus on delivering reliable, high-performance, and scalable web applications that meet real-world business needs.`,

    icon: "💻",
  },
  {
    title: "APP DEVELOPMENT",
    features: ["Cross-Platform Mobile/iOS Apps"],
    description: `I specialize in developing modern mobile and ios applications that are fast, scalable, and user-friendly. My focus is on creating intuitive interfaces and smooth user experiences that work seamlessly across different devices and screen sizes.
I build mobile applications using modern development frameworks and best practices to ensure performance, reliability, and maintainability. I design clean UI components, efficient navigation flows, and responsive layouts to deliver an engaging user experience.
On the backend side, I integrate mobile apps with secure RESTful APIs built using technologies like Node.js (Express.js) and Java (Spring Boot). This allows applications to securely communicate with servers, manage user data, and perform real-time operations.
I implement authentication systems such as JWT-based authentication, secure API communication, and proper data validation to ensure user data remains protected. I also work with databases like MongoDB and MySQL to store and manage application data efficiently.
Whether it's building a new mobile application, integrating APIs, or improving an existing app’s performance, I focus on delivering reliable, scalable, and high-quality mobile solutions that meet real-world user needs.`,

    icon: "📱",
  },
  {
    title: "DB MANAGEMENT",
    features: ["Database Schema Design"],
    description: `I specialize in designing, managing, and optimizing databases to ensure reliable data storage and high application performance. My focus is on creating well-structured database architectures that support scalable and efficient systems.
I work with both relational and NoSQL databases such as MySQL and MongoDB. I design optimized database schemas, establish proper relationships between tables or collections, and ensure data consistency across applications.
I write efficient queries, implement indexing strategies, and optimize database performance to handle large volumes of data and high traffic applications. My approach helps reduce query execution time and improve overall system responsiveness.
I also focus on database security and data integrity by implementing proper access controls, validation rules, and backup strategies to prevent data loss and unauthorized access.
Whether it's designing a database from scratch, optimizing an existing database structure, or managing application data efficiently, I ensure that the database layer remains secure, scalable, and reliable for long-term system growth.`,

    icon: "💾",
  },
  {
    title: "WEB DESIGN",
    features: ["UI/UX Prototyping"],
    description: `I specialize in designing visually appealing and user-friendly website interfaces that focus on both aesthetics and usability. My goal is to create designs that are clean, modern, and easy for users to navigate.
I design responsive layouts that work smoothly across desktops, tablets, and mobile devices. I focus on proper spacing, typography, color balance, and visual hierarchy to make websites look professional and easy to use.
Using technologies like HTML, CSS, and modern UI design practices, I create structured layouts that improve user experience and keep visitors engaged with the website content.
I also focus on UI consistency, smooth interactions, and well-organized sections that help users quickly find the information they need.
Whether it's designing a landing page, a portfolio website, or a business website, my goal is to create attractive and functional designs that enhance the overall user experience.`,

    icon: "⚙️",
  },
  {
    title: "VIDEO EDITING",
    features: ["Color Grading & VFX"],
    description: `I am currently developing my skills in video editing and learning how to transform raw footage into engaging visual content. My focus is on creating simple, clean, and well-paced videos that deliver the message clearly.
I use tools like Adobe Premiere Pro to perform basic editing tasks such as trimming clips, arranging sequences, adding transitions, background music, and simple text overlays. I also work on improving video flow and maintaining a consistent visual style.
As I continue to grow my editing skills, I am exploring techniques like color correction, sound enhancement, and storytelling through video to make content more engaging.
I am passionate about learning and improving with every project. My goal is to build creative and high-quality video content while continuously developing my editing skills.`,

    icon: "🎬",
  },
];

const ServiceMobile = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [show, setShow] = useState(false);
  const sectionRef = useRef(null);

  const openModal = (e, service) => {
    e.preventDefault();
    setSelectedService(service);
    setIsClosing(false);

    // 👇 delay to trigger animation
    setTimeout(() => {
      setIsOpen(true);
    }, 10);
  };

  const closeModal = () => {
    setIsClosing(true);
    setIsOpen(false);

    setTimeout(() => {
      setSelectedService(null);
      setIsClosing(false);
    }, 300);
  };

  useEffect(() => {
    if (selectedService) {
      document.documentElement.style.overflow = "hidden"; // html
      document.body.style.overflow = "hidden"; // body
    } else {
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
    }

    return () => {
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
    };
  }, [selectedService]);

    useEffect(() => {
  const el = sectionRef.current;

  const observer = new IntersectionObserver(
    ([entry]) => {
      const ratio = entry.intersectionRatio;

      if (ratio >= 0.1) {
        setShow(true);   // show slowly
      } else if (ratio <= 0.05) {
        setShow(false);  // hide slowly
      }
    },
    {
      threshold: [0, 0.05, 0.1, 0.3, 0.6, 1],
    }
  );

  if (el) observer.observe(el);

  return () => {
    if (el) observer.unobserve(el);
  };
}, []);

  return (
    <section
      ref={sectionRef}
      className="mobile-services-section"
    >
<div className={`mobile-main-service ${show ? "show" : ""}`}>        <h2 className="mobile-services-title">OUR SERVICES</h2>
        <div className="mobile-services-underline"></div>
        <div className="mobile-services-container">
          {services.map((service, index) => (
            <div
              key={index}
              className="mobile-service-card"
            >
              {/* Top Orange Tab Decor */}
              <div className="mobile-card-tab"></div>

              <div className="mobile-card-header">
                <div className="mobile-icon-circle">
                  <span className="mobile-main-icon">{service.icon}</span>
                  <div className="mobile-icon-ring"></div>
                </div>
              </div>

              <div className="mobile-card-body">
                {/* Side Orange Badge Decor */}
                <div className="mobile-side-badge"></div>

                <h3>{service.title}</h3>
                <ul>
                  {service.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
              <a
                href="#"
                className="mobile-learn-more"
                onClick={(e) => openModal(e, service)}
              >
                Learn more →
              </a>
            </div>
          ))}
        </div>
        {/* --- Dialog / Modal Overlay --- */}

        {selectedService && (
          <div
            className={`mobile-service-modal-overlay ${
              isOpen ? "open" : ""
            } ${isClosing ? "closing" : ""}`}
            onClick={closeModal}
          >
            <div
              className="mobile-service-modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="mobile-service-modal-close"
                onClick={closeModal}
              >
                &times;
              </button>
              <div className="mobile-service-modal-scroll">
                <div className="mobile-service-modal-header">
                  <span className="mobile-service-modal-icon">
                    {selectedService.icon}
                  </span>
                  <h2>{selectedService.title}</h2>
                </div>
                <div className="mobile-service-modal-body">
                  <p>{selectedService.description}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServiceMobile;
