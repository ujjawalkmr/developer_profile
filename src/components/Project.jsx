import React, { useEffect, useRef, useState } from "react";
import "../styles/Project.css";

const categories = [
  { id: 1, title: "Websites", icon: "🌐", count: 12 },
  { id: 2, title: "Android Apps", icon: "🤖", count: 5 },
  { id: 3, title: "iOS Apps", icon: "🍎", count: 3 },
  { id: 4, title: "Video Editing", icon: "🎬", count: 8 },
];
const url = "https";
const projectsData = [
  {
    id: 1, catId: 1, title: "SuperPen 360", description: "Full stack ecommerce...", subDescription: `Super Pen is an interactive web-based drawing and note-taking application designed to provide users with a smooth and intuitive digital canvas experience. It allows users to create, edit, and save drawings or handwritten notes with multiple pen styles, colors, and brush sizes. The application includes features like undo/redo, eraser, and layer management to enhance creative flexibility.
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
    `, image: ["/assets/admin/login_page.png", "/assets/admin/pen_tab.png", "/assets/admin/student_tab.png", "/assets/admin/student_details.png"], icon: "🛒"
  },
  {
    id: 2, catId: 1, title: "Inspire App", description: "Real time chat...", subDescription: `Inspire App is a student-focused web application designed to make learning interactive, engaging, and fun. Students can log in securely with their credentials and access a variety of features that combine learning, gamification, and analytics. The app allows students to scan words, understand their meanings, track their progress, and explore the history of their scanned words over time. They can also play interactive games that reinforce learning while keeping them engaged.

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
`, image: ["/assets/Inspire/home_screen.png", "/assets/Inspire/reference_app.png", "/assets/Inspire/file_manager.png", "/assets/Inspire/file_content.png", "/assets/Inspire/scan_history.png", "/assets/Inspire/sync_with_pen.png"], icon: "💬"
  },
  {
    id: 3, catId: 1, title: "Book Library Manager", description: "Personal book...", subDescription: `Book Manager is a full-stack web application designed to help users manage their personal book collections securely and efficiently. The frontend is built with Next.js, offering a fast, responsive, and intuitive interface, while the backend uses Node.js with Express.js to handle APIs and business logic. The application uses MongoDB Atlas for scalable, document-based storage and is deployed on Oracle Cloud to ensure high availability and reliability.

Users can sign up and log in securely to access their account. After logging in, each user can add, edit, or delete books in their own collection, while the system ensures that users cannot modify or delete books belonging to other users. This provides a personalized and secure book management experience, making the application reliable for multiple users while maintaining data integrity.
Technologies / Languages Used:
 * Frontend: Next.js, HTML, CSS, JavaScript
 * Backend: Node.js, Express.js
 * Database: MongoDB Atlas
 * Deployment: Vercel
 `, image: ["/assets/library_book.png", "/assets/books.png"], icon: "📚"
  },
  { id: 4, catId: 1, title: "Energy ingestion", description: "Energy ingestion...", 
    subDescription: `Energy Investigation of Electrical Vehicles is a web-based application designed to visualize and analyze the environmental impact of electric vehicles (EVs). The project focuses on displaying detailed pollution and energy consumption data through interactive graphs and charts on the user interface. Users can explore information such as vehicle make and model, year, type, range, city, and utility, allowing them to compare and understand the ecological footprint of different EVs.

The project is built entirely with React.js and JavaScript, emphasizing a dynamic, responsive, and user-friendly interface. By presenting data visually, the application enables users to gain insights into EV efficiency, energy consumption, and pollution levels without requiring any backend integration. This project demonstrates frontend development skills in data visualization, interactive UI design, and React.js component architecture.

Technologies / Languages Used:
 * Frontend: React.js, JavaScript
 * UI/Visualization: Interactive charts and graphs`, 
    image: ["/assets/ev_img.png","/assets/ev_val.png"], icon: "🛒" },
  { id: 5, catId: 1, title: "E-commerce", description: "WebSocket chat...", subDescription: "Detailed info about E-commerce...", image: ["/assets/project2.gif"], icon: "💬" },
  { id: 6, catId: 1, title: "Book Manager", description: "Reading list...", subDescription: "Detailed info about Book Manager...", image: ["/assets/project3.gif"], icon: "📚" },
  { id: 7, catId: 2, title: "Third Eye", description: "Android App...", subDescription: "Detailed info about Third Eye...", image: ["/assets/project3.gif"], icon: "🤖" }
];

