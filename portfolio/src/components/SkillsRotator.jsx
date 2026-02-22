import React, { useState, useEffect, useRef } from 'react';
import { skillData } from '../data/projectData';

const SkillsRotator = ({ onSkillSelect, selectedSkill }) => {
  const [rotation, setRotation] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const [radius, setRadius] = useState(420); // INCREASED RADIUS to spread them out
  const autoRotateRef = useRef(null);
  
  const itemCount = skillData.length;
  const angleStep = 360 / itemCount;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setRadius(160);
      else if (window.innerWidth < 1024) setRadius(300);
      else setRadius(420); // Wider on Desktop
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleIconClick = (skillName) => {
    if (selectedSkill === skillName) {
      onSkillSelect(null);
      setIsAutoRotating(true);
    } else {
      onSkillSelect(skillName);
      setIsAutoRotating(false);
      snapToItem(skillName);
    }
  };

  useEffect(() => {
    if (!selectedSkill) setIsAutoRotating(true);
    else {
      setIsAutoRotating(false);
      snapToItem(selectedSkill);
    }
  }, [selectedSkill]);

  const snapToItem = (name) => {
    const index = skillData.findIndex(s => s.name === name);
    if (index !== -1) {
      const targetRotation = -index * angleStep;
      const currentMod = rotation % 360;
      let diff = targetRotation - currentMod;
      if (diff < -180) diff += 360;
      if (diff > 180) diff -= 360;
      setRotation(rotation + diff);
    }
  };

  useEffect(() => {
    if (isAutoRotating) {
      autoRotateRef.current = setInterval(() => {
        setRotation(prev => prev + 0.3); 
      }, 16);
    } else {
      clearInterval(autoRotateRef.current);
    }
    return () => clearInterval(autoRotateRef.current);
  }, [isAutoRotating]);

  return (
    <div className="relative h-full w-full flex items-center justify-center overflow-visible perspective-[1200px]">
       
      {/* GLOW */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none z-0" />
      
      <div 
        className="relative w-full h-full preserve-3d"
        style={{ 
            transform: `translateZ(-100px) rotateY(${rotation}deg)`, 
            transformOrigin: 'center center',
            transition: isAutoRotating ? 'none' : 'transform 1s cubic-bezier(0.2, 0.8, 0.2, 1)' 
        }}
      >
        {skillData.map((skill, index) => {
          const itemAngle = index * angleStep;
          const isSelected = selectedSkill === skill.name;
          
          // Logic to calculate visibility based on angle
          // This makes back items dim so they don't clutter the view
          const currentRotation = (itemAngle + rotation) % 360;
          const normalizedRotation = (currentRotation + 360) % 360;
          const isBack = normalizedRotation > 90 && normalizedRotation < 270;
          
          return (
            <div
              key={index}
              className="absolute top-1/2 left-1/2 cursor-pointer"
              style={{
                transform: `
                    translate(-50%, -50%) 
                    rotateY(${itemAngle}deg) 
                    translateZ(${radius}px)
                `,
                zIndex: isBack ? 0 : 50 // Ensure front items are clickable
              }}
              onClick={() => handleIconClick(skill.name)}
            >
               {/* Icon Card */}
               <div 
                 className={`
                    w-24 h-24 rounded-3xl flex items-center justify-center
                    backdrop-blur-md border transition-all duration-500 ease-out
                    shadow-[0_0_15px_rgba(0,0,0,0.5)] group relative
                    ${isSelected
                        ? 'bg-black/90 border-cyan-400 scale-125 z-50 animate-neon-pulse'
                        : `bg-zinc-900/40 border-white/5 
                           hover:opacity-100 hover:grayscale-0 hover:border-cyan-400 hover:bg-black/90 hover:scale-110
                           animate-float delay-${(index % 3) * 100}` 
                    }
                 `}
                 style={{ 
                    transform: `rotateY(${-itemAngle - rotation}deg)`,
                    // Make items in the back transparent so they don't overlap messy
                    opacity: isSelected ? 1 : (isBack ? 0.2 : 0.7),
                    filter: isSelected ? 'none' : (isBack ? 'blur(2px) grayscale(100%)' : 'grayscale(100%)')
                 }} 
               >
                  <img 
                    src={skill.iconUrl} 
                    alt={skill.name}
                    className="w-12 h-12 object-contain drop-shadow-2xl transition-all duration-500"
                  />
                  
                  {/* Hover restoration logic */}
                  <style>{`
                    .group:hover { opacity: 1 !important; filter: none !important; }
                  `}</style>
               </div>
               
               {/* Label */}
               <div 
                 className={`
                    absolute -bottom-24 left-1/2 -translate-x-1/2
                    text-base font-bold tracking-[0.3em] uppercase
                    transition-all duration-500 pointer-events-none whitespace-nowrap
                    ${isSelected ? 'text-cyan-400 opacity-100 translate-y-0 scale-110' : 'opacity-0 translate-y-4'}
                 `}
                 style={{ 
                    transform: `translateX(-50%) rotateY(${-itemAngle - rotation}deg)`
                 }}
               >
                 {skill.name}
               </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillsRotator;