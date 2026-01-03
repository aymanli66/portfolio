import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-black text-white border-t border-white/10 text-xs uppercase tracking-widest">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="font-serif text-xl normal-case tracking-normal">
          AYMAN Limouri
        </div>

        <nav className="flex gap-8">
          <a href="#" className="hover:text-neutral-400 transition-colors">Instagram</a>
          <a href="#" className="hover:text-neutral-400 transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-neutral-400 transition-colors">Email</a>
        </nav>

        <div className="flex gap-4 items-center">
          <span className="hover:text-white cursor-pointer transition-colors">EN</span>
          <span className="text-neutral-600">/</span>
          <span className="text-neutral-600 hover:text-white cursor-pointer transition-colors">AR</span>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-8 text-center md:text-left text-neutral-600 text-[10px]">
        &copy; {new Date().getFullYear()} Ayman Limouri. All rights reserved.
      </div>
    </footer>
  );
};

export { Footer };
