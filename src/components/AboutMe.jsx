import React from "react";
import "./AboutMe.css";
import profile  from "../assets/profile.png"

const AboutMe = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-image">
          <img
            src={ profile }
            alt="about me"
          />
        </div>

        <div className="about-content">
          <h2 className="about-title">About Me</h2>
          <p className="about-text">
            I'm <span className="highlight">Piyush Shinde</span>, a <span className="highlight">Web Developer</span> with a degree in 
            <span className="highlight"> Artificial Intelligence & Machine Learning</span>.  
            I’m passionate about developing intelligent systems and modern web applications that
            make real-world impact. 
          </p>

          <p className="about-text">
            I enjoy combining creativity with logic — whether it’s building user-friendly interfaces,
            training ML models, or learning new technologies. I believe in continuous learning and
            turning ideas into practical solutions.
          </p>

          <div className="about-buttons">
            
            <a href="#contact" className="btn secondary-btn">Get in Touch</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
