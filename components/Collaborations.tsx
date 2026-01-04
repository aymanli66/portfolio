import React from 'react';
import { motion } from 'motion/react';

const Collaborations: React.FC = () => {
  const brands = [
    { name: "VOGUE", logo: "VOGUE" },
    { name: "Cartier", logo: "Cartier" },
    { name: "FOUR SEASONS", logo: "FOUR SEASONS" },
    { name: "CHANEL", logo: "CHANEL" },
    { name: "GQ", logo: "GQ" },
    { name: "ROLEX", logo: "ROLEX" }
  ];

  return (
    <section className="py-20 bg-black text-white border-b border-white/10 relative overflow-hidden">
      {/* Gradient Overlays for Blur Effect */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      <div className="flex overflow-hidden">
        <motion.div
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex whitespace-nowrap gap-20 items-center opacity-40 grayscale"
        >
          {/* Duplicate the brands to create the infinite effect */}
          {[...brands, ...brands].map((brand, index) => (
            <div
              key={`${brand.name}-${index}`}
              className="flex-none px-10"
            >
              <span className="text-2xl md:text-3xl font-serif tracking-widest uppercase cursor-default">
                {brand.logo}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export { Collaborations };
