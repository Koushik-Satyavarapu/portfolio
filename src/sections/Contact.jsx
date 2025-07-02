import Sparkles from '../components/Sparkles'
import '../styles/contact.css'

export default function Contact() {
    return (
        <div id="contact" className='contact-section fade-in'>
            <h2 className="contact-heading">Contact</h2>
            <div className='heading-center'>
                <Sparkles>
                    <h1>Let's Connect!</h1>
                </Sparkles>
            </div>
            <p className='contact-text'>
                I'm always happy to connect with new people. Feel free to reach out on <a href="https://www.linkedin.com/in/koushik-satyavarapu-1063332a6/" target="_blank" rel="noopener noreferrer">LinkedIn</a> or drop an email at <a href="mailto:koushik.satyavarapu@gmail.com">koushik.satyavarapu@gmail.com</a>.
            </p>
        </div>
    )
}
