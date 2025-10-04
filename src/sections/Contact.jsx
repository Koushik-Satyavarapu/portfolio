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
                Have questions? Ping me with a <a href="https://www.linkedin.com/in/koushik-satyavarapu-1063332a6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">linkedin</a> DM or email at <a href='koushik.satyavarapu@gmail.com'>koushik.satyavarapu@gmail.com</a>.
            </p>
        </div >
    )
}
