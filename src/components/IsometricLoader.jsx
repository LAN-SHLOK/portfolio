import React from 'react';
import { motion } from 'framer-motion';

const IsometricLoader = () => {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-[#030303] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10" 
        style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
      />

      <div className="relative w-64 h-64 perspective-[1000px] flex items-center justify-center">
        {[...Array(9)].map((_, i) => {
          const x = (i % 3) - 1;
          const y = Math.floor(i / 3) - 1;
          return (
            <motion.div
              key={i}
              className="absolute w-12 h-12 glass-card border-cyan-500/40"
              initial={{ 
                opacity: 0, 
                scale: 0,
                x: x * 100, 
                y: y * 100, 
                z: -500,
                rotateX: 45, 
                rotateZ: 45 
              }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                x: x * 60, 
                y: y * 60, 
                z: 0,
              }}
              transition={{
                duration: 2,
                delay: i * 0.1,
                ease: [0.23, 1, 0.32, 1],
              }}
              style={{ transformStyle: 'preserve-3d' }}
            />
          );
        })}
      </div>
      
      <div className="relative z-10 flex flex-col items-center gap-6 mt-20">
        <div className="flex flex-col items-center gap-2">
          <motion.div 
            className="text-white font-black tracking-[0.5em] uppercase text-xs md:text-sm opacity-50"
          >
            Structural Sequence
          </motion.div>
          
          <motion.div 
            className="text-cyan-400 font-mono tracking-widest uppercase text-lg md:text-2xl font-bold"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            {['Indexing', 'Constructing', 'Calibrating', 'Finalizing'].map((status, i) => (
              <motion.span
                key={status}
                initial={{ display: 'none' }}
                animate={{ display: i === Math.floor(Date.now() / 1500) % 4 ? 'block' : 'none' }}
              >
                {status}...
              </motion.span>
            ))}
          </motion.div>
        </div>
        
        <div className="w-48 h-[2px] bg-white/5 rounded-full overflow-hidden relative">
          <motion.div 
            className="absolute inset-y-0 bg-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.8)]"
            animate={{ 
              width: ["0%", "100%"],
              left: ["0%", "0%"]
            }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
          />
        </div>
      </div>

      {/* Digital Noise Elements */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-[1px] bg-cyan-500/20"
          initial={{ width: 0, left: "-10%", top: `${20 * i + 10}%` }}
          animate={{ width: "120%", left: "110%" }}
          transition={{ duration: 2, delay: i * 0.4, repeat: Infinity, ease: "linear" }}
        />
      ))}
    </motion.div>
  );
};

export default IsometricLoader;