const ProjectPage = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  // FIX: Rename selectedProject to selectedCategory to match your Modal logic
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeProjectId, setActiveProjectId] = useState(null);

  const [isFading, setIsFading] = useState(false);
  // Add at the top of your component
  const [isClosing, setIsClosing] = useState(false);
  const closeModal = () => {
    setIsClosing(true);           // trigger CSS closing animation
    setTimeout(() => {
      setSelectedCategory(null);  // remove modal after animation finishes
      setIsClosing(false);        // reset for next open
    }, 600); // duration must match CSS transition
  };

  const handleTabChange = (newId) => {
    if (newId === activeProjectId) return; // Don't re-animate if clicking the same tab

    setIsFading(true); // Start fade out

    setTimeout(() => {
      setActiveProjectId(newId);
      setIsFading(false); // Fade back in with new data
    }, 300); // Match this to half your CSS transition time
  };

  // Intersection Observer for scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Set the first project of the category as active when modal opens
  useEffect(() => {
    if (selectedCategory) {
      const firstProject = projectsData.find(p => p.catId === selectedCategory.id);
      if (firstProject) setActiveProjectId(firstProject.id);
    }
  }, [selectedCategory]);
  // Prevent background scroll when modal is open
useEffect(() => {
  if (selectedCategory) {
    document.body.style.overflow = "hidden";  // disable background scroll
  } else {
    document.body.style.overflow = "";        // restore scroll
  }

  // Cleanup in case component unmounts
  return () => {
    document.body.style.overflow = "";
  };
}, [selectedCategory]);

  // Data helpers
  const currentProjects = projectsData.filter(p => p.catId === selectedCategory?.id);
  const activeProject = projectsData.find(p => p.id === activeProjectId);

  return (
    <div
      id="project"
      ref={sectionRef}
      className={`projects-container ${visible ? "show" : ""}`}
    >
      <div className={`projects-header ${visible ? "header-show" : ""}`}>
        <h2>My Projects</h2>
        <p>Here are some of the projects I have built using modern technologies.</p>
      </div>

      <div className="projects-grid">
        {categories.map((category, index) => (
          <div
            key={category.id}
            className="project-card"
            style={{ transitionDelay: `${index * 0.2}s` }}
          >
            <div className="icon-box">{category.icon}</div>
            <h3>{category.title}</h3>
            <p>Project done {category.count}+</p>

            <a
              href="#"
              className="learn-more"
              onClick={(e) => {
                e.preventDefault();
                setSelectedCategory(category); // Using correct state setter
              }}
            >
              View Projects →
            </a>
          </div>
        ))}
      </div>

      {selectedCategory && (
        <div
          className={`modal-overlay ${isClosing ? "closing" : ""}`}
          onClick={closeModal}
        >
          <div
            className={`modal-box ${isClosing ? "closing" : ""}`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* TABS SECTION */}
            <div className="modal-tabs">
              {currentProjects.map((proj) => (
                <button
                  // key={proj.id} 
                  // 1. Updated class logic for active state
                  className={`tab-item ${activeProjectId === proj.id ? "active" : ""}`}
                  // 2. Updated onClick to use the smooth transition function
                  onClick={() => handleTabChange(proj.id)}
                >
                  {proj.title}
                </button>
              ))}
            </div>

            {/* CONTENT SECTION */}
            <div className={`modal-content ${isFading ? "content-hidden" : "content-visible"}`}>
              {activeProject && (
                <div className="modal-details-wrapper">
                  <div className="modal-text">
                    <span className="project-icon-large">{activeProject.icon}</span>
                    <h3>{activeProject.title}</h3>
                    <p>{activeProject.subDescription}</p>
                    <button className="close-btn" onClick={closeModal}>Close</button>
                  </div>

                  {/* <div className="modal-image">
                    <img
                      src={activeProject.image}
                      alt={activeProject.title}
                    />
                  </div> */}


                  <div className="modal-image gallery-layout">
                    {/* The '?' and '&&' check if images exists before trying to map */}
                    {activeProject?.image && Array.isArray(activeProject.image) ? (
                      activeProject.image.map((imgUrl, index) => (
                        <img
                          key={index} // Always keep the key for React performance
                          src={imgUrl}
                          alt={`${activeProject.title} screenshot ${index + 1}`}
                          className="gallery-img"
                        />
                      ))
                    ) : (
                      /* Fallback if there are no images in the array */
                      <p>No images available for this project.</p>
                    )}
                  </div>





                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectPage;