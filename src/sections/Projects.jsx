import "../styles/projects.css";
import ProjectCard, {
  Holder,
  Content,
  Tags,
  Tag,
  CardActions,
} from "../components/ProjectCard";

export default function Projects() {
  return (
    <div id="projects" className="project-section fade-in">
      <h2 className="project-heading">Projects</h2>
      <Holder>
        <ProjectCard>
          <img src="portfolio.png" alt="Personal Portfolio" />
          <Content>
            <h3>Personal Portfolio</h3>
            <p>
              A modern, responsive portfolio built with Vite React and Tailwind
              CSS, featuring smooth navigation and animated UI. Showcases
              skills, projects, and resume, optimized for consistent performance
              across all devices.
            </p>
            <Tags>
              <Tag hashtag="Vite" />
              <Tag hashtag="React" />
              <Tag hashtag="Tailwind CSS" />
            </Tags>
          </Content>
          <CardActions
            visit=""
            source="https://github.com/Koushik-Satyavarapu/portfolio.git"
          />
        </ProjectCard>
        <ProjectCard>
          <img src="agriconnect.png" alt="AgriConnect" />
          <Content>
            <h3>AgriConnect</h3>
            <p>
              A feature-rich smart agriculture app assisting farmers with crop
              insights, weather updates, and expert connections. Integrates
              real-time market price tracking, multilingual support, and a
              responsive, accessible UI with offline capabilities.
            </p>
            <Tags>
              <Tag hashtag="JavaScript" />
              <Tag hashtag="API Integration" />
              <Tag hashtag="Responsive Design" />
            </Tags>
          </Content>
          <CardActions visit="" source="" />
        </ProjectCard>
        <ProjectCard>
          <img src="newspulse.png" alt="NewsPulse" />
          <Content>
            <h3>NewsPulse</h3>
            <p>
              A full-stack personalized news dashboard with user authentication,
              sentiment analysis, and NER. Integrates GNews API, Hugging Face
              Transformers, and SpaCy. Features responsive UI with interactive
              filters, Chart.js visualizations, and Google OAuth for
              accessibility.
            </p>
            <Tags>
              <Tag hashtag="Flask" />
              <Tag hashtag="MongoDB" />
              <Tag hashtag="GNews API" />
              <Tag hashtag="Chart.js" />
            </Tags>
          </Content>
          <CardActions
            visit=""
            source="https://github.com/Koushik-Satyavarapu/NewsPulse.git"
          />
        </ProjectCard>
        <ProjectCard>
          <img src="lab_analyzer.png" alt="Lab Test Analyzer" />
          <Content>
            <h3>Lab Test Analyzer</h3>
            <p>
              A Streamlit web app for secure user login and dashboard-based
              upload of lab test images or PDFs. Extracts text using Tesseract
              OCR and analyzes results via Groq's LLM API for simple summaries
              and health insights. Built for easy local deployment with virtual
              environment setup.
            </p>
            <Tags>
              <Tag hashtag="Streamlit" />
              <Tag hashtag="Tesseract OCR" />
              <Tag hashtag="Groq API" />
              <Tag hashtag="Python" />
            </Tags>
          </Content>
          <CardActions
            visit=""
            source="https://github.com/Koushik-Satyavarapu/LabTestAnalyzer.git"
          />
        </ProjectCard>
        <ProjectCard>
          <Content>
            <h3>Crossword Game</h3>
            <p>
              A multiplayer crossword puzzle game supporting real-time
              interactions between multiple users. Utilizes multithreading for
              responsive player inputs, mutex mechanisms for effective
              turn-taking, and modular code design for easy maintenance and
              scalability.
            </p>
            <Tags>
              <Tag hashtag="C++" />
              <Tag hashtag="OOP" />
              <Tag hashtag="Operating Systems" />
              <Tag hashtag="Multithreading" />
            </Tags>
          </Content>
          <CardActions
            visit=""
            source="https://github.com/Koushik-Satyavarapu/MultiWord_Play.git"
          />
        </ProjectCard>
        <ProjectCard>
          <Content>
            <h3>Library Management System</h3>
            <p>
              A console-based application using Linked List data structures for
              efficient book record management. Features complete CRUD
              functionalities, quick search by unique book number, and clean,
              structured code for optimal user interaction.
            </p>
            <Tags>
              <Tag hashtag="C++" />
              <Tag hashtag="OOP" />
              <Tag hashtag="Data Structures" />
            </Tags>
          </Content>
          <CardActions
            visit=""
            source="https://github.com/Koushik-Satyavarapu/Library-Management-System.git"
          />
        </ProjectCard>
      </Holder>
    </div>
  );
}
