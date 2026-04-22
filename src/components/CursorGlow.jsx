import React, { useEffect, useState } from 'react';

const CursorGlow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      className="fixed inset-0 pointer-events-none z-[1] overflow-hidden"
      style={{
        background: `radial-gradient(600px at ${position.x}px ${position.y}px, rgba(0, 242, 255, 0.05), transparent 80%)`
      }}
    />
  );
};

export default CursorGlow;
