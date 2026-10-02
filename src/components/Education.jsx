import { motion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';

export function Education() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto w-full border-t border-border">
      <SectionHeading title="Education" subtitle="05" />

      <div className="grid md:grid-cols-12 gap-8 md:gap-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-12 lg:col-span-8 flex flex-col gap-12"
        >
          {/* Degree */}
          <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-16 border-l-2 border-border pl-8 relative group">
            <div className="absolute top-0 -left-[9px] w-4 h-4 rounded-full bg-background border-2 border-border group-hover:border-text-secondary transition-colors duration-500" />
            <div className="flex flex-col md:w-48 shrink-0 gap-1 mt-1">
              <span className="font-mono text-text-muted text-sm tracking-widest">2024 — 2028</span>
              <span className="text-text-secondary text-lg">Parul University</span>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="font-display text-3xl md:text-4xl text-white font-medium">B.Tech in Computer Science Engineering</h3>
              <span className="text-text-primary text-lg">Artificial Intelligence & Machine Learning</span>
              <span className="inline-block mt-3 font-mono text-sm border border-border bg-surface px-4 py-2 rounded-sm w-fit text-text-secondary">
                CGPA: 8.47
              </span>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
