import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, User, Code, Briefcase, Mail } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const links = [
    { path: "/", icon: Home, label: "Home" },
    { path: "/projects", icon: Code, label: "Work" },
    { path: "/skills", icon: Briefcase, label: "Skills" },
    { path: "/about", icon: User, label: "About" },
    { path: "/contact", icon: Mail, label: "Contact" },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-md px-4">
      <nav className="glass rounded-full px-6 py-3 flex justify-between items-center shadow-2xl shadow-blue-900/10">
        {links.map((link) => {
          const isActive = location.pathname === link.path;
          return (
            <Link key={link.path} to={link.path} className="relative p-3 group">
              {isActive && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute inset-0 bg-accent/10 rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <link.icon 
                size={24} 
                className={`relative z-10 transition-colors duration-300 ${isActive ? 'text-accent' : 'text-gray-400 group-hover:text-white'}`} 
              />
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Navbar;