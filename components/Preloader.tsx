
import React, { useState, useEffect } from 'react';

const Preloader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Variable increments for a more "organic" loading feel
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 1200); // Wait for the transition
          return 100;
        }
        // Slower as it gets near 100
        const inc = prev > 80 ? Math.random() * 2 : Math.random() * 10;
        return Math.min(100, prev + inc);
      });
    }, 60);
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[200] bg-black flex flex-col items-center justify-center transition-opacity duration-1000 ease-in-out" style={{ opacity: progress === 100 ? 0 : 1 }}>
      <div className="relative mb-8 text-center">
        <div className="overflow-hidden">
          <h1 className="text-5xl md:text-8xl font-serif tracking-[0.3em] uppercase opacity-5 transition-transform duration-[2s]" style={{ transform: `scale(${1 + progress * 0.005})` }}>
            AYMAN
          </h1>
        </div>
        <div 
          className="absolute top-0 left-0 h-full overflow-hidden transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        >
          <h1 className="text-5xl md:text-8xl font-serif tracking-[0.3em] uppercase text-white whitespace-nowrap">
            AYMAN
          </h1>
        </div>
      </div>

      <div className="max-w-[300px] w-full px-6">
        <div className="w-full h-[1px] bg-white/5 relative mb-4">
          <div 
            className="absolute h-full bg-white transition-all duration-300 ease-out" 
            style={{ width: `${progress}%` }} 
          />
        </div>
        <div className="flex justify-between items-center text-[8px] tracking-[0.6em] font-light text-white/30 uppercase">
          <span>Initialising Space</span>
          <span>{Math.floor(progress)}%</span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
