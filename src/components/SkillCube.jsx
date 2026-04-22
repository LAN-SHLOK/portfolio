import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { RoundedBox, useTexture } from '@react-three/drei';
import * as THREE from 'three';

const SkillCube = ({ iconUrl, name, position, isSelected, onClick }) => {
  const groupRef = useRef();
  const [hovered, setHovered] = useState(false);
  
  // Use texture for more reliable rendering
  const texture = useTexture(iconUrl);

  useFrame((state) => {
    if (groupRef.current) {
      const time = state.clock.getElapsedTime();
      groupRef.current.position.y = position[1] + Math.sin(time + position[0]) * 0.1;
      
      if (isSelected) {
        groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, 0, 0.1);
        groupRef.current.scale.setScalar(THREE.MathUtils.lerp(groupRef.current.scale.x, 1.4, 0.1));
      } else {
        groupRef.current.scale.setScalar(THREE.MathUtils.lerp(groupRef.current.scale.x, hovered ? 1.1 : 1, 0.1));
        groupRef.current.rotation.y += 0.005;
      }
    }
  });

  return (
    <group 
      ref={groupRef} 
      position={position}
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* 1. The Glass Cube - Highly Transparent */}
      <RoundedBox args={[1, 1, 1]} radius={0.1} smoothness={4}>
        <meshPhysicalMaterial
          roughness={0}
          metalness={0.2}
          transmission={1}
          thickness={0.1} 
          ior={1.4}
          clearcoat={1}
          clearcoatRoughness={0}
          transparent
          opacity={0.15}
          envMapIntensity={2}
          color="#ffffff"
        />
      </RoundedBox>

      {/* 2. The Icon - Using Sprite for guaranteed camera facing and visibility */}
      <sprite scale={[0.7, 0.7, 1]} position={[0, 0, 0]} renderOrder={10}>
        <spriteMaterial 
          map={texture} 
          transparent={true} 
          depthTest={false}
          opacity={isSelected ? 1 : 0.9}
          toneMapped={false}
        />
      </sprite>

      {/* 3. Inner Glow / Light Source for the Icon */}
      <pointLight 
        intensity={isSelected ? 1 : 0.3} 
        distance={2} 
        color="#ffffff" 
        position={[0, 0, 0]} 
      />
    </group>
  );
};

export default SkillCube;
