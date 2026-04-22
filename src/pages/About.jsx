import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import SpotlightCard from '../components/SpotlightCard';
import { GraduationCap, BrainCircuit, Layers } from 'lucide-react';
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import Reveal from '../components/Reveal';
import TextReveal from '../components/TextReveal';
import Tilt from 'react-parallax-tilt';

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
        <div className="flex justify-center mb-6 w-full">
          <TextReveal className="text-5xl md:text-8xl font-black tracking-tighter text-white uppercase justify-center break-words">
            About Me
          </TextReveal>
        </div>
        
        {/* Terminal Text */}
        <div className="text-gray-500 text-xs md:text-base font-mono uppercase tracking-[0.2em] h-6 flex justify-center w-full overflow-hidden">
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
        <SpotlightCard className="p-10 rounded-3xl bg-zinc-900/30 backdrop-blur-xl border border-white/10 hover:border-white/30 transition-all duration-500 group">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/5 blur-[80px] rounded-full group-hover:bg-white/10 transition-all duration-500" />
            
            <RoughNotationGroup show={true}>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light relative z-10">
                I am a dual-degree student pursuing technical excellence at{" "}
                <RoughNotation type="circle" color="#ffffff" strokeWidth={2} padding={5}>
                  <strong className="text-white font-bold">IIT Madras</strong>
                </RoughNotation>{" "}
                and{" "}
                <RoughNotation type="highlight" color="rgba(255, 255, 255, 0.05)" strokeWidth={2}>
                  <strong className="text-white font-bold">LJIET</strong>
                </RoughNotation>. 
                I bridge the gap between{" "}
                <RoughNotation type="underline" color="#94a3b8" strokeWidth={3}>
                  <span className="text-gray-200">complex backend logic</span>
                </RoughNotation>{" "}
                and beautiful,{" "}
                <RoughNotation type="box" color="#ffffff" strokeWidth={2}>
                  fluid user interfaces
                </RoughNotation>.
              </p>
            </RoughNotationGroup>
        </SpotlightCard>
      </motion.div>

      {/* 3. INFO GRID */}
      <motion.div 
        className="w-full max-w-6xl px-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Card 1: Education */}
        <motion.div variants={itemVariants} className="h-full">
          <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} perspective={1000} className="h-full">
            <SpotlightCard className="h-full p-8 glass-card border-white/5 hover:border-white/30 group">
              <div className="p-3 w-fit rounded-xl bg-white/5 text-white mb-6 group-hover:scale-110 transition-transform">
                <GraduationCap size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Education</h3>
              
              <div className="space-y-4">
                  <div>
                      <p className="text-gray-200 font-mono text-sm mb-1">BS Data Science</p>
                      <p className="text-gray-500 text-sm">IIT Madras</p>
                  </div>
                  <div className="w-full h-[1px] bg-white/10" />
                  <div>
                      <p className="text-gray-200 font-mono text-sm mb-1">Computer Engineering</p>
                      <p className="text-gray-500 text-sm">LJIET</p>
                  </div>
              </div>
            </SpotlightCard>
          </Tilt>
        </motion.div>

        {/* Card 2: Focus */}
        <motion.div variants={itemVariants} className="h-full">
          <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} perspective={1000} className="h-full">
            <SpotlightCard className="h-full p-8 glass-card border-white/5 hover:border-white/30 group">
               <div className="p-3 w-fit rounded-xl bg-white/5 text-white mb-6 group-hover:scale-110 transition-transform">
                <BrainCircuit size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Focus</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"/> Medical AI</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"/> Computer Vision</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"/> Full Stack Architecture</li>
              </ul>
            </SpotlightCard>
          </Tilt>
        </motion.div>

        {/* Card 3: Stack */}
        <motion.div variants={itemVariants} className="h-full">
          <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} perspective={1000} className="h-full">
            <SpotlightCard className="h-full p-8 glass-card border-white/5 hover:border-white/30 group">
              <div className="p-3 w-fit rounded-xl bg-white/5 text-white mb-6 group-hover:scale-110 transition-transform">
                <Layers size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Stack</h3>
              <div className="flex flex-wrap gap-2">
                 {['Java', 'Python', 'React', 'AWS', 'Tailwind', 'Next.js'].map((tech, i) => (
                    <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-xs text-gray-400 hover:bg-white/10 hover:border-white/50 hover:text-white transition-colors cursor-pointer">
                      {tech}
                    </span>
                 ))}
              </div>
            </SpotlightCard>
          </Tilt>
        </motion.div>
      </motion.div>
      
    </div>
  );
};

export default About;