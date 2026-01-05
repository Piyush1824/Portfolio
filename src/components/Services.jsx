import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="services-header">
        <h2 className="services-title">
          <span className="highlight">My Services</span>
        </h2>
        <p className="services-subtitle">
          I provide modern and reliable solutions with a focus on clean design,
          performance, and seamless user experience.
        </p>
      </div>

      <div className="services-list">
        <div className="service-card">
          <div className="service-icon">💻</div>
          <h3>Web Development</h3>
          <p>
            Developing fast, responsive, and scalable web applications using
            React.js, Node.js, and MongoDB to deliver high-quality user
            experiences.
          </p>
        </div>

        <div className="service-card">
          <div className="service-icon">🧠</div>
          <h3>AI / ML Solutions</h3>
          <p>
            Building intelligent systems that can predict, automate, and analyze
            using machine learning, deep learning, and data-driven approaches.
          </p>
        </div>

        <div className="service-card">
          <div className="service-icon">⚙️</div>
          <h3>Backend Systems</h3>
          <p>
            Creating secure, scalable APIs and backend services with Express.js,
            authentication systems, and database management.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
