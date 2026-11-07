import React, { useState } from 'react';
import { Lock, KeyRound, Sparkles, AlertCircle, ArrowLeft } from 'lucide-react';

export default function AdminLogin({ onLoginSuccess, onBackToSite }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Default credentials: ssp@admin
  const handleLogin = (e) => {
    e.preventDefault();
    const storedPass = localStorage.getItem('ssp_admin_password') || 'ssp@admin';
    if (password === storedPass) {
      onLoginSuccess();
    } else {
      setError('Invalid password. Default password is "ssp@admin".');
    }
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center px-4 py-20">
      <div className="w-full max-w-md bg-dark-900/90 border border-gold-500/30 rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden backdrop-blur-xl animate-fade-in">
        
        {/* Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent" />

        <div className="text-center mb-8">
          <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 shadow-inner">
            <Lock className="w-8 h-8" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
            SSP Admin Portal
          </h2>
          <p className="text-xs text-gray-400 mt-2">
            Manage site pages, theme functions, sections & media.
          </p>
        </div>

        {error && (
          <div className="mb-6 p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2">
              Administrator Password
            </label>
            <div className="relative">
              <input
                type="password"
                required
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError('');
                }}
                placeholder="Enter admin password..."
                className="w-full px-4 py-3 pl-11 rounded-xl bg-dark-950 border border-white/10 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 text-white placeholder-gray-600 text-sm outline-none transition-colors"
              />
              <KeyRound className="w-4 h-4 text-gray-500 absolute left-4 top-1/2 -translate-y-1/2" />
            </div>
            <p className="text-[11px] text-gray-500 mt-2">
              Default password: <code className="text-gold-400 bg-white/5 px-1.5 py-0.5 rounded">ssp@admin</code>
            </p>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 px-6 rounded-xl font-semibold uppercase tracking-wider text-xs bg-gold-500 hover:bg-gold-400 text-black transition-colors shadow-lg shadow-gold-500/20"
          >
            Access Admin Dashboard
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-white/10 text-center">
          <button
            onClick={onBackToSite}
            className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Public Website</span>
          </button>
        </div>

      </div>
    </div>
  );
}
