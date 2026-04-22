import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, Environment, ContactShadows, Float } from '@react-three/drei';
import StructuralNode from './StructuralNode';

const InteractiveScene = () => {
  return (
    <div className="absolute inset-0 z-0 w-full h-full pointer-events-none">
      <Canvas dpr={[1, 2]} gl={{ antialias: true }}>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={35} />
          
          {/* Studio Lighting */}
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1.5} color="#ffffff" castShadow />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ffffff" />
          
          {/* Structural Centerpiece */}
          <StructuralNode />

          {/* Environmental realism */}
          <Environment preset="studio" />
          <ContactShadows 
            position={[0, -4, 0]} 
            opacity={0.3} 
            scale={20} 
            blur={2.5} 
            far={4.5} 
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default InteractiveScene;
