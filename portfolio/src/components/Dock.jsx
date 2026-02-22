import React from 'react';
import { motion } from 'framer-motion';
import { Home, Layers, User, Mail, Github, Zap } from 'lucide-react'; // Added Zap for Skills
import { Link, useLocation } from 'react-router-dom';

const Dock = () => {
  const location = useLocation();
  const items = [
    { icon: Home, label: "Home", path: "/" },
    { icon: Zap, label: "Skills", path: "/skills" }, // Added Skills here
    { icon: Layers, label: "Work", path: "/projects" },
    { icon: User, label: "About", path: "/about" },
    { icon: Mail, label: "Contact", path: "/contact" },
  ];

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <motion.div 
        initial={{ y: 100 }} animate={{ y: 0 }}
        className="flex items-center gap-4 px-6 py-4 bg-surface/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl shadow-black/50"
      >
        {items.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link key={item.label} to={item.path} className="relative group">
              <motion.div
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className={`p-3 rounded-xl transition-all ${isActive ? 'bg-primary text-white shadow-lg shadow-primary/40' : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'}`}
              >
                <item.icon size={22} />
              </motion.div>
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-surface border border-white/10 rounded text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {item.label}
              </span>
            </Link>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Dock;