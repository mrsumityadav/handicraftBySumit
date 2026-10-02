'use client';

import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { siteConfig } from '@/config/site';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName?: string;
  categoryName?: string;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  productName,
  categoryName,
}) => {
  const { t, dir } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    country: '',
    interestedCategory: categoryName || productName || 'General Inquiry',
    message: productName ? `Hello, I am interested in receiving wholesale pricing, minimum order quantity, and lead time details for: "${productName}".` : '',
    website_honeypot: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (productName) {
      setFormData((prev) => ({
        ...prev,
        interestedCategory: productName,
        message: `Hello AL QURESH team, I am interested in requesting wholesale pricing, specifications, and sample details for: "${productName}".`,
      }));
    }
  }, [productName]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setStatus('success');
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Failed to submit inquiry. Please try again.');
      }
    } catch (err: any) {
      setStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 overflow-y-auto"
      dir={dir}
    >
      <div className="relative w-full max-w-2xl bg-[var(--color-secondary)] border border-[var(--color-border-gold)] rounded-lg shadow-2xl overflow-hidden my-8">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--color-border)] bg-[var(--color-primary)]">
          <div>
            <span className="text-xs uppercase tracking-widest text-[var(--color-accent)] font-semibold">
              B2B International Inquiry
            </span>
            <h3 className="text-xl font-serif font-bold text-[var(--color-dark-text)] mt-1">
              {productName ? `Inquire: ${productName}` : 'Request Wholesale Quote & Details'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[var(--color-text-light)] hover:text-[var(--color-accent)] transition-colors rounded-full"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {status === 'success' ? (
            <div className="py-12 text-center space-y-4">
              <CheckCircle2 className="w-16 h-16 text-[var(--color-accent)] mx-auto" />
              <h4 className="text-2xl font-serif text-[var(--color-dark-text)] font-bold">
                Inquiry Submitted Successfully
              </h4>
              <p className="text-[var(--color-text-light)] max-w-md mx-auto">
                Thank you for contacting AL QURESH. Our export trade manager will review your requirements and respond within 24 business hours.
              </p>
              <button
                onClick={onClose}
                className="mt-6 px-8 py-3 bg-[var(--color-accent)] text-[var(--color-primary)] font-bold rounded tracking-wider uppercase text-sm hover:bg-[var(--color-accent-light)] transition-all"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {status === 'error' && (
                <div className="p-4 bg-red-950/60 border border-red-500/50 rounded flex items-center gap-3 text-red-200 text-sm">
                  <AlertCircle className="w-5 h-5 flex-shrink-0 text-red-400" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Anti-spam honeypot */}
              <input
                type="text"
                name="website_honeypot"
                value={formData.website_honeypot}
                onChange={(e) => setFormData({ ...formData, website_honeypot: e.target.value })}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[var(--color-text-light)] mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full px-4 py-2.5 bg-[var(--color-primary)] border border-[var(--color-border)] rounded text-[var(--color-dark-text)] focus:outline-none focus:border-[var(--color-accent)] transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[var(--color-text-light)] mb-1">
                    Business Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@company.com"
                    className="w-full px-4 py-2.5 bg-[var(--color-primary)] border border-[var(--color-border)] rounded text-[var(--color-dark-text)] focus:outline-none focus:border-[var(--color-accent)] transition-colors text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[var(--color-text-light)] mb-1">
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-4 py-2.5 bg-[var(--color-primary)] border border-[var(--color-border)] rounded text-[var(--color-dark-text)] focus:outline-none focus:border-[var(--color-accent)] transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[var(--color-text-light)] mb-1">
                    Company / Brand Name
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Luxury Living Trading"
                    className="w-full px-4 py-2.5 bg-[var(--color-primary)] border border-[var(--color-border)] rounded text-[var(--color-dark-text)] focus:outline-none focus:border-[var(--color-accent)] transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[var(--color-text-light)] mb-1">
                    Country
                  </label>
                  <select
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[var(--color-primary)] border border-[var(--color-border)] rounded text-[var(--color-dark-text)] focus:outline-none focus:border-[var(--color-accent)] transition-colors text-sm"
                  >
                    <option value="">Select Country</option>
                    {siteConfig.targetMarkets.map((m) => (
                      <option key={m} value={m}>
                        {m}
                      </option>
                    ))}
                    <option value="Other">Other International Market</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[var(--color-text-light)] mb-1">
                  Message / Specifications / Custom Requirements *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Please specify estimated quantity, material preferences, dimensions, or private label requests..."
                  className="w-full px-4 py-2.5 bg-[var(--color-primary)] border border-[var(--color-border)] rounded text-[var(--color-dark-text)] focus:outline-none focus:border-[var(--color-accent)] transition-colors text-sm"
                ></textarea>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-xs text-[var(--color-text-light)]">
                  * All B2B inquiries are protected under strict commercial privacy.
                </span>
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="flex items-center gap-2 px-8 py-3 bg-[var(--color-accent)] text-[var(--color-primary)] font-bold rounded tracking-wider uppercase text-sm hover:bg-[var(--color-accent-light)] transition-all disabled:opacity-50 cursor-pointer"
                >
                  {status === 'submitting' ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Inquiry
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
