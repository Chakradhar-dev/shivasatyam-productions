import React, { useState } from 'react';
import {
  Palette,
  FileText,
  Layers,
  Save,
  RotateCcw,
  Download,
  Upload,
  Eye,
  LogOut,
  CheckCircle,
  Film,
  Plus,
  Trash2,
  Sparkles,
  ExternalLink,
  Copy,
  Check
} from 'lucide-react';
import { useSiteData } from '../../context/SiteDataContext';

export default function AdminDashboard({ onLogout, onPreviewSite }) {
  const {
    siteConfig,
    featuredMovie,
    moviesList,
    companyData,
    sections,
    theme,
    allData,
    updateSiteConfig,
    updateFeaturedMovie,
    updateMoviesList,
    updateCompanyData,
    updateSections,
    updateTheme,
    resetToDefaults,
    importData
  } = useSiteData();

  const [activeTab, setActiveTab] = useState('theme');
  const [activePageTab, setActivePageTab] = useState('home');
  const [toast, setToast] = useState('');
  const [copiedCode, setCopiedCode] = useState(false);

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(''), 3500);
  };

  // Helper for exporting JSON file
  const handleExportJson = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(allData, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `ssp-siteData-backup-${new Date().toISOString().split('T')[0]}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    showToast('Downloaded site backup JSON!');
  };

  // Helper for generating JS code for src/data/siteData.js
  const handleCopyCode = () => {
    const jsCode = `export const siteConfig = ${JSON.stringify(siteConfig, null, 2)};\n\n` +
      `export const featuredMovie = ${JSON.stringify(featuredMovie, null, 2)};\n\n` +
      `export const moviesList = ${JSON.stringify(moviesList, null, 2)};\n\n` +
      `export const companyData = ${JSON.stringify(companyData, null, 2)};\n`;

    navigator.clipboard.writeText(jsCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 3000);
    showToast('Copied siteData.js code to clipboard!');
  };

  // Import JSON handler
  const handleImportJsonFile = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const res = importData(event.target.result);
      if (res.success) {
        showToast('Successfully imported and applied site configuration!');
      } else {
        alert('Failed to import JSON: ' + res.error);
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="pt-24 pb-28 min-h-screen bg-dark-950 text-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top Header Bar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 p-6 rounded-3xl bg-dark-900 border border-gold-500/30 shadow-2xl backdrop-blur-md">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-gold-500/15 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-widest mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>SSP Live CMS & Theme Customizer</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Website Management Portal
            </h1>
            <p className="text-xs text-gray-400 mt-1">
              Changes reflect immediately on your live website and save to your local browser storage.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onPreviewSite}
              className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/10 text-xs font-semibold uppercase tracking-wider flex items-center gap-2 transition-colors"
            >
              <Eye className="w-4 h-4 text-gold-400" />
              <span>View Live Website</span>
            </button>
            <button
              onClick={onLogout}
              className="px-4 py-2.5 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 text-xs font-semibold uppercase tracking-wider flex items-center gap-2 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span>Log Out</span>
            </button>
          </div>
        </div>

        {/* Toast Alert */}
        {toast && (
          <div className="p-4 rounded-xl bg-gold-500/20 border border-gold-500 text-gold-300 text-sm flex items-center gap-2 shadow-lg animate-fade-in">
            <CheckCircle className="w-5 h-5 text-gold-400" />
            <span className="font-medium">{toast}</span>
          </div>
        )}

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 border-b border-white/10 pb-4">
          {[
            { id: 'theme', label: 'Theme & Brand Functions', icon: Palette },
            { id: 'pages', label: 'Pages & Content', icon: FileText },
            { id: 'sections', label: 'Section Visibility', icon: Layers },
            { id: 'backup', label: 'Export / Sync Code', icon: Download },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2.5 ${
                  isActive
                    ? 'bg-gold-500 text-black shadow-lg shadow-gold-500/20 font-bold'
                    : 'bg-dark-900 text-gray-300 hover:text-white hover:bg-dark-850 border border-white/5'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* ================= TAB 1: THEME & BRAND FUNCTIONS ================= */}
        {activeTab === 'theme' && (
          <div className="space-y-8 animate-fade-in">
            {/* Top Announcement Bar */}
            <div className="p-6 rounded-2xl bg-dark-900 border border-white/10 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-serif font-bold text-white">Top Announcement Bar</h3>
                  <p className="text-xs text-gray-400">Header marquee notification across public pages</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={theme.announcementBar?.enabled ?? true}
                    onChange={(e) => {
                      updateTheme({
                        announcementBar: { ...theme.announcementBar, enabled: e.target.checked }
                      });
                      showToast('Announcement bar updated!');
                    }}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gold-500"></div>
                </label>
              </div>

              {theme.announcementBar?.enabled && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div>
                    <label className="block text-xs uppercase font-semibold text-gray-400 mb-1">Banner Text</label>
                    <input
                      type="text"
                      value={theme.announcementBar?.text || ''}
                      onChange={(e) => updateTheme({
                        announcementBar: { ...theme.announcementBar, text: e.target.value }
                      })}
                      className="w-full px-4 py-2.5 rounded-xl bg-dark-950 border border-white/10 text-white text-sm outline-none focus:border-gold-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase font-semibold text-gray-400 mb-1">Target Page ID</label>
                    <select
                      value={theme.announcementBar?.link || 'antaryami'}
                      onChange={(e) => updateTheme({
                        announcementBar: { ...theme.announcementBar, link: e.target.value }
                      })}
                      className="w-full px-4 py-2.5 rounded-xl bg-dark-950 border border-white/10 text-white text-sm outline-none focus:border-gold-500"
                    >
                      <option value="home">Home</option>
                      <option value="movies">Movies</option>
                      <option value="antaryami">Antaryami</option>
                      <option value="company">The Company</option>
                      <option value="contact">Connect</option>
                    </select>
                  </div>
                </div>
              )}
            </div>

            {/* General Brand Details */}
            <div className="p-6 rounded-2xl bg-dark-900 border border-white/10 space-y-6">
              <h3 className="text-lg font-serif font-bold text-white border-b border-white/10 pb-3">
                Brand & Studio Identity
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs uppercase font-semibold text-gray-400 mb-1.5">Official Studio Name</label>
                  <input
                    type="text"
                    value={siteConfig.name || ''}
                    onChange={(e) => {
                      updateSiteConfig({ name: e.target.value });
                    }}
                    className="w-full px-4 py-2.5 rounded-xl bg-dark-950 border border-white/10 text-white text-sm outline-none focus:border-gold-500"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase font-semibold text-gray-400 mb-1.5">Short Name / Monogram</label>
                  <input
                    type="text"
                    value={siteConfig.shortName || ''}
                    onChange={(e) => updateSiteConfig({ shortName: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-dark-950 border border-white/10 text-white text-sm outline-none focus:border-gold-500"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase font-semibold text-gray-400 mb-1.5">Logo Image Path / URL</label>
                  <input
                    type="text"
                    value={siteConfig.logo || ''}
                    onChange={(e) => updateSiteConfig({ logo: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-dark-950 border border-white/10 text-white text-sm outline-none focus:border-gold-500"
                  />
                  {siteConfig.logo && (
                    <div className="mt-2 flex items-center gap-3 p-2 rounded-lg bg-dark-950 border border-white/5">
                      <img src={siteConfig.logo} alt="Preview" className="h-8 object-contain" />
                      <span className="text-[11px] text-gray-400 truncate">Logo Preview</span>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-xs uppercase font-semibold text-gray-400 mb-1.5">Hero Animation / GIF URL</label>
                  <input
                    type="text"
                    value={siteConfig.heroGif || ''}
                    onChange={(e) => updateSiteConfig({ heroGif: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-dark-950 border border-white/10 text-white text-sm outline-none focus:border-gold-500"
                  />
                  {siteConfig.heroGif && (
                    <div className="mt-2 flex items-center gap-3 p-2 rounded-lg bg-dark-950 border border-white/5">
                      <img src={siteConfig.heroGif} alt="Preview" className="h-8 object-contain" />
                      <span className="text-[11px] text-gray-400 truncate">Hero Banner Preview</span>
                    </div>
                  )}
                </div>

                <div className="md:col-span-2">
                  <label className="block text-xs uppercase font-semibold text-gray-400 mb-1.5">Studio Tagline</label>
                  <input
                    type="text"
                    value={siteConfig.tagline || ''}
                    onChange={(e) => updateSiteConfig({ tagline: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-dark-950 border border-white/10 text-white text-sm outline-none focus:border-gold-500"
                  />
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="p-6 rounded-2xl bg-dark-900 border border-white/10 space-y-5">
              <h3 className="text-lg font-serif font-bold text-white border-b border-white/10 pb-3">
                Social Media Channels
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div>
                  <label className="block text-xs uppercase font-semibold text-gray-400 mb-1.5">Facebook URL</label>
                  <input
                    type="url"
                    value={siteConfig.socials?.facebook || ''}
                    onChange={(e) => updateSiteConfig({
                      socials: { ...siteConfig.socials, facebook: e.target.value }
                    })}
                    className="w-full px-4 py-2.5 rounded-xl bg-dark-950 border border-white/10 text-white text-sm outline-none focus:border-gold-500"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase font-semibold text-gray-400 mb-1.5">Instagram URL</label>
                  <input
                    type="url"
                    value={siteConfig.socials?.instagram || ''}
                    onChange={(e) => updateSiteConfig({
                      socials: { ...siteConfig.socials, instagram: e.target.value }
                    })}
                    className="w-full px-4 py-2.5 rounded-xl bg-dark-950 border border-white/10 text-white text-sm outline-none focus:border-gold-500"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase font-semibold text-gray-400 mb-1.5">YouTube URL</label>
                  <input
                    type="url"
                    value={siteConfig.socials?.youtube || ''}
                    onChange={(e) => updateSiteConfig({
                      socials: { ...siteConfig.socials, youtube: e.target.value }
                    })}
                    className="w-full px-4 py-2.5 rounded-xl bg-dark-950 border border-white/10 text-white text-sm outline-none focus:border-gold-500"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= TAB 2: PAGES & CONTENT ================= */}
        {activeTab === 'pages' && (
          <div className="space-y-6 animate-fade-in">
            {/* Page Selector Tabs */}
            <div className="flex flex-wrap gap-2 border-b border-white/10 pb-3">
              {[
                { id: 'home', label: 'Home Page' },
                { id: 'movies', label: 'Movies Catalog' },
                { id: 'antaryami', label: 'Antaryami (Special Movie)' },
                { id: 'company', label: 'The Company' },
                { id: 'contact', label: 'Connect & Inquiries' },
              ].map((p) => (
                <button
                  key={p.id}
                  onClick={() => setActivePageTab(p.id)}
                  className={`px-4 py-2 rounded-xl text-xs uppercase tracking-wider font-semibold transition-all ${
                    activePageTab === p.id
                      ? 'bg-gold-500/20 text-gold-400 border border-gold-500/40'
                      : 'bg-dark-900 text-gray-400 hover:text-white'
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>

            {/* --- SUB-TAB: HOME PAGE --- */}
            {activePageTab === 'home' && (
              <div className="p-6 rounded-2xl bg-dark-900 border border-white/10 space-y-6">
                <h3 className="text-lg font-serif font-bold text-white border-b border-white/10 pb-3">
                  Home Page Configuration
                </h3>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs uppercase font-semibold text-gray-400 mb-1.5">Hero Headline / Tagline</label>
                    <textarea
                      rows={2}
                      value={siteConfig.tagline || ''}
                      onChange={(e) => updateSiteConfig({ tagline: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-dark-950 border border-white/10 text-white text-sm outline-none focus:border-gold-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-semibold text-gray-400 mb-1.5">Hero GIF / Banner Graphic</label>
                    <input
                      type="text"
                      value={siteConfig.heroGif || ''}
                      onChange={(e) => updateSiteConfig({ heroGif: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-dark-950 border border-white/10 text-white text-sm outline-none focus:border-gold-500"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* --- SUB-TAB: MOVIES CATALOG --- */}
            {activePageTab === 'movies' && (
              <div className="p-6 rounded-2xl bg-dark-900 border border-white/10 space-y-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div>
                    <h3 className="text-lg font-serif font-bold text-white">Movie Portfolio Items</h3>
                    <p className="text-xs text-gray-400">Manage films appearing in the Movies catalog</p>
                  </div>
                  <button
                    onClick={() => {
                      const newMovie = {
                        id: `movie-${Date.now()}`,
                        title: 'New Movie Project',
                        category: 'Upcoming Feature Film',
                        status: 'In Pre-Production',
                        poster: '/assets/1-Long-1-200x300.jpg',
                        releaseYear: '2026',
                        languages: 'Oriya, Hindi',
                        director: 'Shiva Satyam',
                        stars: 'To Be Announced',
                        description: 'Exciting new cinematic venture in development.'
                      };
                      updateMoviesList([...moviesList, newMovie]);
                      showToast('Added new movie project!');
                    }}
                    className="px-3.5 py-2 rounded-xl bg-gold-500 text-black text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 shadow"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add Project</span>
                  </button>
                </div>

                <div className="space-y-6">
                  {moviesList.map((movie, index) => (
                    <div key={movie.id || index} className="p-5 rounded-xl bg-dark-950 border border-white/10 space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs uppercase font-bold text-gold-400">Movie #{index + 1}</span>
                        {moviesList.length > 1 && (
                          <button
                            onClick={() => {
                              const updated = moviesList.filter((_, i) => i !== index);
                              updateMoviesList(updated);
                              showToast('Deleted movie.');
                            }}
                            className="text-xs text-red-400 hover:text-red-300 flex items-center gap-1"
                          >
                            <Trash2 className="w-3.5 h-3.5" /> Remove
                          </button>
                        )}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-xs text-gray-400 mb-1">Title</label>
                          <input
                            type="text"
                            value={movie.title || ''}
                            onChange={(e) => {
                              const updated = [...moviesList];
                              updated[index].title = e.target.value;
                              updateMoviesList(updated);
                            }}
                            className="w-full px-3 py-2 rounded-lg bg-dark-900 border border-white/10 text-white text-xs"
                          />
                        </div>

                        <div>
                          <label className="block text-xs text-gray-400 mb-1">Status Badge</label>
                          <input
                            type="text"
                            value={movie.status || ''}
                            onChange={(e) => {
                              const updated = [...moviesList];
                              updated[index].status = e.target.value;
                              updateMoviesList(updated);
                            }}
                            className="w-full px-3 py-2 rounded-lg bg-dark-900 border border-white/10 text-white text-xs"
                          />
                        </div>

                        <div>
                          <label className="block text-xs text-gray-400 mb-1">Poster Image URL</label>
                          <input
                            type="text"
                            value={movie.poster || ''}
                            onChange={(e) => {
                              const updated = [...moviesList];
                              updated[index].poster = e.target.value;
                              updateMoviesList(updated);
                            }}
                            className="w-full px-3 py-2 rounded-lg bg-dark-900 border border-white/10 text-white text-xs"
                          />
                        </div>

                        <div className="sm:col-span-2 md:col-span-3">
                          <label className="block text-xs text-gray-400 mb-1">Description</label>
                          <textarea
                            rows={2}
                            value={movie.description || ''}
                            onChange={(e) => {
                              const updated = [...moviesList];
                              updated[index].description = e.target.value;
                              updateMoviesList(updated);
                            }}
                            className="w-full px-3 py-2 rounded-lg bg-dark-900 border border-white/10 text-white text-xs"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* --- SUB-TAB: ANTARYAMI SPECIAL MOVIE --- */}
            {activePageTab === 'antaryami' && (
              <div className="p-6 rounded-2xl bg-dark-900 border border-white/10 space-y-6">
                <h3 className="text-lg font-serif font-bold text-white border-b border-white/10 pb-3">
                  Antaryami Flagship Showcase
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase font-semibold text-gray-400 mb-1">Title</label>
                    <input
                      type="text"
                      value={featuredMovie.title || ''}
                      onChange={(e) => updateFeaturedMovie({ title: e.target.value })}
                      className="w-full px-4 py-2 rounded-xl bg-dark-950 border border-white/10 text-white text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase font-semibold text-gray-400 mb-1">Status Badge</label>
                    <input
                      type="text"
                      value={featuredMovie.statusBadge || ''}
                      onChange={(e) => updateFeaturedMovie({ statusBadge: e.target.value })}
                      className="w-full px-4 py-2 rounded-xl bg-dark-950 border border-white/10 text-white text-sm"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-xs uppercase font-semibold text-gray-400 mb-1">Tagline</label>
                    <input
                      type="text"
                      value={featuredMovie.tagline || ''}
                      onChange={(e) => updateFeaturedMovie({ tagline: e.target.value })}
                      className="w-full px-4 py-2 rounded-xl bg-dark-950 border border-white/10 text-white text-sm"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-xs uppercase font-semibold text-gray-400 mb-1">Synopsis</label>
                    <textarea
                      rows={3}
                      value={featuredMovie.synopsis || ''}
                      onChange={(e) => updateFeaturedMovie({ synopsis: e.target.value })}
                      className="w-full px-4 py-2 rounded-xl bg-dark-950 border border-white/10 text-white text-sm"
                    />
                  </div>
                </div>

                {/* Multilingual Posters Manager */}
                <div className="pt-4 border-t border-white/10 space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-gold-400">
                      Multi-Language Posters ({featuredMovie.languages?.length || 0})
                    </h4>
                    <button
                      onClick={() => {
                        const newLang = { name: 'Regional', poster: '/assets/Oriya_Poster.jpg' };
                        updateFeaturedMovie({ languages: [...(featuredMovie.languages || []), newLang] });
                      }}
                      className="text-xs text-gold-400 hover:underline flex items-center gap-1"
                    >
                      <Plus className="w-3.5 h-3.5" /> Add Language Poster
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {featuredMovie.languages?.map((lang, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-dark-950 border border-white/5 space-y-2">
                        <div className="flex items-center justify-between">
                          <input
                            type="text"
                            value={lang.name}
                            onChange={(e) => {
                              const updated = [...featuredMovie.languages];
                              updated[idx].name = e.target.value;
                              updateFeaturedMovie({ languages: updated });
                            }}
                            className="font-semibold text-xs text-white bg-transparent border-b border-white/20 pb-0.5 outline-none"
                          />
                          <button
                            onClick={() => {
                              const updated = featuredMovie.languages.filter((_, i) => i !== idx);
                              updateFeaturedMovie({ languages: updated });
                            }}
                            className="text-gray-500 hover:text-red-400"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <input
                          type="text"
                          value={lang.poster}
                          onChange={(e) => {
                            const updated = [...featuredMovie.languages];
                            updated[idx].poster = e.target.value;
                            updateFeaturedMovie({ languages: updated });
                          }}
                          className="w-full px-2 py-1 rounded bg-dark-900 border border-white/10 text-[11px] text-gray-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* --- SUB-TAB: THE COMPANY --- */}
            {activePageTab === 'company' && (
              <div className="p-6 rounded-2xl bg-dark-900 border border-white/10 space-y-6">
                <h3 className="text-lg font-serif font-bold text-white border-b border-white/10 pb-3">
                  Company & Leadership Information
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase font-semibold text-gray-400 mb-1">Director Name</label>
                    <input
                      type="text"
                      value={companyData.director?.name || ''}
                      onChange={(e) => updateCompanyData({
                        director: { ...companyData.director, name: e.target.value }
                      })}
                      className="w-full px-4 py-2 rounded-xl bg-dark-950 border border-white/10 text-white text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-semibold text-gray-400 mb-1">Director Portrait URL</label>
                    <input
                      type="text"
                      value={companyData.director?.img || ''}
                      onChange={(e) => updateCompanyData({
                        director: { ...companyData.director, img: e.target.value }
                      })}
                      className="w-full px-4 py-2 rounded-xl bg-dark-950 border border-white/10 text-white text-sm"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-xs uppercase font-semibold text-gray-400 mb-1">Director Biography</label>
                    <textarea
                      rows={3}
                      value={companyData.director?.bio || ''}
                      onChange={(e) => updateCompanyData({
                        director: { ...companyData.director, bio: e.target.value }
                      })}
                      className="w-full px-4 py-2 rounded-xl bg-dark-950 border border-white/10 text-white text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-semibold text-gray-400 mb-1">Vision Statement</label>
                    <textarea
                      rows={2}
                      value={companyData.vision || ''}
                      onChange={(e) => updateCompanyData({ vision: e.target.value })}
                      className="w-full px-4 py-2 rounded-xl bg-dark-950 border border-white/10 text-white text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-semibold text-gray-400 mb-1">Mission Statement</label>
                    <textarea
                      rows={2}
                      value={companyData.mission || ''}
                      onChange={(e) => updateCompanyData({ mission: e.target.value })}
                      className="w-full px-4 py-2 rounded-xl bg-dark-950 border border-white/10 text-white text-sm"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* --- SUB-TAB: CONNECT & CONTACT --- */}
            {activePageTab === 'contact' && (
              <div className="p-6 rounded-2xl bg-dark-900 border border-white/10 space-y-6">
                <h3 className="text-lg font-serif font-bold text-white border-b border-white/10 pb-3">
                  Contact Channels & Studio Address
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs uppercase font-semibold text-gray-400 mb-1">Business Enquiry Email</label>
                    <input
                      type="email"
                      value={siteConfig.contacts?.business || ''}
                      onChange={(e) => updateSiteConfig({
                        contacts: { ...siteConfig.contacts, business: e.target.value }
                      })}
                      className="w-full px-4 py-2 rounded-xl bg-dark-950 border border-white/10 text-white text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-semibold text-gray-400 mb-1">Creative Enquiry Email</label>
                    <input
                      type="email"
                      value={siteConfig.contacts?.creative || ''}
                      onChange={(e) => updateSiteConfig({
                        contacts: { ...siteConfig.contacts, creative: e.target.value }
                      })}
                      className="w-full px-4 py-2 rounded-xl bg-dark-950 border border-white/10 text-white text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-semibold text-gray-400 mb-1">Anti-Piracy Email</label>
                    <input
                      type="email"
                      value={siteConfig.contacts?.copyright || ''}
                      onChange={(e) => updateSiteConfig({
                        contacts: { ...siteConfig.contacts, copyright: e.target.value }
                      })}
                      className="w-full px-4 py-2 rounded-xl bg-dark-950 border border-white/10 text-white text-sm"
                    />
                  </div>

                  <div className="md:col-span-3">
                    <label className="block text-xs uppercase font-semibold text-gray-400 mb-1">Office Address Line 1</label>
                    <input
                      type="text"
                      value={siteConfig.address?.line2 || ''}
                      onChange={(e) => updateSiteConfig({
                        address: { ...siteConfig.address, line2: e.target.value }
                      })}
                      className="w-full px-4 py-2 rounded-xl bg-dark-950 border border-white/10 text-white text-sm"
                    />
                  </div>

                  <div className="md:col-span-3">
                    <label className="block text-xs uppercase font-semibold text-gray-400 mb-1">Google Maps Embed URL</label>
                    <input
                      type="text"
                      value={siteConfig.mapUrl || ''}
                      onChange={(e) => updateSiteConfig({ mapUrl: e.target.value })}
                      className="w-full px-4 py-2 rounded-xl bg-dark-950 border border-white/10 text-white text-sm"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ================= TAB 3: SECTION VISIBILITY ================= */}
        {activeTab === 'sections' && (
          <div className="p-6 rounded-2xl bg-dark-900 border border-white/10 space-y-6 animate-fade-in">
            <div className="border-b border-white/10 pb-3">
              <h3 className="text-lg font-serif font-bold text-white">Section Toggles</h3>
              <p className="text-xs text-gray-400">Enable or disable specific sections anywhere on the site</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { key: 'homeHero', label: 'Home: Hero Header' },
                { key: 'homeMetrics', label: 'Home: Metrics Counters' },
                { key: 'homeFeaturedMovie', label: 'Home: Featured Movie Banner' },
                { key: 'homeCompanyPreview', label: 'Home: Company Intro' },
                { key: 'homeGalleryPreview', label: 'Home: Stills Preview' },
                { key: 'homeCtaBanner', label: 'Home: Contact CTA Banner' },
                { key: 'antaryamiPosters', label: 'Antaryami: Multi-Language Posters' },
                { key: 'antaryamiBanners', label: 'Antaryami: Wide Banners' },
                { key: 'antaryamiCast', label: 'Antaryami: Star Cast' },
                { key: 'antaryamiJuniors', label: 'Antaryami: Junior Artists' },
                { key: 'antaryamiDirectionCrew', label: 'Antaryami: Direction Team' },
                { key: 'antaryamiTechnicalCrew', label: 'Antaryami: Technical Masters' },
                { key: 'antaryamiGallery', label: 'Antaryami: BTS Photo Gallery' },
                { key: 'companyDirectorBio', label: 'Company: Director Profile' },
                { key: 'companyVisionMission', label: 'Company: Vision & Mission' },
                { key: 'companyLeadership', label: 'Company: Team Meeting Photo' },
                { key: 'companyPillars', label: 'Company: 4 Strategic Pillars' },
                { key: 'contactEmails', label: 'Contact: 3 Department Emails' },
                { key: 'contactForm', label: 'Contact: Interactive Message Form' },
                { key: 'contactMap', label: 'Contact: Embedded Google Map' },
              ].map((item) => (
                <div key={item.key} className="flex items-center justify-between p-3.5 rounded-xl bg-dark-950 border border-white/5">
                  <span className="text-xs font-medium text-gray-300">{item.label}</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={sections[item.key] ?? true}
                      onChange={(e) => {
                        updateSections({ [item.key]: e.target.checked });
                        showToast(`Updated visibility for ${item.label}`);
                      }}
                      className="sr-only peer"
                    />
                    <div className="w-9 h-5 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-gold-500"></div>
                  </label>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= TAB 4: BACKUP & SYNC ================= */}
        {activeTab === 'backup' && (
          <div className="p-6 rounded-2xl bg-dark-900 border border-white/10 space-y-6 animate-fade-in">
            <div className="border-b border-white/10 pb-3">
              <h3 className="text-lg font-serif font-bold text-white">Export, Backup & Reset</h3>
              <p className="text-xs text-gray-400">Save configuration, download backups, or copy code for git</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* Export JSON */}
              <div className="p-5 rounded-xl bg-dark-950 border border-white/10 flex flex-col justify-between space-y-4">
                <div>
                  <h4 className="font-serif font-bold text-white text-base">Download Backup JSON</h4>
                  <p className="text-xs text-gray-400 mt-1">Export your complete site data and settings as a JSON file.</p>
                </div>
                <button
                  onClick={handleExportJson}
                  className="w-full py-2.5 rounded-xl bg-gold-500 hover:bg-gold-400 text-black text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  <span>Download JSON</span>
                </button>
              </div>

              {/* Copy JS Code */}
              <div className="p-5 rounded-xl bg-dark-950 border border-white/10 flex flex-col justify-between space-y-4">
                <div>
                  <h4 className="font-serif font-bold text-white text-base">Generate Code for Git</h4>
                  <p className="text-xs text-gray-400 mt-1">Copy code ready to paste into `src/data/siteData.js` to persist in code.</p>
                </div>
                <button
                  onClick={handleCopyCode}
                  className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                >
                  {copiedCode ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedCode ? 'Copied Code!' : 'Copy siteData.js'}</span>
                </button>
              </div>

              {/* Reset Defaults */}
              <div className="p-5 rounded-xl bg-dark-950 border border-red-500/20 flex flex-col justify-between space-y-4">
                <div>
                  <h4 className="font-serif font-bold text-red-300 text-base">Reset All Changes</h4>
                  <p className="text-xs text-gray-400 mt-1">Revert all edits back to initial clone values.</p>
                </div>
                <button
                  onClick={() => {
                    if (confirm('Are you sure you want to revert all changes to defaults?')) {
                      resetToDefaults();
                      showToast('Reverted site data to original defaults!');
                    }
                  }}
                  className="w-full py-2.5 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Reset to Defaults</span>
                </button>
              </div>
            </div>

            {/* Import JSON file */}
            <div className="p-5 rounded-xl bg-dark-950 border border-white/10 space-y-3">
              <h4 className="font-serif font-bold text-white text-sm">Import Backup File</h4>
              <p className="text-xs text-gray-400">Upload a previously exported `.json` file to restore your site configuration.</p>
              <input
                type="file"
                accept=".json"
                onChange={handleImportJsonFile}
                className="text-xs text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-white/10 file:text-white hover:file:bg-gold-500 hover:file:text-black cursor-pointer"
              />
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
