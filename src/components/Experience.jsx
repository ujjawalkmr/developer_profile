import React, { useEffect, useRef, useState } from "react";
import "../styles/Experience.css";
import expImg from "/assets/exp_me.png";

const experienceData = [
    {
        year: "2023 - Present",
        title: "Full Stack Developert",
        institute: "Scanning Pens (Mumbai)",
        img: "/assets/sp.webp",
        desc: "Full Stack Developer with experience in Node.js, React.js, Flutter, SQL, MongoDB, AWS S3, and Spanner, focused on developing efficient, scalable, and user-friendly applications."
    },
    {
        year: "01/02/2021 - 30/11/2021",
        title: "Java Developer",
        institute: "JBM Auto Limited (Alwar, Rajsthaan)",
        img: "/assets/jbm.jpg",
        desc: "Java Developer skilled in Java, Spring, MySQL, and JDBC, building efficient and scalable backend applications."
    },
];

const Experience = () => {
    const sectionRef = useRef();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setVisible(entry.isIntersecting);
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section className="experience" ref={sectionRef}>

            {/* HEADER */}
            <div className={`experience-title ${visible ? "animate-header" : ""}`}>
                <h2>Experience</h2>
                <div className="experience-header-line"></div>
            </div>

            <div className="experience-container">

                {/* LEFT → TIMELINE */}
                <div className={`experience-timeline ${visible ? "slide-left" : ""}`}>
                    <div className="timeline">
                        {experienceData.map((item, index) => (
                            <div className="timeline-item" key={index}>
                                <div className="timeline-dot"></div>

                                <div className="timeline-content">
                                    <div className="exp-card">

                                        {/* IMAGE COLUMN */}
                                        <div className="exp-img">
                                            <img src={item.img} alt="exp" />
                                        </div>

                                        {/* DETAILS COLUMN */}
                                        <div className="exp-details">
                                            <span className="year">{item.year}</span>
                                            <h3>{item.title}</h3>
                                            <h4>{item.institute}</h4>
                                            <p>{item.desc}</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* RIGHT → IMAGE */}
                <div className={`experience-image ${visible ? "slide-right" : ""}`}>
                    <img src={expImg} alt="experience" />
                </div>

            </div>
        </section>
    );
};

export default Experience;