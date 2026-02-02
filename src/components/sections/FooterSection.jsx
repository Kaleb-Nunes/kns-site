import React from "react";
import { Network, Github, Linkedin, Instagram, Youtube } from "lucide-react";

const FooterSection = ({ t }) => {
  return (
    <footer className="py-16 border-t border-white/10 bg-[#030303]" data-testid="footer">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="font-heading font-bold text-2xl tracking-widest mb-4">
              KNS <span className="text-[#00F0FF]">GLOBAL</span>
            </div>
            <p className="text-gray-500 mb-6 max-w-md">
              {t.footer.description}
            </p>
            <div className="sage-badge inline-block">
              SAGE CERTIFIED
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white mb-4">{t.footer.quickLinks}</h4>
            <div className="space-y-3">
              <a href="#services" className="block text-gray-500 hover:text-[#00F0FF] transition-colors">{t.footer.services}</a>
              <a href="#founder" className="block text-gray-500 hover:text-[#00F0FF] transition-colors">{t.footer.about}</a>
              <a href="#contact" className="block text-gray-500 hover:text-[#00F0FF] transition-colors">{t.footer.contact}</a>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white mb-4">{t.footer.social}</h4>
            <div className="flex gap-3">
              <a href="https://www.linkedin.com/in/kalebnunessantos/" target="_blank" rel="noopener noreferrer" className="social-icon" style={{width: '40px', height: '40px'}}>
                <Linkedin size={18} />
              </a>
              <a href="https://github.com/Kaleb-Nunes" target="_blank" rel="noopener noreferrer" className="social-icon" style={{width: '40px', height: '40px'}}>
                <Github size={18} />
              </a>
              <a href="https://www.instagram.com/kalebnunes.tech/" target="_blank" rel="noopener noreferrer" className="social-icon" style={{width: '40px', height: '40px'}}>
                <Instagram size={18} />
              </a>
              <a href="https://www.youtube.com/@kalebnunessantos" target="_blank" rel="noopener noreferrer" className="social-icon" style={{width: '40px', height: '40px'}}>
                <Youtube size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-600 text-sm font-mono">
            © {new Date().getFullYear()} KNS GLOBAL. {t.footer.rights}
          </div>
          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <Network size={14} />
            <span className="font-mono">IPv6 READY</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
