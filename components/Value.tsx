import { motion } from 'motion/react';

export function Value() {
  return (
    <section className="py-32 px-6 md:px-12 bg-black text-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
          style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: '1.2', fontWeight: 400 }}
        >
          Crafting Visual Identity
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          <p 
            className="text-white/80"
            style={{ fontFamily: 'var(--font-body)', fontSize: '1.25rem', lineHeight: '1.8', fontWeight: 300 }}
          >
            Every image tells a story. Through meticulous artistic direction and premium execution, 
            I create visual narratives that elevate your brand's presence and connect with your audience on a deeper level.
          </p>
          <p 
            className="text-white/80"
            style={{ fontFamily: 'var(--font-body)', fontSize: '1.25rem', lineHeight: '1.8', fontWeight: 300 }}
          >
            From editorial fashion to culinary experiences, each project is approached with the same dedication 
            to authenticity, elegance, and timeless aesthetics.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
