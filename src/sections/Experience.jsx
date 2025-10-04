import Freelancing from '../assets/freelancing.svg?react';
import Opensource from '../assets/opensource.svg?react';
import '../styles/experience.css';
import Timeline from '../components/Timeline';
import TimelineItem from '../components/TimelineItem';
import { TimeStamp } from '../components/TimelineItem';
import Infosys from '../assets/icons/infosys.svg?react';
import Aws from '../assets/icons/aws.svg?react';
import Gdgwow from '../assets/icons/gdgwow.svg?react';
import Dimohack from '../assets/icons/dimohack.svg?react';
import Sushack from '../assets/icons/sushacks.svg?react';
import Github from '../assets/icons/github.svg?react';
import Vinoai from '../assets/vinoai.avif'

export default function Experience() {
    return (
    <div id="experience" className='about-section fade-in'>
      <h2 className="about-heading">Experience</h2>
            <div className='experience'>
                <div className="illustration">
                    <Freelancing />
                </div>
                <div className='details'>
                    <h3>Internship</h3>
                    <p>As a student, I’m passionate about Artificial Intelligence and Machine Learning, and I’m currently doing an internship to deepen my skills in this field. I’m also highly interested in web development and enjoy building clean, user-friendly interfaces. I’m always eager to learn new technologies and explore how code can be used to solve real-world problems.</p>
                    <Timeline>
                        <TimelineItem icon={<Infosys />} color="#007CC3" to="https://infyspringboard.onwingspan.com/web/en/login#iss=https://infyspringboard.onwingspan.com/auth/realms/infyspringboard">
                            <h4>AI Intern, Infosys Springboard Virtual Internship 6.0</h4>
                            <TimeStamp stamp="August 2025 - Present" />
                            <p>
                                Working on “NewsPulse: Global News Trend Analyzer Using AI” project. Exploring AI tools and prompt engineering while gaining hands-on experience in applying machine learning for news trend analysis.
                            </p>
                            </TimelineItem>

                            <TimelineItem icon={<Aws />} color="#FF9900" to="https://aws.amazon.com/training/awsacademy/">
                            <h4>Virtual Intern, AWS AI/ML Internship</h4>
                            <TimeStamp stamp="April 2025 - June 2025" />
                            <p>
                                Completed a virtual internship focused on the basics of Artificial Intelligence and Machine Learning, understanding key concepts and tools in the AWS ecosystem.
                            </p>
                        </TimelineItem>
                    </Timeline>
                </div>
            </div>
            <div className='experience reverse'>
                <div className='details'>
                    <h3>Hackathon Participation</h3>
                    <p>
                        I have participated in a few college and community-level hackathons where I explored problem-solving, team collaboration, and creative thinking. These experiences helped me improve my technical skills, work with peers, and learn how to approach real-world challenges using technology.
                    </p>

                    <Timeline>
                        <TimelineItem icon={<Sushack />} color="#ff6b6b" to="https://2024.sushacks.com/">
                        <h4>SUS Hacks – Vignan’s Institute of Information Technology</h4>
                        <TimeStamp stamp="2024" />
                        <p>Secured 6th position by showcasing innovative problem-solving skills at this competitive hackathon.</p>
                        </TimelineItem>

                        <TimelineItem icon={<Gdgwow />} color="#1b73e8" to="https://wow.vizag.dev/">
                        <h4>GDSC WOW 24 – GITAM University, Vizag</h4>
                        <TimeStamp stamp="2024" />
                        <p>Participated in a collaborative hackathon focused on innovation and technical creativity.</p>
                        </TimelineItem>

                        <TimelineItem icon={<Dimohack />} color="#7e3af2" to="https://dimohackvitap.devfolio.co/">
                        <h4>DimoHack – VIT AP</h4>
                        <TimeStamp stamp="2024" />
                        <p>Competed in an online hackathon, contributing to impactful tech solutions and team-driven development.</p>
                        </TimelineItem>
                    </Timeline>
                </div>

                <div className="illustration">
                    <Opensource />
                </div>
            </div>
        </div>
    )
}