import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

type Category = 'All' | 'Fashion' | 'Taste' | 'Fragrances' | 'Corporate' | 'Events';

interface WorkItem {
  id: number;
  category: Category;
  type: 'image' | 'video';
  src: string;
  title: string;
}

const workItems: WorkItem[] = [
  {
    id: 1,
    category: 'Fashion',
    type: 'video',
    src: 'https://cdn.coverr.co/videos/coverr-fashion-model-posing-in-neon-lights-5674/1080p.mp4',
    title: 'Editorial Fashion Campaign'
  },
  {
    id: 2,
    category: 'Fashion',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1562765480-ddb93a1069c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWdoJTIwZW5kJTIwZmFzaGlvbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NzQ1NTEyNnww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Luxury Portrait Series'
  },
  {
    id: 3,
    category: 'Taste',
    type: 'video',
    src: 'https://cdn.coverr.co/videos/coverr-chef-preparing-gourmet-dish-3456/1080p.mp4',
    title: 'Fine Dining Experience'
  },
  {
    id: 4,
    category: 'Taste',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1695606452735-a161ad7217d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwZGluaW5nJTIwZXhwZXJpZW5jZXxlbnwxfHx8fDE3Njc0NTUxMjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Restaurant Editorial'
  },
  {
    id: 5,
    category: 'Fragrances',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1739190940453-20900e9d18fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJmdW1lJTIwZnJhZ3JhbmNlJTIwbHV4dXJ5fGVufDF8fHx8MTc2NzQ1NTEyNXww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Luxury Fragrance Collection'
  },
  {
    id: 6,
    category: 'Fragrances',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1633419946251-6d8b5dd33170?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwY3JhZnRzbWFuc2hpcHxlbnwxfHx8fDE3Njc0NTUxMjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Artisan Perfumery'
  },
  {
    id: 7,
    category: 'Corporate',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1613473350016-1fe047d6d360?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBidXNpbmVzcyUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NzQ1MzkyOHww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Corporate Portraits'
  },
  {
    id: 8,
    category: 'Corporate',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1703355685639-d558d1b0f63e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBvZmZpY2V8ZW58MXx8fHwxNzY3NDM5NjE2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Modern Workspace'
  },
  {
    id: 9,
    category: 'Events',
    type: 'video',
    src: 'https://cdn.coverr.co/videos/coverr-champagne-glass-at-party-4567/1080p.mp4',
    title: 'Luxury Event Coverage'
  },
  {
    id: 10,
    category: 'Events',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1647956450271-2ff54205bebf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwYXJjaGl0ZWN0dXJlJTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzY3NDI2NzA1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Architectural Events'
  }
];

const categories: Category[] = ['All', 'Fashion', 'Taste', 'Fragrances', 'Corporate', 'Events'];

export function Work() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const sliderRef = useRef<Slider>(null);

  const filteredItems = activeCategory === 'All'
    ? workItems
    : workItems.filter(item => item.category === activeCategory);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      }
    ],
    appendDots: (dots: React.ReactNode) => (
      <div className="mt-12">
        <ul className="flex justify-center gap-2"> {dots} </ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-2 h-2 rounded-full bg-black/20 hover:bg-black/40 transition-colors" />
    ),
  };

  return (
    <section className="py-32 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2
            className="mb-4"
            style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: '1.2', fontWeight: 400 }}
          >
            Selected Work
          </h2>
          <p
            className="text-muted-foreground max-w-2xl mx-auto"
            style={{ fontFamily: 'var(--font-body)', fontSize: '1.125rem', lineHeight: '1.7', fontWeight: 300 }}
          >
            A curated collection of editorial photography for premium brands and refined experiences.
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                sliderRef.current?.slickGoTo(0);
              }}
              className={`px-6 py-2 transition-all duration-300 border ${activeCategory === category
                  ? 'bg-black text-white border-black'
                  : 'bg-white text-black border-black/20 hover:border-black/40'
                }`}
              style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', letterSpacing: '0.05em' }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Carousel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="work-carousel"
          >
            <Slider ref={sliderRef} {...settings}>
              {filteredItems.map((item) => (
                <div key={item.id} className="px-4">
                  <div className="group cursor-pointer">
                    <div className="aspect-[3/4] overflow-hidden bg-white mb-6 relative">
                      {item.type === 'video' ? (
                        <video
                          src={item.src}
                          autoPlay
                          muted
                          loop
                          playsInline
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      ) : (
                        <img
                          src={item.src}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      )}
                    </div>
                    <div className="px-2">
                      <p
                        className="text-muted-foreground mb-2"
                        style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}
                      >
                        {item.category}
                      </p>
                      <h3
                        style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', lineHeight: '1.3', fontWeight: 400 }}
                      >
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </motion.div>
        </AnimatePresence>
      </div>

      <style>{`
        .work-carousel .slick-slide {
          opacity: 0.5;
          transition: opacity 0.5s ease;
        }
        
        .work-carousel .slick-active {
          opacity: 1;
        }
        
        .work-carousel .slick-arrow {
          width: 48px;
          height: 48px;
          z-index: 10;
        }
        
        .work-carousel .slick-arrow:before {
          font-size: 48px;
          color: #0a0a0a;
          opacity: 0.3;
          transition: opacity 0.3s;
        }
        
        .work-carousel .slick-arrow:hover:before {
          opacity: 0.7;
        }
        
        .work-carousel .slick-prev {
          left: -60px;
        }
        
        .work-carousel .slick-next {
          right: -60px;
        }
        
        .work-carousel .slick-dots li button:before {
          display: none;
        }
        
        .work-carousel .slick-dots li.slick-active div {
          background-color: #0a0a0a;
          width: 24px;
          border-radius: 4px;
        }
        
        @media (max-width: 768px) {
          .work-carousel .slick-prev {
            left: 10px;
          }
          
          .work-carousel .slick-next {
            right: 10px;
          }
        }
      `}</style>
    </section>
  );
}
