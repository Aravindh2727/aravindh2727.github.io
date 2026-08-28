import React from 'react';
import { Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '48px', textAlign: 'center' }}
        >
          <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <div style={{ width: '60px', height: '4px', background: 'var(--grad-cyan-blue)', margin: '0 auto', borderRadius: '2px' }}></div>
        </motion.div>

        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-panel" 
            style={{ padding: '32px', position: 'relative', overflow: 'hidden' }}
          >
            <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: 'var(--grad-magenta-cyan)' }}></div>
            
            <div style={{ marginBottom: '40px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', marginBottom: '24px' }}>
                <div>
                  <h3 style={{ fontSize: '1.5rem', color: 'var(--text-main)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Briefcase className="text-gradient" size={24} /> 
                    Student Intern
                  </h3>
                  <h4 style={{ fontSize: '1.1rem', color: 'var(--neon-cyan)' }}>
                    Integra Software Services Pvt. Ltd. | Pondicherry
                  </h4>
                </div>
                <div style={{ padding: '8px 16px', background: 'rgba(255,255,255,0.05)', borderRadius: '20px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                  July 2026 – Aug 2026
                </div>
              </div>

              <div style={{ paddingLeft: '36px' }}>
                <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <li style={{ position: 'relative' }}>
                    <span style={{ position: 'absolute', left: '-20px', top: '8px', width: '6px', height: '6px', borderRadius: '50%', background: 'var(--neon-magenta)' }}></span>
                    <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '1.05rem' }}>
                      Undertook a one-month intensive academic internship focusing on industry-standard software practices.
                    </p>
                  </li>
                  <li style={{ position: 'relative' }}>
                    <span style={{ position: 'absolute', left: '-20px', top: '8px', width: '6px', height: '6px', borderRadius: '50%', background: 'var(--neon-cyan)' }}></span>
                    <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '1.05rem' }}>
                      Engaged in active project development while adapting to corporate workflows and compliance regulations.
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', marginBottom: '24px' }}>
                <div>
                  <h3 style={{ fontSize: '1.5rem', color: 'var(--text-main)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Briefcase className="text-gradient" size={24} /> 
                    AI for Sustainability
                  </h3>
                  <h4 style={{ fontSize: '1.1rem', color: 'var(--neon-cyan)' }}>
                    1M1B (1 Million for 1 Billion) | Remote
                  </h4>
                </div>
                <div style={{ padding: '8px 16px', background: 'rgba(255,255,255,0.05)', borderRadius: '20px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                  April 2026 – June 2026
                </div>
              </div>

              <div style={{ paddingLeft: '36px' }}>
                <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <li style={{ position: 'relative' }}>
                    <span style={{ position: 'absolute', left: '-20px', top: '8px', width: '6px', height: '6px', borderRadius: '50%', background: 'var(--neon-magenta)' }}></span>
                    <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '1.05rem' }}>
                      Facilitated cross-functional collaboration to evaluate 5 global technology frameworks for system scalability.
                    </p>
                  </li>
                  <li style={{ position: 'relative' }}>
                    <span style={{ position: 'absolute', left: '-20px', top: '8px', width: '6px', height: '6px', borderRadius: '50%', background: 'var(--neon-cyan)' }}></span>
                    <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '1.05rem' }}>
                      Architected documentation for sustainable software; reduced carbon footprints by 20% through optimized compute allocation.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
