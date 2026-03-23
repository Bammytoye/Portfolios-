import React from 'react';
import { TimelineItem } from '../data';

interface TimelineCardProps {
    item: TimelineItem;
    index: number;
}

const TimelineCard: React.FC<TimelineCardProps> = ({ item, index }) => (
    <div
        className="reveal"
        style={{
            display: 'flex',
            flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
            gap: '3rem',
            marginBottom: '3rem',
            alignItems: 'center',
        }}
    >
        {/* Content */}
        <div
            style={{
                flex: 1,
                background: 'rgba(13,17,23,.8)',
                border: '1px solid var(--border)',
                borderRadius: '4px',
                padding: '1.75rem',
                backdropFilter: 'blur(10px)',
                transition: 'border-color .3s',
            }}
            onMouseEnter={(e) =>
                ((e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(0,255,224,.3)')
            }
            onMouseLeave={(e) =>
                ((e.currentTarget as HTMLDivElement).style.borderColor = 'var(--border)')
            }
        >
            <div
                style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '0.65rem', color: 'var(--accent)',
                    letterSpacing: '0.1em', marginBottom: '0.5rem',
                }}
            >
                {item.year}
            </div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.25rem' }}>
                {item.role}
            </h3>
            <div
                style={{
                    color: 'var(--accent2)',
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '0.8rem', marginBottom: '0.75rem',
                }}
            >
                {item.company}
            </div>
            <p style={{ color: 'var(--muted)', fontSize: '0.875rem', lineHeight: 1.7 }}>
                {item.desc}
            </p>
        </div>

        {/* Center dot */}
        <div
            className="hidden md:flex"
            style={{
                width: '12px', height: '12px', borderRadius: '50%',
                background: 'var(--accent)', flexShrink: 0,
                boxShadow: '0 0 20px var(--accent)',
                animation: 'pulseGlow 2s ease infinite',
            }}
        />

        {/* Spacer */}
        <div style={{ flex: 1 }} className="hidden md:block" />
    </div>
);

export default TimelineCard;