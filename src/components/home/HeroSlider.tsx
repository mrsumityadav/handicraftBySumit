'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface Slide {
  id: number;
  image: string;
  badge: string;
  titleKey: string;
  subtitleKey: string;
  ctaText: string;
  ctaLink: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: '/images/hero/hero-1.jpg',
    badge: 'LUXURY HOME DECOR',
    titleKey: 'hero_title_1',
    subtitleKey: 'hero_subtitle_1',
    ctaText: 'EXPLORE COLLECTION',
    ctaLink: '/products',
  },
  {
    id: 2,
    image: '/images/hero/hero-2.jpg',
    badge: 'BONE INLAY COLLECTION',
    titleKey: 'hero_title_2',
    subtitleKey: 'hero_subtitle_2',
    ctaText: 'VIEW BONE INLAY',
    ctaLink: '/products?category=bone-inlay',
  },
  {
    id: 3,
    image: '/images/hero/hero-3.jpg',
    badge: 'HORN & NATURAL MATERIALS',
    titleKey: 'hero_title_3',
    subtitleKey: 'hero_subtitle_3',
    ctaText: 'VIEW HORN DECOR',
    ctaLink: '/products?category=horn-handicrafts',
  },
  {
    id: 4,
    image: '/images/hero/hero-4.jpg',
    badge: 'GLOBAL B2B EXPORT',
    titleKey: 'hero_title_4',
    subtitleKey: 'hero_subtitle_4',
    ctaText: 'REQUEST B2B QUOTE',
    ctaLink: '/contact-us',
  },
];

export const HeroSlider: React.FC<{ onOpenInquiry: () => void }> = ({ onOpenInquiry }) => {
  const { t, dir } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 7000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') prevSlide();
    if (e.key === 'ArrowRight') nextSlide();
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (diff > 50) nextSlide();
    if (diff < -50) prevSlide();
    setTouchStart(null);
  };

  return (
    <div
      className="relative w-full h-[88vh] min-h-[620px] max-h-[900px] overflow-hidden bg-[var(--color-primary)]"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      dir={dir}
    >
      {/* Slide Images Background */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <Image
            src={slide.image}
            alt="AL QURESH Luxury Home Decor"
            fill
            priority={index === 0}
            className="object-cover transition-transform duration-[10000ms] scale-105"
            sizes="100vw"
          />
          {/* Subtle Luxury Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)] via-transparent to-black/50" />
        </div>
      ))}

      {/* Slide Content Overlay */}
      <div className="relative z-20 max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex flex-col justify-center text-[var(--color-dark-text)] pt-20">
        <div className="max-w-2xl space-y-6">
          {/* Gold Decorative Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--color-accent)]/15 border border-[var(--color-accent)]/40 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] animate-pulse" />
            <span className="text-[11px] font-semibold uppercase tracking-widest text-[var(--color-accent-light)]">
              {slides[currentSlide].badge}
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-[1.15] tracking-tight">
            {t(slides[currentSlide].titleKey)}
          </h1>

          {/* Gold Accent Line */}
          <div className="w-24 h-0.5 bg-gradient-to-r from-[var(--color-accent)] to-transparent" />

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-light">
            {t(slides[currentSlide].subtitleKey)}
          </p>

          {/* Action CTAs */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <Link
              href={slides[currentSlide].ctaLink}
              className="px-8 py-4 bg-[var(--color-accent)] text-[var(--color-primary)] font-bold uppercase tracking-wider text-xs rounded hover:bg-[var(--color-accent-light)] transition-all shadow-lg inline-flex items-center gap-2"
            >
              <span>{t('btn_explore')}</span>
              <ArrowRight className="w-4 h-4 rtl-flip" />
            </Link>

            <button
              onClick={onOpenInquiry}
              className="px-8 py-4 bg-transparent border border-[var(--color-accent)] text-[var(--color-accent)] font-bold uppercase tracking-wider text-xs rounded hover:bg-[var(--color-accent)] hover:text-[var(--color-primary)] transition-all"
            >
              {t('btn_request_quote')}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-0 right-0 z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Pagination Dots */}
        <div className="flex items-center gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-1.5 transition-all duration-300 rounded-full ${
                idx === currentSlide
                  ? 'w-10 bg-[var(--color-accent)]'
                  : 'w-3 bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Arrow Navigation Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={prevSlide}
            className="p-3 rounded-full bg-black/40 border border-white/20 text-white hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors backdrop-blur"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-5 h-5 rtl-flip" />
          </button>
          <button
            onClick={nextSlide}
            className="p-3 rounded-full bg-black/40 border border-white/20 text-white hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors backdrop-blur"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-5 h-5 rtl-flip" />
          </button>
        </div>
      </div>
    </div>
  );
};
