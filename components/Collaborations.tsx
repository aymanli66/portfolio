import { motion } from 'motion/react';

const brands = [
  'VOGUE',
  'ELLE',
  'BURJ AL ARAB',
  'ATLANTIS',
  'JUMEIRAH',
  'HARPER\'S BAZAAR',
  'FOUR SEASONS',
  'ARMANI'
];

export function Collaborations() {
  return (
    <section className="py-24 px-6 md:px-12 bg-white border-b border-black/5">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 text-muted-foreground"
          style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}
        >
          Trusted by leading brands
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
          {brands.map((brand, index) => (
            <motion.div
              key={brand}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-center justify-center"
            >
              <span 
                className="text-black/70 hover:text-black transition-colors"
                style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', letterSpacing: '0.1em', fontWeight: 500 }}
              >
                {brand}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
