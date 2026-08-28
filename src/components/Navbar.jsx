import React from 'react';
import { Menu, X, Code } from 'lucide-react';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="glass-panel py-3 transition-all duration-300" style={{ top: 0, position: 'fixed', width: '100%', zIndex: 1000, borderRadius: 0, borderTop: 'none', borderLeft: 'none', borderRight: 'none' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative' }}>
        <a href="#home" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1.5rem', fontWeight: '700', color: 'var(--text-main)', textDecoration: 'none', zIndex: 10 }}>
          <img src="/av_logo.png?v=2" alt="AV Logo" style={{ height: '36px', width: '36px', borderRadius: '8px', objectFit: 'cover' }} />
          <span>Aravindh<span className="text-gradient">V</span></span>
        </a>

        {/* Desktop Nav Links */}
        <div className="desktop-nav" style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '20px', alignItems: 'center' }}>
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} style={{ color: 'var(--text-main)', fontSize: '0.9rem', fontWeight: '500' }}>
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop Nav Social & Actions */}
        <div className="desktop-nav" style={{ display: 'flex', gap: '16px', alignItems: 'center', zIndex: 10 }}>
          <a href="https://github.com/Aravindh2727" target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)' }}>
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          </a>
          <a href="https://linkedin.com/in/aravindh-v2727" target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)' }}>
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="mobile-toggle">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} style={{ background: 'transparent', border: 'none', color: 'var(--text-main)', cursor: 'pointer' }}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="mobile-menu" style={{ position: 'absolute', top: '100%', left: 0, width: '100%', padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px', background: '#07070b', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              style={{ color: 'var(--text-main)', fontSize: '1.1rem', fontWeight: '500', padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div style={{ display: 'flex', gap: '24px', marginTop: '12px', alignItems: 'center' }}>
            <a href="https://github.com/Aravindh2727" target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)', display: 'inline-flex' }}>
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>
            <a href="https://linkedin.com/in/aravindh-v2727" target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)', display: 'inline-flex' }}>
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
