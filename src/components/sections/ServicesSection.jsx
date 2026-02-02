import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { Activity, Zap, Globe, Lock, Database, Cloud } from "lucide-react";
import { getServicesData } from "../../data/translations";

const IconMap = {
  Activity,
  Zap,
  Globe,
  Lock,
  Database,
  Cloud
};

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const ServicesSection = ({ t, lang }) => {
  // Memoize services data to prevent unnecessary recalculations
  const services = useMemo(() => getServicesData(lang), [lang]);
  
  return (
    <section id="services" className="py-24 md:py-32 relative" data-testid="services-section">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mb-16"
        >
          <motion.span variants={fadeInUp} className="font-mono text-[#00FF94] text-sm mb-4 block">
            {t.services.badge}
          </motion.span>
          <motion.h2 variants={fadeInUp} className="font-heading text-4xl md:text-6xl font-bold">
            {t.services.title} <span className="text-[#00F0FF]">{t.services.title2}</span>
          </motion.h2>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => {
            const IconComponent = IconMap[service.icon];
            
            if (!IconComponent) {
              console.warn(`Icon "${service.icon}" not found in IconMap`);
              return null;
            }
            
            return (
              <motion.div
                key={`service-${index}-${service.code}`}
                variants={fadeInUp}
                className="bento-card group"
                data-testid={`service-card-${index}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div 
                    className="w-12 h-12 rounded-xl bg-[#00F0FF]/10 flex items-center justify-center group-hover:bg-[#00F0FF]/20 transition-colors"
                    aria-hidden="true"
                  >
                    <IconComponent className="text-[#00F0FF]" size={24} />
                  </div>
                  <span className="font-mono text-[#00F0FF] text-xs">// {service.code}</span>
                </div>
                
                <h3 className="font-heading text-xl font-semibold mb-3 text-white">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
