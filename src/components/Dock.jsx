import { ThemeContext } from "../context/ThemeContext"
import { useContext } from "react"
import ThemeToggle from "../components/ThemeToggle"
import DockButton from "./DockButton";
import SvgIcon from "./SvgIcon";

import HomeLight from "../assets/icons/home.svg?react";
import HomeDark from "../assets/icons/home-dark.svg?react";

import AboutLight from "../assets/icons/user.svg?react";
import AboutDark from "../assets/icons/user-dark.svg?react";

import SkillsLight from "../assets/icons/skills.svg?react";
import SkillsDark from "../assets/icons/skills-dark.svg?react";

import ExperienceLight from "../assets/icons/experience.svg?react";
import ExperienceDark from "../assets/icons/experience-dark.svg?react";

import EducationLight from "../assets/icons/education.svg?react";
import EducationDark from "../assets/icons/education-dark.svg?react";

import ProjectsLight from "../assets/icons/projects.svg?react";
import ProjectsDark from "../assets/icons/projects-dark.svg?react";

import ContactLight from "../assets/icons/contact.svg?react";
import ContactDark from "../assets/icons/contact-dark.svg?react";



const Dock = ({ ...props }) => {
    const { theme, toggleTheme } = useContext(ThemeContext);
        const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    const icons = {
    home: theme === "dark" ? HomeDark : HomeLight,
    about: theme === "dark" ? AboutDark : AboutLight,
    skills: theme === "dark" ? SkillsDark : SkillsLight,
    experience: theme === "dark" ? ExperienceDark : ExperienceLight,
    education: theme === "dark" ? EducationDark : EducationLight,
    projects: theme === "dark" ? ProjectsDark : ProjectsLight,
    contact: theme === "dark" ? ContactDark : ContactLight,
  };

    return (
        <div className="dock" {...props} >
            <img
                src={theme === "dark" ? "logo.svg" : "logo-dark.svg"}
                height="24"
                width="24"
                alt="Logo"
                style={{
                    padding: "0.5rem",
                }}
            />
            <div className="dock-icons desktop-only">
                <DockButton data-tooltip-content="Home" onClick={() => scrollToSection("home")}>
                <SvgIcon icon={icons.home} />
                </DockButton>
                <DockButton data-tooltip-content="About" onClick={() => scrollToSection("about")}>
                <SvgIcon icon={icons.about} />
                </DockButton>
                <DockButton data-tooltip-content="Skills" onClick={() => scrollToSection("skills")}>
                <SvgIcon icon={icons.skills} />
                </DockButton>
                <DockButton data-tooltip-content="Experience" onClick={() => scrollToSection("experience")}>
                <SvgIcon icon={icons.experience} />
                </DockButton>
                <DockButton data-tooltip-content="Education" onClick={() => scrollToSection("education")}>
                <SvgIcon icon={icons.education} />
                </DockButton>
                <DockButton data-tooltip-content="Projects" onClick={() => scrollToSection("projects")}>
                <SvgIcon icon={icons.projects} />
                </DockButton>
                <DockButton data-tooltip-content="Contact" onClick={() => scrollToSection("contact")}>
                <SvgIcon icon={icons.contact} />
                </DockButton>
            </div>



            <DockButton data-tooltip-content="Theme" onClick={toggleTheme}>
                <ThemeToggle theme={theme} />
            </DockButton>
        </div>
    );
};

export default Dock;
