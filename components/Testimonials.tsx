import { motion } from 'motion/react';

const testimonials = [
  {
    id: 1,
    quote: "Ayman's ability to capture the essence of our brand through his lens is truly remarkable. Every shot feels intentional and elevated.",
    author: "Sarah Al-Mansouri",
    position: "Creative Director, Luxury Hospitality Group"
  },
  {
    id: 2,
    quote: "Working with Ayman transformed how we present our culinary creations. His editorial eye brought a new dimension to our visual identity.",
    author: "Chef Marcus Laurent",
    position: "Executive Chef, Michelin-starred Restaurant"
  },
  {
    id: 3,
    quote: "The level of professionalism and artistic vision Ayman brings is unparalleled. Our fragrance campaign exceeded all expectations.",
    author: "Layla Hassan",
    position: "Brand Manager, Premium Fragrances"
  }
];

export function Testimonials() {
  return (
    <section className="py-32 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 text-gray-500"
          style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}
        >
          Client Testimonials
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white p-10 border border-black/5"
            >
              <p
                className="mb-8 text-black/90"
                style={{ fontFamily: 'var(--font-body)', fontSize: '1.125rem', lineHeight: '1.7', fontWeight: 300 }}
              >
                "{testimonial.quote}"
              </p>
              <div className="border-t border-black/10 pt-6">
                <p
                  className="mb-1 text-black"
                  style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', fontWeight: 500 }}
                >
                  {testimonial.author}
                </p>
                <p
                  className="text-gray-500"
                  style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', lineHeight: '1.5' }}
                >
                  {testimonial.position}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
