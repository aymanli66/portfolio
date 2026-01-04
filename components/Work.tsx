import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MasonryPhotoAlbum } from "react-photo-album";
import "react-photo-album/masonry.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

// Categories for the portfolio
type Category = 'Fashion' | 'Taste' | 'Fragrances' | 'Corporate' | 'Events';

interface Photo {
  src: string;
  width: number;
  height: number;
  category: Category;
  title: string;
}

const photos: Photo[] = [
  // Fashion
  { src: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200', width: 3, height: 4, category: 'Fashion', title: 'Editorial Noir' },
  { src: 'https://images.unsplash.com/photo-1627483262268-9c964f720292?q=80&w=1200', width: 4, height: 5, category: 'Fashion', title: 'Vogue Motion' },
  { src: 'https://images.unsplash.com/photo-1539109132382-381bb3f1c2b3?q=80&w=1200', width: 3, height: 4, category: 'Fashion', title: 'Parisian Night' },
  { src: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200', width: 4, height: 6, category: 'Fashion', title: 'Minimalist Form' },
  { src: 'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?q=80&w=1200', width: 3, height: 4, category: 'Fashion', title: 'Silk & Shadow' },
  { src: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=1200', width: 4, height: 5, category: 'Fashion', title: 'Golden Hour' },

  // Taste
  { src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1200', width: 4, height: 3, category: 'Taste', title: 'Liquid Gold' },
  { src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200', width: 16, height: 9, category: 'Taste', title: 'Rustic Texture' },
  { src: 'https://images.unsplash.com/photo-1476224489421-4ac359f47ab7?q=80&w=1200', width: 3, height: 2, category: 'Taste', title: 'Signature Dish' },
  { src: 'https://images.unsplash.com/photo-1547512111-c7a7ad660a62?q=80&w=1200', width: 4, height: 5, category: 'Taste', title: 'Culinary Precision' },
  { src: 'https://images.unsplash.com/photo-1605273392436-ba4849df0a9c?q=80&w=1200', width: 3, height: 4, category: 'Taste', title: 'Organic Tone' },

  // Fragrances
  { src: 'https://images.unsplash.com/photo-1595425233575-c0816827a51c?q=80&w=1200', width: 3, height: 4, category: 'Fragrances', title: 'Essence 01' },
  { src: 'https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1200', width: 4, height: 5, category: 'Fragrances', title: 'Glass & Light' },
  { src: 'https://images.unsplash.com/photo-1512568448817-1996d4c44d93?q=80&w=1200', width: 4, height: 3, category: 'Fragrances', title: 'Botanical Note' },
  { src: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=1200', width: 3, height: 4, category: 'Fragrances', title: 'Morning Dew' },
  { src: 'https://images.unsplash.com/photo-1563170351-be39c882bdc9?q=80&w=1200', width: 4, height: 5, category: 'Fragrances', title: 'Oud Mystery' },

  // Corporate
  { src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200', width: 16, height: 9, category: 'Corporate', title: 'The Monolith' },
  { src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200', width: 3, height: 2, category: 'Corporate', title: 'Structure' },
  { src: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1200', width: 4, height: 3, category: 'Corporate', title: 'Perspective' },
  { src: 'https://images.unsplash.com/photo-1489769002049-ccd828976a6c?q=80&w=1200', width: 3, height: 4, category: 'Corporate', title: 'Minimalist Interior' },

  // Events
  { src: 'https://images.unsplash.com/photo-1519750157634-b6d493a0ea29?q=80&w=1200', width: 3, height: 2, category: 'Events', title: 'Gala 2025' },
  { src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200', width: 4, height: 3, category: 'Events', title: 'Exclusive Soirée' },
  { src: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=1200', width: 16, height: 9, category: 'Events', title: 'Ambient Light' },
  { src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200', width: 3, height: 2, category: 'Events', title: 'Celebration Detail' },
];

const Work: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('Fashion');
  const [index, setIndex] = useState(-1);

  const filteredPhotos = photos.filter(p => p.category === activeCategory);
  const categories: Category[] = ['Fashion', 'Taste', 'Fragrances', 'Corporate', 'Events'];

  return (
    <section className="py-24 bg-black text-white" id="work">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-24 md:mb-32">
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light uppercase tracking-tight text-center mb-16 md:mb-24">
            Selected Work
          </h2>

          <div className="relative w-full max-w-7xl py-6 md:py-10 flex flex-wrap lg:flex-nowrap justify-center lg:justify-between items-center px-4 md:px-12 text-[10px] md:text-xs lg:text-sm uppercase tracking-[0.4em]">
            {/* Top Border - Long Overflow with horizontal fade */}
            <div className="absolute top-0 -left-[20%] -right-[20%] h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative flex-1 py-4 transition-all duration-700 text-center whitespace-nowrap group ${activeCategory === cat
                  ? 'text-white'
                  : 'text-neutral-500 hover:text-neutral-300'
                  }`}
              >
                <span className="relative z-10 px-4 transition-colors duration-500">{cat}</span>

                {/* Active Tab Contour (Hard Case Empty) */}
                {activeCategory === cat && (
                  <motion.div
                    layoutId="activeCategoryCase"
                    className="absolute inset-y-1 md:inset-y-0 inset-x-0 md:inset-x-2 border border-white/60"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 35,
                      mass: 1,
                      restDelta: 0.001
                    }}
                  />
                )}

                {/* Subtle Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <div className="absolute inset-y-4 inset-x-8 bg-white/[0.02] blur-md rounded-full" />
                </div>
              </button>
            ))}

            {/* Bottom Border - Long Overflow with horizontal fade */}
            <div className="absolute bottom-0 -left-[20%] -right-[20%] h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
          </div>
        </div>

        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="gallery-container max-w-6xl mx-auto"
        >
          <MasonryPhotoAlbum
            columns={(containerWidth) => {
              if (containerWidth < 640) return 2;
              if (containerWidth < 1024) return 3;
              return 5;
            }}
            photos={filteredPhotos}
            onClick={({ index }) => setIndex(index)}
            spacing={2}
            padding={2}
            render={{
              photo: (props: any) => {
                const { photo, wrapperStyle, imageProps } = props;
                if (!photo) return null;
                return (
                  <div
                    style={wrapperStyle}
                    className="group relative cursor-pointer overflow-hidden"
                  >
                    <img
                      {...imageProps}
                      alt={photo.title}
                      className="w-full h-auto block transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-[2px]">
                      <p className="font-serif text-xs tracking-[0.2em] text-white uppercase text-center px-4">
                        {photo.title}
                      </p>
                    </div>
                  </div>
                );
              }
            }}
          />
        </motion.div>

        <Lightbox
          index={index}
          slides={filteredPhotos.map(p => ({
            src: p.src,
            title: p.title,
            description: p.category // Using category as a subtitle/description
          }))}
          open={index >= 0}
          close={() => setIndex(-1)}
          plugins={[Captions, Fullscreen, Thumbnails, Zoom]}
        />

        <div className="mt-20 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block border border-white/10 px-12 py-4 text-[9px] uppercase tracking-[0.5em] hover:bg-white hover:text-black transition-all duration-500 rounded-full"
          >
            Explore Portfolio
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export { Work };
