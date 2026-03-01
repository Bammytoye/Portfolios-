import React, { useState } from 'react';
import SkillBar from '../components/SkillBar';
import { SKILLS, TECH_BADGES } from '../data';

const Skills: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>('Frontend');

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
                    <p
                        style={{
                            color: 'var(--muted)', marginTop: '1rem',
                            maxWidth: '500px', margin: '1rem auto 0',
                        }}
                    >
                        A curated set of tools and technologies I use to build exceptional products.
                    </p>
                </div>

                {/* Tab switcher */}
                <div className="reveal flex justify-center mb-12">
                    <div
                        style={{
                            display: 'flex',
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
                                    background: activeTab === tab ? 'var(--accent)' : 'transparent',
                                    border: 'none',
                                    color: activeTab === tab ? 'var(--bg)' : 'var(--muted)',
                                    fontFamily: "'Space Mono', monospace",
                                    fontSize: '0.8rem',
                                    letterSpacing: '0.08em',
                                    padding: '0.6rem 1.8rem',
                                    cursor: 'none',
                                    transition: 'all 0.3s',
                                    borderRadius: '2px',
                                }}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Skill bars */}
                <div className="max-w-2xl mx-auto reveal">
                    {SKILLS[activeTab].map((skill) => (
                        <SkillBar
                            key={skill.name}
                            name={skill.name}
                            level={skill.level}
                            color={activeTab === 'Frontend' ? '#00ffe0' : '#7c3aed'}
                        />
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
                            onMouseEnter={(e) => {
                                (e.target as HTMLSpanElement).style.borderColor = 'var(--accent)';
                                (e.target as HTMLSpanElement).style.color = 'var(--accent)';
                                (e.target as HTMLSpanElement).style.boxShadow = '0 0 12px rgba(0,255,224,.2)';
                            }}
                            onMouseLeave={(e) => {
                                (e.target as HTMLSpanElement).style.borderColor = 'var(--border)';
                                (e.target as HTMLSpanElement).style.color = 'var(--muted)';
                                (e.target as HTMLSpanElement).style.boxShadow = 'none';
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