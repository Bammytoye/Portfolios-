import React from 'react';
import { Project } from '../data';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
    <div
        className="card-3d reveal transition-transform duration-300 hover:scale-[1.03]"
        style={{
            background: 'rgba(13,17,23,.8)',
            border: '1px solid var(--border)',
            borderRadius: '4px',
            padding: '2rem',
            position: 'relative',
            overflow: 'hidden',
            backdropFilter: 'blur(10px)',
            cursor: 'pointer',
        }}
        onMouseEnter={(e) => {
            (e.currentTarget as HTMLDivElement).style.borderColor = `${project.color}60`;
        }}
        onMouseLeave={(e) => {
            (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--border)';
        }}
    >
        {/* Top accent line */}
        <div
            style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
                background: `linear-gradient(90deg, transparent, ${project.color}, transparent)`,
            }}
        />

        {/* Header */}
        <div className="flex items-start justify-between mb-4">
            <span style={{ fontSize: '2.5rem' }}>{project.emoji}</span>
            <span
                style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '0.6rem', letterSpacing: '0.1em',
                    padding: '0.3rem 0.8rem',
                    border: `1px solid ${project.color}40`,
                    color: project.color, borderRadius: '2px',
                }}
            >
                {project.tag}
            </span>
        </div>

        <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem', color: '#f1f5f9' }}>
            {project.title}
        </h3>

        <p style={{ color: 'var(--muted)', fontSize: '0.875rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            {project.desc}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((t) => (
                <span
                    key={t}
                    style={{
                        fontFamily: "'Space Mono', monospace",
                        fontSize: '0.6rem',
                        padding: '0.2rem 0.6rem',
                        background: `linear-gradient(135deg, ${project.color}22, ${project.color}11)`,
                        color: project.color,
                        borderRadius: '2px',
                        fontWeight: 500,
                    }}
                >
                    {t}
                </span>
            ))}
        </div>

        <a
            href={project.link}
            style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '0.7rem', letterSpacing: '0.1em',
                color: project.color, textDecoration: 'none',
                display: 'flex', alignItems: 'center', gap: '0.5rem',
                textTransform: 'uppercase',
            }}
            className="hover:underline"
        >
            View Project <span>→</span>
        </a>
    </div>
);

export default ProjectCard;