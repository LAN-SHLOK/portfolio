import React, { useEffect } from 'react';
import 'aframe';

const AFrameBackground = () => {
  return (
    <div className="fixed inset-0 z-[-2] pointer-events-none opacity-40">
      <a-scene 
        embedded 
        vr-mode-ui="enabled: false"
        style={{ height: '100%', width: '100%' }}
      >
        <a-sky color="#030303"></a-sky>
        
        {/* Floating Cubes (Neural Nodes) */}
        {[...Array(20)].map((_, i) => (
          <a-box
            key={i}
            position={`${Math.random() * 20 - 10} ${Math.random() * 20 - 10} ${Math.random() * -20}`}
            rotation={`${Math.random() * 360} ${Math.random() * 360} ${Math.random() * 360}`}
            color="#00f2ff"
            material="transparent: true; opacity: 0.1; wireframe: true"
            animation={`property: position; to: ${Math.random() * 20 - 10} ${Math.random() * 20 - 10} ${Math.random() * -20}; dur: ${10000 + Math.random() * 20000}; easing: linear; loop: true`}
            animation__rotate={`property: rotation; to: 360 360 360; dur: 20000; easing: linear; loop: true`}
          ></a-box>
        ))}

        {/* Atmospheric Light */}
        <a-light type="ambient" color="#333"></a-light>
        <a-light type="point" intensity="0.5" position="2 4 4" color="#00f2ff"></a-light>
        
        <a-entity position="0 0 0">
          <a-camera active="true" wasd-controls-enabled="false" look-controls-enabled="false"></a-camera>
        </a-entity>
      </a-scene>
    </div>
  );
};

export default AFrameBackground;
