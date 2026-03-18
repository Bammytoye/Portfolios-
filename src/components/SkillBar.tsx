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
        <div ref={ref} className="mb-6">
            {/* Label and percentage - using Tailwind */}
            <div className="flex justify-between mb-2">
                <span className="font-mono text-sm text-slate-100">
                    {name}
                </span>
                <span
                    className="font-mono text-xs"
                    style={{ color }}
                >
                    {level}%
                </span>
            </div>

            {/* Skill bar container - using Tailwind */}
            <div className="h-1 bg-white/6 rounded-sm overflow-hidden">
                {/* Animated skill bar - using inline styles for gradient */}
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