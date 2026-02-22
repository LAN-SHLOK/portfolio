import React from 'react';
import { motion } from 'framer-motion';
import { projectData, getSkillIconUrl } from '../data/projectData';
import SpotlightCard from '../components/SpotlightCard';
import { ArrowUpRight, Github, FolderGit2 } from 'lucide-react';

const Projects = () => {
  // --- CRAZY 3D ANIMATION VARIANTS (Same as Skills) ---
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 150,             // Start from deep below
      scale: 0.8,         // Start smaller
      rotateX: 45,        // Start tilted back
      filter: "blur(10px)"
    },
    visible: (index) => ({
      opacity: 1, 
      y: 0, 
      scale: 1,
      rotateX: 0,
      filter: "blur(0px)",
      transition: { 
        delay: index * 0.1, 
        type: "spring", 
        stiffness: 100, 
        damping: 15 
      }
    }),
    hover: {
      y: -15,             // Levitate up
      scale: 1.03,        // Slight zoom
      rotateX: 5,         // 3D Tilt
      rotateY: -2,
      zIndex: 50,
      boxShadow: "0 25px 50px -12px rgba(6, 182, 212, 0.25)", // Cyan Glow
      borderColor: "rgba(6, 182, 212, 0.5)",
      transition: { type: "spring", stiffness: 400, damping: 20 }
    }
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden flex flex-col items-center bg-black perspective-[2000px]">
      
      {/* 1. HERO SECTION (Full Height) */}
      <div className="w-full min-h-[80vh] flex flex-col justify-center items-center relative">
          
          {/* Background Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-900/20 blur-[120px] rounded-full pointer-events-none" />

          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: -50, scale: 1.2, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="text-center px-6 relative z-10"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/30 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-4 animate-pulse">
              <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
              ARCHIVE_V3.0
            </div>
            
            <h2 className="text-6xl md:text-8xl font-extrabold text-white mb-6 tracking-tight drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
              Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">Works</span>
            </h2>
            
            <p className="text-gray-400 max-w-xl mx-auto text-lg leading-relaxed">
              A curation of digital products, experiments, and system architectures.
            </p>
          </motion.div>

          {/* Scroll Hint */}
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1, y: [0, 15, 0] }} 
            transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
            className="absolute bottom-12 text-cyan-500/50 text-xs tracking-[0.5em] uppercase font-bold flex flex-col items-center gap-2"
          >
            <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent"></div>
            Explore
          </motion.div>
      </div>

      {/* 2. PROJECTS GRID */}
      <div className="w-full max-w-7xl px-6 pb-40 perspective-[1000px]">
        <motion.div 
           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
           initial="hidden"
           whileInView="visible"
           viewport={{ margin: "-50px", once: false }} // Re-animates if you scroll up and down
        >
          {projectData.map((project, index) => (
            <motion.div 
              key={project.id}
              custom={index}
              variants={cardVariants}
              whileHover="hover"
              initial="hidden"
              animate="visible"
            >
              <SpotlightCard className="h-full flex flex-col group bg-zinc-900/40 backdrop-blur-xl border border-white/5 hover:border-cyan-400/50 transition-colors duration-500 overflow-visible relative">
                
                {/* Internal Card Content */}
                <div className="p-8 relative z-20 flex flex-col h-full">
                  
                  {/* Icon & Links Row */}
                  <div className="flex justify-between items-start mb-8">
                    <div className="p-4 rounded-2xl bg-black/50 border border-white/10 group-hover:border-cyan-400 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all duration-300 relative overflow-hidden">
                       {/* Gradient shine behind icon */}
                       <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                       
                       {/* Render Icon (Using getSkillIconUrl for consistency, or the specific project icon) */}
                       {project.tech[0] && getSkillIconUrl(project.tech[0]) ? (
                          <img src={getSkillIconUrl(project.tech[0])} alt="icon" className="w-8 h-8 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-transform duration-300 relative z-10" />
                       ) : (
                          <FolderGit2 className="w-8 h-8 text-cyan-400" />
                       )}
                    </div>

                    <div className="flex gap-2">
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all hover:scale-110">
                        <Github size={20} />
                      </a>
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-cyan-500/10 hover:bg-cyan-500 text-cyan-400 hover:text-white transition-all hover:scale-110 border border-cyan-500/20 hover:border-cyan-500">
                        <ArrowUpRight size={20} />
                      </a>
                    </div>
                  </div>

                  {/* Title & Desc */}
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-8 leading-relaxed text-sm font-light line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack Pills (Bottom) */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((t, i) => {
                       const iconUrl = getSkillIconUrl(t);
                       return (
                      <span key={i} className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border border-white/5 bg-white/5 text-gray-500 group-hover:border-white/20 group-hover:text-gray-300 transition-all duration-300 hover:bg-cyan-500/10 hover:text-cyan-400 hover:border-cyan-500/30">
                        {iconUrl && <img src={iconUrl} alt={t} className="w-3 h-3 grayscale group-hover:grayscale-0 transition-all" />}
                        {t}
                      </span>
                    )})}
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-bl-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-cyan-500/20 blur-[40px] rounded-full group-hover:scale-150 transition-transform duration-700 pointer-events-none" />
                
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;