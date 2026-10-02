import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 w-full border-t border-border relative overflow-hidden flex flex-col items-center justify-center min-h-[50vh]">
      
      {/* Background large text element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none opacity-[0.03] z-0">
         <span className="font-display text-[12rem] md:text-[20rem] lg:text-[25rem] font-bold tracking-tighter whitespace-nowrap">
           CONTACT
         </span>
      </div>

      <div className="flex flex-col items-center text-center gap-10 relative z-10 w-full max-w-4xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.15 }
            }
          }}
          className="flex flex-col gap-4"
        >
          <motion.span 
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } } }}
            className="font-mono text-text-muted uppercase tracking-widest text-sm block mb-2"
          >
            Next Steps
          </motion.span>
          <motion.h2 
            variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } } }}
            className="font-display text-5xl md:text-7xl lg:text-[7rem] font-medium leading-[0.9] tracking-tighter text-white"
          >
            <span className="block">HAVE A PROJECT</span>
            <span className="block text-text-secondary">IN MIND?</span>
          </motion.h2>
          <motion.h3 
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } } }}
            className="font-display text-3xl md:text-5xl mt-4 text-white"
          >
            LET'S BUILD SOMETHING.
          </motion.h3>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-4 w-full"
        >
          <a 
            href="mailto:joravarsingh2546@gmail.com" 
            className="group flex items-center justify-center gap-3 bg-white text-background px-10 py-5 rounded-sm font-medium hover:bg-text-primary hover:text-white transition-all duration-300 hover:-translate-y-1 text-xl w-full sm:w-auto shadow-[0_0_0_0_rgba(255,255,255,0)] hover:shadow-[0_8px_30px_-10px_rgba(255,255,255,0.4)]"
          >
            Email Me
            <ArrowUpRight size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </a>
        </motion.div>

        <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
           className="flex flex-wrap items-center justify-center gap-8 md:gap-12 mt-6 text-base font-mono text-text-muted"
        >
          <a href="https://github.com/JORAWAR128" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:-translate-y-1 transition-all duration-300 inline-flex items-center gap-2 border-b border-transparent hover:border-white pb-1">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/s-jorawar-singh-72a465301/" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:-translate-y-1 transition-all duration-300 inline-flex items-center gap-2 border-b border-transparent hover:border-white pb-1">
            LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
}
