import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, ShieldAlert, Sparkles, Settings } from 'lucide-react';
import { useSiteData } from '../context/SiteDataContext';

export default function Navbar({ activePage, setActivePage }) {
  const { siteConfig, theme } = useSiteData();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'movies', label: 'Movies' },
    { id: 'antaryami', label: 'Antaryami', badge: 'Special' },
    { id: 'company', label: 'The Company' },
    { id: 'contact', label: 'Connect' },
  ];

  const handleNav = (id) => {
    setActivePage(id);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-dark-950/95 backdrop-blur-md border-b border-white/10 shadow-2xl py-2.5'
          : 'bg-gradient-to-b from-black/85 via-black/45 to-transparent py-4'
      }`}
    >
      {/* Optional Top Announcement Bar (Configurable in Admin) */}
      {theme.announcementBar?.enabled && activePage !== 'admin' && (
        <div className="bg-gradient-to-r from-amber-600/30 via-gold-500/20 to-amber-600/30 border-b border-gold-500/30 py-1.5 px-4 text-center text-[11px] sm:text-xs text-gold-200">
          <button
            onClick={() => handleNav(theme.announcementBar.link || 'antaryami')}
            className="hover:underline font-medium inline-flex items-center gap-1.5"
          >
            <Sparkles className="w-3 h-3 text-gold-400" />
            <span>{theme.announcementBar.text}</span>
          </button>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNav('home')}
            className="flex items-center gap-3 group text-left focus:outline-none"
          >
            <img
              src={siteConfig.logo}
              alt={siteConfig.name}
              className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="hidden sm:block">
              <span className="font-serif tracking-widest text-lg font-bold text-white block group-hover:text-gold-400 transition-colors">
                {siteConfig.shortName || 'SHIVA SATYAM'}
              </span>
              <span className="text-[10px] tracking-[0.28em] text-gray-400 uppercase block font-sans">
                Productions
              </span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNav(link.id)}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-1.5 ${
                    isActive
                      ? 'text-gold-400 bg-white/5 font-semibold shadow-inner border border-gold-500/20'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                  {link.badge && (
                    <span className="text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-gold-500/20 text-gold-400 border border-gold-500/30 font-semibold">
                      {link.badge}
                    </span>
                  )}
                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-gold-400 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Side Socials & Contact CTA & Admin Access */}
          <div className="hidden lg:flex items-center space-x-3">
            <div className="flex items-center space-x-2 border-r border-white/10 pr-3">
              <a
                href={siteConfig.socials?.facebook}
                target="_blank"
                rel="noreferrer"
                title="Facebook"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-gold-500 hover:text-black flex items-center justify-center text-gray-400 transition-colors duration-200"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href={siteConfig.socials?.instagram}
                target="_blank"
                rel="noreferrer"
                title="Instagram"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-gold-500 hover:text-black flex items-center justify-center text-gray-400 transition-colors duration-200"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href={siteConfig.socials?.youtube}
                target="_blank"
                rel="noreferrer"
                title="YouTube"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-gold-500 hover:text-black flex items-center justify-center text-gray-400 transition-colors duration-200"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>

            <button
              onClick={() => handleNav('contact')}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-gold-500 hover:bg-gold-400 text-black shadow-md hover:shadow-gold-500/20 transition-all duration-200"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Connect</span>
            </button>

            {/* Admin Portal Button */}
            <button
              onClick={() => handleNav('admin')}
              title="Site Admin & Theme CMS"
              className={`p-2 rounded-full border transition-all text-xs flex items-center gap-1 ${
                activePage === 'admin'
                  ? 'bg-amber-500 text-black border-amber-400 font-bold'
                  : 'bg-white/5 hover:bg-white/10 text-gray-400 hover:text-gold-400 border-white/10'
              }`}
            >
              <Settings className="w-4 h-4" />
              <span className="hidden xl:inline text-[11px] font-medium">Admin CMS</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => handleNav('admin')}
              className="p-2 rounded-lg text-gold-400 bg-white/5 border border-white/10 text-xs"
              title="Admin CMS"
            >
              <Settings className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-dark-950/98 backdrop-blur-xl border-b border-white/10 px-4 pt-3 pb-6 animate-fade-in shadow-2xl">
          <div className="space-y-1">
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNav(link.id)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-gold-500/10 text-gold-400 font-semibold border-l-4 border-gold-500'
                      : 'text-gray-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 border border-gold-500/30 font-semibold">
                      {link.badge}
                    </span>
                  )}
                </button>
              );
            })}
            
            <button
              onClick={() => handleNav('admin')}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                activePage === 'admin'
                  ? 'bg-amber-500/20 text-gold-400 border-l-4 border-amber-400'
                  : 'text-gray-400 hover:bg-white/5 hover:text-white'
              }`}
            >
              <span className="flex items-center gap-2">
                <Settings className="w-4 h-4" /> Admin Site CMS
              </span>
              <span className="text-[10px] uppercase px-2 py-0.5 rounded bg-white/10 text-gray-300">
                Manage
              </span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
