import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import CameraLensEffect from './CameraLensEffect';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black text-white pt-20">
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

      {/* Top gradient for navbar readability - covers top 1/3 */}
      <div
        className="absolute top-0 left-0 right-0 z-10"
        style={{
          height: '33.33vh',
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)',
        }}
      />

      {/* Camera Lens Effect - Behind Text */}
      <CameraLensEffect lensSize={500} focusIntensity={0.7} chromaticAberration={1.8} vignetteStrength={0.35} />

      <div className="relative z-40 container mx-auto px-6 text-center max-w-4xl flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(20px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -20, filter: "blur(20px)" }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          viewport={{ once: false }}
        >
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight mb-6 tracking-tight font-light">
            <span className="whitespace-nowrap">SHOWCASING CRAFTSMANSHIP</span> <br className="hidden md:block" />
            WITH <span className="italic">INTENTION</span>.
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(15px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -10, filter: "blur(15px)" }}
          transition={{ duration: 0.5, delay: 0.05, ease: 'easeOut' }}
          viewport={{ once: false }}
        >
          <p className="text-base md:text-lg lg:text-xl text-neutral-300 mb-10 font-light tracking-wide max-w-2xl mx-auto">
            I create premium photography for brands and businesses.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: false }}
          className="flex justify-center"
        >
          <Link
            to="/contact"
            className="group relative flex items-center pl-8 pr-4 py-1 md:py-2 lg:py-2 xl:py-2 bg-white/10 backdrop-blur-xl text-white border border-white/10 rounded-full hover:bg-white/20 hover:border-white/30 transition-all duration-500 hover:-translate-y-1"
          >
            <span className="text-[10px] md:text-[11px] lg:text-[12px] xl:text-[14px] font-bold uppercase tracking-[0.3em]">
              Book a project
            </span>
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full text-white flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
