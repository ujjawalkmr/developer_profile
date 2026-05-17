import React, { useState, useEffect, useRef } from "react";
import "../styles/ProjectMobile.css";

const categories = [
  { id: 1, title: "Websites", icon: "🌐", count: 3 },
  { id: 2, title: "Android Apps", icon: "🤖", count: 1 },
  { id: 3, title: "iOS Apps", icon: "🍎", count: 1 },
  { id: 4, title: "Video Editing", icon: "🎬", count: 4 },
];
const projectsData = [
  {
    id: 1,
    icon: "🌐",
    catId: 1,
    title: "SuperPen 360",
    description: `Super Pen is an interactive web-based drawing and note-taking application designed to provide users with a smooth and intuitive digital canvas experience. It allows users to create, edit, and save drawings or handwritten notes with multiple pen styles, colors, and brush sizes. The application includes features like undo/redo, eraser, and layer management to enhance creative flexibility.
Frontend:
The project leverages Flutter, and dart to deliver a responsive and user-friendly interface.

Backend:
It uses Node js, Express js, Spanner and S3 to manage user data, save drawings, and retrieve previous work securely. The system ensures real-time performance for seamless drawing experiences and persistent storage for user projects.
Key Features:
 * Advanced Search: Users can search through content efficiently.
 * Debouncing: Optimized search input to reduce unnecessary API calls and improve performance.
 * Filtering: Apply multiple filters to narrow down search results quickly.
 * Tagging & Categorization: Organize content with tags and categories for easy retrieval.
 * Scanning / Recognition: Scan documents, images, or other inputs for quick indexing and access.
 * Archive Management: Keep track of historical content with proper categorization and easy retrieval.
 * Real-time Updates: Search results and filters update dynamically without page reloads.
 * User-friendly Interface: Intuitive UI for seamless navigation and interaction.
    `,
  },
  {
    id: 2,
    icon: "🌐",
    catId: 1,
    title: "Inspire App",
    description: `Inspire App is a student-focused web application designed to make learning interactive, engaging, and fun. Students can log in securely with their credentials and access a variety of features that combine learning, gamification, and analytics. The app allows students to scan words, understand their meanings, track their progress, and explore the history of their scanned words over time. They can also play interactive games that reinforce learning while keeping them engaged.

The platform provides an organized and intuitive interface with tabbed navigation, filter systems, and search functionality with debouncing for quick access to content. Students can select a particular word to see its meaning, usage, and past scan history, making the learning process more personalized and insightful.
Key Features:
 * Student Login: Secure login with credentials for personalized access.
 * Word Scanning: Scan and check words in real-time to see meanings.
 * History Tracking: View past scans and learning history.
 * Interactive Gaming: Play games to reinforce learning and engagement.
 * Search with Debouncing: Optimized search for quick and efficient results.
 * Tabbed Navigation & Filters: Organized content browsing for easier learning.
Technologies / Languages Used:
 * Frontend: React.js, HTML, CSS, JavaScript
 * Backend: Node.js, Express.js
 * Database: Google Cloud Spanner, S3 (previously MongoDB)
 * Architecture: Microservices with load balancing for scalability and performance

Additional Notes:
The app focuses on providing a complete learning ecosystem for students, combining interactive tools, gamification, and analytics. It demonstrates full-stack development skills, cloud database integration, and the ability to create a responsive, scalable, and user-friendly educational platform.
`,
  },
  {
    id: 3,
    icon: "🌐",
    catId: 1,
    title: "Book Library Manager",
    description: `Book Manager is a full-stack web application designed to help users manage their personal book collections securely and efficiently. The frontend is built with Next.js, offering a fast, responsive, and intuitive interface, while the backend uses Node.js with Express.js to handle APIs and business logic. The application uses MongoDB Atlas for scalable, document-based storage and is deployed on Oracle Cloud to ensure high availability and reliability.

Users can sign up and log in securely to access their account. After logging in, each user can add, edit, or delete books in their own collection, while the system ensures that users cannot modify or delete books belonging to other users. This provides a personalized and secure book management experience, making the application reliable for multiple users while maintaining data integrity.
Technologies / Languages Used:
 * Frontend: Next.js, HTML, CSS, JavaScript
 * Backend: Node.js, Express.js
 * Database: MongoDB Atlas
 * Deployment: Vercel
 `,
  },
  {
    id: 4,
    icon: "🌐",
    catId: 1,
    title: "Energy ingestion",
    description: `Energy Investigation of Electrical Vehicles is a web-based application designed to visualize and analyze the environmental impact of electric vehicles (EVs). The project focuses on displaying detailed pollution and energy consumption data through interactive graphs and charts on the user interface. Users can explore information such as vehicle make and model, year, type, range, city, and utility, allowing them to compare and understand the ecological footprint of different EVs.

The project is built entirely with React.js and JavaScript, emphasizing a dynamic, responsive, and user-friendly interface. By presenting data visually, the application enables users to gain insights into EV efficiency, energy consumption, and pollution levels without requiring any backend integration. This project demonstrates frontend development skills in data visualization, interactive UI design, and React.js component architecture.

Technologies / Languages Used:
 * Frontend: React.js, JavaScript
 * UI/Visualization: Interactive charts and graphs`,
  },
  {
    id: 5,
    icon: "🌐",
    catId: 1,
    title: "E-commerce",
    description: (
      <>
        <h3>Dairy Product Shopping Web Application</h3>
        <p>
          I developed a full-stack web-based shopping platform focused
          exclusively on dairy products, where users can both buy and sell items
          such as milk, cheese, butter, and other dairy goods. The application
          provides a smooth and user-friendly interface for browsing products,
          viewing details, and managing purchases. On the frontend, I used
          React.js to build a responsive and interactive user interface,
          ensuring a seamless user experience across devices. On the backend, I
          implemented Node.js with Express.js to handle server-side logic, API
          development, and user interactions. For data storage, I used MongoDB,
          which efficiently manages product listings, user data, and
          transactions. The platform supports key features such as product
          listing, user authentication, buying/selling functionality, and
          dynamic data handling through RESTful APIs. This project demonstrates
          my ability to build scalable full-stack applications using modern web
          technologies. how to do
        </p>
      </>
    ),
  },
  {
    id: 7,
    icon: "🌐",
    catId: 2,
    title: "Third Eye",
    description: (
      <>
        <h3>Third Eye – Employee Attendance Management System</h3>
        <p>
          I worked as a Backend Developer on “Third Eye,” an employee attendance
          management application designed to efficiently track and manage
          employee attendance records. The system enables organizations to
          monitor check-in/check-out times, manage attendance data, and generate
          reports. I developed the backend using Java with Spring Boot, where I
          designed and implemented RESTful APIs to handle core functionalities
          such as attendance tracking, user management, and data processing. I
          used MySQL as the database to store and manage structured employee and
          attendance data efficiently. My responsibilities included API
          development, database design, and ensuring secure and scalable data
          handling. This project helped me strengthen my skills in backend
          architecture, API design, and working with real-world business logic.
        </p>
      </>
    ),
  },
  {
    id: 8,
    icon: "🌐",
    catId: 2,
    title: "SuperPen 360",
    description: `Super Pen is an interactive app based also, drawing and note-taking application designed to provide users with a smooth and intuitive digital canvas experience. It allows users to create, edit, and save drawings or handwritten notes with multiple pen styles, colors, and brush sizes. The application includes features like undo/redo, eraser, and layer management to enhance creative flexibility.
Frontend:
The project leverages Flutter, and dart to deliver a responsive and user-friendly interface.

Backend:
It uses Node js, Express js, Spanner and S3 to manage user data, save drawings, and retrieve previous work securely. The system ensures real-time performance for seamless drawing experiences and persistent storage for user projects.
Key Features:
 * Advanced Search: Users can search through content efficiently.
 * Debouncing: Optimized search input to reduce unnecessary API calls and improve performance.
 * Filtering: Apply multiple filters to narrow down search results quickly.
 * Tagging & Categorization: Organize content with tags and categories for easy retrieval.
 * Scanning / Recognition: Scan documents, images, or other inputs for quick indexing and access.
 * Archive Management: Keep track of historical content with proper categorization and easy retrieval.
 * Real-time Updates: Search results and filters update dynamically without page reloads.
 * User-friendly Interface: Intuitive UI for seamless navigation and interaction.
    `,
  },
  {
    id: 9,
    icon: "🌐",
    catId: 3,
    title: "SuperPen 360",
    description: `Super Pen is an interactive IOS based also, drawing and note-taking application designed to provide users with a smooth and intuitive digital canvas experience. It allows users to create, edit, and save drawings or handwritten notes with multiple pen styles, colors, and brush sizes. The application includes features like undo/redo, eraser, and layer management to enhance creative flexibility.
Frontend:
The project leverages Flutter, and dart to deliver a responsive and user-friendly interface.

Backend:
It uses Node js, Express js, Spanner and S3 to manage user data, save drawings, and retrieve previous work securely. The system ensures real-time performance for seamless drawing experiences and persistent storage for user projects.
Key Features:
 * Advanced Search: Users can search through content efficiently.
 * Debouncing: Optimized search input to reduce unnecessary API calls and improve performance.
 * Filtering: Apply multiple filters to narrow down search results quickly.
 * Tagging & Categorization: Organize content with tags and categories for easy retrieval.
 * Scanning / Recognition: Scan documents, images, or other inputs for quick indexing and access.
 * Archive Management: Keep track of historical content with proper categorization and easy retrieval.
 * Real-time Updates: Search results and filters update dynamically without page reloads.
 * User-friendly Interface: Intuitive UI for seamless navigation and interaction.
    `,
  },
  {
    id: 10,
    catId: 4,
    icon: "🌐",
    title: "YouTube Blogs",
    description: (
      <>
        <h3>YouTube Blogs – Video Editing Projects</h3>
        <p>
          I create and edit video content for my YouTube channel, showcasing
          tutorials, tech insights, and personal projects. Each video is crafted
          to engage viewers with clear explanations, smooth transitions, and
          professional editing techniques.
        </p>
        <p>
          On this platform, users can explore thumbnails of my latest videos.
          Clicking on any video opens it directly on YouTube, allowing viewers
          to watch, like, and comment on the content. This demonstrates my
          ability to produce high-quality video content and manage a personal
          digital portfolio effectively.
        </p>
      </>
    ),
  },
];

