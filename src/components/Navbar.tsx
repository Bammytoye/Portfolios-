import React, { useState } from 'react';
import { NAV_LINKS, NavLink } from '../data';

interface NavbarProps {
    activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const scrollTo = (id: string): void => {
        document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
        setMenuOpen(false);
    };

    return (
        <nav>
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <div
                    style={{
                        fontFamily: "'Space Mono', monospace",
                        fontSize: '1.1rem',
                        color: 'var(--accent)',
                        letterSpacing: '0.08em',
                    }}
                >
                    <span style={{ color: 'var(--accent2)' }}>&lt;</span>
                    DEV ZEKE
                    <span style={{ color: 'var(--accent2)' }}>/&gt;</span>
                </div>

                {/* Desktop links — md and above */}
                <div className="hidden md:flex items-center gap-8">
                    {NAV_LINKS.map((link: NavLink) => (
                        <button
                            key={link}
                            onClick={() => scrollTo(link)}
                            style={{
                                background: 'none',
                                border: 'none',
                                fontFamily: "'Space Mono', monospace",
                                fontSize: '0.75rem',
                                letterSpacing: '0.1em',
                                textTransform: 'uppercase',
                                color: activeSection === link.toLowerCase() ? 'var(--accent)' : 'var(--muted)',
                                cursor: 'none',
                                transition: 'color 0.3s',
                                position: 'relative',
                            }}
                        >
                            {activeSection === link.toLowerCase() && (
                                <span
                                    style={{
                                        position: 'absolute',
                                        bottom: '-4px',
                                        left: 0,
                                        right: 0,
                                        height: '1px',
                                        background: 'var(--accent)',
                                        boxShadow: '0 0 8px var(--accent)',
                                    }}
                                />
                            )}
                            {link}
                        </button>
                    ))}
                    <button
                        className="btn-primary"
                        style={{ padding: '0.5rem 1.2rem' }}
                        onClick={() => scrollTo('Contact')}
                    >
                        Hire Me
                    </button>
                </div>

                {/* Mobile hamburger — sm only */}
                <button
                    className="md:hidden"
                    style={{
                        background: 'none',
                        border: 'none',
                        color: 'var(--accent)',
                        cursor: 'none',
                        fontSize: '1.4rem',
                    }}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? '✕' : '☰'}
                </button>
            </div>

            {/* Mobile menu — sm only */}
            {menuOpen && (
                <div
                    className="md:hidden"
                    style={{
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        right: 0,
                        background: 'rgba(3,7,18,.97)',
                        backdropFilter: 'blur(20px)',
                        borderBottom: '1px solid var(--border)',
                        padding: '1.5rem',
                    }}
                >
                    {NAV_LINKS.map((link: NavLink) => (
                        <button
                            key={link}
                            onClick={() => scrollTo(link)}
                            style={{
                                display: 'block',
                                width: '100%',
                                textAlign: 'left',
                                background: 'none',
                                border: 'none',
                                padding: '0.75rem 0',
                                fontFamily: "'Space Mono', monospace",
                                fontSize: '0.9rem',
                                color: activeSection === link.toLowerCase() ? 'var(--accent)' : 'var(--muted)',
                                cursor: 'none',
                                letterSpacing: '0.08em',
                                borderBottom: '1px solid var(--border)',
                            }}
                        >
                            {link}
                        </button>
                    ))}

                    {/* Download CV — mobile only, not on md/lg */}
                    <button
                        onClick={() => {
                            window.open('/BAMIGBALA EZEKIEL ADETOYESE.pdf', '_blank', 'noopener,noreferrer');
                            setMenuOpen(false);
                        }}
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '0.5rem',
                            marginTop: '1rem',
                            padding: '0.75rem 1.2rem',
                            width: '100%',
                            borderRadius: '8px',
                            border: '1px solid rgba(0,255,224,0.35)',
                            background: 'rgba(0,255,224,0.06)',
                            color: 'var(--accent)',
                            fontFamily: "'Space Mono', monospace",
                            fontSize: '0.8rem',
                            letterSpacing: '0.08em',
                            fontWeight: 600,
                            cursor: 'pointer',
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="15"
                            height="15"
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
            )}
        </nav>
    );
};

export default Navbar;