import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, ExternalLink, X } from "lucide-react";

const FOUNDER_PHOTO = "https://customer-assets.emergentagent.com/job_44775a5d-9111-494d-a5f4-c11346437c02/artifacts/nqkc19eq_foto.jpg.jpg";
const SAGE_CERT = "https://customer-assets.emergentagent.com/job_44775a5d-9111-494d-a5f4-c11346437c02/artifacts/tepudj7y_sage-%20certificado.png";

const FounderSection = ({ t }) => {
  const [showCert, setShowCert] = useState(false);

  return (
    <section id="founder" className="py-24 md:py-32 relative" data-testid="founder-section">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={FOUNDER_PHOTO}
                alt="Kaleb Nunes dos Santos - CEO KNS Global"
                className="w-full aspect-[4/5] object-cover founder-image"
                data-testid="founder-image"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#00F0FF]/10" />
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 -right-6 md:right-6 glass px-6 py-4 rounded-xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#00FF94]/20 flex items-center justify-center">
                  <Shield className="text-[#00FF94]" size={24} />
                </div>
                <div>
                  <div className="font-mono text-xs text-[#00FF94]">SAGE CERTIFIED</div>
                  <div className="font-heading font-bold text-white">HURRICANE ELECTRIC</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="font-mono text-[#00FF94] text-sm mb-4 block" data-testid="founder-badge">
              {t.founder.badge}
            </span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6" data-testid="founder-name">
              {t.founder.name}
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 italic mb-8 leading-relaxed" data-testid="founder-quote">
              {t.founder.quote}
            </p>

            <div className="glass rounded-xl p-6 mb-8">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <img
                  src={SAGE_CERT}
                  alt="SAGE Certificate"
                  className="w-full md:w-48 rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => setShowCert(true)}
                  data-testid="sage-cert-thumb"
                />
                <div>
                  <div className="font-mono text-xs text-[#00F0FF] mb-1">{t.founder.cert}</div>
                  <div className="font-heading text-xl font-bold text-white mb-1">{t.founder.certOrg}</div>
                  <div className="font-mono text-sm text-[#00FF94] mb-3">{t.founder.certRank}</div>
                  <p className="text-gray-400 text-sm">{t.founder.certDesc}</p>
                </div>
              </div>
            </div>

            <button
              onClick={() => setShowCert(true)}
              className="inline-flex items-center gap-2 text-[#00F0FF] hover:text-white transition-colors font-mono text-sm"
              data-testid="view-cert-btn"
            >
              <ExternalLink size={16} />
              {t.founder.viewCert}
            </button>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {showCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-lg"
            onClick={() => setShowCert(false)}
            data-testid="cert-modal"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-3xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowCert(false)}
                className="absolute -top-12 right-0 text-white hover:text-[#00F0FF] transition-colors"
              >
                <X size={32} />
              </button>
              <img
                src={SAGE_CERT}
                alt="SAGE Certificate Full"
                className="w-full rounded-xl shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default FounderSection;
