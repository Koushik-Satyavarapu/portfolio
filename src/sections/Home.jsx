import IconCloud from '../components/IconCloud'
import { ThemeContext } from "../context/ThemeContext"
import { useEffect, useState, useContext } from "react"
import Particles, { initParticlesEngine } from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim";
import { particleNasaTheme } from '../utils/utils'
import Sparkles from '../components/Sparkles'
import '../styles/home.css'
import Quby from '../assets/koushik.jpg'
import SpaceBg from '../components/SpaceBg';
import { Typewriter } from 'react-simple-typewriter';



export default function Home() {
    const { theme, _ } = useContext(ThemeContext);
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    return (
        <>
            <div id="home" className="hero-container">
                <div className='hero-1'>
                    <IconCloud />
                </div>
                <div className='hero-2'>
                    <div>
                        <div>
                            <div className='koushik-img-cont'>
                                <img src={Quby} alt="Koushik" className='koushik-img' />
                            </div>
                            <div className="intro-text">Hi, I'm </div>
                        </div>
                        <div>
                            <Sparkles scale={1.5} color="#ff0">
                                <h1><span className='shine-txt'>KOUSHIK</span> </h1>
                                <h1><span className='highlight-txt'>SATYAVARPU</span> <span className="wave">👋</span> </h1>
                            </Sparkles>
                            <div className="typing-text">
                                <span
                                    style={{
                                    color: theme === "dark" ? "#ffffff" : "#000000",
                                    transition: "color 0.3s ease",
                                    }}
                                >
                                    <Typewriter
                                    words={[
                                        'Creative Frontend Developer',
                                        'Passionate AI/ML Enthusiast',
                                        'Logical Problem Solver (DSA-Focused)'
                                    ]}
                                    loop={true}
                                    cursor
                                    cursorStyle="|"
                                    typeSpeed={80}
                                    deleteSpeed={40}
                                    delaySpeed={1500}
                                    />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="space-container" className='space-container'>
                    <SpaceBg />
                    {init && (
                        <Particles
                            id="tsparticles"
                            options={particleNasaTheme(theme)}
                        />
                    )}
                </div>

            </div>
        </>
    )
}
