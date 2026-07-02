import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera, Environment, ContactShadows, OrbitControls } from '@react-three/drei';
import SkillCube from './SkillCube';
import { skillData, getSkillIconUrl } from '../data/projectData';
import StructuralNode from './StructuralNode';

const OrbitGroup = ({ selectedSkill, onSkillSelect, isMobile, allTech }) => {
  const groupRef = useRef();
  
  useFrame((state) => {
    if (groupRef.current && !selectedSkill) {
      groupRef.current.rotation.y += 0.005;
    }
  });

  const radius = isMobile ? 4.5 : 6;
  
  // Use dynamically fetched tech from GitHub repos, fallback to hardcoded skillData
  const activeTechList = allTech && allTech.length > 0 ? allTech : skillData.map(s => s.name);

  return (
    <group ref={groupRef}>
      {activeTechList.map((techName, i) => {
        const angle = (i / activeTechList.length) * Math.PI * 2;
        const x = Math.sin(angle) * radius;
        const z = Math.cos(angle) * radius;
        
        return (
          <SkillCube 
            key={techName}
            iconUrl={getSkillIconUrl(techName)}
            name={techName}
            position={[x, 0, z]}
            isSelected={selectedSkill === techName}
            onClick={() => onSkillSelect(techName)}
          />
        );
      })}
    </group>
  );
};

const SkillsOrbit3D = ({ selectedSkill, onSkillSelect, isMobile, allTech }) => {
  return (
    <div className="absolute inset-0 z-0 w-full h-full">
      <Canvas dpr={[1, isMobile ? 1 : 2]} gl={{ antialias: true }}>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, isMobile ? 6 : 5, isMobile ? 16 : 15]} fov={isMobile ? 45 : 35} />
          <OrbitControls makeDefault enableZoom={false} enablePan={false} minPolarAngle={Math.PI / 3} maxPolarAngle={Math.PI / 1.5} />
          
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} color="#ffffff" />
          
          <group position={[0, 0, 0]}>
            {/* The Skill Orbit */}
            <OrbitGroup selectedSkill={selectedSkill} onSkillSelect={onSkillSelect} isMobile={isMobile} allTech={allTech} />
          </group>

          <Environment preset="studio" />
          <ContactShadows 
            position={[0, -4, 0]} 
            opacity={0.2} 
            scale={20} 
            blur={2} 
            far={4.5} 
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default SkillsOrbit3D;
