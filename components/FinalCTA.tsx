import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-32 bg-white text-black text-center">
      <div className="container mx-auto px-6">
        <h2 className="font-serif text-5xl md:text-7xl font-light mb-8 tracking-tight">
          Ready to tell your story?
        </h2>
        <p className="text-lg md:text-xl text-neutral-600 mb-12 max-w-2xl mx-auto font-light">
          Let’s create visuals that resonate with your audience and elevate your brand perception.
        </p>

        <Link
          to="/contact"
          className="inline-flex items-center gap-3 border-b-2 border-black pb-1 text-sm uppercase tracking-widest hover:text-neutral-600 hover:border-neutral-600 transition-all duration-300"
        >
          Start a project
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
};

export { FinalCTA };
