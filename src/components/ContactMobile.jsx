import React, { useState } from "react";
import { GitHubCalendar } from "react-github-calendar";
import "../styles/ContactMobile.css";

const ContactMobile = () => {
  const [activeTab, setActiveTab] = useState("contact");

  return (
    <section className="mobile-contact-section">

      {/* Tabs */}
      <div className="mobile-tab-main">
      <div className="mobile-contact-tabs">
        <button
          className={`tab ${activeTab === "contact" ? "active" : ""}`}
          onClick={() => setActiveTab("contact")}
        >
          Contact 
        </button>

        <button
          className={`tab ${activeTab === "message" ? "active" : ""}`}
          onClick={() => setActiveTab("message")}
        >
          Send Message
        </button>
      </div></div>

      {/* CONTACT TAB */}
      <div className={`tab-animate ${activeTab === "contact" ? "show" : "hide"}`}>

      {activeTab === "contact" && (
        <div className="mobile-contact-card">
          <h3 className="summary-heading">PROFESSIONAL SUMMARY</h3>

          <p className="summary-text-contact">
            I build scalable, secure and high-performance applications using
            modern technologies.
          </p>

          <button className="cv-btn-download">⬇ Download CV</button>

          <div className="mobile-contact-contentp">

            {/* Left Side */}
            <div className="left-info">
              <div className="info-group">
                <h4>Email</h4>
                <p>ujjawalkumar9211@gmail.com</p>
              </div>

              <div className="info-group">
                <h4>Phone</h4>
                <p>7294934350</p>
              </div>

              <div className="info-group">
                <h4>LinkedIn</h4>
                <p>/ujjawal-kumar-b49277223/</p>
              </div>

              <div className="info-group">
                <h4>Tech Stack</h4>
                <p>
                  React • Node • AWS • Flutter • Java • SQL more...
                </p>
              </div>
            </div>

            {/* git section*/}
           <div className="github-box-mobile">
                         <h4>GitHub Contributions</h4>
                         <div className="calendar-wrapper-mobile">
                           <GitHubCalendar
                             username="ujjawalkmr"
                             blockSize={8}        // 🔥 SMALL BOX
                             blockMargin={2}      // 🔥 LESS GAP
                             fontSize={10}
                             hideTotalCount={true}
                             hideColorLegend={true}
                             colorScheme="dark"
                           />
                         </div>
                       </div>

          </div>
        </div>
        )}
        </div>

      {/* MESSAGE TAB */}
            <div className={`tab-animate ${activeTab === "message" ? "show" : "hide"}`}>

      {activeTab === "message" && (
        <div className="mobile-contact-card">
          <h2 className="summary-heading">SEND MESSAGE</h2>

          <form className="message-form">
            <input
              type="text"
                placeholder="Your Name"
                required
            />

            <input
              type="email"
                placeholder="Your Email"
                required
            />

            <textarea
              rows="6"
                placeholder="Your Message"
                required
            ></textarea>

            <button type="submit" className="mobile-send-btn">
              Send Message
            </button>
          </form>
        </div>
        )}
      </div>
    </section>
  );
};

export default ContactMobile;