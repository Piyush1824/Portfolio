// src/components/Projects.jsx
import React from "react";
import "./Projects.css";

const Projects = () => {
  const projectData = [
    {
      title: "DonateUS: Donation Platform",
      description:
        "MERN stack web app that connects donors and organizations for donating clothes, books, and essentials.",
      tech: "MongoDB, Express, React, Node.js",
      link: "#",
    },
    {
      title: "OsteoCheck: Bone Fracture Detection",
      description:
        "AI-powered medical app using CNN and ResNet models for analyzing radiology images and detecting fractures.",
      tech: "React, TensorFlow, CNN, ResNet",
      link: "#",
    },
    {
      title: "Face Recognition App",
      description:
        "A system that identifies and verifies individuals using facial features for security and ensuring their presence.",
      tech: "OpenCV, Python, Machine Learning",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2 className="projects-title">My Projects</h2>

      <div className="projects-container">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-content">
              <h3 className="project-name">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <p className="project-tech">{project.tech}</p>
              <a href={project.link} className="project-btn" target="_blank" rel="noreferrer">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
