import React from 'react';
import { motion } from 'motion/react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-black text-white border-t border-white/10 text-xs uppercase tracking-widest overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6"
      >
        <div className="font-serif text-xl normal-case tracking-normal">
          AYMAN LIMOURI
        </div>

        <nav className="flex gap-8">
          <a href="#" className="hover:text-neutral-400 transition-colors">Instagram</a>
          <a href="#" className="hover:text-neutral-400 transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-neutral-400 transition-colors">Email</a>
        </nav>

        <div className="flex gap-4 items-center">
          <span className="hover:text-white cursor-pointer transition-colors">EN</span>
          <span className="text-neutral-600">/</span>
          <span className="text-neutral-600 hover:text-white cursor-pointer transition-colors">AR</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="container mx-auto px-6 mt-8 text-center md:text-left text-neutral-600 text-[10px]"
      >
        &copy; {new Date().getFullYear()} AYMAN LIMOURI. All rights reserved.
      </motion.div>
    </footer>
  );
};

export { Footer };
