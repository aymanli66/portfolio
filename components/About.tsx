
import React from 'react';
import ParallaxImage from './ParallaxImage';

const About: React.FC = () => {
  return (
    <section id="about" className="py-64 px-6 md:px-12 bg-black border-y border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-32">
        <div className="w-full md:w-1/2 relative reveal">
          <ParallaxImage 
            src="https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=800&q=80" 
            alt="The Artist Profile"
            speed={-0.08}
            className="h-[700px] grayscale filter contrast-125"
          />
          <div className="absolute -bottom-12 -right-12 w-64 h-64 border-r border-b border-white/10 hidden lg:block" />
        </div>
        
        <div className="w-full md:w-1/2 space-y-12 reveal">
          <div className="space-y-4">
            <span className="text-[10px] uppercase tracking-[0.8em] text-white/30">The Mind Behind</span>
            <h2 className="text-5xl md:text-7xl font-serif leading-tight">Mastering <br/>Light & Ego</h2>
          </div>
          
          <p className="text-gray-400 leading-relaxed text-xl font-light max-w-lg">
            Ayman's approach is visceral. By stripping away the superfluous, he uncovers the architecture of the soul within the frame.
          </p>
          
          <div className="space-y-6 pt-12">
            <div className="flex items-center space-x-6 group cursor-default">
              <span className="text-white/20 text-xs font-mono group-hover:text-white transition-colors">01</span>
              <div className="h-[1px] w-12 bg-white/10 group-hover:w-24 transition-all duration-700" />
              <p className="text-[10px] uppercase tracking-[0.4em] text-gray-500 group-hover:text-white/70">Minimalist Composition</p>
            </div>
            <div className="flex items-center space-x-6 group cursor-default">
              <span className="text-white/20 text-xs font-mono group-hover:text-white transition-colors">02</span>
              <div className="h-[1px] w-12 bg-white/10 group-hover:w-24 transition-all duration-700" />
              <p className="text-[10px] uppercase tracking-[0.4em] text-gray-500 group-hover:text-white/70">Natural Light Mastery</p>
            </div>
            <div className="flex items-center space-x-6 group cursor-default">
              <span className="text-white/20 text-xs font-mono group-hover:text-white transition-colors">03</span>
              <div className="h-[1px] w-12 bg-white/10 group-hover:w-24 transition-all duration-700" />
              <p className="text-[10px] uppercase tracking-[0.4em] text-gray-500 group-hover:text-white/70">Analogue Precision</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
