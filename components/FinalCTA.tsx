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
          transition={{ duration: 1.2 }}
          viewport={{ once: false }}
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-light mb-12 tracking-tight uppercase"
        >
          Ready to tell your <span className="italic">story</span>?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, filter: "blur(15px)", y: 20 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          exit={{ opacity: 0, filter: "blur(15px)", y: -20 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          viewport={{ once: false }}
          className="text-xl md:text-2xl text-neutral-600 mb-16 max-w-3xl mx-auto font-light leading-relaxed"
        >
          Let’s create visuals that resonate with your audience and elevate your brand perception through cinematic precision.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: 10, filter: "blur(10px)" }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: false }}
        >
          <Link
            to="/contact"
            className="group inline-flex items-center gap-4 border-2 border-black px-12 py-5 text-[10px] uppercase tracking-[0.4em] hover:bg-black hover:text-white transition-all duration-500 rounded-full"
          >
            Start a project
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export { FinalCTA };
