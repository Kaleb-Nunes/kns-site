import React from "react";
import { motion } from "framer-motion";

const StatsSection = ({ t }) => {
  const stats = [
    { value: "99.99%", label: t.stats.uptime },
    { value: "150+", label: t.stats.clients },
    { value: "12", label: t.stats.countries },
    { value: "15+", label: t.stats.experience }
  ];

  return (
    <section className="py-16 border-y border-white/10" data-testid="stats-section">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={`stat-${index}-${stat.label}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ 
                delay: index * 0.1,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="text-center"
              data-testid={`stat-${index}`}
            >
              <div className="stat-number mb-2" aria-label={`${stat.value} ${stat.label}`}>
                {stat.value}
              </div>
              <div className="text-gray-500 text-sm font-mono uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
