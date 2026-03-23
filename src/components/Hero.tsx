import React from 'react';
import Particles from '../components/Particles';
import Cube3D from '../components/Cube3D';
import TypeWriter from '../components/TypeWriter';
import Counter from '../components/Counter';
import { STATS } from '../data';

const TYPEWRITER_WORDS = ['Beautiful UIs', 'Robust Backends'];

const Hero: React.FC = () => {
    const scrollTo = (id: string): void => {
        document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleDownloadCV = (): void => {
        window.open('/BAMIGBALA EZEKIEL ADETOYESE.pdf', '_blank', 'noopener,noreferrer');
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
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
                            style={{
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

                            {/* ✅ Download CV Button */}
                            <button
                                onClick={handleDownloadCV}
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    padding: '0.75rem 1.5rem',
                                    borderRadius: '8px',
                                    border: '1px solid rgba(0,255,224,0.35)',
                                    background: 'rgba(0,255,224,0.06)',
                                    color: 'var(--accent)',
                                    fontWeight: 600,
                                    fontSize: '0.95rem',
                                    cursor: 'pointer',
                                    transition: 'all 0.25s ease',
                                    fontFamily: 'inherit',
                                    letterSpacing: '0.02em',
                                    backdropFilter: 'blur(4px)',
                                }}
                                onMouseEnter={e => {
                                    const el = e.currentTarget;
                                    el.style.background = 'rgba(0,255,224,0.14)';
                                    el.style.borderColor = 'rgba(0,255,224,0.7)';
                                    el.style.boxShadow = '0 0 18px rgba(0,255,224,0.2)';
                                    el.style.transform = 'translateY(-1px)';
                                }}
                                onMouseLeave={e => {
                                    const el = e.currentTarget;
                                    el.style.background = 'rgba(0,255,224,0.06)';
                                    el.style.borderColor = 'rgba(0,255,224,0.35)';
                                    el.style.boxShadow = 'none';
                                    el.style.transform = 'translateY(0)';
                                }}
                            >
                                {/* Download icon */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                    <polyline points="7 10 12 15 17 10" />
                                    <line x1="12" y1="15" x2="12" y2="3" />
                                </svg>
                                Download CV
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
                        className="lg:w-5/12 hidden lg:flex flex-col items-center gap-8"
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