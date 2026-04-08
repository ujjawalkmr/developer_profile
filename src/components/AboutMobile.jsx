import React from "react";
import "../styles/AboutMobile.css";


const AboutMobile = () => {
      const image = "/assets/uk_about.jpeg"


  return (
   <section className="about-mobile">
<div className="about-mobile-wrapper">
      {/* BACK LAYER (blurred background effect) */}
      <div
        className="legacy-bg"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
<div className="about-mobile-overlay">
          <h1>OUR LEGACY OF CREATIVITY</h1>
        </div>
      {/* MAIN CARD */}
      <div className="about-mobile-card">
        <img src={image} alt="Creativity team" className="about-mobile-image" />

        {/* <div className="about-mobile-overlay">
          <h1>OUR LEGACY OF CREATIVITY</h1>
        </div> */}
      </div>
    </div>
   </section>
  );
};

export default AboutMobile;