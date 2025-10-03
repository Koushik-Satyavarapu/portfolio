import Sparkles from '../components/Sparkles'
import '../styles/contact.css'

export default function Contact() {
    return (
        <div id="contact" className='contact-section fade-in'>
            <h2 className="contact-heading">Contact</h2>
            <div className='heading-center'>
                <Sparkles>
                    <h1>Get In Touch</h1>
                </Sparkles>
            </div>
            <p className='contact-text'>
                Have questions? Ping me with a <a href="https://www.linkedin.com/in/koushik-satyavarapu/">linkedin</a> DM or email at <a href='kouhsik.satyavarapu@gmail.com'>koushik.satyavarapu@gmail.com</a>.
            </p>
        </div >
    )
}
