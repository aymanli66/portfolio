import React from 'react';
import { motion } from 'motion/react';
import ParallaxImage from './ParallaxImage';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 md:py-64 px-6 md:px-12 bg-black border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-32">
        <motion.div
          initial={{ opacity: 0, x: -50, filter: "blur(20px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, x: -50, filter: "blur(20px)" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="w-full md:w-1/2 relative"
        >
          <ParallaxImage
            src="https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=800&q=80"
            alt="The Artist Profile"
            speed={-0.08}
            className="h-[500px] md:h-[800px] grayscale filter contrast-125 rounded-sm object-cover"
          />
          <div className="absolute -bottom-12 -right-12 w-64 h-64 border-r border-b border-white/10 hidden lg:block pointer-events-none" />
        </motion.div>

        <div className="w-full md:w-1/2 space-y-16">
          <div className="space-y-6">
            <motion.span
              initial={{ opacity: 0, filter: "blur(10px)" }}
              whileInView={{ opacity: 0.4, filter: "blur(0px)" }}
              exit={{ opacity: 0, filter: "blur(10px)" }}
              transition={{ duration: 1 }}
              viewport={{ once: false }}
              className="text-[10px] md:text-xs lg:text-sm uppercase tracking-[0.8em] text-white"
            >
              The Mind Behind
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30, filter: "blur(15px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(15px)" }}
              transition={{ duration: 1.2, delay: 0.1 }}
              viewport={{ once: false }}
              className="text-5xl md:text-8xl 2xl:text-9xl font-serif leading-none tracking-tighter"
            >
              Mastering <br />Light & <span className="italic">Ego</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, filter: "blur(15px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, filter: "blur(15px)" }}
            transition={{ duration: 1.2, delay: 0.2 }}
            viewport={{ once: false }}
            className="text-gray-400 leading-relaxed text-xl md:text-2xl 2xl:text-3xl font-light max-w-lg md:max-w-2xl"
          >
            Ayman's approach is visceral. By stripping away the superfluous, he uncovers the architecture of the soul within every frame he captures.
          </motion.p>

          <div className="space-y-8 pt-8">
            {[
              { id: "01", label: "Minimalist Composition" },
              { id: "02", label: "Natural Light Mastery" },
              { id: "03", label: "Analogue Precision" }
            ].map((skill, i) => (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, x: 30, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, x: 20, filter: "blur(10px)" }}
                transition={{ duration: 0.8, delay: 0.3 + (i * 0.1) }}
                viewport={{ once: false }}
                className="flex items-center space-x-6 group cursor-default"
              >
                <span className="text-white/20 text-xs md:text-sm font-mono group-hover:text-white transition-colors">{skill.id}</span>
                <div className="h-[1px] w-12 md:w-16 bg-white/10 group-hover:w-24 transition-all duration-700" />
                <p className="text-[10px] md:text-xs lg:text-sm uppercase tracking-[0.4em] text-gray-500 group-hover:text-white/70">{skill.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
