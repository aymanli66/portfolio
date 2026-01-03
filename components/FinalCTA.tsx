import { motion } from 'motion/react';

export function FinalCTA() {
  return (
    <section className="relative py-40 px-6 md:px-12 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1647956450271-2ff54205bebf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwYXJjaGl0ZWN0dXJlJTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzY3NDI2NzA1fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Contact"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto text-center text-white">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8"
          style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: '1.2', fontWeight: 400 }}
        >
          Let's Create Something Extraordinary
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white/90 mb-12 max-w-2xl mx-auto"
          style={{ fontFamily: 'var(--font-body)', fontSize: '1.25rem', lineHeight: '1.8', fontWeight: 300 }}
        >
          Ready to elevate your brand's visual narrative? Let's discuss your next project.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white text-black px-12 py-4 hover:bg-white/90 transition-all duration-300"
          style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 500 }}
        >
          Get in Touch
        </motion.button>
      </div>
    </section>
  );
}
