import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShieldAlert, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-black text-white p-4 md:p-6 overflow-hidden relative">
      {/* Background Glitch Effect */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--accent-cyan)_0%,_transparent_70%)] blur-[120px]" />
      </div>

      <div className="text-center relative z-10 w-full max-w-lg mx-auto">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="mb-6 md:mb-8 inline-flex items-center justify-center p-4 md:p-6 rounded-2xl md:rounded-3xl bg-red-500/10 border border-red-500/20 text-red-500"
        >
          <ShieldAlert className="w-12 h-12 md:w-16 md:h-16" strokeWidth={1} />
        </motion.div>

        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-6xl sm:text-7xl md:text-9xl font-black mb-2 md:mb-4 tracking-tighter uppercase italic"
        >
          404
        </motion.h1>

        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-sm sm:text-base md:text-2xl font-bold mb-6 md:mb-8 uppercase tracking-[0.2em] md:tracking-[0.3em] text-gray-400 px-2"
        >
          Route Segment Corrupted
        </motion.h2>

        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-500 mb-8 md:mb-12 font-mono text-xs md:text-sm px-4 md:px-0 mx-auto"
        >
          The requested path does not exist within the current architectural schema. 
          Please revert to the primary entry point.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 md:gap-3 px-6 py-3 md:px-8 md:py-4 bg-white text-black font-bold text-sm md:text-base rounded-xl md:rounded-2xl hover:bg-cyan-400 transition-all group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            Restore Connection
          </Link>
        </motion.div>
      </div>

      {/* Decorative Binary Rain Overlay */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03] font-mono text-[8px] flex flex-wrap gap-4 p-4 overflow-hidden">
        {Array.from({ length: 500 }).map((_, i) => (
          <span key={i}>{Math.round(Math.random())}</span>
        ))}
      </div>
    </div>
  );
};

export default NotFound;
