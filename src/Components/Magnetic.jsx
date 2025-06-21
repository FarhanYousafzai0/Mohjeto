import React, { useRef } from 'react';
import { gsap } from 'gsap';

const Magnetic = ({ children, strength = 0.3 }) => {
  const magneticRef = useRef(null);
  
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { width, height, left, top } = magneticRef.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * strength;
    const y = (clientY - (top + height / 2)) * strength;
    
    gsap.to(magneticRef.current, {
      x,
      y,
      duration: 1,
      ease: "elastic.out(1, 0.3)"
    });
  };

  const handleMouseLeave = () => {
    gsap.to(magneticRef.current, {
      x: 0,
      y: 0,
      duration: 1,
      ease: "elastic.out(1, 0.3)"
    });
  };

  return (
    <div
      ref={magneticRef}
      className="magnetic-element inline-block"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
};

export default Magnetic;