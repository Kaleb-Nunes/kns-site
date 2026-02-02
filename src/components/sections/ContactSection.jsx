import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, Check, Github, Linkedin, Instagram, Facebook, Youtube } from "lucide-react";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const ContactSection = ({ t }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    try {
      await axios.post(`${API}/contact`, formData);
      setStatus('success');
      setFormData({ name: '', email: '', company: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative" data-testid="contact-section">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="font-mono text-[#00FF94] text-sm mb-4 block">
              {t.contact.badge}
            </span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              {t.contact.title}
            </h2>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#00F0FF]">
              {t.contact.title2}
            </h2>
            <p className="text-gray-400 mb-8">{t.contact.subtitle}</p>

            <form onSubmit={handleSubmit} className="space-y-4" data-testid="contact-form">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder={t.contact.name}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="terminal-input"
                  required
                  data-testid="contact-name"
                />
                <input
                  type="email"
                  placeholder={t.contact.email}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="terminal-input"
                  required
                  data-testid="contact-email"
                />
              </div>
              <input
                type="text"
                placeholder={t.contact.company}
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="terminal-input"
                data-testid="contact-company"
              />
              <textarea
                placeholder={t.contact.message}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="terminal-input min-h-[150px] resize-none"
                required
                data-testid="contact-message"
              />
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-4 bg-gradient-to-r from-[#00F0FF] to-[#00C0FF] text-black font-heading font-bold rounded-lg hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2"
                data-testid="contact-submit"
              >
                {status === 'sending' ? (
                  t.contact.sending
                ) : status === 'success' ? (
                  <><Check size={20} /> {t.contact.success}</>
                ) : status === 'error' ? (
                  t.contact.error
                ) : (
                  <><Send size={20} /> {t.contact.submit}</>
                )}
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-[#00F0FF]/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-[#00F0FF]" size={24} />
                </div>
                <div>
                  <div className="font-mono text-xs text-gray-500 mb-1">{t.contact.info.location}</div>
                  <div className="font-heading text-xl text-white">{t.contact.info.locationValue}</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-[#00F0FF]/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="text-[#00F0FF]" size={24} />
                </div>
                <div>
                  <div className="font-mono text-xs text-gray-500 mb-1">{t.contact.info.email}</div>
                  <a href="mailto:kaleb@knsconsultoria.com.br" className="font-heading text-xl text-white hover:text-[#00F0FF] transition-colors block">
                    kaleb@knsconsultoria.com.br
                  </a>
                  <a href="mailto:kalebdossantos59924@gmail.com" className="text-gray-400 text-sm hover:text-[#00F0FF] transition-colors">
                    kalebdossantos59924@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-[#00FF94]/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="text-[#00FF94]" size={24} />
                </div>
                <div>
                  <div className="font-mono text-xs text-gray-500 mb-1">{t.contact.info.phone}</div>
                  <a href="https://wa.me/5547988901616" target="_blank" rel="noopener noreferrer" className="font-heading text-xl text-white hover:text-[#00FF94] transition-colors">
                    +55 47 98890-1616
                  </a>
                </div>
              </div>

              <div className="pt-8 border-t border-white/10">
                <div className="flex gap-4">
                  <a href="https://www.linkedin.com/in/kalebnunessantos/" target="_blank" rel="noopener noreferrer" className="social-icon" data-testid="social-linkedin">
                    <Linkedin size={20} />
                  </a>
                  <a href="https://github.com/Kaleb-Nunes" target="_blank" rel="noopener noreferrer" className="social-icon" data-testid="social-github">
                    <Github size={20} />
                  </a>
                  <a href="https://www.instagram.com/kalebnunes.tech/" target="_blank" rel="noopener noreferrer" className="social-icon" data-testid="social-instagram">
                    <Instagram size={20} />
                  </a>
                  <a href="https://www.facebook.com/kalebnunessantos/" target="_blank" rel="noopener noreferrer" className="social-icon" data-testid="social-facebook">
                    <Facebook size={20} />
                  </a>
                  <a href="https://www.youtube.com/@kalebnunessantos" target="_blank" rel="noopener noreferrer" className="social-icon" data-testid="social-youtube">
                    <Youtube size={20} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
