import { motion } from 'framer-motion';

export function SectionHeading({ title, subtitle }) {
  return (
    <div className="flex flex-col gap-2 mb-12 md:mb-20">
      {subtitle && (
        <motion.span 
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-text-muted font-mono text-sm uppercase tracking-widest flex items-center gap-4"
        >
          <span className="w-8 h-[1px] bg-border"></span>
          {subtitle}
        </motion.span>
      )}
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="font-display text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white"
      >
        {title}
      </motion.h2>
    </div>
  );
}
