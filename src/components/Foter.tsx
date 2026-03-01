import React from 'react';

const Footer: React.FC = () => (
    <footer style={{ borderTop: '1px solid var(--border)', padding: '2rem', textAlign: 'center' }}>
        <p
            style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '0.7rem',
                color: 'var(--muted)',
                letterSpacing: '0.08em',
            }}
        >
            <span style={{ color: 'var(--accent2)' }}>&lt;</span>
            DEV
            <span style={{ color: 'var(--accent2)' }}>/&gt;</span>
            {' '}— Crafted with ❤️ & a lot of ☕ — {new Date().getFullYear()}
        </p>
    </footer>
);

export default Footer;