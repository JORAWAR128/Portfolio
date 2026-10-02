import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="min-h-[100svh] pt-28 pb-16 px-6 flex flex-col justify-center max-w-7xl mx-auto relative w-full">
      <div className="absolute top-1/4 right-[10%] w-96 h-96 bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />
      
      <div className="flex flex-col gap-12 z-10 relative">
        <div className="flex flex-col gap-4">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 text-text-muted font-mono text-sm uppercase tracking-[0.2em]"
          >
            <span className="w-8 h-[1px] bg-border"></span>
            AI/ML STUDENT
          </motion.div>
          
          <h1 className="font-display text-6xl md:text-9xl lg:text-[12rem] font-medium leading-[0.8] tracking-[-0.02em] text-white">
            <div className="overflow-hidden pb-2">
              <motion.span
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 1.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="block"
              >
                JORAWAR
              </motion.span>
            </div>
            <div className="overflow-hidden pb-4">
              <motion.span
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 1.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="block text-text-secondary"
              >
                SINGH
              </motion.span>
            </div>
          </h1>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-end border-t border-border pt-8 mt-2">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl md:text-2xl text-text-primary text-balance max-w-xl font-normal leading-relaxed"
          >
            Building software, web experiences & intelligent systems.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-6 md:justify-end font-mono text-xs text-text-muted uppercase tracking-widest"
          >
            <div className="flex flex-col gap-2">
              <span>B.Tech Computer Science</span>
              <span>AI & Machine Learning</span>
            </div>
            <div className="hidden sm:block w-[1px] h-8 bg-border"></div>
            <div className="flex flex-col gap-2">
              <span>Parul University</span>
              <span>2024 — 2028 | India</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center gap-4 pt-8"
        >
          <a
            href="#work"
            className="group flex items-center gap-2 bg-white text-background px-6 py-3 rounded-sm font-medium hover:bg-text-primary hover:text-white transition-all duration-300 hover:-translate-y-0.5 tracking-wide text-sm"
          >
            VIEW WORK
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
          <a
            href="https://github.com/JORAWAR128"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 bg-surface border border-border px-6 py-3 rounded-sm hover:bg-surface-hover hover:border-border-hover transition-all duration-300 hover:-translate-y-0.5 text-text-primary text-sm tracking-wide"
          >
            GITHUB <span className="text-xs text-text-muted group-hover:text-white transition-colors duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
          </a>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.0, duration: 1 }}
        className="absolute bottom-8 left-6 md:left-auto md:right-6 flex flex-col items-center gap-2 text-text-muted"
      >
        <span className="writing-vertical text-xs font-mono tracking-widest uppercase">Scroll</span>
        <div className="w-[1px] h-12 bg-border relative overflow-hidden">
          <motion.div 
            animate={{ y: [ -48, 48 ] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="w-full h-full bg-text-muted absolute top-0"
          />
        </div>
      </motion.div>
    </section>
  );
}
