import React from 'react';
import { Mail, MapPin, ShieldCheck, Briefcase, Film, ExternalLink } from 'lucide-react';
import { useSiteData } from '../context/SiteDataContext';
import ContactForm from '../components/ContactForm';

export default function ContactPage() {
  const { siteConfig, sections } = useSiteData();

  const emailCards = [
    {
      title: 'BUSINESS ENQUIRY',
      email: siteConfig.contacts?.business,
      icon: Briefcase,
      desc: 'Theatrical distribution, OTT streaming rights, sponsorships & business alliances.'
    },
    {
      title: 'CREATIVE ENQUIRY',
      email: siteConfig.contacts?.creative,
      icon: Film,
      desc: 'Script submissions, actor casting reels, musical compositions & creative proposals.'
    },
    {
      title: 'ANTI PIRACY',
      email: siteConfig.contacts?.copyright,
      icon: ShieldCheck,
      desc: 'Report unauthorized leaks, torrent links, copyright infringements & piracy threats.'
    }
  ];

  return (
    <div className="pt-28 pb-24 space-y-20">
      {/* Title Banner */}
      <section className="relative py-16 bg-gradient-to-b from-dark-900 to-dark-950 border-b border-white/10 text-center overflow-hidden">
        <div className="absolute inset-0 bg-radial-at-c from-gold-500/10 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="inline-flex items-center gap-2 text-gold-400 text-xs uppercase tracking-widest font-semibold mb-3">
            <Mail className="w-4 h-4" />
            <span>Direct Channels</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white tracking-tight">
            Contact Us
          </h1>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            We welcome industry collaborators, distribution partners, talent, and press inquiries.
          </p>
        </div>
      </section>

      {/* 3 Important Department Emails from original WordPress site */}
      {sections.contactEmails && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-gold-400 text-xs uppercase tracking-widest font-semibold block mb-2">
              Direct Routing
            </span>
            <h2 className="text-3xl font-serif font-bold text-white">
              Important Emails
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {emailCards.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-8 rounded-2xl bg-dark-900 border border-white/10 hover:border-gold-500/40 transition-all flex flex-col justify-between group shadow-xl"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 text-gold-400 flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold tracking-widest uppercase text-gold-400">
                        {item.title}
                      </h3>
                      <a
                        href={`mailto:${item.email}`}
                        className="text-lg font-serif font-bold text-white group-hover:text-gold-300 transition-colors block mt-1 break-all"
                      >
                        {item.email}
                      </a>
                    </div>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-6">
                    <a
                      href={`mailto:${item.email}`}
                      className="inline-flex items-center gap-2 text-xs uppercase font-semibold tracking-wider text-gold-400 hover:text-gold-300 transition-colors"
                    >
                      <span>Write An Email</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Main Contact Grid: Form + Address Info */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Form */}
          {sections.contactForm && (
            <div className="lg:col-span-7 space-y-4">
              <div className="mb-2">
                <span className="text-gold-400 text-xs uppercase tracking-widest font-semibold block mb-1">
                  Drop Us A Line
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                  Send A Message
                </h3>
              </div>
              <ContactForm />
            </div>
          )}

          {/* Right Address & Info Card */}
          <div className={sections.contactForm ? "lg:col-span-5 space-y-6" : "lg:col-span-12 max-w-xl mx-auto space-y-6"}>
            <div className="rounded-2xl border border-white/10 bg-dark-900 p-8 shadow-xl space-y-6">
              <div>
                <span className="text-xs uppercase tracking-widest font-semibold text-gold-400 block mb-2">
                  Head Office
                </span>
                <h3 className="text-xl font-serif font-bold text-white">
                  {siteConfig.name}
                </h3>
              </div>

              <div className="space-y-4 text-sm text-gray-300 border-t border-white/5 pt-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gold-400 mt-0.5 shrink-0" />
                  <div>
                    <strong className="text-white block">Studio Address:</strong>
                    <p className="leading-relaxed text-gray-400 mt-1">
                      {siteConfig.address?.line1}<br />
                      {siteConfig.address?.line2}<br />
                      {siteConfig.address?.line3}<br />
                      {siteConfig.address?.cityStateZip}<br />
                      {siteConfig.address?.country}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <Mail className="w-5 h-5 text-gold-400 shrink-0" />
                  <div>
                    <strong className="text-white block">Primary Email:</strong>
                    <a
                      href={`mailto:${siteConfig.contacts?.business}`}
                      className="text-gray-400 hover:text-gold-400 transition-colors"
                    >
                      {siteConfig.contacts?.business}
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="border-t border-white/5 pt-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 block mb-3">
                  Follow Official Handles
                </span>
                <div className="flex items-center space-x-3">
                  <a
                    href={siteConfig.socials?.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 hover:bg-gold-500 hover:text-black text-gray-300 text-xs font-medium transition-colors"
                  >
                    <span>Facebook</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href={siteConfig.socials?.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 hover:bg-gold-500 hover:text-black text-gray-300 text-xs font-medium transition-colors"
                  >
                    <span>Instagram</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href={siteConfig.socials?.youtube}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 hover:bg-gold-500 hover:text-black text-gray-300 text-xs font-medium transition-colors"
                  >
                    <span>YouTube</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick response note */}
            <div className="p-5 rounded-xl bg-gold-500/10 border border-gold-500/20 text-xs text-gold-200/90 leading-relaxed">
              <strong>Studio Response Guarantee:</strong> All official submissions and emails are acknowledged within 24-48 business hours by our production office.
            </div>
          </div>

        </div>
      </section>

      {/* ================= GOOGLE MAP EMBED ================= */}
      {sections.contactMap && siteConfig.mapUrl && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <span className="text-gold-400 text-xs uppercase tracking-widest font-semibold block mb-1">
              Studio Location
            </span>
            <h2 className="text-3xl font-serif font-bold text-white">
              Find us on Map
            </h2>
          </div>

          <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-dark-900 aspect-[16/9] sm:aspect-[21/9] w-full">
            <iframe
              src={siteConfig.mapUrl}
              title="Shiva Satyam Productions Location"
              className="w-full h-full border-0 filter grayscale contrast-125 opacity-90 hover:opacity-100 hover:grayscale-0 transition-all duration-500"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
      )}
    </div>
  );
}
