import React from 'react';
import { motion } from 'motion/react';

const Value: React.FC = () => {
  const sentences = [
    "Distilling essence into visual identity.",
    "Artistic direction with premium execution.",
    "Elevating brands through silence and space."
  ];

  const fullText = sentences.join(" ");
  const words = fullText.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.5,
      },
    },
  };

  const child = {
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
    hidden: {
      opacity: 0,
      filter: "blur(20px)",
      y: 10,
      scale: 1.1,
    },
  };

  return (
    <section className="py-48 bg-black text-white relative flex items-center justify-center overflow-hidden">
      {/* Creative Flash Effect */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: [0, 0.5, 0] }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="absolute inset-0 bg-white z-20 pointer-events-none"
      />

      {/* Subtle organic light in background */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[150px] pointer-events-none"
      />

      <div className="container mx-auto px-6 max-w-6xl z-10 text-center">
        <motion.h2
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="font-serif text-3xl md:text-5xl lg:text-6xl font-light leading-[1.3] tracking-tight text-neutral-200"
        >
          {words.map((word, index) => {
            const cleanWord = word.replace(/[.,]/g, '').toLowerCase();
            const isItalic = cleanWord === 'identity' ||
              cleanWord === 'execution' ||
              cleanWord === 'space';
            return (
              <motion.span
                variants={child}
                key={index}
                className={`inline-block mr-[0.3em] ${isItalic ? 'italic text-white' : ''}`}
              >
                {word}
              </motion.span>
            );
          })}
        </motion.h2>
      </div>
    </section>
  );
};

export { Value };
