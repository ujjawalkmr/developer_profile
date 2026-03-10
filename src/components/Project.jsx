import React, { useEffect, useRef, useState } from "react";
import "../styles/Project.css";

const categories = [
  { id: 1, title: "Websites", icon: "🌐", count: 12 },
  { id: 2, title: "Android Apps", icon: "🤖", count: 5 },
  { id: 3, title: "iOS Apps", icon: "🍎", count: 3 },
  { id: 4, title: "Video Editing", icon: "🎬", count: 8 },
];

const projectsData = [
  { id: 1, catId: 1, title: "SuperPen 360", description: "Full stack ecommerce...", subDescription: ` AAAAAAAAAAAAAAAA BBBBBBBBBBBBBBBB
    aeuhuhkhwef 
    aehfuwhifuhiuqwhf
    wrufhwiurhfiuwhfuwugf
    uhrfugwyrgfwfwgfyuwgurfksjfqwhrigfunqwurghiqwuhgiuwhegiuhviygeiybv
    wrgiwg`, image:[ "/assets/admin/login_page.png","/assets/admin/pen_tab.png","/assets/admin/student_tab.png","/assets/admin/student_details.png"], icon: "🛒" },
  { id: 2, catId: 1, title: "Inspire App", description: "Real time chat...", subDescription: "Detailed info about Inspire App...", image: ["/assets/project2.gif"], icon: "💬" },
  { id: 3, catId: 1, title: "Book Library Manager", description: "Personal book...", subDescription: "Detailed info about Book Library...", image: ["/assets/project3.gif"], icon: "📚" },
  { id: 4, catId: 1, title: "Energy_ingestion", description: "Ecommerce...", subDescription: "Detailed info about Energy...", image: ["/assets/project1.gif"], icon: "🛒" },
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
        <div className="modal-overlay" onClick={() => setSelectedCategory(null)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>

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
                    <button className="close-btn" onClick={() => setSelectedCategory(null)}>Close</button>
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