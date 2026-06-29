import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '48px', textAlign: 'center' }}
        >
          <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div style={{ width: '60px', height: '4px', background: 'var(--grad-magenta-cyan)', margin: '0 auto', borderRadius: '2px' }}></div>
        </motion.div>

        <div className="grid grid-cols-2" style={{ alignItems: 'start' }}>
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
          >
            <div className="glass-panel" style={{ padding: '32px' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '24px', color: 'var(--text-main)' }}>Let's build something together</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '32px', lineHeight: '1.6' }}>
                Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <a href="mailto:aravindhapex@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '16px', color: 'var(--text-main)' }}>
                  <div style={{ padding: '12px', background: 'rgba(0, 240, 255, 0.1)', borderRadius: '12px', color: 'var(--neon-cyan)' }}>
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>Email</h4>
                    <p>aravindhapex@gmail.com</p>
                  </div>
                </a>
                
                <a href="tel:+919342695097" style={{ display: 'flex', alignItems: 'center', gap: '16px', color: 'var(--text-main)' }}>
                  <div style={{ padding: '12px', background: 'rgba(255, 0, 255, 0.1)', borderRadius: '12px', color: 'var(--neon-magenta)' }}>
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>Phone</h4>
                    <p>(+91) 9342695097</p>
                  </div>
                </a>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', color: 'var(--text-main)' }}>
                  <div style={{ padding: '12px', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '12px', color: 'var(--text-main)' }}>
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>Location</h4>
                    <p>Tindivanam, India</p>
                  </div>
                </div>
              </div>
              
              <div style={{ display: 'flex', gap: '24px', marginTop: '32px' }}>
                <a href="https://github.com/Aravindh2727" target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)' }}>
                  <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </a>
                <a href="https://linkedin.com/in/aravindh-v2727" target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)' }}>
                  <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-panel" 
            style={{ padding: '32px' }}
          >
            <form action="https://formsubmit.co/aravindhapex@gmail.com" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <label htmlFor="name" style={{ display: 'block', marginBottom: '8px', color: 'var(--text-muted)', fontSize: '0.9rem' }}>Name</label>
                <input type="text" name="name" id="name" required placeholder="John Doe" style={{ width: '100%', padding: '12px 16px', background: 'rgba(0,0,0,0.2)', border: '1px solid var(--glass-border)', borderRadius: '8px', color: 'var(--text-main)', outline: 'none' }} />
              </div>
              <div>
                <label htmlFor="email" style={{ display: 'block', marginBottom: '8px', color: 'var(--text-muted)', fontSize: '0.9rem' }}>Email</label>
                <input type="email" name="email" id="email" required placeholder="john@example.com" style={{ width: '100%', padding: '12px 16px', background: 'rgba(0,0,0,0.2)', border: '1px solid var(--glass-border)', borderRadius: '8px', color: 'var(--text-main)', outline: 'none' }} />
              </div>
              <div>
                <label htmlFor="message" style={{ display: 'block', marginBottom: '8px', color: 'var(--text-muted)', fontSize: '0.9rem' }}>Message</label>
                <textarea name="message" id="message" required rows="5" placeholder="Your message here..." style={{ width: '100%', padding: '12px 16px', background: 'rgba(0,0,0,0.2)', border: '1px solid var(--glass-border)', borderRadius: '8px', color: 'var(--text-main)', outline: 'none', resize: 'vertical' }}></textarea>
              </div>
              
              {/* FormSubmit Configuration */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_subject" value="New Contact Message from Portfolio!" />

              <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '12px' }}>
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
