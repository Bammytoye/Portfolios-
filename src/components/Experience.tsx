import React from 'react';
import { TIMELINE } from '../data';
import TimelineCard from './Timelinecard';

const Experience: React.FC = () => (
    <section id="experience" style={{ padding: '8rem 0', position: 'relative' }}>
        {/* Background orb */}
        <div
            style={{
                position: 'absolute', top: '10%', left: '-100px',
                width: '400px', height: '400px',
                background: 'radial-gradient(circle, rgba(0,255,224,.05) 0%, transparent 70%)',
                pointerEvents: 'none',
            }}
        />

        <div className="max-w-4xl mx-auto px-6 lg:px-12">
            {/* Header */}
            <div className="reveal text-center mb-16">
                <div className="tag mb-4" style={{ display: 'inline-block' }}>Journey</div>
                <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 800 }}>
                    Work <span className="gradient-text">Experience</span>
                </h2>
            </div>

            <div style={{ position: 'relative' }}>
                <div className="timeline-line hidden md:block" />

                {TIMELINE.map((item, i) => (
                    <TimelineCard key={item.year} item={item} index={i} />
                ))}
            </div>
        </div>
    </section>
);

export default Experience;