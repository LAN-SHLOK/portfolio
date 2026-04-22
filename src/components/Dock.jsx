import React from 'react';
import { motion } from 'framer-motion';
import { Home, Layers, User, Mail, Zap } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Magnetic from './Magnetic';

const Dock = () => {
  const location = useLocation();
  const [isMobile, setIsMobile] = React.useState(typeof window !== 'undefined' ? window.innerWidth < 768 : false);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const items = [
    { icon: Home, label: "Home", path: "/" },
    { icon: Zap, label: "Skills", path: "/skills" },
    { icon: Layers, label: "Work", path: "/projects" },
    { icon: User, label: "About", path: "/about" },
    { icon: Mail, label: "Contact", path: "/contact" },
  ];

  return (
    <div className="fixed bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-50 px-4 w-full max-w-fit">
      <motion.div 
        initial={{ y: 100, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 260, damping: 20 }}
        className="flex items-center gap-1 md:gap-2 px-2 py-2 md:px-3 md:py-3 glass-card rounded-xl md:rounded-2xl shadow-2xl shadow-black/50"
      >
        {items.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link key={item.label} to={item.path} className="relative group block">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`p-3 md:p-4 rounded-lg md:rounded-xl transition-all duration-200 ${
                  isActive 
                    ? 'bg-white text-black shadow-lg shadow-white/20' 
                    : 'text-gray-500 hover:text-white hover:bg-white/5'
                }`}
              >
                <item.icon size={isMobile ? 18 : 20} strokeWidth={isActive ? 2.5 : 2} />
              </motion.div>
              
              {/* Tooltip - Hide on mobile */}
              <span className="hidden md:block absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-black/90 border border-white/10 rounded-lg text-[10px] font-black uppercase tracking-widest text-white opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none scale-90 group-hover:scale-100 origin-bottom">
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