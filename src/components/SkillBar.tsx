import React, { useState, useEffect, useRef } from 'react';

interface SkillBarProps {
    name: string;
    level: number;
    color?: string;
}

const SkillBar: React.FC<SkillBarProps> = ({ name, level, color = '#00ffe0' }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [animated, setAnimated] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setAnimated(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={ref} className="mb-5">
            <div className="flex justify-between mb-2">
                <span
                    style={{
                        fontFamily: "'Space Mono', monospace",
                        fontSize: '0.8rem',
                        color: '#e2e8f0',
                    }}
                >
                    {name}
                </span>
                <span
                    style={{
                        fontFamily: "'Space Mono', monospace",
                        fontSize: '0.75rem',
                        color,
                    }}
                >
                    {level}%
                </span>
            </div>

            <div
                style={{
                    height: '4px',
                    background: 'rgba(255,255,255,.06)',
                    borderRadius: '2px',
                    overflow: 'hidden',
                }}
            >
                <div
                    style={{
                        height: '100%',
                        width: animated ? `${level}%` : '0%',
                        background: `linear-gradient(90deg, ${color}, ${color}99)`,
                        borderRadius: '2px',
                        transition: 'width 1.2s cubic-bezier(.4,0,.2,1)',
                        boxShadow: `0 0 10px ${color}66`,
                        backgroundImage: `linear-gradient(90deg, ${color} 0%, ${color}88 50%, ${color} 100%)`,
                        backgroundSize: '200% 100%',
                        animation: animated ? 'shimmer 2s linear infinite' : 'none',
                    }}
                />
            </div>
        </div>
    );
};

export default SkillBar;