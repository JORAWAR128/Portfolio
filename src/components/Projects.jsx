import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../data/projects';
import { SectionHeading } from './SectionHeading';

export function Projects() {
  return (
    <section id="work" className="py-24 px-6 max-w-7xl mx-auto w-full border-t border-border relative">
      <SectionHeading title="Selected Work" subtitle="01" />

      <div className="flex flex-col gap-32 md:gap-48">
        {projects.map((project, index) => (
          <motion.div 
            key={project.id}
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
            className="group grid md:grid-cols-12 gap-8 md:gap-12 items-start"
          >
            {/* Project Info */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
              }}
              className="md:col-span-5 flex flex-col gap-8 order-2 md:order-1 transition-all duration-500 group-hover:translate-x-3"
            >
              <div className="flex flex-col gap-4 border-b border-border pb-6">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-text-muted text-sm">{project.id}</span>
                  <span className="text-xs tracking-wider border border-border px-2 py-1 rounded-sm text-text-secondary bg-surface">
                    {project.status}
                  </span>
                </div>
                <h3 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-white group-hover:text-text-secondary transition-colors duration-300">
                  {project.title}
                </h3>
                <span className="font-mono text-xs text-text-muted uppercase tracking-widest">
                  {project.category}
                </span>
              </div>

              <div className="flex flex-col gap-6 text-text-secondary text-lg leading-relaxed">
                <p>{project.description}</p>
                {project.contribution && (
                  <div>
                    <span className="text-white block mb-1">My Contribution:</span>
                    <p className="text-text-muted">{project.contribution}</p>
                  </div>
                )}
              </div>

              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  show: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
                }}
                className="flex flex-wrap gap-2 pt-2"
              >
                {project.technologies.map(tech => (
                  <span key={tech} className="text-xs font-mono text-text-muted bg-surface px-3 py-1.5 border border-border rounded-sm group-hover:border-border-hover transition-colors duration-300">
                    {tech}
                  </span>
                ))}
              </motion.div>

              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  show: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
                }}
                className="flex items-center gap-4 pt-4 mt-auto"
              >
                {project.demo && project.demo !== "" && (
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group/link flex items-center gap-2 text-sm text-white hover:text-text-secondary transition-all duration-300 border-b border-transparent hover:border-text-secondary pb-1"
                  >
                    Live Demo <ArrowUpRight size={16} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-300" />
                  </a>
                )}
                {project.github && project.github !== "" && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group/link flex items-center gap-2 text-sm text-text-secondary hover:text-white transition-all duration-300"
                  >
                    GitHub <span className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-300">↗</span>
                  </a>
                )}
              </motion.div>
            </motion.div>

            {/* Project Preview */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                show: { opacity: 1, scale: 1, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
              }}
              className="md:col-span-7 aspect-[4/3] md:aspect-[16/10] bg-surface border border-border rounded-sm relative overflow-hidden group-hover:border-border-hover transition-colors duration-500 order-1 md:order-2 flex items-center justify-center group/preview"
            >
              {project.image ? (
                <>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="absolute inset-0 w-full h-full object-cover object-top opacity-80 group-hover/preview:opacity-100 group-hover/preview:scale-[1.02] transition-all duration-700 ease-out z-0"
                  />
                  <div className="absolute inset-0 bg-background/20 group-hover/preview:bg-background/0 transition-colors duration-700 pointer-events-none z-10"></div>
                  <div className="absolute inset-0 border border-white/5 z-20 pointer-events-none rounded-sm"></div>
                </>
              ) : project.type === 'ml' ? (
                <div className="absolute inset-0 w-full h-full bg-surface overflow-hidden z-0">
                  <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                  
                  {/* ML Visual Abstraction */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-60 group-hover/preview:opacity-100 transition-opacity duration-700">
                    <div className="w-[80%] h-[70%] relative flex flex-col justify-between">
                      {/* Top grid area */}
                      <div className="flex justify-between items-end border-b border-border pb-4 w-full">
                         <div className="flex flex-col gap-1.5">
                           <div className="h-1.5 w-12 bg-text-muted/40 rounded-full"></div>
                           <div className="h-1.5 w-8 bg-text-muted/20 rounded-full"></div>
                         </div>
                         <div className="flex gap-2 items-end">
                           <div className="w-1.5 h-6 bg-text-muted/20 rounded-t-sm group-hover/preview:bg-text-secondary/50 group-hover/preview:h-12 transition-all duration-700"></div>
                           <div className="w-1.5 h-10 bg-text-muted/30 rounded-t-sm group-hover/preview:bg-text-secondary/70 group-hover/preview:h-16 transition-all duration-700 delay-75"></div>
                           <div className="w-1.5 h-4 bg-text-muted/20 rounded-t-sm group-hover/preview:bg-text-secondary/40 group-hover/preview:h-8 transition-all duration-700 delay-150"></div>
                           <div className="w-1.5 h-14 bg-text-muted/40 rounded-t-sm group-hover/preview:bg-white/60 group-hover/preview:h-20 transition-all duration-700 delay-200"></div>
                         </div>
                      </div>
                      
                      {/* Center map/zone abstraction */}
                      <div className="flex-1 w-full my-6 relative border border-border/50 rounded-sm overflow-hidden bg-background/50">
                        <div className="absolute top-1/4 left-1/4 w-24 md:w-32 h-24 md:h-32 border border-text-muted/20 rounded-full bg-white/[0.01] flex items-center justify-center group-hover/preview:scale-110 transition-transform duration-1000 ease-out">
                          <div className="w-1.5 h-1.5 bg-white/40 rounded-full group-hover/preview:scale-[2] transition-transform duration-1000"></div>
                          <div className="absolute w-full h-full border border-white/10 rounded-full animate-ping opacity-20" style={{ animationDuration: '3s' }}></div>
                        </div>
                        <div className="absolute bottom-1/4 right-1/4 w-16 md:w-20 h-16 md:h-20 border border-text-muted/10 rounded-full bg-white/[0.01] flex items-center justify-center group-hover/preview:scale-110 transition-transform duration-1000 delay-150 ease-out">
                          <div className="w-1 h-1 bg-white/30 rounded-full group-hover/preview:scale-[2] transition-transform duration-1000 delay-150"></div>
                        </div>
                        
                        {/* Connecting line abstraction */}
                        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                          <path d="M 35 35 C 45 40, 55 55, 65 65" fill="transparent" stroke="currentColor" strokeWidth="1" vectorEffect="non-scaling-stroke" strokeDasharray="4 4" className="text-text-muted/20 group-hover/preview:text-text-muted/60 transition-colors duration-700" />
                        </svg>
                      </div>

                      {/* Bottom data representation */}
                      <div className="flex justify-between items-center w-full pt-4 border-t border-border">
                        <div className="font-mono text-[10px] text-text-muted/50 tracking-widest uppercase">Demand Forecast</div>
                        <div className="flex gap-4">
                           <div className="font-mono text-[10px] text-text-muted/50 hidden sm:block">XGB_MODEL_01</div>
                           <div className="font-mono text-[10px] text-text-muted/50 flex items-center gap-1.5">
                             <div className="w-1.5 h-1.5 rounded-full bg-white/30 group-hover/preview:bg-white/80 transition-colors duration-700 shadow-[0_0_8px_rgba(255,255,255,0.4)]"></div>
                             TRAINING
                           </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Status Overlay */}
                  <div className="absolute top-6 right-6 z-20">
                     <span className="text-[10px] tracking-[0.2em] uppercase font-mono border border-white/10 bg-background/80 backdrop-blur-sm px-3 py-1.5 rounded-sm text-text-secondary shadow-sm group-hover/preview:bg-white group-hover/preview:text-background group-hover/preview:border-white transition-colors duration-500">
                       In Progress
                     </span>
                  </div>
                </div>
              ) : (
                <>
                  <div className="absolute inset-0 bg-gradient-to-br from-surface-hover to-background opacity-40 group-hover:opacity-60 transition-opacity duration-700 z-0"></div>
                  <div className="absolute inset-0 scale-105 bg-white/[0.02] group-hover:scale-100 transition-transform duration-700 ease-out z-0"></div>
                  
                  <div className="z-10 text-center flex flex-col items-center gap-6 transform group-hover:scale-[1.05] transition-transform duration-700 ease-out">
                    <span className="font-mono text-text-muted text-sm tracking-widest uppercase opacity-70">Project Preview</span>
                    <span className="text-2xl md:text-3xl font-display font-medium text-text-secondary group-hover:text-white transition-colors duration-500">{project.title}</span>
                  </div>
                </>
              )}
              
              {/* Subtle hover overlay effect */}
              <motion.div 
                className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-30"
              />
            </motion.div>
          </motion.div>
        ))}
        
        {/* Coming soon placeholder */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="border border-dashed border-border p-12 text-center rounded-sm bg-surface/30 flex flex-col items-center justify-center gap-4"
        >
          <span className="font-mono text-text-muted uppercase tracking-widest text-sm">More Projects</span>
          <p className="text-text-secondary">Currently building new experiences.</p>
        </motion.div>
      </div>
    </section>
  );
}
