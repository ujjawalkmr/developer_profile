import React, { useEffect, useRef, useState } from "react";
import '../styles/Service.css';

const servicesData = [
  {
    id: 1,
    title: "Server Application",
    description: "I will create a responsive and user-friendly web application that meets your business needs. I will ensure that your web...",
    subDescription: `I specialize in designing and developing secure, scalable, and high-performance RESTful APIs using Java (Spring Boot) and Node.js (Express.js). My approach focuses on building clean, maintainable, and production-ready backend architectures that efficiently handle real-world application demands.
I implement robust authentication and authorization mechanisms such as JWT-based authentication and role-based access control (RBAC) to ensure secure access to resources. I follow best practices for input validation, centralized error handling, middleware architecture, and structured logging to maintain reliability and consistency across the application.
I have experience integrating APIs with relational and non-relational databases such as MySQL and MongoDB, designing optimized schemas, writing efficient queries, and ensuring proper indexing for performance. I also focus on writing modular and reusable code following MVC and layered architecture principles.
My APIs are built with scalability in mind — capable of handling high traffic, supporting pagination, filtering, caching strategies, and rate limiting when necessary. I also design APIs that seamlessly integrate with frontend applications, mobile apps, and third-party services.
Whether it's building a backend from scratch, creating microservices, or improving an existing system, I ensure the API layer is secure, efficient, and future-proof. My goal is to deliver backend systems that provide smooth communication between client and server while maintaining performance, security, and maintainability.`,
    icon: "💻",
    highlight: true,// This matches the purple card in your image
    image: "/assets/server_app.gif"

  },
  {
    id: 2,
    title: "Web Development",
    description: "I develop modern, responsive, and scalable web applications using the latest technologies to deliver fast, secure, and user-friendly digital experiences...",
    subDescription: `I specialize in building modern full-stack web applications that are fast, scalable, and user-focused. My development approach focuses on clean architecture, performance optimization, and maintainable code to ensure long-term reliability of the application.
On the frontend, I build responsive and interactive user interfaces using technologies like React.js, Next.js, HTML5, CSS3, and JavaScript. I focus on creating smooth user experiences, mobile-friendly layouts, and optimized UI components that improve usability and performance.
On the backend, I develop secure and scalable server-side systems using Node.js with Express.js and Java (Spring Boot). I design RESTful APIs that efficiently handle data communication between the client and server.
I implement secure authentication systems such as JWT-based authentication and role-based access control (RBAC) to protect user data and application resources. I also ensure proper input validation, error handling, and middleware architecture to maintain application stability.
For databases, I work with both relational and NoSQL databases such as MySQL and MongoDB. I design optimized schemas, write efficient queries, and ensure proper indexing to improve performance and scalability.
Whether it's building a website from scratch, developing a full-stack platform, or improving an existing web system, I focus on delivering reliable, high-performance, and scalable web applications that meet real-world business needs.`,

    icon: "⚙️",
    highlight: false,
    image: "/assets/web_app.gif"
  },
  {
    id: 3,
    title: "App Development",
    description: "I build modern, responsive, and high-performance mobile applications that provide smooth user experiences across Android and iOS devices...",
    subDescription: `I specialize in developing modern mobile and ios applications that are fast, scalable, and user-friendly. My focus is on creating intuitive interfaces and smooth user experiences that work seamlessly across different devices and screen sizes.
I build mobile applications using modern development frameworks and best practices to ensure performance, reliability, and maintainability. I design clean UI components, efficient navigation flows, and responsive layouts to deliver an engaging user experience.
On the backend side, I integrate mobile apps with secure RESTful APIs built using technologies like Node.js (Express.js) and Java (Spring Boot). This allows applications to securely communicate with servers, manage user data, and perform real-time operations.
I implement authentication systems such as JWT-based authentication, secure API communication, and proper data validation to ensure user data remains protected. I also work with databases like MongoDB and MySQL to store and manage application data efficiently.
Whether it's building a new mobile application, integrating APIs, or improving an existing app’s performance, I focus on delivering reliable, scalable, and high-quality mobile solutions that meet real-world user needs.`,

    icon: "📱",
    highlight: false,
    image: "/assets/app_dev.gif"

  },
  {
    id: 4,
    title: "Database Management",
    description: "I design and manage secure, optimized, and scalable databases that ensure reliable data storage, fast queries, and efficient application performance...",
    subDescription: `I specialize in designing, managing, and optimizing databases to ensure reliable data storage and high application performance. My focus is on creating well-structured database architectures that support scalable and efficient systems.
I work with both relational and NoSQL databases such as MySQL and MongoDB. I design optimized database schemas, establish proper relationships between tables or collections, and ensure data consistency across applications.
I write efficient queries, implement indexing strategies, and optimize database performance to handle large volumes of data and high traffic applications. My approach helps reduce query execution time and improve overall system responsiveness.
I also focus on database security and data integrity by implementing proper access controls, validation rules, and backup strategies to prevent data loss and unauthorized access.
Whether it's designing a database from scratch, optimizing an existing database structure, or managing application data efficiently, I ensure that the database layer remains secure, scalable, and reliable for long-term system growth.`,

    icon: "💾",
    highlight: false,
    image: "/assets/db_manage.gif"

  },
  {
    id: 5,
    title: "Video Editing",
    description: "I am starting my journey in video editing and focus on creating clean, engaging, and well-structured videos with smooth cuts and basic effects.",

    subDescription: `I am currently developing my skills in video editing and learning how to transform raw footage into engaging visual content. My focus is on creating simple, clean, and well-paced videos that deliver the message clearly.
I use tools like Adobe Premiere Pro to perform basic editing tasks such as trimming clips, arranging sequences, adding transitions, background music, and simple text overlays. I also work on improving video flow and maintaining a consistent visual style.
As I continue to grow my editing skills, I am exploring techniques like color correction, sound enhancement, and storytelling through video to make content more engaging.
I am passionate about learning and improving with every project. My goal is to build creative and high-quality video content while continuously developing my editing skills.`,

    icon: "🎬",
    highlight: false,
    image: "/assets/video_edit.gif"
  },
  {
    id: 6,
    title: "Web Design",
    description: "I design modern, clean, and responsive website layouts that provide an intuitive user experience and visually engaging interfaces.",
    subDescription: `I specialize in designing visually appealing and user-friendly website interfaces that focus on both aesthetics and usability. My goal is to create designs that are clean, modern, and easy for users to navigate.
I design responsive layouts that work smoothly across desktops, tablets, and mobile devices. I focus on proper spacing, typography, color balance, and visual hierarchy to make websites look professional and easy to use.
Using technologies like HTML, CSS, and modern UI design practices, I create structured layouts that improve user experience and keep visitors engaged with the website content.
I also focus on UI consistency, smooth interactions, and well-organized sections that help users quickly find the information they need.
Whether it's designing a landing page, a portfolio website, or a business website, my goal is to create attractive and functional designs that enhance the overall user experience.`,

    icon: "🎨",
    highlight: false, image: "/assets/web_app.gif"
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
  useEffect(() => {
    const handleScroll = (e) => {
      // Only prevent scroll if event target is NOT the modal box
      const modal = document.querySelector(".modal-box");
      if (modal && !modal.contains(e.target)) {
        e.preventDefault();
      }
    };

    if (selectedService) {
      window.addEventListener("wheel", handleScroll, { passive: false });
      window.addEventListener("touchmove", handleScroll, { passive: false });
    }

    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("touchmove", handleScroll);
    };
  }, [selectedService]);

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
        <div className="service-modal-overlay" onClick={() => setSelectedService(null)}>
          <div
            className="service-modal-box"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="service-modal-content">

              {/* Left Side Text */}
              <div className="service-modal-text">
                <h3>{selectedService.title}</h3>
                <p>{selectedService.subDescription}</p>
                <button onClick={() => setSelectedService(null)}>Close</button>
              </div>

              {/* Right Side Image */}
              <div className="service-modal-image">
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