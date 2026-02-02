import React, { useState, useMemo, useCallback } from "react";
import { BrowserRouter } from "react-router-dom"; // <--- IMPORTANTE
import "./App.css";

// --- DADOS DE TRADUÇÃO ---
const TRANSLATIONS = {
  pt: {
    nav: { home: "Início", services: "Serviços", founder: "Fundador", testimonials: "Depoimentos", contact: "Contato" },
    hero: { badge: "INFRAESTRUTURA DE ALTA DISPONIBILIDADE", title: "Monitoramento Inteligente para", title2: "Missão Crítica", subtitle: "Garanta 99.9% de uptime com nossa metodologia exclusiva Protocolo 09.", cta: "Falar com Especialista", cta_secondary: "Ver Soluções" },
    services: { badge: "// NOSSAS SOLUÇÕES", title: "Expertise em", title2: "Infraestrutura", items: [
      { title: "Observabilidade Zabbix", desc: "Monitoramento proativo 24/7.", icon: "Activity", code: "OBS-01" },
      { title: "Automação NOC", desc: "Scripts inteligentes para auto-healing.", icon: "Zap", code: "AUT-02" },
      { title: "Redes Enterprise", desc: "Arquitetura escalável e segura.", icon: "Globe", code: "NET-03" }
    ]},
    stats: { years: "Anos de XP", uptime: "Uptime Garantido", clients: "Clientes Satisfeitos", incidents: "Incidentes Prevenidos" },
    founder: { badge: "// LIDERANÇA TÉCNICA", title: "Kaleb Nunes", role: "Founder & Head de Engenharia", bio: "Especialista em Zabbix e ambientes de missão crítica." },
    testimonials: { badge: "// CASES DE SUCESSO", title: "Quem confia no", title2: "Nosso Trabalho" },
    contact: { badge: "// VAMOS CONVERSAR", title: "Pronto para escalar sua", title2: "Operação?", name: "Seu Nome", email: "Seu Email", message: "Como podemos ajudar?", send: "Enviar Mensagem" },
    footer: { rights: "Todos os direitos reservados." }
  },
  en: {
    nav: { home: "Home", services: "Services", founder: "Founder", testimonials: "Testimonials", contact: "Contact" },
    hero: { badge: "HIGH AVAILABILITY INFRASTRUCTURE", title: "Intelligent Monitoring for", title2: "Critical Mission", subtitle: "Ensure 99.9% uptime with our exclusive Protocol 09 methodology.", cta: "Talk to Expert", cta_secondary: "View Solutions" },
    services: { badge: "// OUR SOLUTIONS", title: "Expertise in", title2: "Infrastructure", items: [
      { title: "Zabbix Observability", desc: "24/7 proactive monitoring.", icon: "Activity", code: "OBS-01" },
      { title: "NOC Automation", desc: "Smart scripts for auto-healing.", icon: "Zap", code: "AUT-02" },
      { title: "Enterprise Networks", desc: "Scalable and secure architecture.", icon: "Globe", code: "NET-03" }
    ]},
    stats: { years: "Years XP", uptime: "Uptime Guaranteed", clients: "Happy Clients", incidents: "Incidents Prevented" },
    founder: { badge: "// TECHNICAL LEADERSHIP", title: "Kaleb Nunes", role: "Founder & Head of Engineering", bio: "Specialist in Zabbix and mission-critical environments." },
    testimonials: { badge: "// SUCCESS STORIES", title: "Trusted by", title2: "Industry Leaders" },
    contact: { badge: "// LET'S TALK", title: "Ready to scale your", title2: "Operation?", name: "Your Name", email: "Your Email", message: "How can we help?", send: "Send Message" },
    footer: { rights: "All rights reserved." }
  }
};

const getTranslations = (lang) => TRANSLATIONS[lang] || TRANSLATIONS['pt'];

import Navigation from "./components/Navigation";
import CustomCursor from "./components/CustomCursor";
import WhatsAppFloat from "./components/WhatsAppFloat";
import HeroSection from "./components/sections/HeroSection";
import ServicesSection from "./components/sections/ServicesSection";
import StatsSection from "./components/sections/StatsSection";
import FounderSection from "./components/sections/FounderSection";
import TestimonialsSection from "./components/sections/TestimonialsSection";
import ContactSection from "./components/sections/ContactSection";
import FooterSection from "./components/sections/FooterSection";

function App() {
  const [lang, setLang] = useState('pt');
  const t = useMemo(() => getTranslations(lang), [lang]);
  
  const handleLanguageChange = useCallback((newLang) => {
    if (newLang !== lang) setLang(newLang);
  }, [lang]);

  return (
    // ROTEADOR AQUI DENTRO = ZERO ERRO
    <BrowserRouter>
      <div className="App" data-testid="app-container">
        <CustomCursor />
        <Navigation lang={lang} setLang={handleLanguageChange} t={t} />
        <HeroSection t={t} />
        <ServicesSection t={t} lang={lang} />
        <StatsSection t={t} />
        <FounderSection t={t} />
        <TestimonialsSection t={t} lang={lang} />
        <ContactSection t={t} />
        <FooterSection t={t} />
        <WhatsAppFloat />
      </div>
    </BrowserRouter>
  );
}

export default App;
