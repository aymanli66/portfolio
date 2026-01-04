import React from 'react';
import { motion } from 'motion/react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "A rare ability to capture not just the product, but the soul of the brand. Absolutely distinct.",
      author: "Sarah J.",
      role: "Creative Director, L'Artisan Parfumeur"
    },
    {
      quote: "Ayman's eye for detail turned our campaign into a visual masterpiece. Calm, confident, premium.",
      author: "Marc D.",
      role: "CMO, The Ritz-Carlton"
    },
    {
      quote: "Minimalism that speaks volumes. The imagery elevated our entire digital presence.",
      author: "Elena R.",
      role: "Founder, Velvet & Stone"
    },
    {
      quote: "Every frame is a story. His work brings a level of sophistication we hadn't seen before.",
      author: "Julian M.",
      role: "Art Director, Vogue"
    }
  ];

  return (
    <section className="py-24 bg-black text-white relative overflow-hidden">
      {/* Title */}
      <div className="container mx-auto px-6 mb-16 text-center">
        <h2 className="text-[10px] uppercase tracking-[0.5em] text-white/40 mb-4 font-light">Client Testimonials</h2>
      </div>

      {/* Gradient Overlays for Blur Effect */}
      <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      <div className="flex overflow-hidden">
        <motion.div
          animate={{
            x: ["-50%", "0%"],
          }}
          transition={{
            duration: 40,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex whitespace-nowrap gap-12 items-stretch"
        >
          {/* Duplicate for infinite loop */}
          {[...testimonials, ...testimonials].map((t, i) => (
            <div
              key={i}
              className="flex-none w-[85vw] sm:w-[500px] md:w-[600px] bg-black/60 backdrop-blur-xl p-8 md:p-16 border border-white/10 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative"
              style={{
                boxShadow: 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.05)'
              }}
            >
              <blockquote className="font-serif text-xl md:text-2xl leading-relaxed mb-12 font-light italic opacity-90 whitespace-normal">
                "{t.quote}"
              </blockquote>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase tracking-widest font-bold text-white">{t.author}</span>
                <span className="text-[10px] uppercase tracking-wide text-white/40">{t.role}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export { Testimonials };
