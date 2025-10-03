import Timeline from '../components/Timeline';
import TimelineItem from '../components/TimelineItem';
import { TimeStamp } from '../components/TimelineItem';
import Gvp from '../assets/icons/gvp.svg?react';
import Learning from '../assets/learning.svg?react';
import '../styles/education.css';

export default function Education() {
    return (
        <div id="education" className='education-section fade-in'>
            <h2 className="education-heading">Education</h2>
            <div className='education'>
                <div className="illustration">
                    <Learning />
                </div>
                <div className='details'>
                    <Timeline>
                        <TimelineItem icon={<Gvp />} bgColor="#444444" to="https://gvpce.ac.in/" className="fade-in-timeline">
                            <h4 className="college-name">Gayatri Vidya Parishad College of Engineering</h4>
                            <p className="branch-name">
                                B.Tech – Information Technology
                            </p>
                            <TimeStamp stamp="2023 - 2027" />
                            <p>Current CGPA: 9.12</p>
                        </TimelineItem>



                    </Timeline>
                </div>
            </div>
        </div>
    )
}
