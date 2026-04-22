import React from 'react';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, FileDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import LiveStats from '../components/LiveStats';
import TextReveal from '../components/TextReveal';
import Magnetic from '../components/Magnetic';

const HeroSystem = React.lazy(() => import('../components/HeroSystem'));

const Home = () => {
  return (
    <div className="relative min-h-screen pt-20 pb-32 px-6 max-w-7xl mx-auto flex flex-col items-center overflow-hidden">
      <React.Suspense fallback={null}>
        <HeroSystem />
      </React.Suspense>
      
      {/* Hero Content */}
      <div className="text-center space-y-8 max-w-4xl mt-10">
        
        {/* Status Badge */}
        <Reveal>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-950/30 border border-cyan-500/20 text-cyan-400 text-xs font-mono tracking-widest uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            System Online • Open to Work
          </div>
        </Reveal>
        
        {/* Main Title */}
        <div className="mb-4 w-full">
          <TextReveal className="text-5xl md:text-9xl font-extrabold tracking-tighter leading-tight text-white justify-center break-words md:whitespace-nowrap">
            SHLOK PATEL
          </TextReveal>
        </div>

        <Reveal delay={0.5}>
          <div className="text-2xl md:text-6xl font-light text-white/80 min-h-[1.5em] flex justify-center">
            <Typewriter
              options={{
                strings: ['Digital Reality.', 'Neural Networks.', 'Scalable Systems.', 'Modern Web.'],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                delay: 75,
              }}
            />
          </div>
        </Reveal>
        
        {/* Subtitle - Standard Fade */}
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-gray-400 text-xl leading-relaxed max-w-2xl mx-auto font-light pt-6"
        >
          Forging the gap between <strong className="text-white">Conceptual AI</strong> and <strong className="text-white">Production Software</strong>. 
          Specializing in Data Science and Full Stack Architecture.
        </motion.p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <Magnetic strength={0.2}>
            <Link to="/projects" className="group px-10 py-5 bg-white text-black font-bold rounded-2xl hover:scale-105 transition-all flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(255,255,255,0.2)]">
              Explore Work <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </Magnetic>
          
          <a href="/resume/Shlok_Patel_Resume.pdf" download className="group px-10 py-5 border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 font-bold rounded-2xl hover:bg-cyan-500/10 hover:border-cyan-400/50 transition-all flex items-center justify-center gap-3 backdrop-blur-sm">
            Download CV <FileDown size={20} className="group-hover:translate-y-1 transition-transform" />
          </a>
          
          <Link to="/contact" className="group px-10 py-5 border border-white/10 bg-white/5 text-white font-bold rounded-2xl hover:bg-white/10 hover:border-white/30 transition-all flex items-center justify-center gap-3 backdrop-blur-sm">
            Contact Me <ArrowRight size={20} className="group-hover:translate-y-1 transition-transform rotate-90" />
          </Link>
        </div>

        {/* Socials */}
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} whileHover={{ opacity: 1 }}
          className="flex gap-8 justify-center items-center mt-16 transition-opacity duration-500"
        >
            <a href="https://github.com/LAN-SHLOK" target="_blank" rel="noreferrer" className="hover:text-cyan-400 hover:scale-110 transition-all"><Github size={24} /></a>
            <a href="#" className="hover:text-cyan-400 hover:scale-110 transition-all"><Linkedin size={24} /></a>
        </motion.div>
      </div>

      {/* Live Stats */}
      <LiveStats />
    </div>
  );
};

export default Home;