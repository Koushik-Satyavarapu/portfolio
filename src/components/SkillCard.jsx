export default function SkillCard({ heading, skills, hcolor }) {
    return (
        <div className='skill-card'>
            <h3 style={{ color: hcolor }}>{heading}</h3>
            <div className='skills-container'>
                {skills.map((skill, index) => (
                    <div className='skill-item' key={index}>
                        <i className={`${skill.icon} skill-icon`}></i>
                        <span>{skill.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
