import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navigation = ({ lang, setLang, t }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      data-testid="navigation"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-4' : 'py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3" data-testid="logo">
          <span className="font-heading font-bold text-xl tracking-widest">
            KNS <span className="text-[#00F0FF]">GLOBAL</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm text-gray-400 hover:text-white transition-colors" data-testid="nav-services">
            {t.nav.services}
          </a>
          <a href="#founder" className="text-sm text-gray-400 hover:text-white transition-colors" data-testid="nav-about">
            {t.nav.about}
          </a>
          <a href="#contact" className="text-sm text-gray-400 hover:text-white transition-colors" data-testid="nav-contact">
            {t.nav.contact}
          </a>
          
          <div className="flex items-center gap-2 ml-4">
            {['pt', 'en', 'es'].map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`lang-btn ${lang === l ? 'active' : ''}`}
                data-testid={`lang-${l}`}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>

          <a
            href="https://wa.me/5547988901616"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 px-6 py-3 bg-gradient-to-r from-[#00F0FF] to-[#00C0FF] text-black font-heading font-semibold text-sm rounded-lg hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] transition-all duration-300 hover:scale-105"
            data-testid="nav-cta"
          >
            {t.nav.requestAccess}
          </a>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          data-testid="mobile-menu-btn"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass mt-4 mx-6 rounded-xl overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              <a href="#services" className="text-gray-300 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>{t.nav.services}</a>
              <a href="#founder" className="text-gray-300 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>{t.nav.about}</a>
              <a href="#contact" className="text-gray-300 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>{t.nav.contact}</a>
              <div className="flex gap-2 pt-4 border-t border-white/10">
                {['pt', 'en', 'es'].map((l) => (
                  <button
                    key={l}
                    onClick={() => { setLang(l); setIsMobileMenuOpen(false); }}
                    className={`lang-btn ${lang === l ? 'active' : ''}`}
                  >
                    {l.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
