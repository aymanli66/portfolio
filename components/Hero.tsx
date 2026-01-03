import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black text-white">
      {/* Background Image - Placeholder for high-end portfolio shot */}
      <div
        className="absolute inset-0 z-0 opacity-60"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?q=80&w=2070&auto=format&fit=crop")',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* Overlay gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 z-10" />

      <div className="relative z-20 container mx-auto px-6 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-tight mb-8 tracking-tight font-light">
            Photo services for <br className="hidden md:block" />
            <span className="italic">premium brands</span> & refined experiences.
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
          className="flex justify-center"
        >
          <Link
            to="/contact"
            className="group flex items-center gap-3 px-8 py-4 bg-white text-black text-sm uppercase tracking-widest hover:bg-neutral-200 transition-colors duration-300"
          >
            Book a project
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
