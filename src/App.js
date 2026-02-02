import React, { useState, useCallback } from "react";
import "./App.css";
import { getTranslations } from "./data/translations";
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
  
  // Memoize translation object to avoid recalculation on every render
  const t = React.useMemo(() => getTranslations(lang), [lang]);
  
  // Memoize language change handler
  const handleLanguageChange = useCallback((newLang) => {
    if (newLang !== lang) {
      setLang(newLang);
    }
  }, [lang]);

  return (
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
  );
}

export default App;
