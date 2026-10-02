'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X, Globe, Mail, Phone } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { languages, Locale } from '@/config/i18n';
import { siteConfig } from '@/config/site';

export const Header: React.FC = () => {
  const { locale, setLocale, t, dir } = useLanguage();
  const pathname = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentLang = languages.find((l) => l.code === locale) || languages[0];

  const headerContainerClass = isScrolled
    ? 'bg-white/98 backdrop-blur-md border-b border-[var(--color-border-gold)] py-2.5 shadow-md'
    : 'bg-white border-b border-gray-200 py-3.5 shadow-sm';

  const navLinkClass =
    'text-black hover:text-[var(--color-accent)] font-semibold transition-colors uppercase tracking-wider text-xs py-2';

  const langBtnClass =
    'bg-gray-100 border border-gray-300 text-black hover:border-[var(--color-accent)]';

  const mobileToggleClass = 'text-black hover:text-[var(--color-accent)]';

  return (
    <header className="fixed top-0 left-0 right-0 z-40 w-full transition-all duration-300">
      {/* Top B2B Bar */}
      <div className="bg-[var(--color-primary)] text-[var(--color-text-light)] text-xs border-b border-[var(--color-border)] py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="text-[var(--color-accent)] font-semibold uppercase tracking-wider text-[11px]">
              International B2B Showcase & Export Catalog
            </span>
            <span className="flex items-center gap-1.5 text-gray-400">
              <Mail className="w-3.5 h-3.5 text-[var(--color-accent)]" />
              {siteConfig.contact.exportInquiries}
            </span>
            <span className="flex items-center gap-1.5 text-gray-400">
              <Phone className="w-3.5 h-3.5 text-[var(--color-accent)]" />
              {siteConfig.contact.phone}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-gray-400">Target Markets: UAE, USA, Europe, GCC, Asia</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className={`w-full transition-all duration-300 ${headerContainerClass}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group relative z-10">
            <div className="relative w-56 h-18 sm:w-64 sm:h-20 lg:w-72 lg:h-24 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/images/logo.png"
                alt="AL QURESH HOME DECOR"
                fill
                priority
                className="object-contain object-left"
                sizes="(max-width: 768px) 260px, 350px"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 font-medium text-sm">
            <Link href="/" className={navLinkClass}>
              {t('nav_home')}
            </Link>

            {/* Products Mega Menu Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setMegaMenuOpen(true)}
              onMouseLeave={() => setMegaMenuOpen(false)}
            >
              <Link href="/products" className={`flex items-center gap-1 group ${navLinkClass}`}>
                <span>{t('nav_products')}</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 text-black group-hover:text-[var(--color-accent)] transition-transform duration-200 ${megaMenuOpen ? 'rotate-180' : ''
                    }`}
                />
              </Link>

              {/* Mega Menu Overlay Container */}
              {megaMenuOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[950px] bg-[var(--color-secondary)] border border-[var(--color-border-gold)] rounded-lg shadow-2xl p-6 text-[var(--color-dark-text)] grid grid-cols-4 gap-6 animate-fade-in-scale z-50 mt-1">
                  {siteConfig.productTaxonomy.map((cat) => (
                    <div key={cat.slug} className="space-y-2">
                      <Link
                        href={`/products?category=${cat.slug}`}
                        className="text-xs uppercase font-serif font-bold text-[var(--color-accent)] hover:text-[var(--color-accent-light)] transition-colors block border-b border-[var(--color-border)] pb-1"
                        onClick={() => setMegaMenuOpen(false)}
                      >
                        {cat.name}
                      </Link>
                      <ul className="space-y-1 text-xs text-gray-300">
                        {cat.subcategories.map((sub) => (
                          <li key={sub.slug}>
                            <Link
                              href={`/products?category=${cat.slug}&subcategory=${sub.slug}`}
                              className="hover:text-[var(--color-accent)] transition-colors block py-0.5"
                              onClick={() => setMegaMenuOpen(false)}
                            >
                              • {sub.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}

                  <div className="col-span-4 border-t border-[var(--color-border)] pt-4 flex items-center justify-between text-xs text-gray-400">
                    <span>Explore custom handcrafted collections for international B2B buyers.</span>
                    <Link
                      href="/products"
                      className="text-[var(--color-accent)] hover:underline font-bold uppercase tracking-wider"
                      onClick={() => setMegaMenuOpen(false)}
                    >
                      View Full Catalog →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/about-us" className={navLinkClass}>
              {t('nav_about')}
            </Link>

            <Link href="/contact-us" className={navLinkClass}>
              {t('nav_contact')}
            </Link>
          </nav>

          {/* Header Right Actions */}
          <div className="flex items-center gap-4">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded text-xs transition-colors ${langBtnClass}`}
                aria-label="Language Selector"
              >
                <Globe className="w-3.5 h-3.5 text-black" />
                <span>{currentLang.flag}</span>
                <span className="font-semibold">{currentLang.nativeName}</span>
                <ChevronDown className="w-3 h-3 text-black" />
              </button>

              {langDropdownOpen && (
                <div
                  className={`absolute top-full mt-2 ${dir === 'rtl' ? 'left-0' : 'right-0'
                    } w-48 bg-white border border-gray-200 rounded-lg shadow-xl py-2 z-50 max-h-80 overflow-y-auto text-black`}
                >
                  {languages.map((lang: Locale | any) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLocale(lang.code as Locale);
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-4 py-2 text-xs hover:bg-gray-100 transition-colors ${locale === lang.code
                        ? 'text-[var(--color-accent-dark)] font-bold bg-gray-50'
                        : 'text-black'
                        }`}
                    >
                      <span className="flex items-center gap-2">
                        <span>{lang.flag}</span>
                        <span>{lang.nativeName}</span>
                      </span>
                      <span className="text-gray-500 uppercase">{lang.code}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Quote Inquiry CTA Button */}
            <Link
              href="/contact-us"
              className="hidden sm:inline-flex px-5 py-2 bg-[var(--color-accent)] text-[var(--color-primary)] text-xs font-bold uppercase tracking-wider rounded hover:bg-[var(--color-accent-light)] transition-all shadow-md"
            >
              Request Quote
            </Link>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 transition-colors ${mobileToggleClass}`}
              aria-label="Toggle Mobile Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-down Accordion Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bottom-0 bg-white border-t border-gray-200 z-50 overflow-y-auto p-6 space-y-4 text-black shadow-2xl">
          <Link
            href="/"
            className="block text-sm font-bold uppercase tracking-wider text-black hover:text-[var(--color-accent)] border-b border-gray-200 pb-3"
            onClick={() => setMobileMenuOpen(false)}
          >
            {t('nav_home')}
          </Link>

          {/* Products Accordion on Mobile */}
          <div className="border-b border-gray-200 pb-3">
            <div className="flex items-center justify-between py-1">
              <Link
                href="/products"
                className="text-sm font-bold uppercase tracking-wider text-[var(--color-accent-dark)]"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('nav_products')}
              </Link>
              <button
                onClick={() =>
                  setExpandedCategory(expandedCategory === 'mobile-products' ? null : 'mobile-products')
                }
                className="p-1 text-black"
              >
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${expandedCategory === 'mobile-products' ? 'rotate-180' : ''
                    }`}
                />
              </button>
            </div>

            {expandedCategory === 'mobile-products' && (
              <div className="mt-3 pl-4 space-y-3">
                {siteConfig.productTaxonomy.map((cat) => (
                  <div key={cat.slug} className="space-y-1">
                    <Link
                      href={`/products?category=${cat.slug}`}
                      className="block text-xs uppercase font-serif font-bold text-black hover:text-[var(--color-accent)]"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {cat.name}
                    </Link>
                    <ul className="pl-3 space-y-1 text-xs text-gray-600">
                      {cat.subcategories.map((sub) => (
                        <li key={sub.slug}>
                          <Link
                            href={`/products?category=${cat.slug}&subcategory=${sub.slug}`}
                            className="block py-0.5 hover:text-[var(--color-accent)]"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {sub.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/about-us"
            className="block text-sm font-bold uppercase tracking-wider text-black hover:text-[var(--color-accent)] border-b border-gray-200 pb-3"
            onClick={() => setMobileMenuOpen(false)}
          >
            {t('nav_about')}
          </Link>

          <Link
            href="/contact-us"
            className="block text-sm font-bold uppercase tracking-wider text-black hover:text-[var(--color-accent)] border-b border-gray-200 pb-3"
            onClick={() => setMobileMenuOpen(false)}
          >
            {t('nav_contact')}
          </Link>

          <div className="pt-4 space-y-4">
            <Link
              href="/contact-us"
              className="block w-full py-3 bg-[var(--color-accent)] text-[var(--color-primary)] text-center font-bold uppercase tracking-wider text-xs rounded"
              onClick={() => setMobileMenuOpen(false)}
            >
              Request B2B Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
