import React, { useState, useEffect } from 'react';
import SkillsOrbit3D from './SkillsOrbit3D';
import MobileSkillGrid from './MobileSkillGrid';

const SkillsRotator = ({ onSkillSelect, selectedSkill, allTech }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="relative h-full w-full flex items-center justify-center overflow-visible">
      <SkillsOrbit3D 
        isMobile={isMobile}
        selectedSkill={selectedSkill}
        allTech={allTech} 
        onSkillSelect={(name) => {
          if (selectedSkill === name) onSkillSelect(null);
          else onSkillSelect(name);
        }} 
      />
    </div>
  );
};

export default SkillsRotator;