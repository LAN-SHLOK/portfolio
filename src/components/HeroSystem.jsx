import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, PresentationControls, MeshDistortMaterial, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

const GeometricSystem = ({ isMobile }) => {
  const meshRef = useRef();
  const groupRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.cos(time / 4) / 4;
      meshRef.current.rotation.y = Math.sin(time / 2) / 2;
    }
    
    // Subtle mouse reaction
    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        (state.mouse.x * Math.PI) / 20,
        0.1
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        (-state.mouse.y * Math.PI) / 20,
        0.1
      );
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
        <mesh ref={meshRef}>
          <octahedronGeometry args={[2, 0]} />
          <meshPhysicalMaterial
            color="#ffffff"
            transmission={0.8}
            thickness={1}
            roughness={0.1}
            envMapIntensity={1}
            transparent
            opacity={0.2}
          />
        </mesh>
        
        {/* Wireframe overlay */}
        <mesh rotation={[0, Math.PI / 4, 0]}>
          <octahedronGeometry args={[2.05, 0]} />
          <meshBasicMaterial color="#06b6d4" wireframe transparent opacity={0.1} />
        </mesh>

        {/* Small floating particles/cubes - reduced on mobile */}
        {[...Array(isMobile ? 2 : 5)].map((_, i) => (
          <Float key={i} speed={2} rotationIntensity={1} floatIntensity={0.5} position={[
            Math.sin(i) * 3.5,
            Math.cos(i) * 3.5,
            Math.sin(i * 2) * 2
          ]}>
            <mesh>
              <boxGeometry args={[0.15, 0.15, 0.15]} />
              <meshBasicMaterial color="#ffffff" transparent opacity={0.3} />
            </mesh>
          </Float>
        ))}
      </Float>
    </group>
  );
};

const HeroSystem = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="absolute inset-0 -z-10 w-full h-full opacity-60 pointer-events-none">
      <Canvas dpr={[1, isMobile ? 1 : 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={50} />
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        
        <PresentationControls
          global
          config={{ mass: 2, tension: 500 }}
          snap={{ mass: 4, tension: 1500 }}
          rotation={[0, 0, 0]}
          polar={[-Math.PI / 6, Math.PI / 6]}
          azimuth={[-Math.PI / 4, Math.PI / 4]}
        >
          <GeometricSystem isMobile={isMobile} />
        </PresentationControls>
      </Canvas>
    </div>
  );
};

export default HeroSystem;
