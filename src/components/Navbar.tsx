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

                {/* Desktop links */}
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

                {/* Mobile hamburger */}
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

            {/* Mobile menu */}
            {menuOpen && (
                <div
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
                </div>
            )}
        </nav>
    );
};

export default Navbar;