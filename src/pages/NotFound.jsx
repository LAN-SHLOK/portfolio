import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShieldAlert, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white p-6 overflow-hidden relative">
      {/* Background Glitch Effect */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--accent-cyan)_0%,_transparent_70%)] blur-[120px]" />
      </div>

      <div className="text-center relative z-10">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="mb-8 inline-flex items-center justify-center p-6 rounded-3xl bg-red-500/10 border border-red-500/20 text-red-500"
        >
          <ShieldAlert size={64} strokeWidth={1} />
        </motion.div>

        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-7xl md:text-9xl font-black mb-4 tracking-tighter uppercase italic"
        >
          404
        </motion.h1>

        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xl md:text-2xl font-bold mb-8 uppercase tracking-[0.3em] text-gray-400"
        >
          Route Segment Corrupted
        </motion.h2>

        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-500 mb-12 font-mono text-sm max-w-md mx-auto"
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
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-2xl hover:bg-cyan-400 transition-all group"
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
