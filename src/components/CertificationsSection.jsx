import React from 'react';
import { Award, ShieldCheck, BadgeCheck, Trophy, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const CertificationsSection = () => {
  const certs = [
    {
      title: 'Microsoft Applied Skills',
      issuer: 'Microsoft',
      details: 'Build a natural language processing solution with Azure AI Language & Generate reports with AI research agents',
      icon: <ShieldCheck size={28} className="text-gradient" />
    },
    {
      title: 'UiPath Automation Developer Associate',
      issuer: 'UiPath',
      details: 'Certified in Robotic Process Automation, building automation workflows and software bots.',
      icon: <Award size={28} className="text-gradient-alt" />
    },
    {
      title: 'Salesforce Certified (2x)',
      issuer: 'Salesforce',
      details: 'Demonstrated expertise in Salesforce administration and development.',
      icon: <ShieldCheck size={28} style={{ color: 'var(--neon-magenta)' }} />
    },
    {
      title: '60+ LinkedIn Certifications / Skill Badges',
      issuer: 'LinkedIn Learning',
      details: 'Completed over 60 professional courses in programming, AI, full stack development, and emerging technologies.',
      icon: <BadgeCheck size={28} style={{ color: 'var(--neon-cyan)' }} />
    },
    {
      title: 'Personal Achievement Dashboard',
      issuer: 'Personal Project',
      details: 'Built a live-syncing analytics dashboard with dual roles to track coding milestones and visualize HackerRank & LeetCode problems and LinkedIn & github repository.',
      icon: <Trophy size={28} className="text-gradient" />,
      liveUrl: 'https://personal-achievement-dashboard.onrender.com'
    }
  ];

  return (
    <section id="certifications" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '48px', textAlign: 'center' }}
        >
          <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>
            Certifications & <span className="text-gradient">Achievements</span>
          </h2>
          <div style={{ width: '60px', height: '4px', background: 'var(--grad-cyan-blue)', margin: '0 auto', borderRadius: '2px' }}></div>
        </motion.div>

        <div className="grid grid-cols-2">
          {certs.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel"
              style={{ display: 'flex', gap: '20px', padding: '24px', alignItems: 'flex-start' }}
            >
              <div style={{ padding: '12px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', flexShrink: 0 }}>
                {cert.icon}
              </div>
              <div style={{ flexGrow: 1, position: 'relative' }}>
                <h3 style={{ fontSize: '1.2rem', color: 'var(--text-main)', marginBottom: '4px', paddingRight: '28px' }}>{cert.title}</h3>
                <p style={{ color: 'var(--neon-cyan)', fontSize: '0.9rem', marginBottom: '12px', fontWeight: '500' }}>{cert.issuer}</p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.5' }}>{cert.details}</p>
                {cert.liveUrl && (
                  <a href={cert.liveUrl} target="_blank" rel="noreferrer" style={{ position: 'absolute', top: 0, right: 0, color: 'var(--neon-cyan)' }}>
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="glass-panel"
          style={{ padding: '32px', marginTop: '32px', textAlign: 'center', background: 'rgba(255,0,255,0.05)' }}
        >
          <h3 style={{ fontSize: '1.5rem', marginBottom: '24px' }} className="text-gradient">Key Achievements</h3>
          <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '24px' }}>
            <div>
              <h4 style={{ fontSize: '2.5rem', color: 'var(--text-main)', marginBottom: '8px' }}>10+</h4>
              <p style={{ color: 'var(--text-muted)' }}>Applications Deployed<br />with 99.9% uptime</p>
            </div>
            <div>
              <h4 style={{ fontSize: '2.5rem', color: 'var(--text-main)', marginBottom: '8px' }}>15+</h4>
              <p style={{ color: 'var(--text-muted)' }}>University Peers Mentored<br />in Python & DSA</p>
            </div>
            <div>
              <h4 style={{ fontSize: '2.5rem', color: 'var(--text-main)', marginBottom: '8px' }}>8.60</h4>
              <p style={{ color: 'var(--text-muted)' }}>CGPA in B.Sc CS<br />(AI & ML)</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsSection;
