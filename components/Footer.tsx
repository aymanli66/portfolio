import { useState } from 'react';

export function Footer() {
  const [language, setLanguage] = useState<'EN' | 'AR'>('EN');

  return (
    <footer className="bg-black text-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <h3 
              className="mb-6"
              style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 400 }}
            >
              AYMAN Limouri
            </h3>
            <p 
              className="text-white/60"
              style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', lineHeight: '1.6' }}
            >
              Editorial Photography
              <br />
              Based in Dubai, UAE
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 
              className="mb-6 text-white/60"
              style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}
            >
              Contact
            </h4>
            <div 
              className="space-y-2"
              style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', lineHeight: '1.6' }}
            >
              <p>
                <a href="mailto:hello@aymanlimouri.com" className="hover:text-white/80 transition-colors">
                  hello@aymanlimouri.com
                </a>
              </p>
              <p>
                <a href="tel:+971501234567" className="hover:text-white/80 transition-colors">
                  +971 50 123 4567
                </a>
              </p>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 
              className="mb-6 text-white/60"
              style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}
            >
              Follow
            </h4>
            <div 
              className="space-y-2"
              style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', lineHeight: '1.6' }}
            >
              <p>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white/80 transition-colors">
                  Instagram
                </a>
              </p>
              <p>
                <a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="hover:text-white/80 transition-colors">
                  Behance
                </a>
              </p>
              <p>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white/80 transition-colors">
                  LinkedIn
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p 
            className="text-white/40"
            style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem' }}
          >
            © 2026 AYMAN Limouri. All rights reserved.
          </p>

          {/* Language Toggle */}
          <div className="flex gap-2">
            <button
              onClick={() => setLanguage('EN')}
              className={`px-4 py-2 transition-all ${
                language === 'EN' 
                  ? 'bg-white text-black' 
                  : 'bg-transparent text-white/60 hover:text-white border border-white/20'
              }`}
              style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', letterSpacing: '0.1em' }}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('AR')}
              className={`px-4 py-2 transition-all ${
                language === 'AR' 
                  ? 'bg-white text-black' 
                  : 'bg-transparent text-white/60 hover:text-white border border-white/20'
              }`}
              style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', letterSpacing: '0.1em' }}
            >
              AR
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
