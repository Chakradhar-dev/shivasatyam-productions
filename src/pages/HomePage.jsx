import React, { useState } from 'react';
import { Film, Play, Sparkles, ChevronRight, Award, Globe, Users, ArrowUpRight } from 'lucide-react';
import { siteConfig, featuredMovie, moviesList, companyData } from '../data/siteData';
import LightboxModal from '../components/LightboxModal';

export default function HomePage({ setActivePage }) {
  const [modalImg, setModalImg] = useState(null);

  const handleNav = (id) => {
    setActivePage(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-24 sm:space-y-32 pb-24">
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
        {/* Background ambient lighting */}
        <div className="absolute inset-0 bg-radial-at-c from-gold-500/10 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-gold-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 flex flex-col items-center">
          
          {/* Production House Monogram & Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-gold-500/30 text-gold-400 text-xs tracking-widest uppercase mb-6 backdrop-blur-sm animate-fade-in">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>Official Production House</span>
          </div>

          {/* Centered Heading GIF from original WordPress site */}
          <div className="w-full max-w-2xl sm:max-w-3xl my-2 relative group">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-gold-500/20 via-gold-400/10 to-gold-600/20 blur-xl opacity-75 group-hover:opacity-100 transition duration-1000" />
            <img
              src={siteConfig.heroGif}
              alt="Shiva Satyam Productions"
              className="relative w-full h-auto object-contain mx-auto drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)] rounded-xl"
            />
          </div>

          {/* Subtitle / Tagline */}
          <p className="mt-6 text-lg sm:text-2xl text-gray-300 max-w-3xl font-light leading-relaxed font-sans">
            Crafting Pan-Indian Cinematic Spectacles With Soul, Integrity & Boundless Vision.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => handleNav('antaryami')}
              className="px-7 py-3.5 rounded-full bg-gold-500 hover:bg-gold-400 text-black font-semibold text-xs uppercase tracking-wider transition-all duration-300 shadow-lg shadow-gold-500/20 hover:scale-105 flex items-center gap-2 group"
            >
              <Film className="w-4 h-4" />
              <span>Explore Antaryami</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => handleNav('movies')}
              className="px-7 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/15 hover:border-gold-500/40 font-semibold text-xs uppercase tracking-wider transition-all duration-300 backdrop-blur-sm hover:scale-105 flex items-center gap-2"
            >
              <span>View All Movies</span>
            </button>

            <button
              onClick={() => handleNav('company')}
              className="px-7 py-3.5 rounded-full text-gray-300 hover:text-gold-400 text-xs uppercase tracking-wider font-semibold transition-colors flex items-center gap-1.5"
            >
              <span>The Company</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Quick Metrics Bar */}
          <div className="mt-16 pt-10 border-t border-white/10 w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl sm:text-3xl font-serif font-bold text-white">6+</div>
              <div className="text-[11px] uppercase tracking-widest text-gold-400 mt-1">Languages</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-serif font-bold text-white">Pan-India</div>
              <div className="text-[11px] uppercase tracking-widest text-gold-400 mt-1">Distribution</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-serif font-bold text-white">Top Cast</div>
              <div className="text-[11px] uppercase tracking-widest text-gold-400 mt-1">Acclaimed Stars</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-serif font-bold text-white">4K Ultra</div>
              <div className="text-[11px] uppercase tracking-widest text-gold-400 mt-1">Cinematography</div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= FEATURED PRODUCTION: ANTARYAMI ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden border border-gold-500/30 bg-gradient-to-br from-dark-900 via-dark-850 to-dark-950 shadow-2xl p-6 sm:p-10 lg:p-14">
          
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            {/* Left Cover Image */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group cursor-pointer max-w-sm" onClick={() => handleNav('antaryami')}>
                <div className="absolute -inset-2 bg-gradient-to-t from-gold-600 via-gold-400 to-amber-300 rounded-2xl blur-lg opacity-40 group-hover:opacity-75 transition duration-500" />
                <img
                  src={featuredMovie.coverImage}
                  alt={featuredMovie.title}
                  className="relative rounded-xl w-full shadow-2xl border border-white/20 transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-dark-950/80 backdrop-blur-md px-4 py-2.5 rounded-lg border border-white/10 flex items-center justify-between text-xs">
                  <span className="text-gold-400 font-semibold uppercase tracking-wider">
                    {featuredMovie.statusBadge}
                  </span>
                  <span className="text-gray-300 flex items-center gap-1 group-hover:text-white">
                    Explore Details <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>

            {/* Right Information */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-gold-500/15 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-widest">
                <span>Featured Masterpiece</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
                {featuredMovie.title}
              </h2>

              <blockquote className="border-l-2 border-gold-400 pl-4 py-1 text-gold-200/90 italic font-serif text-lg leading-relaxed">
                "{featuredMovie.tagline}"
              </blockquote>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {featuredMovie.synopsis}
              </p>

              {/* Multi-language badges */}
              <div>
                <span className="text-xs uppercase font-semibold text-gray-400 tracking-wider block mb-2.5">
                  Releasing Simultaneously In 6 Languages:
                </span>
                <div className="flex flex-wrap gap-2">
                  {featuredMovie.languages.map((lang) => (
                    <span
                      key={lang.name}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-gray-200 hover:border-gold-500/50 hover:text-gold-400 transition-colors"
                    >
                      {lang.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Cast & Crew Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10 text-xs">
                <div>
                  <span className="text-gray-400 block">Lead Stars</span>
                  <span className="text-white font-semibold">Babushaan, Vedvika</span>
                </div>
                <div>
                  <span className="text-gray-400 block">Directed By</span>
                  <span className="text-white font-semibold">{featuredMovie.director}</span>
                </div>
                <div>
                  <span className="text-gray-400 block">Music By</span>
                  <span className="text-white font-semibold">{featuredMovie.music}</span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={() => handleNav('antaryami')}
                  className="px-6 py-3 rounded-xl bg-gold-500 hover:bg-gold-400 text-black font-semibold text-xs uppercase tracking-wider transition-colors shadow-lg shadow-gold-500/20 flex items-center gap-2"
                >
                  <Film className="w-4 h-4" />
                  <span>Full Movie Showcase, Cast & Gallery</span>
                </button>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ================= THE COMPANY INTRODUCTION ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-gold-400 text-xs uppercase tracking-widest font-semibold">
              <Award className="w-4 h-4" />
              <span>About Shiva Satyam Productions</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
              Redefining Indian Cinema With Uncompromising Vision
            </h2>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Founded under the creative directorship of <strong className="text-gold-400">Shiva Satyam</strong>, SSP is committed to crafting original narratives that speak to the heart of the audience. We merge grand cinematic ambition with deep emotional integrity, bringing East India’s rich artistic potential to pan-national prominence.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {companyData.pillars.slice(0, 2).map((p) => (
                <div key={p.title} className="p-4 rounded-xl bg-dark-900 border border-white/5 space-y-1.5">
                  <h4 className="text-gold-400 font-serif font-semibold text-sm">{p.title}</h4>
                  <p className="text-gray-400 text-xs leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={() => handleNav('company')}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-gold-400 hover:text-gold-300 transition-colors group"
              >
                <span>Read Full Company Profile & Vision</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden border border-white/10 group">
                <img
                  src={companyData.director.img}
                  alt={companyData.director.name}
                  className="w-full h-64 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="p-3 bg-dark-900 border-t border-white/5 text-center">
                  <span className="text-white font-serif text-sm block">{companyData.director.name}</span>
                  <span className="text-[10px] text-gold-400 uppercase tracking-wider block">Director & Founder</span>
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-8">
              <div className="rounded-2xl overflow-hidden border border-white/10 group">
                <img
                  src={companyData.teamPhoto}
                  alt="SSP Production Team"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="p-3 bg-dark-900 border-t border-white/5 text-center">
                  <span className="text-white font-serif text-sm block">Production Leadership</span>
                  <span className="text-[10px] text-gray-400 uppercase tracking-wider block">Creative Team</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= PRODUCTION STILLS PREVIEW ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-gold-400 text-xs uppercase tracking-widest font-semibold block mb-2">
              Behind The Scenes
            </span>
            <h2 className="text-3xl font-serif font-bold text-white">
              Production Moments & Stills
            </h2>
          </div>
          <button
            onClick={() => handleNav('antaryami')}
            className="text-xs uppercase tracking-wider font-semibold text-gray-300 hover:text-gold-400 transition-colors flex items-center gap-1"
          >
            <span>View All Gallery Photos</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {featuredMovie.gallery.slice(0, 4).map((item) => (
            <div
              key={item.id}
              onClick={() => setModalImg({ img: item.img, title: item.caption, sub: 'Antaryami Stills' })}
              className="relative rounded-xl overflow-hidden border border-white/10 group cursor-pointer aspect-video bg-dark-900"
            >
              <img
                src={item.img}
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                <span className="text-xs text-white font-medium truncate">{item.caption}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CALL TO ACTION BANNER ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-dark-900 via-dark-850 to-dark-900 p-8 sm:p-14 text-center relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <h3 className="text-2xl sm:text-4xl font-serif font-bold text-white">
              Collaborate With Shiva Satyam Productions
            </h3>
            <p className="text-gray-300 text-sm sm:text-base">
              Interested in theatrical distribution, co-production opportunities, script submissions, or casting? We welcome dedicated industry partners.
            </p>
            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <button
                onClick={() => handleNav('contact')}
                className="px-8 py-3.5 rounded-full bg-gold-500 hover:bg-gold-400 text-black font-semibold text-xs uppercase tracking-wider transition-colors shadow-lg"
              >
                Connect With Us Today
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
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
