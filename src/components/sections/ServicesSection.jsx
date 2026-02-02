import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { Activity, Zap, Globe, Lock, Database, Cloud } from "lucide-react";

// Removi o import quebrado (getServicesData) para corrigir o erro de build.

const IconMap = {
  Activity,
  Zap,
  Globe,
  Lock,
  Database,
  Cloud
};

// Configuração Estática dos Serviços (Engenharia: Separação de Configuração e Conteúdo)
// Os textos virão dinamicamente do objeto 't', mas a estrutura técnica fica aqui.
const SERVICES_CONFIG = [
  { id: 0, icon: "Activity", code: "OBS-01" }, // Observability
  { id: 1, icon: "Zap",      code: "AUT-02" }, // Automation
  { id: 2, icon: "Globe",    code: "NET-03" }, // Networking
  { id: 3, icon: "Lock",     code: "SEC-04" }, // Security
  { id: 4, icon: "Database", code: "DAT-05" }, // Database
  { id: 5, icon: "Cloud",    code: "CLD-06" }  // Cloud
];

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

const ServicesSection = ({ t }) => {
  // Construção inteligente dos dados:
  // Combina a config técnica (ícones) com os textos de tradução (t).
  // Se t.services.items existir, usamos ele. Se não, usamos um fallback seguro para não quebrar o site.
  const services = useMemo(() => {
    if (t?.services?.items && Array.isArray(t.services.items)) {
      return t.services.items.map((item, index) => ({
        ...item,
        // Garante que o ícone e código existam, mesclando com a config se necessário
        icon: item.icon || SERVICES_CONFIG[index]?.icon || "Activity",
        code: item.code || SERVICES_CONFIG[index]?.code || "N/A"
      }));
    }
    
    // Fallback: Se o array 'items' não estiver no arquivo de tradução,
    // montamos cards vazios para a UI não quebrar, mas avisamos no console.
    console.warn("Aviso: 't.services.items' não foi encontrado nas traduções.");
    return SERVICES_CONFIG.map((config) => ({
      ...config,
      title: "Service Title",
      desc: "Description not found in translations."
    }));
  }, [t]);
  
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
            {t?.services?.badge || "// SERVICES"}
          </motion.span>
          <motion.h2 variants={fadeInUp} className="font-heading text-4xl md:text-6xl font-bold">
            {t?.services?.title || "Our"} <span className="text-[#00F0FF]">{t?.services?.title2 || "Expertise"}</span>
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
            const IconComponent = IconMap[service.icon] || Activity;
            
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
