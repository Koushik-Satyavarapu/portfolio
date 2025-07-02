import '../styles/projects.css'
import ProjectCard, { Holder, Content, Tags, Tag, CardActions } from '../components/ProjectCard'

export default function Projects() {
  return (
    <div id="projects" className='project-section fade-in'>
      <h2 className="project-heading">Projects</h2>
      <Holder>
        {/* AgriConnect Project */}
        <ProjectCard>
          <img src='agriconnect.png' alt='AgriConnect' />
          <Content>
            <h3>AgriConnect – Smart Agriculture Support App</h3>
            <p>
              Developed a feature-rich app to assist farmers with crop insights, weather updates, and expert connections.
              Integrated real-time data like market price tracking and multilingual support. Designed a clean, responsive UI
              to ensure ease of use, especially for users with limited tech experience. Focused on accessibility and rural
              outreach through intuitive design and offline support possibilities.
            </p>
            <Tags>
              <Tag hashtag="JavaScript" />
              <Tag hashtag="API Integration" />
              <Tag hashtag="ResponsiveUI" />
              <Tag hashtag="Accessibility" />
            </Tags>
          </Content>
          <CardActions visit="#" source="#" />
        </ProjectCard>

        {/* Personal Portfolio Project */}
        <ProjectCard>
          <img src='portfolio.png' alt='Portfolio' />
          <Content>
            <h3>Personal Portfolio Website</h3>
            <p>
              Built a modern, responsive personal portfolio using Vite React and Tailwind CSS. Showcases skills, projects,
              and resume with smooth navigation and a clean layout. Included interactive UI elements and animations for better
              user engagement. Optimized for performance across all devices.
            </p>
            <Tags>
              <Tag hashtag="Vite" />
              <Tag hashtag="React" />
              <Tag hashtag="TailwindCSS" />
              <Tag hashtag="ResponsiveDesign" />
            </Tags>
          </Content>
          <CardActions visit="#" source="#" />
        </ProjectCard>

        {/* Basic NoteEase App */}
        <ProjectCard>
          <img src='noteease.png' alt='NoteEase' />
          <Content>
            <h3>NoteEase – Simple Note-Taking App</h3>
            <p>
              A lightweight, beginner-friendly note-taking app that allows users to create, edit, and delete notes in a
              clutter-free interface. Focused on simplicity, performance, and clean design. Great for practicing basic
              React concepts and state management.
            </p>
            <Tags>
              <Tag hashtag="React" />
              <Tag hashtag="JavaScript" />
              <Tag hashtag="CSS" />
            </Tags>
          </Content>
          <CardActions visit="#" source="#" />
        </ProjectCard>
      </Holder>
    </div>
  )
}
