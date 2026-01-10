
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.3 }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 px-8 md:px-16 ${isScrolled
      ? 'bg-black/40 backdrop-blur-xl py-5'
      : 'bg-transparent py-10'
      }`}>
      <div className="max-w-[1800px] mx-auto flex items-center">
        {/* Left Section: Logo */}
        <div className="flex-1 flex justify-start">
          <Link to="/" className="text-base md:text-lg lg:text-xl 2xl:text-2xl font-serif tracking-[0.5em] uppercase hover:opacity-50 transition-all inline-block">
            Ayman
          </Link>
        </div>

        {/* Center Section: Navigation Links */}
        <div className="hidden lg:flex space-x-16 flex-initial items-center">
          {NAV_LINKS.map((link) => {
            const isInternal = link.href.startsWith('/');
            const href = (!isHome && link.href.startsWith('#')) ? `/${link.href}` : link.href;

            if (isInternal && !link.href.startsWith('#')) {
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-[10px] md:text-[11px] lg:text-xs 2xl:text-sm uppercase tracking-[0.5em] font-light hover:text-gray-400 transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-white transition-all duration-500 group-hover:w-full" />
                </Link>
              );
            }

            return (
              <a
                key={link.name}
                href={href}
                className="text-[10px] md:text-[11px] lg:text-xs 2xl:text-sm uppercase tracking-[0.5em] font-light hover:text-gray-400 transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-white transition-all duration-500 group-hover:w-full" />
              </a>
            )
          })}
        </div>

        {/* Right Section: CTA Button & Mobile Toggle */}
        <div className="flex-1 flex justify-end items-center gap-8">
          <Link
            to="/contact"
            className="hidden sm:relative sm:overflow-hidden sm:inline-block text-[11px] md:text-xs lg:text-sm 2xl:text-base uppercase tracking-[0.3em] font-medium bg-white/10 text-white border border-white/20 px-10 py-4 2xl:px-14 2xl:py-5 hover:bg-white hover:text-black transition-all duration-500 rounded-full whitespace-nowrap backdrop-blur-sm group"
          >
            <span className="relative z-10">Get in Touch</span>

            {/* Shimmer Effect - Visible when scrolled */}
            {isScrolled && (
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "linear",
                  repeatDelay: 3
                }}
                className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
              />
            )}
          </Link>

          {/* Hamburger Menu Icon */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none z-[110]"
          >
            <motion.span
              animate={isMobileMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="block w-6 h-[1px] bg-white transition-all"
            />
            <motion.span
              animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-6 h-[1px] bg-white transition-all"
            />
            <motion.span
              animate={isMobileMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="block w-6 h-[1px] bg-white transition-all"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 bg-black z-[105] flex flex-col items-center justify-center space-y-12 lg:hidden"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xl font-serif tracking-[0.3em] uppercase hover:text-gray-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-[11px] uppercase tracking-[0.4em] font-light bg-white text-black px-12 py-4 rounded-full"
            >
              Get in Touch
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav >
  );
};


export default Navbar;
