
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { Collaborations } from './components/Collaborations';
import { Work } from './components/Work';
import { Value } from './components/Value';
import { Testimonials } from './components/Testimonials';
import { Process } from './components/Process';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
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
        <Collaborations />
      </div>

      <div className="reveal">
        <Work />
      </div>

      <div className="reveal">
        <Value />
      </div>

      <div className="reveal">
        <Testimonials />
      </div>

      <div className="reveal">
        <Process />
      </div>

      <div className="reveal">
        <FinalCTA />
      </div>

      <Footer />
    </main>
  );
};

export default App;
