import React, { useEffect } from 'react';
import { X, ZoomIn, Download } from 'lucide-react';

export default function LightboxModal({ isOpen, image, title, subtitle, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !image) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/95 backdrop-blur-xl animate-fade-in">
      {/* Backdrop click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 z-20 p-2.5 rounded-full bg-white/10 hover:bg-gold-500 hover:text-black text-white transition-all duration-200"
        title="Close preview"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Modal content */}
      <div className="relative z-10 max-w-5xl max-h-[90vh] flex flex-col items-center">
        <div className="relative group overflow-hidden rounded-xl border border-white/15 bg-black/50 shadow-2xl">
          <img
            src={image}
            alt={title || "Preview"}
            className="max-h-[75vh] w-auto max-w-full object-contain mx-auto"
          />
        </div>

        {(title || subtitle) && (
          <div className="mt-4 text-center">
            {title && (
              <h4 className="text-lg font-serif text-white tracking-wide">{title}</h4>
            )}
            {subtitle && (
              <p className="text-sm text-gold-400 mt-1">{subtitle}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
