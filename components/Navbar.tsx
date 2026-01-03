
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  const isHome = location.pathname === '/';

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 px-8 md:px-16 ${isScrolled
        ? 'bg-black/40 backdrop-blur-xl py-5 border-b border-white/5'
        : 'bg-transparent py-10'
      }`}>
      <div className="max-w-[1800px] mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-serif tracking-[0.5em] uppercase hover:opacity-50 transition-all">
          Ayman
        </Link>

        <div className="hidden lg:flex space-x-16">
          {NAV_LINKS.map((link) => {
            // Handle external links or hash links vs internal routes
            const isInternal = link.href.startsWith('/');
            // For sections on home page, checks if we need to navigate home first
            const href = (!isHome && link.href.startsWith('#')) ? `/${link.href}` : link.href;

            if (isInternal && !link.href.startsWith('#')) {
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-[9px] uppercase tracking-[0.5em] font-light hover:text-gray-400 transition-colors relative group"
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
                className="text-[9px] uppercase tracking-[0.5em] font-light hover:text-gray-400 transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-white transition-all duration-500 group-hover:w-full" />
              </a>
            )
          })}
        </div>

        <button className="text-[9px] uppercase tracking-[0.4em] font-light border border-white/10 px-10 py-3 hover:bg-white hover:text-black transition-all duration-500 rounded-full">
          Journal
        </button>
      </div>
    </nav>
  );
};


export default Navbar;
