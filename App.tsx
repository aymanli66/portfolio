
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import About from './components/About';
import StudioAssistant from './components/StudioAssistant';
import Preloader from './components/Preloader';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isLoading) {
      const reveals = document.querySelectorAll('.reveal');
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('active');
            }
          });
        },
        { threshold: 0.1 }
      );
      reveals.forEach((reveal) => observer.observe(reveal));
      return () => observer.disconnect();
    }
  }, [isLoading]);

  if (isLoading) {
    return <Preloader onComplete={() => setIsLoading(false)} />;
  }

  return (
    <main className="bg-black min-h-screen text-white overflow-x-hidden selection:bg-white selection:text-black">
      <Navbar />
      
      <Hero />
      
      <div className="reveal">
        <Gallery />
      </div>
      
      <div className="reveal">
        <About />
      </div>
      
      <div className="reveal">
        <StudioAssistant />
      </div>
      
      {/* Large Statement Section */}
      <section className="py-64 px-6 md:px-12 flex items-center justify-center text-center reveal">
        <div className="max-w-4xl">
          <h2 className="text-4xl md:text-7xl font-serif mb-12 italic leading-tight">
            "Capturing the soul of a moment is an act of preservation."
          </h2>
          <div className="w-12 h-[1px] bg-white/30 mx-auto" />
        </div>
      </section>

      {/* Contact Simple */}
      <section id="contact" className="py-32 px-6 md:px-12 bg-black text-center reveal border-t border-white/5">
        <div className="max-w-4xl mx-auto space-y-12">
          <span className="text-[10px] uppercase tracking-[0.5em] text-white/40">Inquiries</span>
          <h2 className="text-5xl md:text-8xl font-serif mb-8">Begin Dialogue</h2>
          <p className="text-gray-500 text-sm mb-12 tracking-widest uppercase">
            Limited Availability for Q4 2025
          </p>
          <a 
            href="mailto:studio@ayman.photo" 
            className="text-2xl font-serif border-b border-white/20 pb-4 hover:border-white transition-all inline-block hover:scale-105 duration-500"
          >
            studio@ayman.photo
          </a>
          
          <div className="flex justify-center space-x-12 pt-32 text-[8px] uppercase tracking-[0.6em] text-gray-700">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Vogue Portfolio</a>
            <a href="#" className="hover:text-white transition-colors">Inquiry</a>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 text-center border-t border-white/5">
        <p className="text-[8px] uppercase tracking-[0.5em] text-gray-800">
          &copy; {new Date().getFullYear()} Ayman Studio. Bespoke Photography Experience.
        </p>
      </footer>
    </main>
  );
};

export default App;
