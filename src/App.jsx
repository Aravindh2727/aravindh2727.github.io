import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import CertificationsSection from './components/CertificationsSection';
import ContactSection from './components/ContactSection';
import './index.css';

function App() {
  return (
    <div className="app-container" style={{ position: 'relative' }}>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      
      <footer style={{ textAlign: 'center', padding: '24px', color: 'var(--text-muted)', borderTop: '1px solid var(--glass-border)', marginTop: '48px' }}>
        <p>© {new Date().getFullYear()} Aravindh V. Built with React & Vite.</p>
      </footer>
    </div>
  );
}

export default App;
