'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, ShieldCheck, Globe2, Layers, Award, ArrowRight } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { useLanguage } from '@/context/LanguageContext';

export default function AboutUsPage() {
  const { t, dir } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-background)]" dir={dir}>
      <Header />

      <main className="flex-grow pt-28 pb-20">
        {/* Banner Section */}
        <section className="bg-[var(--color-primary)] text-[var(--color-dark-text)] py-16 border-b border-[var(--color-border)] mb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <span className="text-xs uppercase tracking-widest text-[var(--color-accent)] font-semibold">
              Artisan Heritage & International Export
            </span>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white">
              ABOUT AL QURESH HOME DECOR
            </h1>
            <p className="text-gray-300 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
              Crafting luxury home decor, bone inlay furniture, natural horn accents, and bespoke handicrafts for international buyers across the globe.
            </p>
          </div>
        </section>

        {/* Section 1: Who We Are */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-xs uppercase tracking-widest text-[var(--color-accent)] font-semibold border-b border-[var(--color-accent)]/30 pb-1">
                Who We Are
              </span>
              <h2 className="text-3xl font-serif font-bold text-[var(--color-text)]">
                Handcrafting Character for Luxury Spaces
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                AL QURESH is a premier Indian manufacturer and exporter of luxury home decor, furniture, and decorative accessories. Based in Moradabad—India’s famed city of craftsmanship—our company specializes in combining traditional artisan techniques with contemporary design aesthetics.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our portfolio spans intricate bone inlay furniture, ethically sourced natural horn decorative items, solid wooden handicrafts, hand-sculpted Makrana marble, cast resin objects, and Mother of Pearl inlay.
              </p>
            </div>

            <div className="relative h-[400px] rounded-lg overflow-hidden border border-[var(--color-border)] shadow-xl">
              <Image
                src="/images/categories/furniture.jpg"
                alt="AL QURESH Artisan Heritage"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        {/* Section 2: Our Craft & Materials */}
        <section className="bg-[var(--color-primary)] text-[var(--color-dark-text)] py-20 border-y border-[var(--color-border)] mb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-xs uppercase tracking-widest text-[var(--color-accent)] font-bold">
                Artisan Heritage
              </span>
              <h2 className="text-3xl font-serif font-bold text-white">
                OUR CRAFT & SIGNATURE MATERIALS
              </h2>
              <div className="w-16 h-0.5 bg-[var(--color-accent)] mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[var(--color-secondary)] p-8 rounded-lg border border-[var(--color-border)] space-y-4">
                <Sparkles className="w-8 h-8 text-[var(--color-accent)]" />
                <h3 className="text-lg font-serif font-bold text-white">Bone & Shell Inlay</h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Every bone and Mother of Pearl inlay tile is individually cut, shaped, and hand-set into custom resin patterns by master artisans over weeks of dedicated labor.
                </p>
              </div>

              <div className="bg-[var(--color-secondary)] p-8 rounded-lg border border-[var(--color-border)] space-y-4">
                <Layers className="w-8 h-8 text-[var(--color-accent)]" />
                <h3 className="text-lg font-serif font-bold text-white">Natural Horn Artistry</h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Natural horn is heated, molded, and polished to reveal organic caramel and translucent amber hues, creating one-of-a-kind sculptural vases, frames, and tableware.
                </p>
              </div>

              <div className="bg-[var(--color-secondary)] p-8 rounded-lg border border-[var(--color-border)] space-y-4">
                <ShieldCheck className="w-8 h-8 text-[var(--color-accent)]" />
                <h3 className="text-lg font-serif font-bold text-white">Wood & Stone Carving</h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Seasoned mango wood, solid teak, and natural Makrana marble blocks are hand-carved and hand-turned to meet modern international quality standards.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: B2B OEM & Customization */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[380px] rounded-lg overflow-hidden border border-[var(--color-border)] shadow-xl order-2 lg:order-1">
              <Image
                src="/images/hero/hero-3.jpg"
                alt="Custom B2B Manufacturing"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="space-y-6 order-1 lg:order-2">
              <span className="text-xs uppercase tracking-widest text-[var(--color-accent)] font-semibold border-b border-[var(--color-accent)]/30 pb-1">
                Custom Development
              </span>
              <h2 className="text-3xl font-serif font-bold text-[var(--color-text)]">
                B2B Custom Manufacturing & Private Labeling
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                We work closely with international home decor brands, furniture retailers, boutique importers, and interior design firms. Our flexible sample room and production capabilities support custom sizing, color matching, brand labeling, and bespoke hardware development.
              </p>
              <div className="pt-2">
                <Link
                  href="/contact-us"
                  className="px-8 py-3.5 bg-[var(--color-accent)] text-[var(--color-primary)] font-bold text-xs uppercase tracking-wider rounded hover:bg-[var(--color-accent-light)] transition-colors inline-flex items-center gap-2"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="w-4 h-4 rtl-flip" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
