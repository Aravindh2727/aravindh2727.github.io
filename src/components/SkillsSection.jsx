import React from 'react';
import { Terminal, Smartphone, Database, Cloud, Activity } from 'lucide-react';
import { motion } from 'framer-motion';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Web Development',
      icon: <Terminal size={24} className="text-gradient" />,
      skills: ['React.js', 'Node.js', 'Express.js', 'HTML', 'CSS', 'REST APIs', 'Responsive Design']
    },
    {
      title: 'Mobile App Development',
      icon: <Smartphone size={24} className="text-gradient-alt" />,
      skills: ['Android (Jetpack Compose)', 'Kotlin', 'Firebase']
    },
    {
      title: 'Backend & Databases',
      icon: <Database size={24} style={{ color: 'var(--neon-magenta)' }} />,
      skills: ['Python', 'JavaScript', 'SQL', 'MongoDB']
    },
    {
      title: 'Cloud & DevOps',
      icon: <Cloud size={24} style={{ color: 'var(--neon-cyan)' }} />,
      skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'GitHub Actions', 'Git']
    },
    {
      title: 'Methodologies',
      icon: <Activity size={24} style={{ color: '#fff' }} />,
      skills: ['Test-Driven Development (TDD)', 'Object-Oriented Programming (OOP)', 'Agile/Scrum']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="skills" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '48px', textAlign: 'center' }}
        >
          <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div style={{ width: '60px', height: '4px', background: 'var(--grad-magenta-cyan)', margin: '0 auto', borderRadius: '2px' }}></div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-3"
        >
          {skillCategories.map((category, idx) => (
            <motion.div key={idx} variants={itemVariants} className="glass-panel" style={{ padding: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                <div style={{ padding: '12px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px' }}>
                  {category.icon}
                </div>
                <h3 style={{ fontSize: '1.2rem', color: 'var(--text-main)' }}>{category.title}</h3>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {category.skills.map((skill, sIdx) => (
                  <span key={sIdx} style={{ 
                    padding: '6px 12px', 
                    background: 'rgba(0,0,0,0.3)', 
                    border: '1px solid var(--glass-border)', 
                    borderRadius: '6px', 
                    fontSize: '0.85rem',
                    color: 'var(--text-muted)' 
                  }}>
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
