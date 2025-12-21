
import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate 3D transformation values
  const imageTranslateY = scrollY * 0.4;
  const imageScale = 1.1 + (scrollY * 0.0002);
  const textTranslateY = scrollY * -0.2;

  return (
    <section className="relative h-[115vh] w-full flex items-center justify-center overflow-hidden bg-black">
      {/* 3D Parallax Media */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=2400&q=90"
          className="w-full h-full object-cover transition-transform duration-100 ease-out"
          style={{ 
            transform: `translate3d(0, ${imageTranslateY}px, 0) scale(${imageScale})`,
            filter: 'brightness(0.3)'
          }}
          alt="Atmospheric Portrait"
        />
      </div>
      
      {/* High-End Typography */}
      <div 
        className="relative z-10 text-center flex flex-col items-center justify-center h-full px-6 transition-transform duration-100 ease-out"
        style={{ transform: `translate3d(0, ${textTranslateY}px, 0)` }}
      >
        <div className="mb-10 overflow-hidden">
          <span className="text-[10px] uppercase tracking-[1em] text-white/50 block animate-slideUp">
            Refining the Visual Dialogue
          </span>
        </div>
        
        <h1 className="text-[14vw] md:text-[10vw] font-serif leading-none tracking-tighter mb-16 animate-titleReveal">
          AYMAN
        </h1>
        
        <div className="flex space-x-12 items-center opacity-0 animate-fadeInDelay">
          <div className="text-[9px] tracking-[0.6em] uppercase font-light text-white/40">Black Edition</div>
          <div className="w-1 h-1 rounded-full bg-white/20" />
          <div className="text-[9px] tracking-[0.6em] uppercase font-light text-white/40">Studio 2025</div>
        </div>

        {/* Scroll Call to Action */}
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-6">
          <div className="w-[1px] h-20 bg-white/10 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-scrollLine" />
          </div>
          <span className="text-[7px] uppercase tracking-[0.5em] text-white/30 font-light">Explore Depth</span>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes slideUp {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes titleReveal {
          from { transform: scale(0.92) translateY(30px); opacity: 0; filter: blur(20px); }
          to { transform: scale(1) translateY(0); opacity: 1; filter: blur(0); }
        }
        @keyframes scrollLine {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        .animate-slideUp { animation: slideUp 1.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-titleReveal { animation: titleReveal 2.2s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-fadeInDelay { animation: slideUp 1.8s cubic-bezier(0.16, 1, 0.3, 1) 0.8s forwards; }
      `}} />
    </section>
  );
};

export default Hero;
