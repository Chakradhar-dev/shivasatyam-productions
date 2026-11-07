import React, { useState } from 'react';
import { Film, Calendar, Globe, Sparkles, ChevronRight, Play } from 'lucide-react';
import { moviesList, featuredMovie } from '../data/siteData';

export default function MoviesPage({ setActivePage }) {
  const [filter, setFilter] = useState('all');

  const handleNav = (id) => {
    setActivePage(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const filteredMovies = filter === 'all'
    ? moviesList
    : moviesList.filter((m) => m.category.toLowerCase().includes(filter));

  return (
    <div className="pt-28 pb-24 space-y-16">
      {/* Page Title Banner matching Haru theme look */}
      <section className="relative py-16 bg-gradient-to-b from-dark-900 to-dark-950 border-b border-white/10 text-center overflow-hidden">
        <div className="absolute inset-0 bg-radial-at-c from-gold-500/10 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="inline-flex items-center gap-2 text-gold-400 text-xs uppercase tracking-widest font-semibold mb-3">
            <Film className="w-4 h-4" />
            <span>Cinematic Portfolio</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white tracking-tight">
            Movies
          </h1>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Discover the theatrical releases, upcoming projects, and landmark productions crafted by Shiva Satyam Productions.
          </p>
        </div>
      </section>

      {/* Movies Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Category Filters */}
        <div className="flex items-center justify-center gap-2 mb-12">
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'upcoming', label: 'Upcoming Movies' },
            { id: 'development', label: 'In Development' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-5 py-2 rounded-full text-xs uppercase tracking-wider font-semibold transition-all ${
                filter === tab.id
                  ? 'bg-gold-500 text-black shadow-lg shadow-gold-500/20'
                  : 'bg-white/5 text-gray-300 hover:text-white hover:bg-white/10 border border-white/10'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Big Spotlight Movie: Antaryami */}
        <div className="mb-16 rounded-3xl border border-gold-500/30 bg-gradient-to-r from-dark-900 via-dark-850 to-dark-900 overflow-hidden shadow-2xl p-6 sm:p-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-4 flex justify-center">
              <div
                onClick={() => handleNav('antaryami')}
                className="group relative cursor-pointer max-w-xs overflow-hidden rounded-2xl border border-white/20 shadow-2xl"
              >
                <img
                  src={featuredMovie.coverImage}
                  alt={featuredMovie.title}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                  <span className="text-xs text-gold-400 font-semibold uppercase tracking-wider flex items-center gap-1">
                    Click to explore <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>

            <div className="md:col-span-8 space-y-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-md text-xs font-semibold uppercase tracking-wider bg-gold-500 text-black">
                  Flagship Feature Film
                </span>
                <span className="px-3 py-1 rounded-md text-xs font-semibold uppercase tracking-wider bg-white/5 border border-white/10 text-gold-400">
                  {featuredMovie.statusBadge}
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
                {featuredMovie.title}
              </h2>

              <p className="text-gold-200/90 italic font-serif text-base border-l-2 border-gold-400 pl-4">
                "{featuredMovie.tagline}"
              </p>

              <p className="text-gray-300 text-sm leading-relaxed">
                {featuredMovie.synopsis}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2 text-xs border-t border-white/10">
                <div>
                  <span className="text-gray-500 block">Lead Stars</span>
                  <span className="text-white font-medium">Babushaan, Vedvika</span>
                </div>
                <div>
                  <span className="text-gray-500 block">Director</span>
                  <span className="text-white font-medium">{featuredMovie.director}</span>
                </div>
                <div>
                  <span className="text-gray-500 block">Languages</span>
                  <span className="text-white font-medium">6 Regional & National</span>
                </div>
              </div>

              <div className="pt-3">
                <button
                  onClick={() => handleNav('antaryami')}
                  className="px-6 py-3 rounded-xl bg-gold-500 hover:bg-gold-400 text-black font-semibold text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-lg shadow-gold-500/20"
                >
                  <Film className="w-4 h-4" />
                  <span>View Antaryami Details, Posters & Cast</span>
                </button>
              </div>

            </div>

          </div>
        </div>

        {/* Movie Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredMovies.map((movie) => (
            <div
              key={movie.id}
              className="rounded-2xl border border-white/10 bg-dark-900/60 backdrop-blur-sm p-6 flex flex-col justify-between hover:border-gold-500/40 transition-colors duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gold-400 font-semibold uppercase tracking-wider">
                    {movie.category}
                  </span>
                  <span className="text-gray-400">
                    {movie.status}
                  </span>
                </div>

                <h3 className="text-2xl font-serif font-bold text-white">
                  {movie.title}
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed">
                  {movie.description}
                </p>

                <div className="space-y-1.5 text-xs text-gray-400 pt-2 border-t border-white/5">
                  <div>
                    <strong className="text-gray-200">Director:</strong> {movie.director}
                  </div>
                  <div>
                    <strong className="text-gray-200">Languages:</strong> {movie.languages}
                  </div>
                  <div>
                    <strong className="text-gray-200">Starring:</strong> {movie.stars}
                  </div>
                </div>
              </div>

              <div className="pt-6">
                {movie.id === 'antaryami' ? (
                  <button
                    onClick={() => handleNav('antaryami')}
                    className="w-full py-2.5 rounded-lg bg-gold-500 hover:bg-gold-400 text-black font-semibold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Explore Full Showcase</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                ) : (
                  <div className="w-full py-2.5 rounded-lg bg-white/5 border border-white/10 text-center text-xs uppercase tracking-wider text-gray-400">
                    Pre-Production Announcement Coming Soon
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </section>
    </div>
  );
}
