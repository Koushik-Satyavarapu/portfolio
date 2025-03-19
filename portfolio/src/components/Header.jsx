import React from "react";
import "../styles.css";

const Header = () => {
  return (
    <header className="header">
      <h1 className="title">Koushik Satyavarapu</h1>
      <nav>
        <a href="#about" className="nav-link">About</a>
        <a href="#projects" className="nav-link">Projects</a>
        <a href="#contact" className="nav-link">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
