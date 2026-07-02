import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { RoundedBox, Center, Html } from '@react-three/drei';
import * as THREE from 'three';

const IconMesh = ({ iconUrl }) => {
  const [texture, setTexture] = useState(null);

  React.useEffect(() => {
    let active = true;
    
    const loadTexture = async (url) => {
      try {
        const res = await fetch(url);
        let svgText = await res.text();
        
        // Ensure SVG has intrinsic dimensions for TextureLoader
        if (!/<svg[^>]*\swidth=/.test(svgText)) {
          svgText = svgText.replace('<svg', '<svg width="256" height="256"');
        }
        
        const blob = new Blob([svgText], { type: 'image/svg+xml' });
        const objectUrl = URL.createObjectURL(blob);
        
        const loader = new THREE.TextureLoader();
        loader.load(
          objectUrl, 
          (tex) => {
            if (!active) return;
            tex.colorSpace = THREE.SRGBColorSpace;
            tex.minFilter = THREE.LinearFilter;
            tex.magFilter = THREE.LinearFilter;
            setTexture(tex);
            URL.revokeObjectURL(objectUrl);
          },
          undefined,
          (err) => {
            console.error('TextureLoader error:', err);
            URL.revokeObjectURL(objectUrl);
          }
        );
      } catch (err) {
        console.error('Error fetching SVG:', err);
      }
    };

    if (iconUrl) {
      loadTexture(iconUrl);
    }

    return () => { active = false; };
  }, [iconUrl]);

  if (!texture) return null;

  return (
    <group>
      {/* Front Face */}
      <mesh renderOrder={1} position={[0, 0, 0.001]}>
        <planeGeometry args={[0.6, 0.6]} />
        <meshBasicMaterial 
          map={texture} 
          transparent={true} 
          side={THREE.FrontSide} 
          depthTest={true}
          depthWrite={false}
        />
      </mesh>
      {/* Back Face (rotated 180deg to avoid mirroring) */}
      <mesh renderOrder={1} position={[0, 0, -0.001]} rotation={[0, Math.PI, 0]}>
        <planeGeometry args={[0.6, 0.6]} />
        <meshBasicMaterial 
          map={texture} 
          transparent={true} 
          side={THREE.FrontSide} 
          depthTest={true}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
};

const SkillCube = ({ iconUrl, name, position, isSelected, onClick }) => {
  const groupRef = useRef();
  const [hovered, setHovered] = useState(false);
  
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
      {/* 1. The Glass Cube - Highly Transparent with depthWrite={false} to allow inner items to show */}
      <RoundedBox args={[1, 1, 1]} radius={0.1} smoothness={4} renderOrder={0}>
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
          depthWrite={false}
        />
      </RoundedBox>


      {/* 2. The Icon - True WebGL Texture inside the cube */}
      <group rotation={[0, 0, 0]}>
        <IconMesh iconUrl={iconUrl} />
      </group>

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
