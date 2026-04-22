import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DigitalPulseLoader = () => {
  const [progress, setProgress] = useState(0);
  const [logs, setLogs] = useState(['Initializing core...', 'Establishing neural links...']);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(timer);
          return 100;
        }
        return oldProgress + 1;
      });
    }, 20);

    const logInterval = setInterval(() => {
      const newLogs = [
        'Syncing structural data...',
        'Calibrating 3D shaders...',
        'Optimizing memory buffer...',
        'Verifying crypto-signatures...',
        'Establishing secure handshake...',
        'Finalizing UI assembly...'
      ];
      setLogs(prev => [...prev, newLogs[Math.floor(Math.random() * newLogs.length)]].slice(-3));
    }, 400);

    return () => {
      clearInterval(timer);
      clearInterval(logInterval);
    };
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Pulse */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px]"
      />

      {/* Central Core */}
      <div className="relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center">
        {/* Orbital Rings */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute inset-0 border border-white/5 rounded-full"
            style={{ 
              borderTopColor: i === 0 ? 'rgba(6,182,212,0.5)' : 'rgba(255,255,255,0.05)',
              borderWidth: i === 0 ? '2px' : '1px'
            }}
            animate={{ rotate: 360 }}
            transition={{ 
              duration: 3 + i, 
              repeat: Infinity, 
              ease: "linear",
              delay: i * 0.5
            }}
          />
        ))}

        {/* Progress Text */}
        <div className="flex flex-col items-center">
          <motion.span 
            className="text-4xl md:text-6xl font-black text-white tracking-tighter"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {progress}%
          </motion.span>
          <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-cyan-400 mt-2">
            System Load
          </span>
        </div>
      </div>

      {/* Technical Logs */}
      <div className="mt-16 w-64 md:w-80 space-y-2">
        <AnimatePresence mode="popLayout">
          {logs.map((log, i) => (
            <motion.div
              key={log + i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="text-[10px] font-mono text-gray-500 flex items-center gap-2 uppercase tracking-widest"
            >
              <span className="w-1 h-1 bg-cyan-500 rounded-full animate-pulse" />
              {log}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Bottom Progress Bar */}
      <div className="absolute bottom-12 w-full max-w-xs px-6">
        <div className="h-[2px] w-full bg-white/5 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.5)]"
            animate={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex justify-between mt-3 text-[8px] font-mono text-gray-600 uppercase tracking-widest">
          <span>Booting Sequence 9.0.4</span>
          <span>Node v20.x</span>
        </div>
      </div>
    </motion.div>
  );
};

export default DigitalPulseLoader;
