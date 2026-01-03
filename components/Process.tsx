import { motion } from 'motion/react';

const steps = [
  {
    id: 1,
    number: '01',
    title: 'Discovery',
    description: 'We begin with an in-depth consultation to understand your brand, vision, and objectives.',
    image: 'https://images.unsplash.com/photo-1613473350016-1fe047d6d360?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBidXNpbmVzcyUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NzQ1MzkyOHww&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 2,
    number: '02',
    title: 'Concept Development',
    description: 'Together, we craft a visual narrative that aligns with your brand identity and resonates with your audience.',
    image: 'https://images.unsplash.com/photo-1633419946251-6d8b5dd33170?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwY3JhZnRzbWFuc2hpcHxlbnwxfHx8fDE3Njc0NTUxMjd8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 3,
    number: '03',
    title: 'Production',
    description: 'With meticulous attention to detail, each shot is composed to capture the essence of your brand.',
    image: 'https://images.unsplash.com/photo-1660018322139-0e58555df00d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZGl0b3JpYWwlMjBmYXNoaW9uJTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzY3NDAxNDUzfDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 4,
    number: '04',
    title: 'Refinement',
    description: 'Professional post-production ensures every image meets the highest standards of editorial excellence.',
    image: 'https://images.unsplash.com/photo-1703355685639-d558d1b0f63e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBvZmZpY2V8ZW58MXx8fHwxNzY3NDM5NjE2fDA&ixlib=rb-4.1.0&q=80&w=1080'
  }
];

export function Process() {
  return (
    <section className="py-32 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2
            className="mb-4 text-black"
            style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: '1.2', fontWeight: 400 }}
          >
            The Process
          </h2>
          <p
            className="text-gray-600 max-w-2xl mx-auto"
            style={{ fontFamily: 'var(--font-body)', fontSize: '1.125rem', lineHeight: '1.7', fontWeight: 300 }}
          >
            A refined approach to visual storytelling, from concept to delivery.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="space-y-24">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
            >
              <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                <p
                  className="text-gray-500 mb-4"
                  style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', letterSpacing: '0.1em', fontWeight: 500 }}
                >
                  {step.number}
                </p>
                <h3
                  className="mb-6 text-black"
                  style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', lineHeight: '1.2', fontWeight: 400 }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-gray-700"
                  style={{ fontFamily: 'var(--font-body)', fontSize: '1.125rem', lineHeight: '1.8', fontWeight: 300 }}
                >
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
