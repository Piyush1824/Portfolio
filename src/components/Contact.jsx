// src/components/Contact.jsx
import React from "react";
import "./Contact.css";

// ✅ Import each image
// import callIcon from "../assets/call me.png";
import linkedinIcon from "../assets/linkedin.png";
import mailIcon from "../assets/mail.png";

const Contact = () => {
  return (
    <div className="contact-container" id="contact">
      
      <h1 className="intro">Contact Me</h1>
      <p className="intro subtitle">Feel free to contact me.</p>

      <div className="contact-methods">
        {/* Contact Number
        <div className="contact-card">
          <img src={callIcon} alt="Call Icon" className="contact-icon" />
          <h2 className="contact-title">Contact No.</h2>
          <button className="get">
            <a href="tel:9146372030">Call Me</a>
          </button>
        </div> */}

        {/* LinkedIn */}
        <div className="contact-card">
          <img src={linkedinIcon} alt="LinkedIn Icon" className="contact-icon" />
          <h2 className="contact-title">LinkedIn</h2>
          <button className="get">
            <a
              href="https://www.linkedin.com/in/piyush-shinde-17ab44261"
              target="_blank"
              rel="noopener noreferrer"
            >
              Connect with Me
            </a>
          </button>
        </div>

        {/* Email */}
        <div className="contact-card">
          <img src={mailIcon} alt="Mail Icon" className="contact-icon" />
          <h2 className="contact-title">E-mail</h2>
          <button className="get">
            <a href="mailto:piyushshinde42161@gmail.com">Mail Me</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
