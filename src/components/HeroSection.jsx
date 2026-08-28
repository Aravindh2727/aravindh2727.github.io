import React from 'react';
import { ArrowRight, Download, Send, Eye } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section id="home" className="section-padding" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '32px' }}>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 style={{ color: 'var(--neon-cyan)', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: '700', marginBottom: '16px', letterSpacing: '0.5px' }}>
            Hi, I'm Aravindh V
          </h2>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: '1.1', marginBottom: '16px' }}>
            Full-Stack Web & <br />
            <span className="text-gradient">Mobile App Developer</span>
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>
            Building scalable MERN stack web applications and high-performance Android solutions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}
        >
          <a href="#projects" className="btn btn-primary">
            View My Work <ArrowRight size={18} />
          </a>
          <a href="/Aravindh.V.pdf" target="_blank" rel="noreferrer" className="btn btn-outline">
            View Resume <Eye size={18} />
          </a>
          <a href="/Aravindh.V.pdf" className="btn btn-outline" download="Aravindh.V.pdf">
            Download Resume <Download size={18} />
          </a>
          <a href="#contact" className="btn btn-outline" style={{ border: 'none', color: 'var(--text-main)', boxShadow: 'none' }}>
            Contact Me <Send size={18} />
          </a>
        </motion.div>

        {/* Decorative Floating Elements can be added here using Framer Motion */}
      </div>
    </section>
  );
};

export default HeroSection;
