import React from "react";
import "../styles/Skills.css"; // Ensure correct path

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h2>My Skills</h2>
      <div className="skills-container">
        <i className="devicon-html5-plain-wordmark skill-icon"></i>
        <i className="devicon-css3-plain-wordmark skill-icon"></i>
        <i className="devicon-javascript-plain skill-icon"></i>
        <i className="devicon-react-original-wordmark skill-icon"></i>
        <i className="devicon-nodejs-plain-wordmark skill-icon"></i>
        <i className="devicon-express-original-wordmark skill-icon"></i>
        <i className="devicon-mongodb-plain-wordmark skill-icon"></i>
        <i className="devicon-python-plain-wordmark skill-icon"></i>
        <i className="devicon-java-plain-wordmark skill-icon"></i>
        <i className="devicon-cplusplus-plain skill-icon"></i>
        <i className="devicon-c-plain skill-icon"></i>
        <i className="devicon-git-plain-wordmark skill-icon"></i>
        <i className="devicon-github-original-wordmark skill-icon"></i>
      </div>
    </section>
  );
};

export default Skills;
