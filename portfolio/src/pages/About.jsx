import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import SpotlightCard from '../components/SpotlightCard';
import { GraduationCap, BrainCircuit, Layers } from 'lucide-react';

const About = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-black perspective-[2000px] overflow-x-hidden pt-32 pb-40">
      
      {/* 1. HERO HEADER */}
      <motion.div 
        initial={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 px-6 relative z-10"
      >
        <h2 className="text-6xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">Me</span>
        </h2>
        
        {/* Terminal Text - NOW INCLUDES LJIET */}
        <div className="text-purple-400/80 text-sm md:text-base font-mono uppercase tracking-[0.2em] h-6">
          <Typewriter
            options={{
              strings: [
                '// Initializing Bio-Scan...', 
                '// Student @ IIT Madras', 
                '// Student @ LJIET', 
                '// Data Science Specialist'
              ],
              autoStart: true,
              loop: true,
              delay: 40,
              deleteSpeed: 20,
            }}
          />
        </div>
      </motion.div>

      {/* 2. MAIN BIO CARD */}
      <motion.div 
        className="w-full max-w-4xl px-6 mb-12"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
      >
        <SpotlightCard className="p-10 rounded-3xl bg-zinc-900/30 backdrop-blur-xl border border-white/10 hover:border-purple-500/30 transition-all duration-500 group">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-500/20 blur-[80px] rounded-full group-hover:bg-purple-500/30 transition-all duration-500" />
            
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light relative z-10">
              I am a dual-degree student pursuing technical excellence at <strong className="text-white font-bold decoration-purple-500 underline underline-offset-4">IIT Madras</strong> and <strong className="text-white font-bold decoration-cyan-500 underline underline-offset-4">LJIET</strong>. 
              I bridge the gap between <span className="text-purple-400">complex backend logic</span> and beautiful, fluid user interfaces.
            </p>
        </SpotlightCard>
      </motion.div>

      {/* 3. INFO GRID */}
      <motion.div 
        className="w-full max-w-6xl px-6 grid grid-cols-1 md:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Card 1: Education (UPDATED WITH LJIET) */}
        <motion.div variants={itemVariants} whileHover={{ y: -5, rotateX: 5, rotateY: -5 }} className="h-full">
          <SpotlightCard className="h-full p-8 bg-black/40 border border-white/5 hover:border-cyan-400/50 group">
            <div className="p-3 w-fit rounded-xl bg-cyan-500/10 text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
              <GraduationCap size={32} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Education</h3>
            
            <div className="space-y-4">
                <div>
                    <p className="text-cyan-400 font-mono text-sm mb-1">BS Data Science</p>
                    <p className="text-gray-400 text-sm">IIT Madras</p>
                </div>
                {/* Divider */}
                <div className="w-full h-[1px] bg-white/10" />
                <div>
                    <p className="text-purple-400 font-mono text-sm mb-1">Computer Engineering</p>
                    <p className="text-gray-400 text-sm">LJIET</p>
                </div>
            </div>
          </SpotlightCard>
        </motion.div>

        {/* Card 2: Focus */}
        <motion.div variants={itemVariants} whileHover={{ y: -5, rotateX: 5, rotateY: 5 }} className="h-full">
          <SpotlightCard className="h-full p-8 bg-black/40 border border-white/5 hover:border-purple-400/50 group">
             <div className="p-3 w-fit rounded-xl bg-purple-500/10 text-purple-400 mb-6 group-hover:scale-110 transition-transform">
              <BrainCircuit size={32} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Focus</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-purple-500 rounded-full"/> Medical AI</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-purple-500 rounded-full"/> Computer Vision</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-purple-500 rounded-full"/> Full Stack Architecture</li>
            </ul>
          </SpotlightCard>
        </motion.div>

        {/* Card 3: Stack */}
        <motion.div variants={itemVariants} whileHover={{ y: -5, rotateX: 5, rotateY: -5 }} className="h-full">
          <SpotlightCard className="h-full p-8 bg-black/40 border border-white/5 hover:border-pink-400/50 group">
            <div className="p-3 w-fit rounded-xl bg-pink-500/10 text-pink-400 mb-6 group-hover:scale-110 transition-transform">
              <Layers size={32} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Stack</h3>
            <div className="flex flex-wrap gap-2">
               {['Java', 'Python', 'React', 'AWS', 'Tailwind', 'Next.js'].map((tech, i) => (
                 <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-xs text-gray-300 hover:bg-pink-500/20 hover:border-pink-500/50 hover:text-white transition-colors">
                   {tech}
                 </span>
               ))}
            </div>
          </SpotlightCard>
        </motion.div>
      </motion.div>
      
    </div>
  );
};

export default About;