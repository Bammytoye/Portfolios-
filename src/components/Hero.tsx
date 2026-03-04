import React from 'react';
import Particles from '../components/Particles';
import Cube3D from '../components/Cube3D';
import TypeWriter from '../components/TypeWriter';
import Counter from '../components/Counter';
import { STATS } from '../data';

const TYPEWRITER_WORDS = ['Beautiful UIs', 'Scalable APIs', 'Full-Stack Apps', '3D Experiences'];

const Hero: React.FC = () => {
    const scrollTo = (id: string): void => {
        document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section
            id="about"
            className="grid-bg"
            style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '80px' }}
        >
            <Particles />

            {/* Glow orbs */}
            <div
                style={{
                    position: 'absolute', top: '20%', left: '10%',
                    width: '400px', height: '400px',
                    background: 'radial-gradient(circle, rgba(124,58,237,.15) 0%, transparent 70%)',
                    borderRadius: '50%', pointerEvents: 'none',
                }}
            />
            <div
                style={{
                    position: 'absolute', bottom: '20%', right: '5%',
                    width: '300px', height: '300px',
                    background: 'radial-gradient(circle, rgba(0,255,224,.1) 0%, transparent 70%)',
                    borderRadius: '50%', pointerEvents: 'none',
                }}
            />

            {/* Scan line */}
            <div
                style={{
                    position: 'absolute', left: 0, right: 0, height: '2px',
                    background: 'linear-gradient(90deg, transparent, rgba(0,255,224,.4), transparent)',
                    animation: 'scan 8s linear infinite',
                    pointerEvents: 'none', zIndex: 1,
                }}
            />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-16">

                    {/* Left – text */}
                    <div className="lg:w-7/12" style={{ animation: 'slideUp .8s ease forwards' }}>
                        <div className="tag my-10">Available for work</div>

                        <h1
                            style={{
                                fontSize: 'clamp(60px, 6vw, 5rem)',
                                fontWeight: 800,
                                lineHeight: 1.05,
                                marginBottom: '1rem',
                            }}
                        >
                            I Build <br />
                            <TypeWriter words={TYPEWRITER_WORDS} />
                            <br />
                            <span className="gradient-text">For the Web</span>
                        </h1>

                        <p
                            style={{
                                color: 'var(--muted)',
                                lineHeight: 1.8,
                                maxWidth: '520px',
                                marginBottom: '2.5rem',
                                fontSize: '1.05rem',
                            }}
                        >
                            Full-stack developer crafting performant, visually stunning web experiences.
                            From pixel-perfect front-ends to robust backend architectures.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-10">
                            <button className="btn-primary" onClick={() => scrollTo('Projects')}>
                                View Projects
                            </button>
                            <button className="btn-secondary" onClick={() => scrollTo('Contact')}>
                                Get In Touch
                            </button>
                        </div>

                        {/* Stats */}
                        <div className="flex flex-wrap gap-8">
                            {STATS.map((stat) => (
                                <div key={stat.label}>
                                    <div
                                        style={{
                                            fontSize: '2rem',
                                            fontWeight: 800,
                                            color: 'var(--accent)',
                                            fontFamily: "'Space Mono', monospace",
                                        }}
                                    >
                                        <Counter end={stat.n} suffix={stat.suf} />
                                    </div>
                                    
                                    <div
                                        style={{
                                            fontSize: '0.75rem',
                                            color: 'var(--muted)',
                                            letterSpacing: '0.08em',
                                            textTransform: 'uppercase',
                                        }}
                                    >
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right – 3D visual */}
                    <div
                        className="lg:w-5/12 flex flex-col items-center gap-8"
                        style={{ animation: 'slideUp 1s ease .2s both' }}
                    >
                        {/* Avatar with orbit rings */}
                        <div
                            style={{
                                position: 'relative',
                                width: '280px',
                                height: '280px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            {[200, 240, 260].map((size, i) => (
                                <div
                                    key={i}
                                    className="orbit-ring"
                                    style={{
                                        width: size, height: size,
                                        top: '50%', left: '50%',
                                        marginTop: -size / 2, marginLeft: -size / 2,
                                        animationDuration: `${12 + i * 4}s`,
                                        opacity: 0.4 - i * 0.1,
                                    }}
                                />
                            ))}

                            <div
                                style={{
                                    width: '160px', height: '160px', borderRadius: '50%',
                                    background: 'linear-gradient(135deg, var(--accent2) 0%, var(--accent) 100%)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    fontSize: '4rem',
                                    animation: 'pulseGlow 3s ease infinite',
                                    boxShadow: '0 0 60px rgba(0,255,224,.3)',
                                }}
                            >
                                👨‍💻
                            </div>
                        </div>

                        <Cube3D />
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div
                style={{
                    position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)',
                    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem',
                    color: 'var(--muted)',
                    fontFamily: "'Space Mono', monospace", fontSize: '0.65rem', letterSpacing: '0.1em',
                    animation: 'float 2s ease infinite',
                }}
            >
                <span>SCROLL</span>
                <div
                    style={{
                        width: '1px', height: '40px',
                        background: 'linear-gradient(to bottom, var(--accent), transparent)',
                    }}
                />
            </div>
        </section>
    );
};

export default Hero;