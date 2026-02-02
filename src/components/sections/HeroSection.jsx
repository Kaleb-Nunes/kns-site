import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const HeroSection = ({ t }) => {
  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden gradient-hero" data-testid="hero-section">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050505]" />

      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#00F0FF]/5 blur-[100px]"
        animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[#7000FF]/5 blur-[100px]"
        animate={{ x: [0, -50, 0], y: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <span className="sage-badge" data-testid="hero-badge">
            {t.hero.badge}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="hero-title text-5xl md:text-7xl lg:text-8xl mb-6"
          data-testid="hero-title"
        >
          <span className="block text-white">{t.hero.title1}</span>
          <span className="glitch-text block mt-2 text-[#00F0FF]" data-text={t.hero.title2}>
            {t.hero.title2}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12"
          data-testid="hero-subtitle"
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <a
            href="https://wa.me/5547988901616"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#00F0FF] to-[#00C0FF] text-black font-heading font-bold text-lg rounded-lg hover:shadow-[0_0_40px_rgba(0,240,255,0.5)] transition-all duration-300 hover:scale-105"
            data-testid="hero-cta"
          >
            {t.hero.cta}
            <ChevronRight size={20} />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <span className="text-xs text-gray-500 font-mono">{t.hero.scroll}</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-gray-600 flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-[#00F0FF] rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
