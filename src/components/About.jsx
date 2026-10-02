import { motion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';

export function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto w-full border-t border-border relative">
      <SectionHeading title="About" subtitle="02" />

      <div className="grid md:grid-cols-12 gap-12 md:gap-24">
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
          className="md:col-span-5 md:col-start-8 flex flex-col gap-12"
        >
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
            }}
            className="flex flex-col gap-10 text-text-secondary text-lg md:text-xl leading-[1.8] font-normal"
          >
            <p>
              I am <span className="text-white font-normal">Jorawar Singh</span>, a B.Tech Computer Science Engineering student specializing in Artificial Intelligence & Machine Learning at Parul University.
            </p>
            <p>
              My focus lies at the intersection of intelligent systems and robust software architecture. I build solutions spanning from web development to advanced machine learning models, emphasizing clean code, performance, and user experience.
            </p>
            <p>
              With a strong foundation in Data Structures & Algorithms and hands-on experience in LLM/RAG technologies, I aim to develop scalable applications that solve real-world problems.
            </p>
          </motion.div>

          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
            }}
            className="grid grid-cols-2 gap-8 pt-8 border-t border-border"
          >
            <div className="flex flex-col gap-2">
              <span className="font-mono text-text-muted text-xs uppercase tracking-widest">Education</span>
              <span className="text-white text-base">B.Tech CSE (AI & ML)</span>
              <span className="text-text-secondary text-sm">Parul University, 2024–2028</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-mono text-text-muted text-xs uppercase tracking-widest">Current CGPA</span>
              <span className="text-white text-3xl font-display">8.47</span>
            </div>
          </motion.div>
        </motion.div>
        
        <div className="md:col-span-6 md:row-start-1 md:col-start-1 relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, filter: "blur(8px)", y: 20 }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)", y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="aspect-[3/4] md:aspect-[4/5] bg-surface border border-border rounded-sm relative overflow-hidden group w-full shadow-2xl"
          >
             <img 
               src="/images/profile.jpeg" 
               alt="Jorawar Singh"
               className="absolute inset-0 w-full h-full object-cover object-center grayscale opacity-90 transition-all duration-1000 ease-out group-hover:grayscale-[0.2] group-hover:opacity-100 group-hover:scale-[1.03]"
             />
             {/* Subtle gradient overlay to integrate with the dark background */}
             <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80 z-10 pointer-events-none"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
