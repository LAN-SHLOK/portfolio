import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const DigitalPulseLoader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Smooth progress simulation
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(timer);
          return 100;
        }
        // Randomize the loading speed slightly for a natural feel
        const increment = Math.max(1, Math.floor(Math.random() * 4));
        return Math.min(100, oldProgress + increment);
      });
    }, 40);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[100] bg-[#0a0a0a] flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="flex flex-col items-center gap-12 w-full px-6">
        {/* Name / Branding Reveal */}
        <div className="overflow-hidden">
          <motion.h1 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="text-2xl md:text-3xl font-light tracking-[0.4em] text-white uppercase text-center"
          >
            Shlok Patel
          </motion.h1>
        </div>

        {/* Minimal Progress Bar */}
        <div className="w-full max-w-[240px]">
          <div className="h-[1px] w-full bg-white/10 relative overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 h-full bg-white"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "linear", duration: 0.1 }}
            />
          </div>
          
          <div className="flex justify-between mt-4 overflow-hidden">
             <motion.span 
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.3, duration: 0.5 }}
               className="text-[9px] uppercase tracking-[0.2em] text-white/40 font-mono"
             >
               Loading Experience
             </motion.span>
             <motion.span 
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.3, duration: 0.5 }}
               className="text-[10px] font-mono text-white/80"
             >
               {progress}%
             </motion.span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DigitalPulseLoader;
