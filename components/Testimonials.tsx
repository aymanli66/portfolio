import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    customPaging: () => (
      <div className="w-2 h-2 mx-1 rounded-full bg-white/20 hover:bg-white transition-colors duration-300" />
    )
  };

  const testimonials = [
    {
      quote: "A rare ability to capture not just the product, but the soul of the brand. Absolutely distinct.",
      author: "Sarah J.",
      role: "Creative Director, L'Artisan Parfumeur"
    },
    {
      quote: "Ayman's eye for detail turned our campaign into a visual masterpiece. Calm, confident, premium.",
      author: "Marc D.",
      role: "CMO, The Ritz-Carlton"
    },
    {
      quote: "Minimalism that speaks volumes. The imagery elevated our entire digital presence.",
      author: "Elena R.",
      role: "Founder, Velvet & Stone"
    }
  ];

  return (
    <section className="py-24 bg-neutral-900/30 text-white">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <Slider {...settings} className="pb-12">
          {testimonials.map((t, i) => (
            <div key={i} className="focus:outline-none">
              <blockquote className="font-serif text-2xl md:text-4xl leading-relaxed mb-8 font-light italic opacity-90">
                "{t.quote}"
              </blockquote>
              <div className="flex flex-col items-center gap-1">
                <span className="text-xs uppercase tracking-widest font-bold">{t.author}</span>
                <span className="text-xs uppercase tracking-wide text-white/60">{t.role}</span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export { Testimonials };
