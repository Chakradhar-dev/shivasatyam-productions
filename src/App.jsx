import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import AntaryamiPage from './pages/AntaryamiPage';
import CompanyPage from './pages/CompanyPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const getInitialPage = () => {
    const hash = window.location.hash.replace('#', '').toLowerCase();
    if (['home', 'movies', 'antaryami', 'company', 'contact'].includes(hash)) {
      return hash;
    }
    return 'home';
  };

  const [activePage, setActivePage] = useState(getInitialPage);

  // Sync hash with active page
  useEffect(() => {
    window.location.hash = activePage;
  }, [activePage]);

  // Listen to popstate / hashchange for browser back/forward navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (['home', 'movies', 'antaryami', 'company', 'contact'].includes(hash)) {
        setActivePage(hash);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-dark-950 text-gray-100 font-sans selection:bg-gold-500 selection:text-black">
      {/* Top Navbar */}
      <Navbar activePage={activePage} setActivePage={setActivePage} />

      {/* Main Page Area */}
      <main className="flex-grow">
        {activePage === 'home' && <HomePage setActivePage={setActivePage} />}
        {activePage === 'movies' && <MoviesPage setActivePage={setActivePage} />}
        {activePage === 'antaryami' && <AntaryamiPage setActivePage={setActivePage} />}
        {activePage === 'company' && <CompanyPage setActivePage={setActivePage} />}
        {activePage === 'contact' && <ContactPage setActivePage={setActivePage} />}
      </main>

      {/* Bottom Footer */}
      <Footer setActivePage={setActivePage} />
    </div>
  );
}
