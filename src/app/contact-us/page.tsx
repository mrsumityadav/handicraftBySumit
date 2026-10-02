'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Clock } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { useLanguage } from '@/context/LanguageContext';
import { siteConfig } from '@/config/site';

export default function ContactUsPage() {
  const { t, dir } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    country: '',
    interestedCategory: 'General Inquiry',
    message: '',
    website_honeypot: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

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
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          country: '',
          interestedCategory: 'General Inquiry',
          message: '',
          website_honeypot: '',
        });
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Failed to submit inquiry. Please try again.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage('Network error submitting inquiry. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-background)]" dir={dir}>
      <Header />

      <main className="flex-grow pt-28 pb-20">
        {/* Banner Section */}
        <section className="bg-[var(--color-primary)] text-[var(--color-dark-text)] py-16 border-b border-[var(--color-border)] mb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <span className="text-xs uppercase tracking-widest text-[var(--color-accent)] font-semibold">
              B2B Commercial Desk
            </span>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white">
              CONTACT AL QURESH EXPORT DIVISION
            </h1>
            <p className="text-gray-300 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
              Get in touch with our export trade management team to discuss wholesale orders, custom product developments, catalog requests, or freight inquiries.
            </p>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Contact Information Sidebar */}
            <div className="bg-[var(--color-primary)] text-white p-8 rounded-lg border border-[var(--color-border-gold)] shadow-xl space-y-8">
              <div className="space-y-2 border-b border-[var(--color-border)] pb-6">
                <span className="text-xs uppercase font-serif tracking-widest text-[var(--color-accent)] font-bold">
                  Commercial Contact
                </span>
                <h3 className="text-2xl font-serif font-bold text-white">Export Office</h3>
                <p className="text-xs text-gray-400">
                  Serving international buyers across the UAE, Middle East, USA, Europe, and Asia.
                </p>
              </div>

              <div className="space-y-6 text-xs text-gray-300">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-[var(--color-secondary)] text-[var(--color-accent)] rounded border border-[var(--color-border)]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-semibold text-gray-400 uppercase text-[10px]">Export Inquiries</span>
                    <span className="font-bold text-white text-sm">{siteConfig.contact.exportInquiries}</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-[var(--color-secondary)] text-[var(--color-accent)] rounded border border-[var(--color-border)]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-semibold text-gray-400 uppercase text-[10px]">Telephone & WhatsApp</span>
                    <span className="font-bold text-white text-sm">{siteConfig.contact.phone}</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-[var(--color-secondary)] text-[var(--color-accent)] rounded border border-[var(--color-border)]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-semibold text-gray-400 uppercase text-[10px]">Headquarters & Works</span>
                    <span className="font-medium text-gray-200">{siteConfig.contact.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-[var(--color-secondary)] text-[var(--color-accent)] rounded border border-[var(--color-border)]">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-semibold text-gray-400 uppercase text-[10px]">Working Hours</span>
                    <span className="font-medium text-gray-200">{siteConfig.contact.workingHours}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[var(--color-border)] text-xs text-gray-400">
                <span className="font-bold text-[var(--color-accent)] block mb-1">Commercial Privacy Guarantee:</span>
                All price inquiries and product specifications are kept under strict confidentiality.
              </div>
            </div>

            {/* Contact & Inquiry Form */}
            <div className="lg:col-span-2 bg-white p-8 sm:p-10 rounded-lg border border-[var(--color-border)] shadow-md">
              <div className="mb-8 space-y-2">
                <span className="text-xs uppercase tracking-widest text-[var(--color-accent)] font-bold">
                  Send B2B Message
                </span>
                <h2 className="text-3xl font-serif font-bold text-[var(--color-text)]">
                  REQUEST A WHOLESALE QUOTE
                </h2>
              </div>

              {status === 'success' ? (
                <div className="py-12 text-center space-y-4">
                  <CheckCircle2 className="w-16 h-16 text-[var(--color-accent)] mx-auto" />
                  <h3 className="text-2xl font-serif text-[var(--color-text)] font-bold">
                    Inquiry Received Successfully
                  </h3>
                  <p className="text-gray-600 text-xs max-w-md mx-auto">
                    Thank you for reaching out to AL QURESH. Our export desk will review your details and send a formal response shortly.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-4 px-8 py-3 bg-[var(--color-primary)] text-white text-xs uppercase font-bold tracking-wider rounded"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {status === 'error' && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded flex items-center gap-3 text-red-700 text-xs">
                      <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <input
                    type="text"
                    name="website_honeypot"
                    value={formData.website_honeypot}
                    onChange={(e) => setFormData({ ...formData, website_honeypot: e.target.value })}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-gray-600 mb-1.5 font-bold">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Smith"
                        className="w-full px-4 py-3 bg-[var(--color-background)] border border-[var(--color-border)] rounded text-xs text-[var(--color-text)] focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-gray-600 mb-1.5 font-bold">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 bg-[var(--color-background)] border border-[var(--color-border)] rounded text-xs text-[var(--color-text)] focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-gray-600 mb-1.5 font-bold">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+971 50 000 0000"
                        className="w-full px-4 py-3 bg-[var(--color-background)] border border-[var(--color-border)] rounded text-xs text-[var(--color-text)] focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-gray-600 mb-1.5 font-bold">
                        Company Name
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Global Trading Ltd"
                        className="w-full px-4 py-3 bg-[var(--color-background)] border border-[var(--color-border)] rounded text-xs text-[var(--color-text)] focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-gray-600 mb-1.5 font-bold">
                        Target Country
                      </label>
                      <select
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        className="w-full px-4 py-3 bg-[var(--color-background)] border border-[var(--color-border)] rounded text-xs text-[var(--color-text)] focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                      >
                        <option value="">Select Country</option>
                        {siteConfig.targetMarkets.map((m) => (
                          <option key={m} value={m}>
                            {m}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-gray-600 mb-1.5 font-bold">
                      Interested Category
                    </label>
                    <select
                      value={formData.interestedCategory}
                      onChange={(e) => setFormData({ ...formData, interestedCategory: e.target.value })}
                      className="w-full px-4 py-3 bg-[var(--color-background)] border border-[var(--color-border)] rounded text-xs text-[var(--color-text)] focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                    >
                      <option value="General Inquiry">General B2B Inquiry</option>
                      <option value="Bone Inlay">Bone Inlay Furniture & Decor</option>
                      <option value="Horn Handicrafts">Horn Handicrafts & Tableware</option>
                      <option value="Wooden Handicrafts">Wooden Handicrafts</option>
                      <option value="Marble Decor">Marble Decor & Accessories</option>
                      <option value="Resin Products">Resin Products</option>
                      <option value="Rattan & Cane">Rattan & Cane Furniture</option>
                      <option value="Metal Handicrafts">Metal Handicrafts</option>
                      <option value="Mother of Pearl">Mother of Pearl Inlay</option>
                      <option value="Ceramic">Ceramic Decor</option>
                      <option value="Custom Private Label">Custom Private Label OEM</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-gray-600 mb-1.5 font-bold">
                      Your Message / Order Requirements *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please specify estimated quantity, product codes, custom requirements, or shipping terms..."
                      className="w-full px-4 py-3 bg-[var(--color-background)] border border-[var(--color-border)] rounded text-xs text-[var(--color-text)] focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                    ></textarea>
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-[11px] text-gray-400">
                      Response within 24 hours guaranteed.
                    </span>
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="px-10 py-4 bg-[var(--color-accent)] text-[var(--color-primary)] font-bold text-xs uppercase tracking-widest rounded hover:bg-[var(--color-accent-light)] transition-all flex items-center gap-2 shadow-md cursor-pointer disabled:opacity-50"
                    >
                      {status === 'submitting' ? (
                        'Submitting...'
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>SEND INQUIRY</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
