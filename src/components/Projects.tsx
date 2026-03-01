import React from 'react';
import { PROJECTS, Project } from '../data';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
    <div
        className="card-3d reveal"
        style={{
            background: 'rgba(13,17,23,.8)',
            border: '1px solid var(--border)',
            borderRadius: '4px',
            padding: '2rem',
            position: 'relative',
            overflow: 'hidden',
            backdropFilter: 'blur(10px)',
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
                        fontSize: '0.6rem', padding: '0.2rem 0.6rem',
                        background: `${project.color}10`, color: project.color, borderRadius: '2px',
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
        >
            View Project <span>→</span>
        </a>
    </div>
);

const Projects: React.FC = () => (
    <section id="projects" className="grid-bg" style={{ padding: '8rem 0' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
            {/* Header */}
            <div className="reveal text-center mb-16">
                <div className="tag mb-4" style={{ display: 'inline-block' }}>Portfolio</div>
                <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 800 }}>
                    Selected <span className="gradient-text">Projects</span>
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {PROJECTS.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    </section>
);

export default Projects;