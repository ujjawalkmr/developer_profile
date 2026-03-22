import React, { useEffect, useRef, useState } from "react";
import "../styles/Education.css";
import eduImg from "/assets/edu_me.png";

const educationData = [
    {
        year: "2022 - 2023",
        title: "Java Full Stack Development",
        institute: "JSpider (Bangalore)",
        img: "/assets/jspider.png",
        desc: "Completed Java full stck development course with real project experiance on (Spring boot, java, jdbc,J2EE, React, SQL etc)"
    },
    {
        year: "2016 - 2020",
        title: "Bachelor of Technology (B.Tech)",
        institute: "DREAM INSTITUTE OF TECHNOLOGY (KOLKATA)",
        img: "/assets/makut.webp",
        desc: "Specialized in Computer Science & Engineering (CSE) stream with strong academic performance."
    },
    {
        year: "2014 - 2016",
        title: "Higher Secondary (12th)",
        institute: "+2 ZILA SCHOOL, GAYA (BIHAR)",
        img: "/assets/bseb_logo.png",
        desc: "Specialized in Science stream with strong academic performance."
    },
    {
        year: "2013 - 2014",
        title: "Secondary School (10th)",
        institute: "HIGH SCHOOL UMTA, DHARNAEE (JEHANABAD, BIHAR)",
        img: "/assets/bseb_logo.png",
        desc: "Completed SSC with good grades."
    }
];

const Education = () => {
    const sectionRef = useRef();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);   // show animation
                } else {
                    setVisible(false);  // reset animation when out
                }
            },
            {
                threshold: 0.3
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section className="education" ref={sectionRef}>

            {/* <h2 className="education-title">My Education</h2> */}
            <div className={`education-title ${visible ? "animate-header" : ""}`}>
                <h2>Education</h2>
                <div className="header-line"></div>
            </div>
            <div className="education-container">

                {/* LEFT IMAGE */}
                <div className={`education-left ${visible ? "slide-left" : ""}`}>
                    <img src={eduImg} alt="education" />
                </div>

                {/* RIGHT TIMELINE */}
                <div className={`education-right ${visible ? "slide-right" : ""}`}>
                    <div className="timeline">
                        {educationData.map((item, index) => (
                            <div className="timeline-item" key={index}>
                                <div className="timeline-dot"></div>

                                <div className="timeline-content">
                                    <div className="edu-card">

                                        {/* COLUMN 1: IMAGE */}
                                        <div className="edu-img">
                                            <img src={item.img} alt="edu" />
                                        </div>

                                        {/* COLUMN 2: DETAILS */}
                                        <div className="edu-details">
                                            <span className="year">{item.year}</span>
                                            <h3>{item.title}</h3>
                                            <h4>{item.institute}</h4>
                                            <p>{item.desc}</p>
                                        </div>

                                    </div>
                                </div>
                                {/* <div className="timeline-content">
                  <span className="year">{item.year}</span>
                  <h3>{item.title}</h3>
                  <h4>{item.institute}</h4>
                  <p>{item.desc}</p>
                </div> */}
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Education;