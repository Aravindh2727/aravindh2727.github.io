import React from 'react';
import { BookOpen, GraduationCap, Languages } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '48px', textAlign: 'center' }}
        >
          <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>
            About <span className="text-gradient">Me</span>
          </h2>
          <div style={{ width: '60px', height: '4px', background: 'var(--grad-cyan-blue)', margin: '0 auto', borderRadius: '2px' }}></div>
        </motion.div>

        <div className="grid grid-cols-2" style={{ alignItems: 'start' }}>
          {/* Bio */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-panel" 
            style={{ padding: '32px' }}
          >
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1.5rem', marginBottom: '24px' }}>
              <BookOpen className="text-gradient" /> My Story
            </h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '1.05rem', marginBottom: '16px' }}>
              I am a results-driven Software Developer with expertise in delivering full-stack solutions and distributed systems. 
              I have a proven track record of managing development lifecycles for platforms scaling to 10,000+ users, optimizing cloud deployments, 
              and translating complex stakeholder requirements into scalable, high-performance code.
            </p>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '1.05rem' }}>
              I am highly skilled in streamlining deployment overhead through CI/CD automation and Test-Driven Development (TDD).
            </p>
          </motion.div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Education */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-panel" 
              style={{ padding: '32px' }}
            >
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1.5rem', marginBottom: '24px' }}>
                <GraduationCap className="text-gradient-alt" /> Education
              </h3>
              <div style={{ marginBottom: '16px' }}>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '4px', color: 'var(--text-main)' }}>B.Sc. Computer Science (AI & ML)</h4>
                <p style={{ color: 'var(--neon-cyan)', fontSize: '0.9rem', marginBottom: '8px' }}>Takshashila University | Expected May 2027 | CGPA: 8.50</p>
              </div>
              <div style={{ width: '100%', height: '1px', background: 'var(--glass-border)', margin: '16px 0' }}></div>
              <div>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '4px', color: 'var(--text-main)' }}>HSC (2024) & SSLC (2022)</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>St. Ann's Hr Sec School & Govt Hr Sec School</p>
              </div>
            </motion.div>

            {/* Languages */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="glass-panel" 
              style={{ padding: '32px' }}
            >
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1.5rem', marginBottom: '24px' }}>
                <Languages className="text-gradient" /> Languages
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                <span style={{ padding: '6px 16px', background: 'rgba(0, 240, 255, 0.1)', border: '1px solid var(--neon-cyan)', borderRadius: '20px', color: 'var(--neon-cyan)', fontSize: '0.9rem' }}>Tamil (Native)</span>
                <span style={{ padding: '6px 16px', background: 'rgba(255, 0, 255, 0.1)', border: '1px solid var(--neon-magenta)', borderRadius: '20px', color: 'var(--neon-magenta)', fontSize: '0.9rem' }}>English (Professional)</span>
                <span style={{ padding: '6px 16px', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid var(--glass-border)', borderRadius: '20px', color: 'var(--text-main)', fontSize: '0.9rem' }}>French (Elementary)</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
