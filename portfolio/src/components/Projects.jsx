import React from "react";
import "../styles/Projects.css";
import P1 from "../assets/P1.jpg"; // Replace with actual image
import P2 from "../assets/P2.jpg"; // Replace with actual image
import P3 from "../assets/P3.jpg"; // Replace with actual image

const Projects = () => {
  const projectData = [
    {
      id: 1,
      image: P1,
      title: "Project One",
      description: "This project showcases a dynamic portfolio with smooth animations and a modern UI.",
    },
    {
      id: 2,
      image: P2,
      title: "Project Two",
      description: "An advanced e-commerce website with interactive product pages and payment integration.",
    },
    {
      id: 3,
      image: P3,
      title: "Project Three",
      description: "A weather application that fetches real-time data and displays forecasts beautifully.",
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="project-container">
        {projectData.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} className="project-img" />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-info">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