const ProjectMobile = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [show, setShow] = useState(false);
  const [animateContent, setAnimateContent] = useState(false);
  const sectionRef = useRef(null);

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (e, category) => {
    e.preventDefault();

    setSelectedCategory(category);

    // get all matched projects
    const matchedProjects = projectsData.filter(
      (project) => project.catId === category.id,
    );

    // set first project as default
    setSelectedProject(matchedProjects[0]);

    setIsClosing(false);

    setTimeout(() => {
      setIsOpen(true);
    }, 10);
  };

  const closeModal = () => {
    setIsClosing(true);
    setIsOpen(false);

    setTimeout(() => {
      setSelectedCategory(null);
      setSelectedProject(null);
      setIsClosing(false);
    }, 300);
  };

  useEffect(() => {
    if (selectedCategory) {
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
  }, [selectedCategory]);
const [showCards, setShowCards] = useState(false);

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      setShowCards(entry.isIntersecting);
    },
    {
      threshold: 0.2,
    }
  );

  if (sectionRef.current) {
    observer.observe(sectionRef.current);
  }

  return () => {
    if (sectionRef.current) {
      observer.unobserve(sectionRef.current);
    }
  };
}, []);
  return (
    <section
      ref={sectionRef}
      className="mobile-project-section"
    >
      <div className="mobile-main-service">
        <h2
  className={`mobile-project-title ${
    showCards ? "title-show" : "title-hide"
  }`}
>
  MY PROJECT
</h2>

<div
  className={`mobile-project-underline ${
    showCards ? "underline-show" : "underline-hide"
  }`}
></div>
        <div className="mobile-project-container">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`mobile-project-card ${
                showCards ? "show-card" : "hide-card"
              }`}
              style={{
                transitionDelay: `${index * 0.3}s`,
              }}
            >
              {/* Top Orange Tab Decor */}
              <div className="mobile-card-tab-project"></div>

              <div className="mobile-card-header">
                <div className="mobile-icon-circle">
                  <span className="mobile-main-icon">{category.icon}</span>
                  <div className="mobile-icon-ring"></div>
                </div>
              </div>

              <div className="mobile-card-body">
                {/* Side Orange Badge Decor */}
                <div className="mobile-side-badge"></div>

                <h3>{category.title}</h3>
                <ul>
                  <li>{category.count}+ Projects</li>
                </ul>
              </div>
              <a
                href="#"
                className="mobile-learn-more"
                onClick={(e) => openModal(e, category)}
              >
                Learn more →
              </a>
            </div>
          ))}
        </div>
        {/* --- Dialog / Modal Overlay --- */}
        {selectedCategory && (
          <div
            className={`mobile-project-modal-overlay ${
              isOpen ? "open" : ""
            } ${isClosing ? "closing" : ""}`}
            onClick={closeModal}
          >
            <div
              className="mobile-project-modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                className="mobile-project-modal-close"
                onClick={closeModal}
              >
                &times;
              </button>

              {/* Horizontal Scroll Tabs */}
              <div className="mobile-project-tabs-wrapper">
                <div className="mobile-project-tabs">
                  {projectsData
                    .filter((project) => project.catId === selectedCategory.id)
                    .map((project) => (
                      <button
                        key={project.id}
                        className={`mobile-project-tab-btn ${
                          selectedProject?.id === project.id ? "active" : ""
                        }`}
                        onClick={() => {
                          setAnimateContent(true);

                          setTimeout(() => {
                            setSelectedProject(project);

                            setTimeout(() => {
                              setAnimateContent(false);
                            }, 50);
                          }, 150);
                        }}
                      >
                        {project.title}
                      </button>
                    ))}
                </div>
              </div>

              {/* Divider */}
              <div className="mobile-project-divider"></div>

              {/* Scroll Only Description */}
              {selectedProject && (
                <div
                  className={`mobile-project-modal-scroll ${
                    animateContent ? "animate-changing" : "animate-show"
                  }`}
                >
                  {/* Icon */}
                  <div className="mobile-project-center-icon">
                    {selectedProject.icon}
                  </div>

                  {/* Title */}
                  <div className="mobile-project-modal-header">
                    <h2>{selectedProject.title}</h2>
                  </div>

                  {/* Description */}
                  <div className="mobile-project-modal-body">
                    {typeof selectedProject.description === "string" ? (
                      <p>{selectedProject.description}</p>
                    ) : (
                      selectedProject.description
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectMobile;
