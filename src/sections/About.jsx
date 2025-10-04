import { Button1 } from '../components/Buttons';
import Pdf from "../assets/icons/pdf.svg?react";
import SvgIcon from '../components/SvgIcon';

export default function About() {
  return (
    <section id="about" className='about-section fade-in'>
      <h2 className="about-heading">About</h2>

      <p className="about-bio">
        Koushik is an IT undergraduate at <span className="highlight">Gayatri Vidya Parishad College of Engineering</span>, passionate about building visually rich and technically strong digital interfaces.
      </p>

      <p className="about-text">
        I’m a <span className="highlight">third year student</span> with a strong interest in <span className="highlight">AI/ML, frontend development</span>, and <span className="highlight">data structures</span>. I've built multiple projects that focus on clean UI and smart backend logic. I enjoy experimenting with new technologies and contributing to collaborative work that solves real-world problems.
      </p>

      <p className="about-tagline">Let’s build something great! ✨</p>

      <div className="resume-button-wrapper">
        <a href="https://drive.google.com/file/d/13nKUqM_yTtteSRscm9Dhj" target='_blank' rel="noopener noreferrer">
          <Button1>
            <SvgIcon icon={Pdf} />
            Resume
          </Button1>
        </a>
      </div>
    </section>
  );
}
