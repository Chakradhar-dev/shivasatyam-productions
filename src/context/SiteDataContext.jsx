import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  siteConfig as defaultSiteConfig,
  featuredMovie as defaultFeaturedMovie,
  moviesList as defaultMoviesList,
  companyData as defaultCompanyData
} from '../data/siteData';

const defaultSections = {
  homeHero: true,
  homeMetrics: true,
  homeFeaturedMovie: true,
  homeCompanyPreview: true,
  homeGalleryPreview: true,
  homeCtaBanner: true,
  antaryamiPosters: true,
  antaryamiBanners: true,
  antaryamiCast: true,
  antaryamiJuniors: true,
  antaryamiDirectionCrew: true,
  antaryamiTechnicalCrew: true,
  antaryamiGallery: true,
  companyDirectorBio: true,
  companyVisionMission: true,
  companyLeadership: true,
  companyPillars: true,
  contactEmails: true,
  contactForm: true,
  contactMap: true
};

const defaultTheme = {
  primaryGold: '#e5a93c',
  accentGold: '#f5c518',
  bgDark: '#070709',
  cardBg: '#0e1015',
  filmGrain: true,
  announcementBar: {
    enabled: true,
    text: "🔥 'Antaryami' Pan-Indian Theatrical Release Coming Soon in 6 Languages!",
    link: "antaryami"
  }
};

const STORAGE_KEY = 'ssp_site_data_v1';

const SiteDataContext = createContext(null);

export function SiteDataProvider({ children }) {
  // Initialize state from localStorage or defaults
  const [siteData, setSiteData] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          siteConfig: parsed.siteConfig || defaultSiteConfig,
          featuredMovie: parsed.featuredMovie || defaultFeaturedMovie,
          moviesList: parsed.moviesList || defaultMoviesList,
          companyData: parsed.companyData || defaultCompanyData,
          sections: { ...defaultSections, ...(parsed.sections || {}) },
          theme: { ...defaultTheme, ...(parsed.theme || {}) }
        };
      }
    } catch (e) {
      console.error('Failed to load from localStorage:', e);
    }
    return {
      siteConfig: defaultSiteConfig,
      featuredMovie: defaultFeaturedMovie,
      moviesList: defaultMoviesList,
      companyData: defaultCompanyData,
      sections: defaultSections,
      theme: defaultTheme
    };
  });

  // Save to localStorage whenever data changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(siteData));
    } catch (e) {
      console.error('Failed to save to localStorage:', e);
    }
  }, [siteData]);

  // Updaters
  const updateSiteConfig = (updates) => {
    setSiteData((prev) => ({
      ...prev,
      siteConfig: { ...prev.siteConfig, ...updates }
    }));
  };

  const updateFeaturedMovie = (updates) => {
    setSiteData((prev) => ({
      ...prev,
      featuredMovie: { ...prev.featuredMovie, ...updates }
    }));
  };

  const updateMoviesList = (newMovies) => {
    setSiteData((prev) => ({
      ...prev,
      moviesList: newMovies
    }));
  };

  const updateCompanyData = (updates) => {
    setSiteData((prev) => ({
      ...prev,
      companyData: { ...prev.companyData, ...updates }
    }));
  };

  const updateSections = (updates) => {
    setSiteData((prev) => ({
      ...prev,
      sections: { ...prev.sections, ...updates }
    }));
  };

  const updateTheme = (updates) => {
    setSiteData((prev) => ({
      ...prev,
      theme: { ...prev.theme, ...updates }
    }));
  };

  // Reset all data to default codebase values
  const resetToDefaults = () => {
    const defaults = {
      siteConfig: defaultSiteConfig,
      featuredMovie: defaultFeaturedMovie,
      moviesList: defaultMoviesList,
      companyData: defaultCompanyData,
      sections: defaultSections,
      theme: defaultTheme
    };
    setSiteData(defaults);
    localStorage.removeItem(STORAGE_KEY);
  };

  // Import JSON backup
  const importData = (jsonData) => {
    try {
      const parsed = typeof jsonData === 'string' ? JSON.parse(jsonData) : jsonData;
      setSiteData({
        siteConfig: { ...defaultSiteConfig, ...(parsed.siteConfig || {}) },
        featuredMovie: { ...defaultFeaturedMovie, ...(parsed.featuredMovie || {}) },
        moviesList: parsed.moviesList || defaultMoviesList,
        companyData: { ...defaultCompanyData, ...(parsed.companyData || {}) },
        sections: { ...defaultSections, ...(parsed.sections || {}) },
        theme: { ...defaultTheme, ...(parsed.theme || {}) }
      });
      return { success: true };
    } catch (err) {
      return { success: false, error: err.message };
    }
  };

  return (
    <SiteDataContext.Provider
      value={{
        siteConfig: siteData.siteConfig,
        featuredMovie: siteData.featuredMovie,
        moviesList: siteData.moviesList,
        companyData: siteData.companyData,
        sections: siteData.sections,
        theme: siteData.theme,
        allData: siteData,
        updateSiteConfig,
        updateFeaturedMovie,
        updateMoviesList,
        updateCompanyData,
        updateSections,
        updateTheme,
        resetToDefaults,
        importData
      }}
    >
      {children}
    </SiteDataContext.Provider>
  );
}

export function useSiteData() {
  const context = useContext(SiteDataContext);
  if (!context) {
    throw new Error('useSiteData must be used within a SiteDataProvider');
  }
  return context;
}
