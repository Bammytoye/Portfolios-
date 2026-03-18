import React from 'react';
import { PROJECTS } from '../data';
import ProjectCard from './ProjectCard';

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