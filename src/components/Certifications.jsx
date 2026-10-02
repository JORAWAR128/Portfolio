import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ExternalLink } from 'lucide-react';
import { certifications } from '../data/certifications';
import { SectionHeading } from './SectionHeading';

export function Certifications() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto w-full border-t border-border relative">
      <SectionHeading title="Certifications" subtitle="04" />

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col border-t border-border"
      >
        {certifications.map((cert, index) => (
          <div 
            key={index} 
            className="group border-b border-border hover:bg-surface/30 transition-colors duration-500"
          >
            <button 
              className="w-full text-left py-8 px-4 md:px-8 flex items-center justify-between gap-4 transition-transform duration-500 group-hover:translate-x-3"
              onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-12 w-full">
                <span className="font-mono text-text-muted text-sm w-24 shrink-0 transition-colors duration-500 group-hover:text-text-secondary">
                  {cert.year || "----"}
                </span>
                <span className="font-display text-xl md:text-2xl text-white transition-colors duration-500 flex-grow group-hover:text-text-primary">
                  {cert.title}
                </span>
                <span className="text-text-secondary text-base shrink-0 md:text-right md:w-64 hidden md:block transition-colors duration-500 group-hover:text-white">
                  {cert.issuer}
                </span>
              </div>
              <motion.div
                animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-text-muted shrink-0"
              >
                <ChevronDown size={20} />
              </motion.div>
            </button>
            
            <AnimatePresence>
              {expandedIndex === index && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-4 md:px-8 pb-6 pt-2 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <span className="text-text-secondary text-sm block md:hidden">
                      Issuer: {cert.issuer}
                    </span>
                    <a 
                      href={cert.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-text-primary border border-border bg-surface px-4 py-2 rounded-sm hover:bg-surface-hover hover:border-border-hover transition-colors"
                    >
                      View Credential <ExternalLink size={14} />
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
