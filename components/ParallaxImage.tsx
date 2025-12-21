
import React, { useRef, useState, useEffect } from 'react';

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  speed?: number; // Speed factor for the Y-axis mapping
}

const ParallaxImage: React.FC<ParallaxImageProps> = ({ src, alt, className = "", speed = 0.15 }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [translateY, setTranslateY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate position relative to viewport
      // If the image is in the center of the screen, offset is 0
      const centerOffset = (rect.top + rect.height / 2) - windowHeight / 2;
      
      // Apply parallax factor
      setTranslateY(centerOffset * speed);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial position
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div ref={containerRef} className={`parallax-container ${className}`}>
      <img 
        src={src} 
        alt={alt}
        className="parallax-image absolute left-0 w-full object-cover transition-transform duration-100 ease-out grayscale-[30%] hover:grayscale-0"
        style={{ transform: `translate3d(0, ${translateY}px, 0) scale(1.1)` }}
      />
    </div>
  );
};

export default ParallaxImage;
