'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Globe, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { siteConfig } from '@/config/site';

export const Footer: React.FC = () => {
  const { t, dir } = useLanguage();

  return (
    <footer className="bg-[var(--color-primary)] text-[var(--color-dark-text)] border-t border-[var(--color-border)] pt-16 pb-8" dir={dir}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[var(--color-border)]">
          {/* Column 1: Brand & Logo */}
          <div className="lg:col-span-2 space-y-6">
            <div className="relative w-32 h-28">
              <Image
                src="/images/logo.png"
                alt="AL QURESH HOME DECOR"
                fill
                className="object-contain object-center bg-white/70 rounded-lg p-2"
                sizes="(max-width: 768px) 300px, 200px"
              />
            </div>
            <p className="text-xs text-gray-400 leading-relaxed max-w-md">
              {t('footer_desc')}
            </p>
            <div className="space-y-2 text-xs text-gray-300">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[var(--color-accent)]" />
                <span>{siteConfig.contact.exportInquiries}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[var(--color-accent)]" />
                <span>{siteConfig.contact.phone}</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[var(--color-accent)] flex-shrink-0 mt-0.5" />
                <span>{siteConfig.contact.address}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase font-serif font-bold text-[var(--color-accent)] tracking-widest border-b border-[var(--color-border)] pb-2">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-gray-300">
              <li>
                <Link href="/" className="hover:text-[var(--color-accent)] transition-colors inline-flex items-center gap-1">
                  {t('nav_home')}
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-[var(--color-accent)] transition-colors inline-flex items-center gap-1">
                  {t('nav_products')}
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:text-[var(--color-accent)] transition-colors inline-flex items-center gap-1">
                  {t('nav_about')}
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-[var(--color-accent)] transition-colors inline-flex items-center gap-1">
                  {t('nav_contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Material & Product Categories */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase font-serif font-bold text-[var(--color-accent)] tracking-widest border-b border-[var(--color-border)] pb-2">
              Craft Materials
            </h4>
            <ul className="space-y-2 text-xs text-gray-300">
              {['Horn', 'Bone Inlay', 'Wood', 'Marble', 'Resin', 'Rattan & Cane', 'Metal', 'Mother of Pearl', 'Ceramic'].map((mat) => (
                <li key={mat}>
                  <Link href={`/products?search=${encodeURIComponent(mat)}`} className="hover:text-[var(--color-accent)] transition-colors">
                    • {mat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Global Export Markets */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase font-serif font-bold text-[var(--color-accent)] tracking-widest border-b border-[var(--color-border)] pb-2">
              Target Export Markets
            </h4>
            <div className="flex flex-wrap gap-1.5 text-[11px] text-gray-300">
              {siteConfig.targetMarkets.map((market) => (
                <span
                  key={market}
                  className="px-2 py-1 bg-[var(--color-secondary)] border border-[var(--color-border)] rounded text-gray-300"
                >
                  {market}
                </span>
              ))}
            </div>
            <div className="pt-2">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-1 text-xs text-[var(--color-accent)] hover:underline font-bold tracking-wider uppercase"
              >
                Request Commercial Catalog <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            © 2026 {siteConfig.name} {siteConfig.tagline}. {t('footer_rights')}
          </div>
          <div className="flex items-center gap-6">
            <span>B2B Wholesale & Custom Manufacturing</span>
            <span>Indian Craftsmanship</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
