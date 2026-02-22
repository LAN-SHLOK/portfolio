import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SkillsRotator from '../components/SkillsRotator';
import { projectData, getSkillIconUrl } from '../data/projectData';
import { ArrowUpRight, FilterX } from 'lucide-react';
import SpotlightCard from '../components/SpotlightCard';

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const filteredProjects = selectedSkill 
    ? projectData.filter(project => project.tech.includes(selectedSkill)) 
    : projectData;

  // --- CRAZY CARD ANIMATION VARIANTS ---
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 200,             // Start way down
      scale: 0.5,         // Start tiny
      rotateX: 70,        // Start laid flat
      filter: "blur(20px)" // Start blurry
    },
    visible: (index) => ({
      opacity: 1, 
      y: 0, 
      scale: 1,
      rotateX: 0,
      filter: "blur(0px)",
      transition: { 
        delay: index * 0.1, // Stagger effect (0.1s delay per card)
        type: "spring", 
        stiffness: 80,      // Bouncy spring
        damping: 12,
        mass: 0.8
      }
    }),
    hover: {
      y: -15,             // Lift up
      scale: 1.05,        // Scale up
      rotateX: 5,         // Tilt 3D
      rotateY: -5,
      zIndex: 50,
      boxShadow: "0 20px 50px rgba(6, 182, 212, 0.3)", // Glow
      transition: { type: "spring", stiffness: 400, damping: 20 }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden flex flex-col items-center bg-black perspective-[2000px]">
      
      {/* HERO SECTION */}
      <div className="w-full min-h-screen flex flex-col justify-center items-center relative">
          
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: -50, scale: 1.5, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="text-center mb-8 px-6 relative z-10"
          >
            <h2 className="text-6xl font-extrabold text-white mb-3 tracking-tight drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
              Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-pulse">Orbit</span>
            </h2>
            <p className="text-cyan-400/80 text-sm font-mono uppercase tracking-[0.4em]">
              [ System: Online // Select Protocol ]
            </p>
          </motion.div>

          {/* ROTATOR */}
          <div className="w-full h-[500px] relative flex justify-center items-center z-20">
             {selectedSkill && (
              <motion.button 
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1, rotate: 180 }} // Crazy spin on hover
                onClick={() => setSelectedSkill(null)} 
                className="absolute top-0 right-10 z-50 flex items-center justify-center w-12 h-12 bg-red-500/20 border border-red-500 text-red-400 rounded-full hover:bg-red-500 hover:text-white transition-all shadow-[0_0_30px_rgba(239,68,68,0.4)] backdrop-blur-md"
              >
                <FilterX size={20} />
              </motion.button>
            )}
            <SkillsRotator onSkillSelect={setSelectedSkill} selectedSkill={selectedSkill} />
          </div>

          {/* Scroll Hint */}
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1, y: [0, 10, 0] }} 
            transition={{ delay: 2, duration: 2, repeat: Infinity }}
            className="absolute bottom-10 text-cyan-500/50 text-xs tracking-[0.5em] uppercase font-bold"
          >
            ▼ Initialize Scroll ▼
          </motion.div>
      </div>
      
      {/* PROJECTS GRID 
          Uses 'perspective' on parent to make 3D rotations look real.
      */}
      <div 
        className="w-full max-w-7xl px-6 pb-40 perspective-[1000px]" 
      >
        <motion.div 
           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
           initial="hidden"
           whileInView="visible"
           viewport={{ margin: "-100px", once: false }} // 'once: false' means it replays if you scroll up/down!
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project, index) => (
              <motion.div 
                key={project.id}
                layout
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0, rotateZ: 45, transition: { duration: 0.3 } }}
                whileHover="hover"
                whileTap="tap"
              >
                <SpotlightCard className="h-full flex flex-col group bg-zinc-900/40 backdrop-blur-xl border border-white/5 hover:border-cyan-400/50 transition-colors duration-500 overflow-visible">
                  
                  {/* Card Content */}
                  <div className="p-8 relative z-10">
                    <div className="flex justify-between items-start mb-6">
                      <div className="p-4 rounded-2xl bg-black/50 border border-white/10 group-hover:border-cyan-400 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-300">
                        {getSkillIconUrl(project.tech[0]) && (
                            <img src={getSkillIconUrl(project.tech[0])} alt="icon" className="w-8 h-8 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
                        )}
                      </div>
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 hover:bg-cyan-500 hover:text-white transition-all duration-300 hover:rotate-45">
                        <ArrowUpRight size={20} />
                      </a>
                    </div>
                    
                    <h4 className="text-3xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors tracking-tight">{project.title}</h4>
                    <p className="text-gray-400 mb-8 leading-relaxed text-sm font-light">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tech.map((t, i) => { 
                        const iconUrl = getSkillIconUrl(t);
                        return ( 
                          <span key={i} className={`flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border transition-all duration-300 ${selectedSkill === t ? 'border-cyan-400 text-cyan-400 bg-cyan-400/10' : 'border-white/5 text-gray-500 bg-white/5 group-hover:border-white/20'}`}>
                            {iconUrl && <img src={iconUrl} alt={t} className="w-3 h-3 grayscale group-hover:grayscale-0 transition-all" />}
                            {t}
                          </span> 
                        )
                      })}
                    </div>
                  </div>

                  {/* Decorative Gradient Blob inside card */}
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-cyan-500/20 blur-[60px] rounded-full group-hover:bg-cyan-400/30 transition-all duration-500" />
                </SpotlightCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;