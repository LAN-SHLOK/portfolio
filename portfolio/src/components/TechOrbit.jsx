import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { orbitSkills } from '../data/projectData';

const TechOrbit = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="relative w-full h-[450px] flex items-center justify-center">
      {/* Core */}
      <div className="absolute w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-pulse-slow" />
      <div className="relative z-10 w-24 h-24 glass rounded-full flex items-center justify-center border border-accent/30 shadow-[0_0_30px_rgba(56,189,248,0.3)]">
        <span className="text-white font-bold text-xl font-mono">&lt;/&gt;</span>
      </div>

      {/* Orbit Ring */}
      <motion.div 
        className="absolute w-[320px] h-[320px] rounded-full border border-dashed border-gray-800"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {orbitSkills.map((skill, index) => {
          const angle = (index / orbitSkills.length) * 360;
          return (
            <div
              key={index}
              className="absolute top-1/2 left-1/2 -ml-6 -mt-6"
              style={{
                transform: `rotate(${angle}deg) translate(160px) rotate(-${angle}deg)`, 
              }}
            >
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="w-12 h-12 glass rounded-full flex items-center justify-center border border-gray-700 hover:border-accent hover:shadow-[0_0_15px_rgba(56,189,248,0.4)] transition-all cursor-pointer bg-darkBg"
              >
                <skill.icon size={20} style={{ color: skill.color }} />
              </motion.div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default TechOrbit;