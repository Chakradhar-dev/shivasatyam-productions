import React, { useState } from 'react';
import { Film, User, Camera, Music, Scissors, Sparkles, ZoomIn, Globe, ChevronRight } from 'lucide-react';
import { featuredMovie } from '../data/siteData';
import LightboxModal from '../components/LightboxModal';

export default function AntaryamiPage({ setActivePage }) {
  const [modalImg, setModalImg] = useState(null);
  const [activeTab, setActiveTab] = useState('all');

  return (
    <div className="pt-24 pb-28 space-y-20">
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden border-b border-white/10 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950">
        {/* Background Wide Banner with cinematic fade */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <img
            src={featuredMovie.banners[0].img}
            alt="Antaryami Banner"
            className="w-full h-full object-cover filter blur-sm scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/80 to-transparent" />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/15 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Official Pan-India Feature Film</span>
          </div>

          <h1 className="text-5xl sm:text-7xl font-serif font-black text-white tracking-tight text-gold-subtle">
            {featuredMovie.title}
          </h1>

          <blockquote className="max-w-3xl mx-auto text-lg sm:text-2xl font-serif italic text-gold-200/90 leading-relaxed border-y border-gold-500/20 py-4 px-6">
            "{featuredMovie.tagline}"
          </blockquote>

          <p className="max-w-2xl mx-auto text-sm sm:text-base text-gray-300 leading-relaxed">
            {featuredMovie.synopsis}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs">
            <div className="px-4 py-2 rounded-lg bg-dark-900 border border-white/10">
              <span className="text-gray-400 block">Directed By</span>
              <span className="text-gold-400 font-semibold text-sm">{featuredMovie.director}</span>
            </div>
            <div className="px-4 py-2 rounded-lg bg-dark-900 border border-white/10">
              <span className="text-gray-400 block">Lead Stars</span>
              <span className="text-white font-semibold text-sm">Babushaan & Vedvika</span>
            </div>
            <div className="px-4 py-2 rounded-lg bg-dark-900 border border-white/10">
              <span className="text-gray-400 block">Music</span>
              <span className="text-white font-semibold text-sm">{featuredMovie.music}</span>
            </div>
            <div className="px-4 py-2 rounded-lg bg-dark-900 border border-white/10">
              <span className="text-gray-400 block">Status</span>
              <span className="text-gold-400 font-semibold text-sm">{featuredMovie.statusBadge}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MULTI-LANGUAGE OFFICIAL POSTERS ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-gold-400 text-xs uppercase tracking-widest font-semibold mb-2">
            <Globe className="w-4 h-4" />
            <span>Pan-Indian Release</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
            Official Multilingual Posters
          </h2>
          <p className="mt-3 text-sm text-gray-400">
            Antaryami is releasing simultaneously across six premier Indian cinematic languages. Click any poster to view in high resolution.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {featuredMovie.languages.map((item) => (
            <div
              key={item.name}
              onClick={() => setModalImg({ img: item.poster, title: `Antaryami – ${item.name} Official Poster`, sub: 'Theatrical Release' })}
              className="group cursor-pointer rounded-2xl overflow-hidden border border-white/10 bg-dark-900 p-2 hover:border-gold-500/60 transition-all duration-300 hover:shadow-xl hover:shadow-gold-500/10 flex flex-col"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-black">
                <img
                  src={item.poster}
                  alt={`${item.name} Poster`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="p-2 rounded-full bg-gold-500 text-black">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                </div>
              </div>
              <div className="pt-3 pb-1 text-center">
                <span className="text-sm font-semibold text-white group-hover:text-gold-400 transition-colors block">
                  {item.name}
                </span>
                <span className="text-[10px] text-gray-500 uppercase tracking-wider block">
                  Theatrical Poster
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= WIDE CINEMATIC BANNERS ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="text-gold-400 text-xs uppercase tracking-widest font-semibold block mb-2">
            Theatrical Teasers
          </span>
          <h2 className="text-3xl font-serif font-bold text-white">
            Wide Release Banners
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredMovie.banners.map((b, idx) => (
            <div
              key={idx}
              onClick={() => setModalImg({ img: b.img, title: b.title, sub: 'Antaryami Banner' })}
              className="rounded-2xl overflow-hidden border border-white/10 bg-dark-900 group cursor-pointer aspect-video relative"
            >
              <img
                src={b.img}
                alt={b.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                <div>
                  <span className="text-xs font-semibold text-white block">{b.title}</span>
                  <span className="text-[10px] text-gold-400 uppercase tracking-wider">Click to expand</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= STAR CAST ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-gold-400 text-xs uppercase tracking-widest font-semibold mb-2">
            <User className="w-4 h-4" />
            <span>Ensemble Acting Power</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
            Star Cast
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            Featuring superstar Babushaan, Vedvika, and a stellar ensemble of distinguished actors.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6">
          {featuredMovie.cast.map((c) => (
            <div
              key={c.name}
              onClick={() => setModalImg({ img: c.img, title: c.name, sub: c.role })}
              className="rounded-xl overflow-hidden border border-white/10 bg-dark-900 group cursor-pointer hover:border-gold-500/50 transition-all p-2"
            >
              <div className="aspect-[3/4] overflow-hidden rounded-lg bg-black">
                <img
                  src={c.img}
                  alt={c.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="pt-3 pb-1 text-center">
                <h4 className="text-sm font-semibold text-white group-hover:text-gold-400 transition-colors">
                  {c.name}
                </h4>
                <p className="text-[11px] text-gray-400 mt-0.5">{c.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Juniors Section */}
        <div className="mt-16 pt-12 border-t border-white/10">
          <div className="mb-8">
            <h3 className="text-2xl font-serif font-bold text-white">
              Junior Artists
            </h3>
            <p className="text-xs text-gray-400 mt-1">
              Promising young actors including Srujan depicting the hero's pivotal childhood character.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6">
            {featuredMovie.juniors.map((j) => (
              <div
                key={j.name}
                onClick={() => setModalImg({ img: j.img, title: j.name, sub: j.role })}
                className="rounded-xl overflow-hidden border border-white/10 bg-dark-900 group cursor-pointer hover:border-gold-500/50 transition-all p-2"
              >
                <div className="aspect-[3/4] overflow-hidden rounded-lg bg-black">
                  <img
                    src={j.img}
                    alt={j.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="pt-3 pb-1 text-center">
                  <h4 className="text-sm font-semibold text-white group-hover:text-gold-400 transition-colors">
                    {j.name}
                  </h4>
                  <p className="text-[11px] text-gray-400 mt-0.5">{j.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= DIRECTION & PRODUCTION TEAM ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="text-gold-400 text-xs uppercase tracking-widest font-semibold block mb-2">
            The Masterminds
          </span>
          <h2 className="text-3xl font-serif font-bold text-white">
            Direction & Production Team
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {featuredMovie.directionCrew.map((crew) => (
            <div
              key={crew.name}
              onClick={() => setModalImg({ img: crew.img, title: crew.name, sub: crew.role })}
              className="rounded-xl overflow-hidden border border-white/10 bg-dark-900 group cursor-pointer hover:border-gold-500/50 transition-all p-2"
            >
              <div className="aspect-square overflow-hidden rounded-lg bg-black">
                <img
                  src={crew.img}
                  alt={crew.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="pt-2.5 pb-1 text-center">
                <h4 className="text-xs sm:text-sm font-semibold text-white group-hover:text-gold-400 transition-colors truncate">
                  {crew.name}
                </h4>
                <p className="text-[11px] text-gold-400/80 mt-0.5 font-medium truncate">{crew.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= TECHNICAL MASTERS ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="text-gold-400 text-xs uppercase tracking-widest font-semibold block mb-2">
            Technical Artistry
          </span>
          <h2 className="text-3xl font-serif font-bold text-white">
            Technical Crew & HODs
          </h2>
          <p className="text-xs text-gray-400 mt-1">
            DOP • Music • Editor • Choreographer • Stunts • Art • Stills • Publicity Designer
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {featuredMovie.technicalCrew.map((tech) => (
            <div
              key={tech.name}
              onClick={() => setModalImg({ img: tech.img, title: tech.name, sub: tech.role })}
              className="rounded-xl overflow-hidden border border-white/10 bg-dark-900 group cursor-pointer hover:border-gold-500/50 transition-all p-2 text-center"
            >
              <div className="aspect-square overflow-hidden rounded-lg bg-black mb-2">
                <img
                  src={tech.img}
                  alt={tech.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h4 className="text-xs font-semibold text-white group-hover:text-gold-400 transition-colors truncate">
                {tech.name}
              </h4>
              <p className="text-[10px] text-gray-400 mt-0.5 truncate">{tech.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PRODUCTION STILLS & BTS GALLERY ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-gold-400 text-xs uppercase tracking-widest font-semibold block mb-2">
            Shooting Stills
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
            Behind-The-Scenes Gallery
          </h2>
          <p className="text-sm text-gray-400 mt-2">
            Exclusive moments from the filming locations, action set pieces, and directorial setups. Click any photo to enlarge.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {featuredMovie.gallery.map((g) => (
            <div
              key={g.id}
              onClick={() => setModalImg({ img: g.img, title: g.caption, sub: 'Antaryami BTS' })}
              className="rounded-xl overflow-hidden border border-white/10 bg-dark-900 group cursor-pointer aspect-video relative"
            >
              <img
                src={g.img}
                alt={g.caption}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <ZoomIn className="w-6 h-6 text-gold-400" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={Boolean(modalImg)}
        image={modalImg?.img}
        title={modalImg?.title}
        subtitle={modalImg?.sub}
        onClose={() => setModalImg(null)}
      />
    </div>
  );
}
