import React from 'react';
import { motion } from 'motion/react';

const Process: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Discovery",
      description: "Understanding your brand's core essence, audience, and objectives to shape the visual narrative."
    },
    {
      number: "02",
      title: "Concept",
      description: "Development of a unique artistic direction, mood boards, and logistical planning."
    },
    {
      number: "03",
      title: "Production",
      description: "Executing the vision with precision, handling lighting, composition, and direction on set."
    },
    {
      number: "04",
      title: "Refinement",
      description: "High-end retouching and editorial-grade post-production for the final polished look."
    }
  ];

  return (
    <section className="py-24 bg-black text-white" id="process">
      <div className="container mx-auto px-6">
        <div className="mb-16 border-b border-white/10 pb-4">
          <h2 className="font-serif text-4xl md:text-5xl font-light">The Process</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group"
            >
              <span className="block text-sm font-bold text-neutral-600 mb-4 group-hover:text-white transition-colors duration-300">
                /{step.number}
              </span>
              <h3 className="font-serif text-2xl mb-3">{step.title}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed max-w-xs">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Process };
