import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { getTestimonialsData } from "../../data/translations";

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

const TestimonialsSection = ({ t, lang }) => {
  // Memoize testimonials data to avoid unnecessary recalculations
  const testimonials = useMemo(() => getTestimonialsData(lang), [lang]);
  
  return (
    <section className="py-24 md:py-32 relative bg-[#0A0A0A]" data-testid="testimonials-section">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mb-16 text-center"
        >
          <motion.span variants={fadeInUp} className="font-mono text-[#00FF94] text-sm mb-4 block">
            {t.testimonials.badge}
          </motion.span>
          <motion.h2 variants={fadeInUp} className="font-heading text-4xl md:text-6xl font-bold">
            {t.testimonials.title} <span className="text-[#00F0FF]">{t.testimonials.title2}</span>
          </motion.h2>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={`testimonial-${index}-${testimonial.name}`}
              variants={fadeInUp}
              className="testimonial-card"
              data-testid={`testimonial-${index}`}
            >
              {/* Star Rating */}
              <div className="flex items-center gap-1 mb-4" aria-label={`5 star rating from ${testimonial.name}`}>
                {[1, 2, 3, 4, 5].map((starIndex) => (
                  <Star 
                    key={`star-${index}-${starIndex}`} 
                    size={16} 
                    className="text-[#00F0FF] fill-[#00F0FF]"
                    aria-hidden="true"
                  />
                ))}
              </div>
              
              {/* Testimonial Text */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              {/* Author Info */}
              <div className="border-t border-white/10 pt-4">
                <div className="font-heading font-semibold text-white">{testimonial.name}</div>
                <div className="text-gray-500 text-sm">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
