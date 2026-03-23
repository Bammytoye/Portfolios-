import React, { useState } from 'react';
import { SKILLS, TECH_BADGES } from '../data';

const COLORS: Record<string, string> = {
    Frontend: '#00ffe0',
    Backend:  '#7c3aed',
    Tools:    '#f59e0b',
    Other:    '#ec4899',
};

const Skills: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>('Frontend');
    const color = COLORS[activeTab] ?? '#00ffe0';

    return (
        <section id="skills" style={{ padding: '8rem 0', position: 'relative' }}>
            {/* Background orb */}
            <div
                style={{
                    position: 'absolute', top: 0, right: 0,
                    width: '500px', height: '500px',
                    background: 'radial-gradient(circle, rgba(124,58,237,.07) 0%, transparent 70%)',
                    pointerEvents: 'none',
                }}
            />

            <div className="max-w-7xl mx-auto px-6 lg:px-12">

                {/* Header */}
                <div className="reveal text-center mb-16">
                    <div className="tag mb-4" style={{ display: 'inline-block' }}>Expertise</div>
                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 800 }}>
                        Tech <span className="gradient-text">Stack</span>
                    </h2>
                    <p style={{ color: 'var(--muted)', maxWidth: '500px', margin: '1rem auto 0' }}>
                        A set of tools and technologies I use to build exceptional products.
                    </p>
                </div>

                {/* Tab switcher */}
                <div className="reveal flex justify-center mb-12">
                    <div
                        style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'center',
                            gap: '4px',
                            background: 'rgba(255,255,255,.03)',
                            border: '1px solid var(--border)',
                            borderRadius: '4px',
                            padding: '4px',
                        }}
                    >
                        {Object.keys(SKILLS).map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                style={{
                                    background: activeTab === tab ? COLORS[tab] : 'transparent',
                                    border: 'none',
                                    color: activeTab === tab ? 'var(--bg)' : 'var(--muted)',
                                    fontFamily: "'Space Mono', monospace",
                                    fontSize: '0.8rem',
                                    letterSpacing: '0.08em',
                                    padding: '0.6rem 1.8rem',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s',
                                    borderRadius: '2px',
                                }}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Skill chips */}
                <div className="max-w-3xl mx-auto reveal flex flex-wrap gap-3 justify-center">
                    {SKILLS[activeTab].map((skill) => (
                        <span
                            key={skill.name}
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                padding: '0.45rem 1.1rem',
                                borderRadius: '999px',
                                fontFamily: "'Space Mono', monospace",
                                fontSize: '0.78rem',
                                fontWeight: 500,
                                border: `1px solid ${color}40`,
                                background: `${color}0d`,
                                color: color,
                                cursor: 'default',
                                transition: 'all 0.25s ease',
                                letterSpacing: '0.03em',
                            }}
                            onMouseEnter={e => {
                                const el = e.currentTarget;
                                el.style.background = `${color}1f`;
                                el.style.borderColor = `${color}80`;
                                el.style.boxShadow = `0 0 14px ${color}33`;
                                el.style.transform = 'translateY(-2px)';
                            }}
                            onMouseLeave={e => {
                                const el = e.currentTarget;
                                el.style.background = `${color}0d`;
                                el.style.borderColor = `${color}40`;
                                el.style.boxShadow = 'none';
                                el.style.transform = 'translateY(0)';
                            }}
                        >
                            {skill.name}
                        </span>
                    ))}
                </div>

                {/* Tech badges */}
                <div className="reveal mt-16 flex flex-wrap justify-center gap-3">
                    {TECH_BADGES.map((t) => (
                        <span
                            key={t}
                            style={{
                                fontFamily: "'Space Mono', monospace",
                                fontSize: '0.7rem',
                                padding: '0.4rem 1rem',
                                border: '1px solid var(--border)',
                                borderRadius: '2px',
                                color: 'var(--muted)',
                                transition: 'all 0.3s',
                                cursor: 'default',
                            }}
                            onMouseEnter={e => {
                                const el = e.currentTarget;
                                el.style.borderColor = 'var(--accent)';
                                el.style.color = 'var(--accent)';
                                el.style.boxShadow = '0 0 12px rgba(0,255,224,.2)';
                            }}
                            onMouseLeave={e => {
                                const el = e.currentTarget;
                                el.style.borderColor = 'var(--border)';
                                el.style.color = 'var(--muted)';
                                el.style.boxShadow = 'none';
                            }}
                        >
                            {t}
                        </span>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Skills;