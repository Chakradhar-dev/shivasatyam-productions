import React from 'react';
import { MapPin, ChevronRight, Settings } from 'lucide-react';
import { useSiteData } from '../context/SiteDataContext';

export default function Footer({ setActivePage }) {
  const { siteConfig } = useSiteData();

  const handleNav = (id) => {
    setActivePage(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-950 border-t border-white/10 text-gray-400 relative overflow-hidden">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: Brand & Logo */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={siteConfig.logo}
                alt={siteConfig.name}
                className="h-14 w-auto object-contain"
              />
              <div>
                <span className="font-serif tracking-widest text-lg font-bold text-white block">
                  {siteConfig.shortName || 'SHIVA SATYAM'}
                </span>
                <span className="text-[11px] tracking-[0.3em] text-gold-400 uppercase block font-sans">
                  PRODUCTIONS
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              {siteConfig.tagline || 'Pioneering high-caliber, emotionally charged cinema that transcends regional boundaries and captivates audiences across India and beyond.'}
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <a
                href={siteConfig.socials?.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-gold-500 hover:text-black flex items-center justify-center text-gray-300 transition-colors"
                title="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href={siteConfig.socials?.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-gold-500 hover:text-black flex items-center justify-center text-gray-300 transition-colors"
                title="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href={siteConfig.socials?.youtube}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-gold-500 hover:text-black flex items-center justify-center text-gray-300 transition-colors"
                title="YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h3 className="text-white font-serif text-base tracking-wider uppercase mb-4 border-b border-white/10 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { id: 'home', label: 'Home' },
                { id: 'movies', label: 'Movies & Releases' },
                { id: 'antaryami', label: 'Featured Film: Antaryami' },
                { id: 'company', label: 'The Company' },
                { id: 'contact', label: 'Connect & Inquiries' }
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNav(item.id)}
                    className="flex items-center gap-2 hover:text-gold-400 transition-colors group text-left"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-gold-500/60 group-hover:translate-x-1 transition-transform" />
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Important Emails */}
          <div>
            <h3 className="text-white font-serif text-base tracking-wider uppercase mb-4 border-b border-white/10 pb-2">
              Official Inquiries
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <div className="text-[11px] font-semibold text-gold-400 tracking-wider uppercase">
                  Business & Partnerships
                </div>
                <a
                  href={`mailto:${siteConfig.contacts?.business}`}
                  className="hover:text-white transition-colors block text-gray-300 truncate"
                >
                  {siteConfig.contacts?.business}
                </a>
              </li>
              <li>
                <div className="text-[11px] font-semibold text-gold-400 tracking-wider uppercase">
                  Creative & Talent
                </div>
                <a
                  href={`mailto:${siteConfig.contacts?.creative}`}
                  className="hover:text-white transition-colors block text-gray-300 truncate"
                >
                  {siteConfig.contacts?.creative}
                </a>
              </li>
              <li>
                <div className="text-[11px] font-semibold text-gold-400 tracking-wider uppercase">
                  Anti-Piracy & Copyright
                </div>
                <a
                  href={`mailto:${siteConfig.contacts?.copyright}`}
                  className="hover:text-white transition-colors block text-gray-300 truncate"
                >
                  {siteConfig.contacts?.copyright}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Registered Office */}
          <div>
            <h3 className="text-white font-serif text-base tracking-wider uppercase mb-4 border-b border-white/10 pb-2">
              Studio & Registered Office
            </h3>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-400 mt-1 shrink-0" />
                <address className="not-italic leading-relaxed text-xs sm:text-sm">
                  <span className="font-semibold text-white block">{siteConfig.address?.line1}</span>
                  {siteConfig.address?.line2}<br />
                  {siteConfig.address?.line3}<br />
                  {siteConfig.address?.cityStateZip}<br />
                  {siteConfig.address?.country}
                </address>
              </div>
              <button
                onClick={() => handleNav('contact')}
                className="mt-3 inline-flex items-center gap-1.5 text-xs text-gold-400 hover:text-gold-300 underline underline-offset-4"
              >
                View Map & Directions
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar matching exact copyright + Admin Button */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p className="tracking-wide">
            © 2025 All Rights Reserved by SSP.
          </p>
          <div className="flex items-center gap-5 text-gray-400">
            <button onClick={() => handleNav('home')} className="hover:text-white">Home</button>
            <button onClick={() => handleNav('movies')} className="hover:text-white">Movies</button>
            <button onClick={() => handleNav('company')} className="hover:text-white">The Company</button>
            <button onClick={() => handleNav('contact')} className="hover:text-white">Connect</button>
            <button
              onClick={() => handleNav('admin')}
              className="inline-flex items-center gap-1 text-gold-400/80 hover:text-gold-300 border-l border-white/10 pl-5"
            >
              <Settings className="w-3 h-3" />
              <span>Admin CMS</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
