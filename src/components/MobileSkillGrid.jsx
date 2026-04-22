import React from 'react';
import { skillData, getSkillIconUrl } from '../data/projectData';
import { motion } from 'framer-motion';

const MobileSkillGrid = ({ onSkillSelect, selectedSkill }) => {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 px-4 py-8">
      {skillData.map((skill, index) => {
        const isSelected = selectedSkill === skill.name;
        return (
          <motion.button
            key={skill.name}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            onClick={() => onSkillSelect(isSelected ? null : skill.name)}
            className={`
              aspect-square rounded-2xl flex flex-col items-center justify-center gap-2
              transition-all duration-300 border
              ${isSelected 
                ? 'bg-white/10 border-white shadow-[0_0_20px_rgba(255,255,255,0.1)]' 
                : 'bg-white/5 border-white/10 hover:bg-white/10'}
            `}
          >
            <img 
              src={skill.iconUrl || getSkillIconUrl(skill.name)} 
              alt={skill.name} 
              className={`w-8 h-8 object-contain transition-all ${isSelected ? 'scale-110' : 'grayscale opacity-60'}`} 
            />
            <span className={`text-[8px] font-mono uppercase tracking-tighter ${isSelected ? 'text-white' : 'text-gray-500'}`}>
              {skill.name}
            </span>
          </motion.button>
        );
      })}
    </div>
  );
};

export default MobileSkillGrid;
