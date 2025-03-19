import React, { useEffect, useState } from "react";
import Typewriter from "react-typewriter-effect";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa"; // Import icons
import "../styles/Hero.css";
import profileImg from "../assets/profile.jpg"; // Replace with your actual image path

const Hero = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFadeIn(true);
    }, 2000); // Delay before the second text appears
  }, []);

  return (
    <section className="hero">
      {/* Left Side - Text */}
      <div className="hero-content">
        <h1>
          <Typewriter
            text="Hi, I'm Koushik Satyavarapu"
            cursorColor="#fff"
            typeSpeed={50}
            deleteSpeed={30}
            delay={500}
          />
        </h1>
        <p className={`fade-text ${fadeIn ? "visible" : ""}`}>
          I'm a passionate developer who loves coding!
        </p>

        {/* Social Icons */}
        <div className="social-icons">
          <FaInstagram className="social-icon" />
          <FaLinkedin className="social-icon" />
          <FaFacebook className="social-icon" />
        </div>
      </div>

      {/* Right Side - Profile Image */}
      <div className="hero-image">
        <img src={profileImg} alt="Profile" className="glowing-profile" />
      </div>
    </section>
  );
};

export default Hero;
