
import React from 'react';
import { PHOTOS } from '../constants';
import ParallaxImage from './ParallaxImage';

const Gallery: React.FC = () => {
  return (
    <section id="works" className="py-48 px-6 md:px-24 bg-black">
      <div className="max-w-[1800px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-48 space-y-12 md:space-y-0 reveal">
          <div className="max-w-2xl">
            <span className="text-[9px] uppercase tracking-[0.8em] text-white/20 block mb-8 italic">Curated Archive</span>
            <h2 className="text-6xl md:text-8xl font-serif leading-none">The Vision</h2>
          </div>
          <p className="text-gray-600 text-[10px] tracking-[0.5em] leading-loose uppercase max-w-xs text-left md:text-right font-light">
            A precise study of geometric form and human emotion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-32 gap-y-64">
          {PHOTOS.map((photo, index) => (
            <div 
              key={photo.id} 
              className={`group reveal ${
                index % 2 === 1 ? 'md:mt-80' : ''
              }`}
            >
              <ParallaxImage 
                src={photo.url} 
                alt={photo.title}
                speed={0.12}
                className="aspect-[4/5] bg-[#050505] mb-12 shadow-2xl"
              />
              
              <div className="space-y-6 px-4">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-3xl font-serif tracking-tight transition-all duration-700 group-hover:pl-4">
                    {photo.title}
                  </h3>
                  <span className="text-[9px] uppercase tracking-widest text-white/10 font-mono">Series // 0{index + 1}</span>
                </div>
                <div className="h-[1px] w-full bg-white/5 overflow-hidden">
                  <div className="w-0 h-full bg-white/30 transition-all duration-1000 group-hover:w-full" />
                </div>
                <div className="flex justify-between">
                  <p className="text-[9px] uppercase tracking-[0.5em] text-gray-500 font-light">
                    {photo.category}
                  </p>
                  <button className="text-[8px] uppercase tracking-[0.3em] text-white/20 hover:text-white transition-colors">
                    Technical Specifications
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
