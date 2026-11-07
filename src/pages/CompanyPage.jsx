import React from 'react';
import { Award, Compass, Users, ShieldCheck } from 'lucide-react';
import { useSiteData } from '../context/SiteDataContext';

export default function CompanyPage({ setActivePage }) {
  const { companyData, sections } = useSiteData();

  const handleNav = (id) => {
    setActivePage(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="pt-28 pb-24 space-y-20">
      {/* Page Title Banner */}
      <section className="relative py-16 bg-gradient-to-b from-dark-900 to-dark-950 border-b border-white/10 text-center overflow-hidden">
        <div className="absolute inset-0 bg-radial-at-c from-gold-500/10 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="inline-flex items-center gap-2 text-gold-400 text-xs uppercase tracking-widest font-semibold mb-3">
            <Award className="w-4 h-4" />
            <span>Studio Identity</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white tracking-tight">
            {companyData.title}
          </h1>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            {companyData.subtitle}
          </p>
        </div>
      </section>

      {/* Director Shiva Satyam Spotlight */}
      {sections.companyDirectorBio && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-white/10 bg-dark-900/80 p-8 sm:p-12 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative group max-w-md w-full">
                  <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-tr from-gold-600 via-gold-400 to-amber-200 blur-lg opacity-40 group-hover:opacity-75 transition duration-500" />
                  <div className="relative rounded-2xl overflow-hidden border border-white/20 bg-black">
                    <img
                      src={companyData.director?.img}
                      alt={companyData.director?.name}
                      className="w-full h-[400px] object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/80 to-transparent p-6 text-center">
                      <h3 className="text-2xl font-serif font-bold text-white">
                        {companyData.director?.name}
                      </h3>
                      <p className="text-xs uppercase tracking-widest text-gold-400 font-semibold mt-1">
                        {companyData.director?.title}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-semibold uppercase tracking-wider">
                  <span>Directorial Vision</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
                  "Cinema is more than entertainment—it is an enduring cultural bridge."
                </h2>

                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  {companyData.director?.bio}
                </p>

                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  Under Shiva Satyam’s stewardship, each project undertakes meticulous research, rigorous pre-production, state-of-the-art camera tech, and hand-picked music composition to guarantee audiences an immersive theatrical experience.
                </p>

                <div className="pt-2 flex flex-wrap gap-4">
                  <button
                    onClick={() => handleNav('contact')}
                    className="px-6 py-3 rounded-full bg-gold-500 hover:bg-gold-400 text-black text-xs uppercase tracking-wider font-semibold transition-colors shadow-lg"
                  >
                    Schedule A Studio Meeting
                  </button>
                </div>

              </div>

            </div>
          </div>
        </section>
      )}

      {/* Vision & Mission Cards */}
      {sections.companyVisionMission && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="p-8 rounded-2xl border border-white/10 bg-dark-900/60 relative overflow-hidden">
              <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-400 mb-6">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-white mb-3">Our Vision</h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {companyData.vision}
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-white/10 bg-dark-900/60 relative overflow-hidden">
              <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-400 mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-white mb-3">Our Mission</h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {companyData.mission}
              </p>
            </div>

          </div>
        </section>
      )}

      {/* Production Leadership Photo & Team Culture */}
      {sections.companyLeadership && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-white/10 bg-dark-900 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
              
              <div className="lg:col-span-6 p-8 sm:p-12 space-y-5">
                <div className="inline-flex items-center gap-2 text-gold-400 text-xs uppercase tracking-widest font-semibold">
                  <Users className="w-4 h-4" />
                  <span>Collaborative Leadership</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                  United by Storytelling, Driven by Innovation
                </h3>

                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  Shiva Satyam Productions thrives on an open, artist-first culture. From script development and storyboarding to location scouting and post-production grade suites, our creative family works in total synergy to deliver cinematic quality.
                </p>

                <div className="pt-2 text-xs text-gray-400 space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                    <span>Transparent collaborative co-production models</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                    <span>Pan-Indian talent scouting and technical alliances</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 h-full min-h-[350px]">
                <img
                  src={companyData.teamPhoto}
                  alt="Production Team Meeting"
                  className="w-full h-full object-cover min-h-[350px]"
                />
              </div>

            </div>
          </div>
        </section>
      )}

      {/* 4 Strategic Pillars */}
      {sections.companyPillars && companyData.pillars?.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-gold-400 text-xs uppercase tracking-widest font-semibold block mb-2">
              The SSP Standard
            </span>
            <h2 className="text-3xl font-serif font-bold text-white">
              Core Foundations
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyData.pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="p-6 rounded-2xl bg-dark-900 border border-white/10 hover:border-gold-500/40 transition-colors space-y-3"
              >
                <h4 className="text-lg font-serif font-semibold text-gold-400">
                  {pillar.title}
                </h4>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

    </div>
  );
}
