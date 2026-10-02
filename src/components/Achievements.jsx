import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { SectionHeading } from './SectionHeading';

function Counter({ from, to, suffix = "", duration = 2 }) {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = null;
      const step = (timestamp) => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / (duration * 1000), 1);
        setCount(Math.floor(progress * (to - from) + from));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, from, to, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export function Achievements() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto w-full border-t border-border relative">
      <SectionHeading title="Achievements" subtitle="05" />

      <motion.div 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
          }
        }}
        className="grid md:grid-cols-2 gap-12 mt-16 relative"
      >
        
        {/* LeetCode Card */}
        <motion.div 
          variants={{
            hidden: { opacity: 0, y: 30 },
            show: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
          }}
          className="flex flex-col gap-8 bg-surface/30 border border-border p-10 md:p-14 rounded-sm hover:bg-surface/50 hover:border-border-hover hover:-translate-y-1 transition-all duration-500 group"
        >
          <div className="flex items-center justify-between border-b border-border pb-6">
            <span className="font-mono text-text-muted uppercase tracking-widest text-sm">LeetCode</span>
            <span className="w-2 h-2 rounded-full bg-text-muted group-hover:bg-white transition-colors duration-500"></span>
          </div>
          <div className="flex flex-col gap-2 pt-4">
            <h3 className="font-display text-7xl md:text-8xl text-white font-medium tracking-tighter">
              <Counter from={0} to={250} suffix="+" duration={2} />
            </h3>
            <p className="text-text-secondary text-lg mt-2 font-light">Problems Solved</p>
          </div>
        </motion.div>

        {/* HackerRank Card */}
        <motion.div 
          variants={{
            hidden: { opacity: 0, y: 30 },
            show: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
          }}
          className="flex flex-col gap-8 bg-surface/30 border border-border p-10 md:p-14 rounded-sm hover:bg-surface/50 hover:border-border-hover hover:-translate-y-1 transition-all duration-500 group"
        >
          <div className="flex items-center justify-between border-b border-border pb-6">
             <span className="font-mono text-text-muted uppercase tracking-widest text-sm">HackerRank</span>
             <span className="w-2 h-2 rounded-full bg-text-muted group-hover:bg-white transition-colors duration-500"></span>
          </div>
          
          <div className="flex flex-col gap-8 pt-4">
            <h4 className="font-display text-5xl md:text-6xl text-white tracking-tight">5-Star Rating</h4>
            
            <div className="flex flex-wrap gap-3">
              <span className="text-sm font-mono text-text-secondary bg-surface px-4 py-2 border border-border rounded-sm group-hover:border-border-hover transition-colors duration-300">
                C++
              </span>
              <span className="text-sm font-mono text-text-secondary bg-surface px-4 py-2 border border-border rounded-sm group-hover:border-border-hover transition-colors duration-300">
                Java
              </span>
              <span className="text-sm font-mono text-text-secondary bg-surface px-4 py-2 border border-border rounded-sm group-hover:border-border-hover transition-colors duration-300">
                Problem Solving
              </span>
            </div>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}
