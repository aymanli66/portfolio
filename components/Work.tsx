import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

type Category = 'All' | 'Fashion' | 'Taste' | 'Fragrances' | 'Corporate' | 'Events';

interface Project {
  id: number;
  category: Category;
  image: string;
  title: string;
}

const projects: Project[] = [
  { id: 1, category: 'Fashion', image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1000&auto=format&fit=crop', title: 'Editorial 01' },
  { id: 2, category: 'Taste', image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1000&auto=format&fit=crop', title: 'Culinary Art' },
  { id: 3, category: 'Fragrances', image: 'https://images.unsplash.com/photo-1595425233575-c0816827a51c?q=80&w=1000&auto=format&fit=crop', title: 'Essence' },
  { id: 4, category: 'Fashion', image: 'https://images.unsplash.com/photo-1627483262268-9c964f720292?q=80&w=1000&auto=format&fit=crop', title: 'Vogue Editorial' },
  { id: 5, category: 'Corporate', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop', title: 'Architectural' },
  { id: 6, category: 'Events', image: 'https://images.unsplash.com/photo-1519750157634-b6d493a0ea29?q=80&w=1000&auto=format&fit=crop', title: 'Gala Night' },
];

const Work: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('Fashion');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  const categories: Category[] = ['Fashion', 'Taste', 'Fragrances', 'Corporate', 'Events'];

  return (
    <section className="py-24 bg-black text-white" id="work">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl mb-12 text-center font-light">Selected Work</h2>

          <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-sm uppercase tracking-widest">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`pb-2 transition-colors duration-300 ${activeCategory === cat
                    ? 'border-b border-white text-white'
                    : 'text-neutral-500 hover:text-neutral-300'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="group relative aspect-[3/4] overflow-hidden bg-neutral-900 cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <p className="font-serif text-2xl tracking-wide">{project.title}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-16 text-center">
          <a href="#work" className="inline-block border border-white/20 px-8 py-3 text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-colors duration-300">
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export { Work };
