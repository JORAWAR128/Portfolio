import { motion } from 'framer-motion';
import { skills } from '../data/skills';
import { SectionHeading } from './SectionHeading';
import { 
  SiCplusplus, SiPython, SiJavascript, SiHtml5, SiCss, SiReact, 
  SiMysql, SiMongodb, SiNumpy, SiPandas, SiScikitlearn 
} from 'react-icons/si';
import { FaJava, FaGitAlt, FaGithub, FaBrain, FaRobot, FaNetworkWired } from 'react-icons/fa';
import { BsDatabaseFillGear } from 'react-icons/bs';
import { BiNetworkChart } from 'react-icons/bi';

const iconMap = {
  "C": SiCplusplus,
  "C++": SiCplusplus,
  "Java": FaJava,
  "Python": SiPython,
  "JavaScript": SiJavascript,
  "HTML5": SiHtml5,
  "CSS3": SiCss,
  "React.js": SiReact,
  "MySQL": SiMysql,
  "MongoDB": SiMongodb,
  "NumPy": SiNumpy,
  "Pandas": SiPandas,
  "Scikit-learn": SiScikitlearn,
  "XGBoost": BsDatabaseFillGear,
  "Git": FaGitAlt,
  "GitHub": FaGithub,
  "Supervised Learning": BiNetworkChart,
  "Unsupervised Learning": FaNetworkWired,
  "Deep Learning": FaBrain,
  "LLMs": FaRobot,
  "RAG": BsDatabaseFillGear,
  "Data Structures & Algorithms": FaNetworkWired,
  "OOP": SiCplusplus,
  "Operating Systems": BsDatabaseFillGear,
  "DBMS": SiMysql,
  "Computer Networks": BiNetworkChart
};

export function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section id="skills" className="py-24 px-6 max-w-7xl mx-auto w-full border-t border-border relative">
      <SectionHeading title="Skills & Expertise" subtitle="03" />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
        {skills.map((skillGroup, index) => (
          <motion.div 
            key={skillGroup.category}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="flex flex-col gap-6"
          >
            <motion.h3 
              variants={itemVariants}
              className="font-mono text-sm uppercase tracking-widest text-text-muted border-b border-border pb-4"
            >
              {skillGroup.category}
            </motion.h3>
            <div className="grid grid-cols-2 gap-4">
              {skillGroup.items.map(item => {
                const Icon = iconMap[item];
                return (
                  <motion.div 
                    variants={itemVariants}
                    key={item}
                    className="group flex items-center gap-4 bg-surface/10 border border-border p-5 rounded-sm hover:bg-surface/40 hover:border-text-muted transition-all duration-300 cursor-default h-full"
                  >
                    {Icon && (
                      <Icon className="text-text-muted group-hover:text-white group-hover:scale-110 group-hover:-translate-y-0.5 transition-all duration-300 text-2xl shrink-0" />
                    )}
                    <span className="text-base font-medium text-text-secondary group-hover:text-white transition-colors duration-300 leading-tight">
                      {item}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
