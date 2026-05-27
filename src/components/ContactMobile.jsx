import React, { useEffect, useRef, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";
import emailjs from "@emailjs/browser";
import "../styles/ContactMobile.css";

const ContactMobile = () => {
  const [activeTab, setActiveTab] = useState("contact");
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

   const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/assets/UjjawalKumar@.pdf"; // file path
    link.download = "Ujjawal_CV.pdf"; // file name after download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    const templateParams = {
      name: formData.name,
      email: formData.email, // This will be used as Reply-To
      title: formData.subject,
      message: formData.message,
      // time: new Date().toLocaleString(),
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, // replace with your EmailJS Service ID
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // replace with your EmailJS Template ID
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY, // replace with your EmailJS Public Key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setSent(true);
          setFormData({ name: "", email: "", subject: "", message: "" });
          setTimeout(() => setSent(false), 3000);
        },
        (err) => {
          console.error("FAILED...", err);
        },
      )
      .finally(() => setSending(false));
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.2, // 20% visible
      },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="mobile-contact-section"
    >
      {/* Tabs */}
      <div
        className={`mobile-tab-main ${
          isVisible ? "slide-in-right" : "slide-out-right"
        }`}
      >
        <h2 className="get-in-touch">GET IN TOUCH</h2>
        <div className="mobile-contact-underline" />

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
        </div>

        {/* CONTACT TAB */}
        <div
          className={`tab-animate ${activeTab === "contact" ? "show" : "hide"}`}
        >
          {activeTab === "contact" && (
            <div className="mobile-contact-card">
              <h3 className="summary-heading">PROFESSIONAL SUMMARY</h3>

              <p className="summary-text-contact">
                I build scalable, secure and high-performance applications using
                modern technologies.
              </p>

              <button className="cv-btn-download" onClick={downloadCV}>⬇ Download CV</button>

              <div className="mobile-contact-content">
                {/* Left Side */}
                <div className="left-info">
                  <div className="info-group">
                    <h4>Email</h4>
                   <p>
                  <a href="mailto:ujjawalkumar9211@gmail.com">
                    ujjawalkumar9211@gmail.com
                  </a>
                </p> 
                  </div>

                  <div className="info-group">
                    <h4>Phone</h4>
                    <p>7294934350</p>
                  </div>

                  <div className="info-group">
                    <h4>LinkedIn</h4>
                    <p>
                  <a href="https://www.linkedin.com/in/ujjawal-kumar-b49277223/r" target="_blank" rel="noopener noreferrer">
                    /ujjawal-kumar-b49277223/
                  </a>
                </p>
                  </div>

                  <div className="info-group">
                    <h4>Tech Stack</h4>
                    <p>React • Node • AWS • Flutter • Java • SQL more...</p>
                  </div>
                   {/* git section*/}
                <div className="github-box-mobile">
                  <h4>GitHub Contributions</h4>
                  <div className="calendar-wrapper-mobile">
                    <GitHubCalendar
                      username="ujjawalkmr"
                      blockSize={8} // 🔥 SMALL BOX
                      blockMargin={2} // 🔥 LESS GAP
                      fontSize={10}
                      hideTotalCount={true}
                      hideColorLegend={true}
                      colorScheme="dark"
                    />
                  </div>
                </div>
                </div>

               
              </div>
            </div>
          )}
        </div>

        {/* MESSAGE TAB */}
        <div
          className={`tab-animate ${activeTab === "message" ? "show" : "hide"}`}
        >
          {activeTab === "message" && (
            <div className="mobile-contact-card">
              <h2 className="summary-heading">SEND MESSAGE</h2>

              <form
                className="message-form"
                onSubmit={handleSubmit}
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Name *"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject *"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
                <textarea
                  name="message"
                  placeholder="Message *"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>

                {/* <button
                  type="submit"
                  className="mobile-send-btn"
                >
                  Send Message
                </button> */}
                <button
              className="mobile-send-btn"
              type="submit"
              disabled={sending} // disable while sending
            >
              {!sending && "Send"}       {/* show Send when not sending */}
              {sending && <span className="spinner"></span>}  {/* show loader when sending */}
            </button>      {sent && <p style={{ color: "green" }}>Message sent successfully!</p>}
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactMobile;
