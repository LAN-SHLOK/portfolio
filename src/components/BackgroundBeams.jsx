import React from "react";
import { motion } from "framer-motion";

const BackgroundBeams = () => {
  return (
    <div className="absolute inset-0 z-[-1] overflow-hidden pointer-events-none opacity-20">
      <div className="absolute inset-0 bg-[#030303]" />
      <svg
        className="absolute w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="beam-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="#00f2ff" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        
        {[...Array(10)].map((_, i) => (
          <motion.rect
            key={i}
            x="-20%"
            y={`${i * 10}%`}
            width="40%"
            height="1"
            fill="url(#beam-grad)"
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ 
              x: "200%", 
              opacity: [0, 1, 0] 
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear",
            }}
            style={{ rotate: '15deg' }}
          />
        ))}

        {[...Array(10)].map((_, i) => (
          <motion.rect
            key={`v-${i}`}
            x={`${i * 10}%`}
            y="-20%"
            width="1"
            height="40%"
            fill="url(#beam-grad)"
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ 
              y: "200%", 
              opacity: [0, 1, 0] 
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear",
            }}
            style={{ rotate: '15deg' }}
          />
        ))}
      </svg>
    </div>
  );
};

export default BackgroundBeams;
