import React from 'react';

const Value: React.FC = () => {
  return (
    <section className="py-24 bg-black text-white flex items-center justify-center">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <div className="space-y-4">
          <h2 className="font-serif text-3xl md:text-5xl font-light leading-tight">
            Distilling essence into <span className="italic">visual identity</span>.
          </h2>
          <h2 className="font-serif text-3xl md:text-5xl font-light leading-tight text-white/80">
            Artistic direction with premium execution.
          </h2>
          <h2 className="font-serif text-3xl md:text-5xl font-light leading-tight text-white/60">
            Elevating brands through silence and space.
          </h2>
        </div>
      </div>
    </section>
  );
};

export { Value };
