import '../styles/skills.css'; // ✅ Add this line here

export default function Skills() {
    const skills = [
        { name: 'HTML', icon: 'devicon-html5-plain-wordmark' },
        { name: 'CSS', icon: 'devicon-css3-plain-wordmark' },
        { name: 'JavaScript', icon: 'devicon-javascript-plain' },
        { name: 'React', icon: 'devicon-react-original-wordmark' },
        { name: 'Node.js', icon: 'devicon-nodejs-plain-wordmark' },
        { name: 'Express', icon: 'devicon-express-original-wordmark' },
        { name: 'MongoDB', icon: 'devicon-mongodb-plain-wordmark' },
        { name: 'Python', icon: 'devicon-python-plain-wordmark' },
        { name: 'Java', icon: 'devicon-java-plain-wordmark' },
        { name: 'C++', icon: 'devicon-cplusplus-plain' },
        { name: 'C', icon: 'devicon-c-plain' },
        { name: 'Git', icon: 'devicon-git-plain-wordmark' },
        { name: 'GitHub', icon: 'devicon-github-original-wordmark' },
        { name: 'VS Code', icon: 'devicon-vscode-plain' }
        // { name: 'Postman', icon: 'devicon-postman-plain' },
        // { name: 'Heroku', icon: 'devicon-heroku-original-wordmark' },
        // { name: 'Netlify', icon: 'devicon-netlify-plain-wordmark' },
        // { name: 'Vercel', icon: 'devicon-vercel-plain' },
        // { name: 'Figma', icon: 'devicon-figma-plain' },
        // { name: 'Selenium', icon: 'devicon-selenium-original' },
        // { name: 'Puppeteer', icon: 'devicon-puppeteer-plain' },
        // { name: 'OpenAI', icon: 'devicon-openai-plain' },
        // { name: 'Gemini', icon: 'devicon-google-original' },
        // { name: 'Hugging Face', icon: 'devicon-huggingface-plain' },
    ];

    return (
    <div id="skills" className='skills-section fade-in'>
      <h2 className="skills-heading">SKILLS</h2>
      <div className='skills-grid'>
        {skills.map((skill, index) => (
  <div key={index} className='skill-item' style={{ "--i": index }}>
    <i className={`${skill.icon} skill-icon`}></i>
    <span className='skill-name'>{skill.name}</span>
  </div>
))}

      </div>
    </div>
  );
}
