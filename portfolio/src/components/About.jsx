import React from "react";
import "../styles/About.css";
import aboutImg from "../assets/about.jpg"; // Ensure this path is correct

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* Left: Image */}
        <div className="about-image">
          <img src={aboutImg} alt="Profile" />
        </div>
        
        {/* Right: Text */}
        <div className="about-content">
          <h2>About Me</h2>
          <p>
            I am a passionate coder who loves to solve real-world problems through programming. 
            I have experience in multiple languages, including C, C++, Java, Python, HTML, CSS, and JavaScript. 
            <br /><br />
            I enjoy building applications, learning new technologies, and constantly improving my skills. 
            Coding is not just my profession, it's my passion! 
            I believe in writing clean and efficient code that makes a difference.
            <br /><br />
            Apart from coding, I love exploring new tech trends, contributing to open-source projects, and helping others learn programming.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
