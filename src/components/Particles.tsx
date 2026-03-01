import React, { useMemo } from 'react';

interface Particle {
    id: number;
    left: number;
    top: number;
    size: number;
    duration: number;
    delay: number;
    color: string;
}

const COLORS = ['#00ffe0', '#7c3aed', '#f97316'];

const Particles: React.FC = () => {
    const particles = useMemo<Particle[]>(
        () =>
            Array.from({ length: 20 }, (_, i) => ({
                id: i,
                left: Math.random() * 100,
                top: Math.random() * 100,
                size: Math.random() * 4 + 1,
                duration: Math.random() * 8 + 4,
                delay: Math.random() * 6,
                color: COLORS[Math.floor(Math.random() * COLORS.length)],
            })),
        []
    );

    return (
        <>
            {particles.map((p) => (
                <div
                    key={p.id}
                    className="particle"
                    style={{
                        left: `${p.left}%`,
                        top: `${p.top}%`,
                        width: p.size,
                        height: p.size,
                        background: p.color,
                        animationDuration: `${p.duration}s`,
                        animationDelay: `${p.delay}s`,
                        boxShadow: `0 0 6px ${p.color}`,
                    }}
                />
            ))}
        </>
    );
};

export default Particles;