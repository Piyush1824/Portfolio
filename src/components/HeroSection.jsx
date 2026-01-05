import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero" id="home">
      

      <div className="hero-content">
        <h1 className="hero-title">I'm Piyush Shinde</h1>
        <p className="hero-subtitle">
          A Passionate <span className="highlight">AI & Web Developer</span> who
          loves building modern web experiences and intelligent systems.
        </p>

        {/* <div className="hero-buttons">
          <a href="#projects" className="btn primary-btn">View My Work</a>
          <a href="#contact" className="btn secondary-btn">Contact Me</a>
        </div> */}
      </div>
      {/* 
      <div className="hero-image">
        <img
          src={profileImage}
          alt="developer"
        />
      </div> */}
    </section>
  );
};

export default HeroSection;
