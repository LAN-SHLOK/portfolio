import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshTransmissionMaterial, Float, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

const StructuralNode = () => {
  const groupRef = useRef();
  const cubeRefs = useRef([]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const { x, y } = state.mouse;

    // Smooth Group Rotation (Parallax)
    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, (x * Math.PI) / 10 + time * 0.1, 0.05);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, (y * Math.PI) / 10, 0.05);
    }

    // Individual Cube Motion (Modular assembly feel)
    cubeRefs.current.forEach((cube, i) => {
      if (cube) {
        const offset = i * 0.5;
        cube.position.y = Math.sin(time + offset) * 0.2;
        cube.rotation.x = Math.cos(time + offset) * 0.1;
      }
    });
  });

  const cubeData = [
    { pos: [0, 0, 0], scale: 2 },
    { pos: [2, 0, 0], scale: 0.8 },
    { pos: [-2, 0, 0], scale: 0.8 },
    { pos: [0, 2, 0], scale: 0.8 },
    { pos: [0, -2, 0], scale: 0.8 },
    { pos: [1.2, 1.2, 0], scale: 0.5 },
    { pos: [-1.2, -1.2, 0], scale: 0.5 },
  ];

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <group ref={groupRef}>
        {cubeData.map((data, i) => (
          <RoundedBox
            key={i}
            ref={(el) => (cubeRefs.current[i] = el)}
            position={data.pos}
            args={[data.scale, data.scale, data.scale]}
            radius={0.05}
            smoothness={4}
          >
            <MeshTransmissionMaterial
              backside
              backsideThickness={5}
              thickness={2}
              chromaticAberration={0.02}
              anisotropy={0.1}
              distortion={0}
              distortionScale={0}
              temporalDistortion={0}
              clearcoat={1}
              attenuationDistance={0.5}
              attenuationColor="#ffffff"
              color="#ffffff"
              opacity={0.3}
              transparent
            />
          </RoundedBox>
        ))}

      </group>
    </Float>
  );
};

export default StructuralNode;
