import React from 'react';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, FileDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import LiveStats from '../components/LiveStats';

const Home = () => {
  return (
    <div className="min-h-screen pt-20 pb-32 px-6 max-w-7xl mx-auto flex flex-col items-center">
      
      {/* Hero Content */}
      <div className="text-center space-y-8 max-w-4xl mt-10">
        
        {/* Status Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-950/30 border border-cyan-500/20 text-cyan-400 text-xs font-mono tracking-widest uppercase"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          System Online • Open to Work
        </motion.div>
        
        {/* Main Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="text-6xl md:text-9xl font-extrabold tracking-tight text-white leading-tight mb-4"
        >
          Shlok Patel <br />
          <span className="text-4xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 inline-block min-w-[300px] text-center mt-2">
            <Typewriter
              options={{
                strings: ['Digital Reality.', 'Neural Networks.', 'Scalable Systems.', 'Modern Web.'],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                delay: 75,
              }}
            />
          </span>
        </motion.h1>
        
        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
          className="text-gray-400 text-xl leading-relaxed max-w-2xl mx-auto font-light pt-6"
        >
          Forging the gap between <strong className="text-white">Conceptual AI</strong> and <strong className="text-white">Production Software</strong>. 
          Specializing in Data Science and Full Stack Architecture.
        </motion.p>

        {/* Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-5 justify-center mt-8"
        >
          <Link to="/projects" className="group px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]">
            Explore Work <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          
          {/* UPDATED CV LINK WITH CORRECT RELATIVE PATH */}
          <a 
            href="./resume.pdf" 
            download="Resume_Shlok.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group px-8 py-4 border border-white/10 bg-white/5 text-white font-bold rounded-full hover:bg-white/10 hover:border-cyan-400/50 hover:text-cyan-400 transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
          >
            Download CV <FileDown size={20} className="group-hover:translate-y-1 transition-transform" />
          </a>
        </motion.div>

        {/* Socials */}
        <div className="flex gap-8 justify-center items-center mt-12 opacity-50 hover:opacity-100 transition-opacity duration-500">
            <a href="https://github.com/LAN-SHLOK" target="_blank" rel="noreferrer" className="hover:text-cyan-400 hover:scale-110 transition-all"><Github size={24} /></a>
            <a href="https://www.linkedin.com/in/shlok-patel-912508320" target="_blank" rel="noreferrer" className="hover:text-cyan-400 hover:scale-110 transition-all"><Linkedin size={24} /></a>
        </div>
      </div>

      {/* Live Stats */}
      <LiveStats />
    </div>
  );
};

export default Home;
