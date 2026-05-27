import { useEffect, useRef, useState } from "react";
import "../styles/ExperienceMobile.css";

// Assuming experienceData is passed as props or imported.
// Included here as a structural reference mapping your fields.
const experienceData = [
  {
    id: 1,
    year: "2023 April - Present",
    title: "Full Stack Developer",
    institute: "Scanning Pens (Mumbai)",
    img: "/assets/sp.webp",
    desc: "Full Stack Developer with experience in Node.js, React.js, Flutter, SQL, MongoDB, AWS S3, and Spanner.",
  },
  {
    id: 2,
    year: "01/02/2021 - 30/11/2021",
    title: "Java Developer",
    institute: "JBM Auto Limited (Alwar, Rajsthaan)",
    img: "/assets/jbm.jpg",
    desc: "Java Developer skilled in Java, Spring, MySQL, and JDBC, building efficient and scalable backend applications.",
  },
];

export default function ExperienceMobile() {
  const sectionRef = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShow(entry.isIntersecting);
      },
      {
        threshold: 0.15,
      },
    );

    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);
  return (
    <section
      ref={sectionRef}
      id="experience"
      className="mobile-experience-section"
    >
      <div
        className={`mobile-experience-wrapper ${show ? "card-show" : "card-hide"}`}
        style={{ transitionDelay: `${0.15}s` }}
      >
        <h2 className="mobile-experience-title">MY EXPERIENCE</h2>
        <div className="mobile-experience-underline" />

        {/* Outer Layout wrapper handling the timeline line axis */}
        <div className="mobile-timeline-axis-container">
          {/* Continuous vertical tracking line */}
          <div className="mobile-timeline-vertical-line" />

          {/* Vertical Grid Stack */}
          <div className="mobile-experience-vertical-list">
            {experienceData.map((card) => (
              <div
                key={card.id}
                className="mobile-experience-timeline-row"
              >
                {/* Outer Timeline Node Dot pointing directly to this card */}
                <div className="mobile-timeline-node-dot" />

                <div className="mobile-experience-card">
                  {/* Decorative Pill Badges */}
                  <div className="mobile-experience-badge-pill mobile-experience-top-pill" />
                  <div className="mobile-experience-badge-pill mobile-experience-left-pill" />
                  <div className="mobile-experience-badge-pill mobile-experience-right-pill" />

                  {/* Left Column (Dark Sweeping Panel) */}
                  <div className="mobile-experience-card-left-panel">
                    <div className="mobile-experience-globe-outer-ring">
                      <div className="mobile-experience-globe-inner-ring" />
                      {card.img ? (
                        <img
                          src={card.img}
                          alt={`${card.institute} logo`}
                          className="mobile-experience-globe-svg-icon object-contain p-1"
                          onError={(e) => {
                            e.target.style.display = "none";
                            if (e.target.nextSibling)
                              e.target.nextSibling.style.display = "block";
                          }}
                        />
                      ) : null}

                      {/* Fallback SVG Globe */}
                      <svg
                        className="mobile-experience-globe-fallback-svg"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        style={{ display: card.img ? "none" : "block" }}
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                        />
                        <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                      </svg>
                    </div>
                  </div>

                  {/* Right Column (Text details stacked hierarchically) */}
                  <div className="mobile-experience-card-right-panel">
                    <h3 className="mobile-experience-institute-name">
                      {card.institute}
                    </h3>
                    <h4 className="mobile-experience-card-title">
                      {card.title}
                    </h4>
                    <h5 className="mobile-experience-years">{card.year}</h5>
                    <p className="mobile-experience-desc-text">{card.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
