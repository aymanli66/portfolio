import React from 'react';
import { motion } from 'motion/react';

const Value: React.FC = () => {
  const values = [
    {
      text: "Distilling essence into visual identity.",
      gradient: "from-white via-neutral-200 to-neutral-500",
      delay: 0
    },
    {
      text: "Artistic direction with premium execution.",
      gradient: "from-[#F7E7CE] via-[#FFF5E6] to-[#D4AF37]", // Champagne/Gold
      delay: 0.2
    },
    {
      text: "Elevating brands through silence and space.",
      gradient: "from-[#E0E0E0] via-white to-neutral-400",
      delay: 0.4
    }
  ];

  return (
    <section className="py-48 bg-black text-white relative flex items-center justify-center overflow-hidden">
      {/* Subtle organic light in background */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[150px] pointer-events-none"
      />

      <div className="container mx-auto px-6 max-w-5xl z-10 text-center">
        <div className="flex flex-col gap-12 md:gap-20">
          {values.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.5, delay: v.delay, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="relative"
            >
              <h2
                className={`font-serif text-4xl md:text-6xl lg:text-7xl font-light leading-tight tracking-tight bg-gradient-to-r ${v.gradient} bg-clip-text text-transparent`}
                style={{
                  backgroundSize: '200% auto',
                }}
              >
                <motion.span
                  animate={{ backgroundPosition: ["0% center", "200% center"] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="inline-block"
                >
                  {v.text.split(' ').map((word, idx) => (
                    <span key={idx} className={word.toLowerCase().includes('identity') || word.toLowerCase().includes('execution') || word.toLowerCase().includes('space') ? 'italic' : ''}>
                      {word}{' '}
                    </span>
                  ))}
                </motion.span>
              </h2>
              {/* Premium Glass Bottom Line */}
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: "30%", opacity: 0.2 }}
                transition={{ duration: 2, delay: v.delay + 0.5 }}
                className="h-[1px] bg-white mx-auto mt-8 hidden md:block"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Value };
