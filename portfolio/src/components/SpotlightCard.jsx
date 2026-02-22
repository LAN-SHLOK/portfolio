import React, { useRef, useState } from 'react';

const SpotlightCard = ({ children, className = "" }) => {
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      className={`spotlight-card ${className}`}
      style={{ "--mouse-x": `${position.x}px`, "--mouse-y": `${position.y}px` }}
    >
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
};

export default SpotlightCard;