import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { siteConfig } from '../data/siteData';

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    department: 'business',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate reliable submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  const departments = [
    { value: 'business', label: 'Business & Distribution Inquiry', email: siteConfig.contacts.business },
    { value: 'creative', label: 'Creative, Script & Casting Inquiry', email: siteConfig.contacts.creative },
    { value: 'copyright', label: 'Anti-Piracy & Copyright Inquiry', email: siteConfig.contacts.copyright },
    { value: 'general', label: 'General Production Query', email: siteConfig.contacts.business },
  ];

  if (submitted) {
    return (
      <div className="bg-dark-900 border border-gold-500/30 rounded-2xl p-8 sm:p-10 text-center animate-fade-in shadow-2xl">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold-500/10 border border-gold-500/40 flex items-center justify-center text-gold-400">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-serif text-white font-bold mb-2">
          Message Sent Successfully!
        </h3>
        <p className="text-gray-300 text-sm max-w-md mx-auto mb-6">
          Thank you for reaching out to <span className="text-gold-400 font-semibold">Shiva Satyam Productions</span>. Our team will review your message and reply promptly.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setForm({ name: '', email: '', phone: '', department: 'business', subject: '', message: '' });
          }}
          className="px-6 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold bg-gold-500 hover:bg-gold-400 text-black transition-colors"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-dark-900/80 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Name */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2">
            Your Name <span className="text-gold-400">*</span>
          </label>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="John Doe"
            className="w-full px-4 py-3 rounded-lg bg-dark-950 border border-white/10 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 text-white placeholder-gray-600 text-sm transition-colors outline-none"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2">
            Email Address <span className="text-gold-400">*</span>
          </label>
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="john@example.com"
            className="w-full px-4 py-3 rounded-lg bg-dark-950 border border-white/10 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 text-white placeholder-gray-600 text-sm transition-colors outline-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Phone */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2">
            Phone / WhatsApp (Optional)
          </label>
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder="+91 98765 43210"
            className="w-full px-4 py-3 rounded-lg bg-dark-950 border border-white/10 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 text-white placeholder-gray-600 text-sm transition-colors outline-none"
          />
        </div>

        {/* Department */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2">
            Department / Inquiry Type <span className="text-gold-400">*</span>
          </label>
          <select
            value={form.department}
            onChange={(e) => setForm({ ...form, department: e.target.value })}
            className="w-full px-4 py-3 rounded-lg bg-dark-950 border border-white/10 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 text-white text-sm transition-colors outline-none"
          >
            {departments.map((d) => (
              <option key={d.value} value={d.value}>
                {d.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Subject */}
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2">
          Subject <span className="text-gold-400">*</span>
        </label>
        <input
          type="text"
          required
          value={form.subject}
          onChange={(e) => setForm({ ...form, subject: e.target.value })}
          placeholder="e.g. Distribution inquiry for Antaryami"
          className="w-full px-4 py-3 rounded-lg bg-dark-950 border border-white/10 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 text-white placeholder-gray-600 text-sm transition-colors outline-none"
        />
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2">
          Message <span className="text-gold-400">*</span>
        </label>
        <textarea
          rows={5}
          required
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Please share details about your inquiry, proposal, or feedback..."
          className="w-full px-4 py-3 rounded-lg bg-dark-950 border border-white/10 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 text-white placeholder-gray-600 text-sm transition-colors outline-none resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3.5 px-6 rounded-xl font-semibold uppercase tracking-wider text-xs bg-gold-500 hover:bg-gold-400 text-black flex items-center justify-center gap-2 transition-all duration-200 shadow-lg hover:shadow-gold-500/20 disabled:opacity-50"
      >
        {loading ? (
          <span className="inline-block animate-spin w-4 h-4 border-2 border-black border-t-transparent rounded-full" />
        ) : (
          <>
            <Send className="w-4 h-4" />
            <span>Submit Inquiry</span>
          </>
        )}
      </button>
    </form>
  );
}
