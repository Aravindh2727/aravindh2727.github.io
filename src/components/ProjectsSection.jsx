import React from 'react';
import { ExternalLink, Globe, Folder } from 'lucide-react';
import { motion } from 'framer-motion';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'SynchroTask – Cross-Device Remote PC Controller',
      tech: ['Kotlin', 'Python', 'Firebase', 'Win32 APIs', 'CameraX', 'ML Kit'],
      desc: 'Architected a cross-device remote control system using Firebase for low-latency bidirectional commands, bypassing complex network configurations. Features include zero-config secure pairing via QR code and hardware event interception.',
      category: 'Mobile Apps'
    },
    {
      title: 'LoanBook – AI-Powered Personal Finance Tracker',
      tech: ['Kotlin', 'Jetpack Compose', 'Room DB', 'Firebase', 'ML Kit', 'Retrofit'],
      desc: 'Developed an offline-first Android app featuring robust manual data tracking and automated interest engines. Integrated Google ML Kit for receipt OCR and connected to an LLM for a context-aware natural language chat assistant.',
      category: 'Mobile Apps'
    },
    {
      title: 'Personal Achievement Dashboard',
      tech: ['MERN Stack', 'Firebase', 'Chart.js', 'HTML5 Canvas'],
      desc: 'Built a live-syncing analytics dashboard with dual roles to track coding milestones, integrating Canvas to visualize the distribution of solved LeetCode and HackerRank problems.',
      category: 'Full-Stack Web',
      liveUrl: 'https://aravindh2727.github.io/personal-achievement-dashboard/'
    },
    {
      title: 'Hotel Billing System (Smart POS)',
      tech: ['React', 'JavaScript', 'Firebase'],
      desc: 'Engineered a Smart POS web application integrating real-time billing, dynamic menu management, and secure role-based access control for hotel business operations.',
      category: 'Full-Stack Web',
      liveUrl: 'https://sri-raghavendra-mess.github.io/billing-system1/login'
    },
    {
      title: 'Tamil Learning Web App',
      tech: ['MERN Stack', 'Responsive Design'],
      desc: 'Built a responsive educational platform with secure, separated dashboards for administrators and students to seamlessly manage educational units and track language learning progress.',
      category: 'Full-Stack Web',
      liveUrl: 'https://tamillearning2024-sys.github.io/Tamil/'
    },
    {
      title: 'FuturePath 3D – Career Explorer',
      tech: ['React', 'Firebase', '3D UI'],
      desc: 'Created an interactive 3D career guidance platform targeting Indian students, allowing users to explore comprehensive course lists spanning Engineering, Medical, Arts, Commerce, etc.',
      category: 'Full-Stack Web',
      liveUrl: 'https://aravindh2727.github.io/FuturePath-3D/'
    },
    {
      title: 'ArloTechX Promotional Platform',
      tech: ['UI/UX Design', 'Frontend Development'],
      desc: 'Designed a futuristic promotional campaign featuring premium UI/UX, animated vertical videos, and highly visual, text-free background elements tailored for social media engagement.',
      category: 'Frontend & UI/UX',
      liveUrl: 'https://arlotechx.github.io/ArloTechX/'
    },
    {
      title: 'Sri Raghavendra Mess Platform',
      tech: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      desc: 'Designed a mobile-optimized digital storefront and bulk-order management interface for a local South Indian restaurant to streamline customer catering inquiries.',
      category: 'Frontend & Utilities',
      liveUrl: 'https://aravindh2727.github.io/Sri-Raghavendra-Mess/'
    },
    {
      title: 'Fluento – 30 Day English Challenge',
      tech: ['JavaScript', 'HTML', 'CSS', 'Authentication'],
      desc: 'Built an interactive learning platform featuring user authentication and progress tracking to help users master English fluency through daily tasks.',
      category: 'Frontend & Utilities',
      liveUrl: 'https://mrunknown-dot.github.io/login.html'
    },
    {
      title: 'Interactive Chess Engine',
      tech: ['JavaScript', 'HTML', 'CSS Grid'],
      desc: 'Programmed a browser-based chess game enforcing standard movement logic, automatic pawn promotion, and strict validation to prevent illegal check moves.',
      category: 'Frontend & Utilities',
      liveUrl: 'https://aravindh2727.github.io/Chess/'
    },
    {
      title: 'All-in-One Smart Calculator',
      tech: ['JavaScript', 'HTML', 'CSS', 'DOM Manipulation'],
      desc: 'Developed a web utility featuring 24+ calculators utilizing advanced client-side mathematical algorithms and local storage integration for session data.',
      category: 'Frontend & Utilities',
      liveUrl: 'https://aravindh2727.github.io/aravindh-calculator/'
    },
    {
      title: 'Developer Portfolio',
      tech: ['React', 'Vite', 'Framer Motion', 'CSS'],
      desc: 'Architected a responsive, high-performance personal portfolio to catalog full-stack and AI/ML projects, showcasing frontend design principles and digital branding.',
      category: 'Frontend & Utilities',
      liveUrl: 'https://aravindh2727.github.io/'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="projects" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '48px', textAlign: 'center' }}
        >
          <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div style={{ width: '60px', height: '4px', background: 'var(--grad-magenta-cyan)', margin: '0 auto', borderRadius: '2px' }}></div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2"
        >
          {projects.map((project, idx) => (
            <motion.div key={idx} variants={itemVariants} className="glass-panel" style={{ display: 'flex', flexDirection: 'column', padding: '24px', transition: 'transform 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <Folder size={32} className="text-gradient" />
                <div style={{ display: 'flex', gap: '12px' }}>
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer" style={{ color: 'var(--neon-cyan)' }}>
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
              <h3 style={{ fontSize: '1.4rem', color: 'var(--text-main)', marginBottom: '12px' }}>{project.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '24px', flexGrow: 1 }}>
                {project.desc}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {project.tech.map((t, tIdx) => (
                  <span key={tIdx} style={{ color: 'var(--neon-cyan)', fontSize: '0.85rem', fontWeight: '500' }}>
                    {t}
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

export default ProjectsSection;
