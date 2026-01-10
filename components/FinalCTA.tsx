import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-48 bg-white text-black text-center overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, filter: "blur(20px)", y: 30 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          exit={{ opacity: 0, filter: "blur(20px)", y: -30 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="font-serif text-3xl md:text-5xl lg:text-6xl font-light mb-12 tracking-tight uppercase"
        >
          Ready to tell your <span className="italic">story</span>?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, filter: "blur(15px)", y: 20 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          exit={{ opacity: 0, filter: "blur(15px)", y: -20 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: false }}
          className="text-lg md:text-xl text-neutral-600 mb-16 max-w-3xl mx-auto font-light leading-relaxed"
        >
          Let’s create visuals that resonate with your audience and elevate your brand perception through cinematic precision.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: 10, filter: "blur(10px)" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false }}
        >
          <Link
            to="/contact"
            className="group inline-flex items-center gap-6 border border-black/10 bg-black text-white px-14 py-6 text-xs md:text-sm uppercase tracking-[0.3em] hover:bg-neutral-900 transition-all duration-500 rounded-full shadow-2xl"
          >
            Start a project
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export { FinalCTA };
