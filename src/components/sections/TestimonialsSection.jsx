import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

// Removi o import quebrado (getTestimonialsData)

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

const TestimonialsSection = ({ t }) => {
  // Fallback de segurança: Se a tradução falhar, usamos estes dados genéricos
  // para o site não sair do ar (Tela Branca da Morte).
  const testimonials = t?.testimonials?.items || [
    {
      text: "Excellent work on our infrastructure.",
      author: "Client Name",
      role: "CTO, Tech Company"
    },
    {
      text: "Professional and reliable service.",
      author: "Partner Name",
      role: "Director, Global Corp"
    }
  ];

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden" data-testid="testimonials-section">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mb-16 text-center max-w-3xl mx-auto"
        >
          <motion.span variants={fadeInUp} className="font-mono text-[#00FF94] text-sm mb-4 block">
            {t?.testimonials?.badge || "// CLIENT STORIES"}
          </motion.span>
          <motion.h2 variants={fadeInUp} className="font-heading text-4xl md:text-5xl font-bold mb-6">
            {t?.testimonials?.title || "Trusted by"} <span className="text-[#00F0FF]">{t?.testimonials?.title2 || "Leaders"}</span>
          </motion.h2>
        </motion.div>

        {/* Grid de Depoimentos */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bento-card relative group p-8"
            >
              <div className="absolute top-8 right-8 text-[#00F0FF]/20">
                <Quote size={40} />
              </div>

              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-[#00FF94] text-[#00FF94]" />
                ))}
              </div>

              <p className="text-gray-300 mb-6 text-lg leading-relaxed italic">
                "{item.text}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00F0FF] to-[#00FF94] flex items-center justify-center text-black font-bold">
                  {item.author ? item.author.charAt(0) : "C"}
                </div>
                <div>
                  <div className="font-bold text-white">{item.author}</div>
                  <div className="text-sm text-[#00F0FF] font-mono">{item.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
