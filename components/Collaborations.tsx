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
    <section className="py-20 bg-black text-white border-b border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between items-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="flex-1 text-center min-w-[120px]"
            >
              {/* In a real project, these would be SVGs or PNGs. Using text for now as requested by user constraints to not use placeholders unless generated.*/}
              <span className="text-2xl md:text-3xl font-serif tracking-widest uppercase hover:text-white transition-colors cursor-default">
                {brand.logo}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Collaborations };
