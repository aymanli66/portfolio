import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black text-white">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover opacity-60"
        >
          <source src="/heroShowcase.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Overlay gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/40 z-10" />

      <div className="relative z-20 container mx-auto px-6 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl leading-tight mb-6 tracking-tight font-light">
            SHOWCASING CRAFTSMANSHIP <br className="hidden md:block" />
            WITH <span className="italic">INTENTION</span>.
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
        >
          <p className="text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-neutral-300 mb-10 font-light tracking-wide max-w-2xl mx-auto">
            I create premium photography for brands and businesses.
          </p>
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
