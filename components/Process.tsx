import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

const Process: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Discovery",
      description: "Understanding your brand's core essence, audience, and objectives to shape the visual narrative through deep research.",
      visual: "Research & Strategy"
    },
    {
      number: "02",
      title: "Concept",
      description: "Development of a unique artistic direction, meticulous mood boarding, and comprehensive logistical planning.",
      visual: "Artistic Direction"
    },
    {
      number: "03",
      title: "Production",
      description: "Executing the vision with precision, handling lighting, composition, and expert direction on set to capture the perfect frame.",
      visual: "On-Set Execution"
    },
    {
      number: "04",
      title: "Refinement",
      description: "High-end boutique retouching and editorial-grade post-production focused on every pixel for the final polished look.",
      visual: "Post-Production"
    }
  ];

  return (
    <section className="py-32 bg-black text-white overflow-hidden" id="process">
      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <div className="mb-32 flex flex-col items-center">
          <motion.span
            initial={{ opacity: 0, filter: "blur(10px)" }}
            whileInView={{ opacity: 0.4, filter: "blur(0px)" }}
            exit={{ opacity: 0, filter: "blur(10px)" }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            className="text-[10px] md:text-xs lg:text-sm uppercase tracking-[0.8em] mb-6"
          >
            The Workflow
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, filter: "blur(15px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, filter: "blur(15px)" }}
            transition={{ duration: 1.2, delay: 0.1 }}
            viewport={{ once: false, amount: 0.5 }}
            className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-center uppercase tracking-tight"
          >
            Sculpting <span className="italic uppercase-none">Excellence</span>
          </motion.h2>
        </div>

        {/* Timeline Line */}
        <div className="absolute left-1/2 top-[450px] bottom-0 w-[1px] bg-white/5 -translate-x-1/2 hidden md:block">
          <motion.div
            initial={{ scaleY: 0, opacity: 0 }}
            whileInView={{ scaleY: 1, opacity: 1 }}
            viewport={{ once: false, amount: 0.1, margin: "-10% 0px -10% 0px" }}
            style={{ originY: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/60 to-white/20"
          />
        </div>

        <div className="relative space-y-48 md:space-y-80">
          {steps.map((step, index) => (
            <div key={index} className={`flex flex-col md:flex-row items-center justify-between relative ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>

              {/* Content Side */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40, filter: "blur(20px)" }}
                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: false, amount: 0.4, margin: "-50px 0px -50px 0px" }}
                className={`w-full md:w-[40%] ${index % 2 === 0 ? 'text-left md:text-right' : 'text-left'}`}
              >
                <div className={`mb-8 inline-flex items-center gap-6 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <span className="font-serif text-6xl md:text-8xl lg:text-9xl 2xl:text-[10rem] text-white/5 tracking-tighter italic">
                    {step.number}
                  </span>
                  <div className="h-[1px] w-16 md:w-24 bg-white/10" />
                </div>
                <h3 className="font-serif text-4xl md:text-6xl lg:text-7xl 2xl:text-8xl mb-8 tracking-tight font-light whitespace-nowrap">{step.title}</h3>
                <p className="text-neutral-400 text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-light leading-relaxed max-w-md md:max-w-xl md:ml-auto md:mr-0 inline-block">
                  {step.description}
                </p>
              </motion.div>

              {/* Central Stop (Dot) */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center justify-center z-20">
                <motion.div
                  initial={{ scale: 0, opacity: 0, filter: "blur(10px)" }}
                  whileInView={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: false, amount: 0.5 }}
                  className="w-3 h-3 bg-white rounded-full relative shadow-[0_0_15px_rgba(255,255,255,0.5)]"
                >
                  <motion.div
                    animate={{ scale: [1, 2, 1], opacity: [0.3, 0.1, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute inset-[-12px] border border-white/30 rounded-full"
                  />
                </motion.div>
              </div>

              {/* Visual Side (Decorative/Visual Text) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, filter: "blur(25px)" }}
                whileInView={{ opacity: 0.15, scale: 1, filter: "blur(0px)" }}
                transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.3 }}
                className="hidden md:flex w-[40%] items-center justify-center h-48 border border-white/5 rounded-full"
              >
                <span className="font-serif text-3xl md:text-5xl uppercase tracking-[0.3em] font-extralight text-center px-10">
                  {step.visual}
                </span>
              </motion.div>

              {/* Mobile Separator */}
              <motion.div
                initial={{ opacity: 0, filter: "blur(5px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                className="h-[1px] w-24 bg-white/10 my-16 md:hidden"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Process };
