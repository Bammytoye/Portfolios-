import React, { useState, useEffect } from 'react';

import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Foter';
import useReveal from './hooks/useReveal';

const GlowDivider: React.FC = () => <div className="glow-line" />;

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('about');

  useReveal();

  useEffect(() => {
    const sections = ['about', 'skills', 'projects', 'experience', 'contact'];

    const handleScroll = (): void => {
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      <Cursor />
      <Navbar activeSection={activeSection} />

      <main>
        <Hero />
        <GlowDivider />
        <Skills />
        <GlowDivider />
        <Projects />
        <GlowDivider />
        <Experience />
        <GlowDivider />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;