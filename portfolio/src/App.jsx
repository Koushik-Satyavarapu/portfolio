import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import "./styles/style.css";

const App = () => {
  useEffect(() => {
    const handleNavClick = (event) => {
      event.preventDefault();
      const targetId = event.target.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70, // Adjusting offset for navbar height
          behavior: "smooth",
        });
      }
    };

    document.querySelectorAll(".nav-links a").forEach((anchor) => {
      anchor.addEventListener("click", handleNavClick);
    });

    return () => {
      document.querySelectorAll(".nav-links a").forEach((anchor) => {
        anchor.removeEventListener("click", handleNavClick);
      });
    };
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
};

export default App;
