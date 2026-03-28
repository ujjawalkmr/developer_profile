import React, { useEffect, useRef, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";
import emailjs from "@emailjs/browser";

import "../styles/Contact.css";

const Contact = () => {
  const contactRef = useRef(null);
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false); // ✅ loader state
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/assets/UjjawalKumar@.pdf"; // file path
    link.download = "Ujjawal_CV.pdf"; // file name after download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    const templateParams = {
      name: formData.name,
      email: formData.email,       // This will be used as Reply-To
      title: formData.subject,
      message: formData.message,
      // time: new Date().toLocaleString(),
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, // replace with your EmailJS Service ID
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,  // replace with your EmailJS Template ID
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY   // replace with your EmailJS Public Key
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
        }
      ).finally(() => setSending(false));
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShow(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="contact" ref={contactRef}>
      <div className={`contact-title ${show ? "animate-top" : ""}`}>
        <h2>GET IN TOUCH & COLLABORATE</h2>
        <div className="contact-header-line"></div>
      </div>
      {/* <h2 className={`contact-title ${show ? "animate-top" : ""}`}>
        GET IN TOUCH & COLLABORATE
      </h2> */}

      <div className="contact-container">

        {/* LEFT CARD */}
        <div className={`contact-left ${show ? "animate-left" : ""}`}>
          <h3>PROFESSIONAL SUMMARY</h3>
          <p>
            I build scalable, secure and high-performance applications using modern technologies.
          </p>

          <button className="download-btn" onClick={downloadCV}>⬇ Download CV</button>

          <hr />

          <div className="card-grid">

            {/* LEFT SIDE */}
            <div className="left-info">
              <div>
                <h4>Email</h4>
                <p>
                  <a href="mailto:ujjawalkumar9211@gmail.com">
                    ujjawalkumar9211@gmail.com
                  </a>
                </p>      </div>
              <div>
                <h4>Phone</h4>
                <p>7294934350</p>
              </div>
              <div>
                <h4>LinkedIn</h4>
                <p>
                  <a href="https://www.linkedin.com/in/ujjawal-kumar-b49277223/r" target="_blank" rel="noopener noreferrer">
                    /ujjawal-kumar-b49277223/
                  </a>
                </p>
              </div>

              <div>
                <h4>Tech Stack</h4>
                <p>React • Node • AWS • Flutter • Java • SQL more...</p>
              </div>
            </div>

            {/* RIGHT SIDE (GitHub) */}
            <div className="github-box">
              <h4>GitHub Contributions</h4>
              <div className="calendar-wrapper">
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

        {/* RIGHT CARD */}
        <div className={`contact-right ${show ? "animate-right" : ""}`}>
          <form onSubmit={handleSubmit}>
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
            <button
              className="send-btn"
              type="submit"
              disabled={sending} // disable while sending
            >
              {!sending && "Send"}       {/* show Send when not sending */}
              {sending && <span className="spinner"></span>}  {/* show loader when sending */}
            </button>      {sent && <p style={{ color: "green" }}>Message sent successfully!</p>}
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;