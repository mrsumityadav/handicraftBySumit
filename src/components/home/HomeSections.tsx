'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Sparkles,
  ShieldCheck,
  Globe2,
  Sliders,
  Layers,
  ArrowRight,
  ChevronDown,
  Compass,
  PenTool,
  Hammer,
  CheckCircle,
  Truck,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { siteConfig } from '@/config/site';

interface HomeSectionsProps {
  onOpenInquiry: (category?: string) => void;
}

export const HomeSections: React.FC<HomeSectionsProps> = ({ onOpenInquiry }) => {
  const { t, dir } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const collections = [
    { name: 'Horn Handicrafts', slug: 'horn-handicrafts', img: '/images/categories/horn.jpg' },
    { name: 'Bone Inlay', slug: 'bone-inlay', img: '/images/categories/bone-inlay.jpg' },
    { name: 'Wooden Handicrafts', slug: 'wooden-handicrafts', img: '/images/categories/wood.jpg' },
    { name: 'Marble Decor', slug: 'marble', img: '/images/categories/marble.jpg' },
    { name: 'Resin Products', slug: 'resin', img: '/images/categories/resin.jpg' },
    { name: 'Rattan & Cane', slug: 'rattan-cane', img: '/images/categories/rattan.jpg' },
    { name: 'Metal Handicrafts', slug: 'metal', img: '/images/categories/metal.jpg' },
    { name: 'Mother of Pearl Inlay', slug: 'mother-of-pearl', img: '/images/categories/mother-of-pearl.jpg' },
    { name: 'Ceramic Products', slug: 'ceramic', img: '/images/categories/ceramic.jpg' },
    { name: 'Luxury Furniture', slug: 'furniture', img: '/images/categories/furniture.jpg' },
    { name: 'Statement Home Decor', slug: 'home-decor', img: '/images/categories/home-decor.jpg' },
  ];

  const whyUs = [
    {
      icon: Sparkles,
      title: 'AUTHENTIC CRAFTSMANSHIP',
      desc: 'Carefully handcrafted decorative pieces by master Indian artisans with generations of heritage expertise.',
    },
    {
      icon: Layers,
      title: 'PREMIUM MATERIALS',
      desc: 'Distinctive natural horn, bone inlay, solid teak, Makrana marble, resin, and Mother of Pearl.',
    },
    {
      icon: Sliders,
      title: 'CUSTOM DESIGN & OEM',
      desc: 'Flexible custom product development, bespoke dimensions, and private-label collections for importers.',
    },
    {
      icon: Globe2,
      title: 'GLOBAL PARTNERSHIPS',
      desc: 'Built specifically for wholesalers, retailers, interior designers, and decor brands worldwide.',
    },
    {
      icon: ShieldCheck,
      title: 'CONSISTENT QUALITY',
      desc: 'Rigorous finishing, structural inspection, and export-grade protective packaging standards.',
    },
  ];

  const processSteps = [
    { step: '01', title: 'DISCOVER', desc: 'Browse our international B2B catalog or share custom design specs.', icon: Compass },
    { step: '02', title: 'DESIGN', desc: 'Collaborate with our team to refine materials, dimensions, and finishes.', icon: PenTool },
    { step: '03', title: 'CRAFT', desc: 'Master artisans handcraft each piece with precision and traditional techniques.', icon: Hammer },
    { step: '04', title: 'QUALITY CHECK', desc: 'Detailed multi-point inspection for structural integrity and surface finishing.', icon: CheckCircle },
    { step: '05', title: 'DELIVER', desc: 'Export packaging and international shipping logistics management.', icon: Truck },
  ];

  const faqs = [
    {
      q: 'Do you offer custom designs and private labeling for international buyers?',
      a: 'Yes, AL QURESH specializes in custom manufacturing and private-label development for B2B buyers. We can adapt designs, dimensions, materials, and finishes to meet your exact market requirements.',
    },
    {
      q: 'What main materials do you work with?',
      a: 'Our primary material expertise encompasses natural horn, camel bone inlay, seasoned mango & teak wood, natural Makrana marble, cast resin, handwoven rattan & cane, solid brass, aluminium, Mother of Pearl inlay, and ceramics.',
    },
    {
      q: 'Which international markets do you export to?',
      a: 'We export across the globe including UAE, Saudi Arabia, Qatar, Kuwait, Oman, USA, UK, Germany, France, Italy, Spain, Netherlands, Australia, Japan, Singapore, and Canada.',
    },
    {
      q: 'How can I request product pricing, samples, or wholesale catalogs?',
      a: 'You can request wholesale details by clicking any "Send Inquiry" or "Request Quote" button on our catalog or contact page. Our export trade team will provide specs and terms promptly.',
    },
    {
      q: 'Can products be customized for specific interior projects?',
      a: 'Absolutely. We work closely with interior designers, architects, and luxury hospitality buyers to deliver bespoke furniture and decorative accents suited for high-end residential and commercial projects.',
    },
  ];

  return (
    <div className="space-y-24 py-16" dir={dir}>
      {/* SECTION 1 — INTRODUCTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs uppercase tracking-widest text-[var(--color-accent)] font-semibold border-b border-[var(--color-accent)]/30 pb-1">
              Indian Artisan Heritage
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[var(--color-text)]">
              {t('sec_intro_heading')}
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              AL QURESH brings together traditional Indian artisan craftsmanship, distinctive natural materials, and modern international design sensibilities. Every piece in our collection is individually handcrafted to elevate luxury interiors, hospitality spaces, and refined home environments.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm">
              From hand-carved bone inlay furniture to polished natural horn accessories and marble decorative objects, we serve international importers, wholesalers, and interior design firms across the globe.
            </p>
            <div className="pt-2">
              <Link
                href="/about-us"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-[var(--color-primary)] text-[var(--color-dark-text)] font-bold text-xs uppercase tracking-wider rounded hover:bg-[var(--color-secondary)] transition-colors"
              >
                <span>Discover Our Story</span>
                <ArrowRight className="w-4 h-4 text-[var(--color-accent)] rtl-flip" />
              </Link>
            </div>
          </div>

          <div className="relative h-[420px] rounded-lg overflow-hidden shadow-2xl gold-border-glow">
            <Image
              src="/images/categories/bone-inlay.jpg"
              alt="Artisan Craftsmanship AL QURESH"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-4 bg-black/70 backdrop-blur border border-[var(--color-border)] rounded text-white text-xs">
              <span className="text-[var(--color-accent)] font-bold block">Handcrafted Bone Inlay Artistry</span>
              <span>Intricate floral patterns individually laid by master Indian craftsmen.</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — PRODUCT COLLECTIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="text-xs uppercase tracking-widest text-[var(--color-accent)] font-semibold">
            Artisan Catalog
          </span>
          <h2 className="text-3xl font-serif font-bold text-[var(--color-text)]">
            {t('sec_collections_heading')}
          </h2>
          <div className="w-16 h-0.5 bg-[var(--color-accent)] mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((cat) => (
            <Link
              key={cat.slug}
              href={`/products?category=${cat.slug}`}
              className="group relative h-80 rounded-lg overflow-hidden shadow-lg border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-all duration-300"
            >
              <Image
                src={cat.img}
                alt={cat.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent group-hover:from-black/95 transition-colors" />

              <div className="absolute bottom-0 left-0 right-0 p-6 space-y-2">
                <span className="text-[10px] uppercase tracking-widest text-[var(--color-accent)] font-bold">
                  B2B Showcase
                </span>
                <h3 className="text-xl font-serif font-bold text-white group-hover:text-[var(--color-accent-light)] transition-colors">
                  {cat.name}
                </h3>
                <span className="inline-flex items-center gap-1 text-xs text-gray-300 group-hover:text-white font-medium">
                  Explore Collection <ArrowRight className="w-3.5 h-3.5 text-[var(--color-accent)] rtl-flip" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* SECTION 3 — FEATURED CRAFTSMANSHIP SPLIT */}
      <section className="bg-[var(--color-primary)] text-[var(--color-dark-text)] py-20 border-y border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[480px] rounded-lg overflow-hidden border border-[var(--color-border-gold)] shadow-2xl">
              <Image
                src="/images/hero/hero-2.jpg"
                alt="Where Tradition Meets Contemporary Design"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="space-y-6">
              <span className="text-xs uppercase tracking-widest text-[var(--color-accent)] font-bold">
                Handmade Excellence
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white leading-tight">
                {t('sec_featured_heading')}
              </h2>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                At AL QURESH, we bridge the gap between age-old artisan techniques and contemporary interior styling. Every piece is handcrafted in Moradabad and regional craft hubs, preserving century-old carving, turning, inlay, and metalworking heritage.
              </p>
              <ul className="space-y-3 text-xs text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
                  Seasoned natural materials treated for international climate durability.
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
                  Meticulous multi-tier polishing and protective lacquer coating.
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
                  Custom packaging built for safe sea and air freight logistics.
                </li>
              </ul>
              <div className="pt-4">
                <Link
                  href="/products"
                  className="px-8 py-3.5 bg-[var(--color-accent)] text-[var(--color-primary)] font-bold text-xs uppercase tracking-wider rounded hover:bg-[var(--color-accent-light)] transition-colors inline-flex items-center gap-2"
                >
                  <span>VIEW FULL CATALOG</span>
                  <ArrowRight className="w-4 h-4 rtl-flip" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — WHY AL QURESH */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <span className="text-xs uppercase tracking-widest text-[var(--color-accent)] font-semibold">
            B2B Export Advantage
          </span>
          <h2 className="text-3xl font-serif font-bold text-[var(--color-text)]">
            {t('sec_why_heading')}
          </h2>
          <div className="w-16 h-0.5 bg-[var(--color-accent)] mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {whyUs.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 rounded-lg border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-all duration-300 shadow-sm hover:shadow-md space-y-4 text-center group"
              >
                <div className="w-12 h-12 rounded-full bg-[var(--color-primary)] text-[var(--color-accent)] flex items-center justify-center mx-auto group-hover:bg-[var(--color-accent)] group-hover:text-[var(--color-primary)] transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xs font-serif font-bold text-[var(--color-text)] tracking-wider">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 5 — MATERIALS SHOWCASE */}
      <section className="bg-[var(--color-background)] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <span className="text-xs uppercase tracking-widest text-[var(--color-accent)] font-semibold">
              Distinctive Elements
            </span>
            <h2 className="text-3xl font-serif font-bold text-[var(--color-text)]">
              {t('sec_materials_heading')}
            </h2>
            <div className="w-16 h-0.5 bg-[var(--color-accent)] mx-auto" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'HORN', img: '/images/materials/horn.jpg', query: 'horn' },
              { name: 'BONE INLAY', img: '/images/materials/bone.jpg', query: 'bone' },
              { name: 'MANGO & TEAK WOOD', img: '/images/materials/wood.jpg', query: 'wood' },
              { name: 'MAKRANA MARBLE', img: '/images/materials/marble.jpg', query: 'marble' },
              { name: 'CAST RESIN', img: '/images/materials/resin.jpg', query: 'resin' },
              { name: 'RATTAN & CANE', img: '/images/materials/rattan.jpg', query: 'rattan' },
              { name: 'BRASS & METALS', img: '/images/materials/metal.jpg', query: 'metal' },
              { name: 'MOTHER OF PEARL', img: '/images/materials/mop.jpg', query: 'mother' },
            ].map((mat) => (
              <Link
                key={mat.name}
                href={`/products?search=${encodeURIComponent(mat.query)}`}
                className="group relative h-48 rounded overflow-hidden shadow border border-[var(--color-border)]"
              >
                <Image
                  src={mat.img}
                  alt={mat.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors flex items-center justify-center p-4">
                  <span className="text-xs font-serif font-bold text-white tracking-widest text-center border-b border-[var(--color-accent)] pb-1 group-hover:text-[var(--color-accent-light)]">
                    {mat.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — CUSTOM / PRIVATE LABEL (DARK LUXURY) */}
      <section className="bg-[var(--color-surface-dark)] text-white py-20 border-y border-[var(--color-border-gold)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs uppercase tracking-widest text-[var(--color-accent)] font-semibold">
            Bespoke Manufacturing & OEM
          </span>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-[var(--color-dark-text)]">
            {t('sec_custom_heading')}
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300 text-sm sm:text-base leading-relaxed">
            From custom dimensions to private-label home decor collections, collaborate directly with our design and production engineering team to craft distinctive products for your brand and market.
          </p>
          <div className="pt-4">
            <button
              onClick={() => onOpenInquiry('Custom Private Label Project')}
              className="px-10 py-4 bg-[var(--color-accent)] text-[var(--color-primary)] font-bold text-xs uppercase tracking-widest rounded hover:bg-[var(--color-accent-light)] transition-all shadow-xl"
            >
              {t('btn_discuss_project')}
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 7 — GLOBAL PRESENCE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs uppercase tracking-widest text-[var(--color-accent)] font-semibold">
              International B2B Reach
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[var(--color-text)]">
              {t('sec_global_heading')}
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Our handcrafted products grace luxury residences, boutique hotels, and high-end retail showrooms across key international trade hubs.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-2 text-xs font-semibold">
              <div className="p-4 bg-white border border-[var(--color-border)] rounded">
                <span className="text-[var(--color-accent)] font-bold block mb-1">Middle East & GCC</span>
                <span className="text-gray-500 font-normal">UAE, Saudi Arabia, Qatar, Kuwait, Oman</span>
              </div>
              <div className="p-4 bg-white border border-[var(--color-border)] rounded">
                <span className="text-[var(--color-accent)] font-bold block mb-1">North America</span>
                <span className="text-gray-500 font-normal">United States, Canada</span>
              </div>
              <div className="p-4 bg-white border border-[var(--color-border)] rounded">
                <span className="text-[var(--color-accent)] font-bold block mb-1">Europe</span>
                <span className="text-gray-500 font-normal">UK, Germany, France, Italy, Spain, Netherlands</span>
              </div>
              <div className="p-4 bg-white border border-[var(--color-border)] rounded">
                <span className="text-[var(--color-accent)] font-bold block mb-1">Asia Pacific</span>
                <span className="text-gray-500 font-normal">Japan, Singapore, Australia</span>
              </div>
            </div>
          </div>

          <div className="relative h-[380px] bg-[var(--color-primary)] rounded-lg border border-[var(--color-border)] p-8 flex flex-col justify-center text-[var(--color-dark-text)] space-y-6">
            <Globe2 className="w-16 h-16 text-[var(--color-accent)] opacity-80" />
            <h3 className="text-2xl font-serif font-bold text-white">
              Export Freight & Packaging Excellence
            </h3>
            <p className="text-xs text-gray-300 leading-relaxed">
              We provide comprehensive export packing including heavy-duty corner protection, moisture barrier wrapping, and international fumigated wooden crates tailored for sea container shipment.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 8 — PROCESS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <span className="text-xs uppercase tracking-widest text-[var(--color-accent)] font-semibold">
            Workflow & Quality Control
          </span>
          <h2 className="text-3xl font-serif font-bold text-[var(--color-text)]">
            {t('sec_process_heading')}
          </h2>
          <div className="w-16 h-0.5 bg-[var(--color-accent)] mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {processSteps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.step}
                className="bg-white p-6 rounded border border-[var(--color-border)] space-y-3 relative overflow-hidden"
              >
                <span className="text-3xl font-serif font-bold text-[var(--color-accent)]/30 block">
                  {step.step}
                </span>
                <Icon className="w-6 h-6 text-[var(--color-accent)]" />
                <h3 className="text-xs font-serif font-bold text-[var(--color-text)] tracking-wider">
                  {step.title}
                </h3>
                <p className="text-[11px] text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 9 — INQUIRY CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[var(--color-primary)] border border-[var(--color-border-gold)] rounded-xl p-10 sm:p-14 text-center space-y-6 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-accent)]/5 rounded-full blur-3xl" />
          <span className="text-xs uppercase tracking-widest text-[var(--color-accent)] font-semibold">
            Start a Commercial Dialogue
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
            {t('sec_cta_heading')}
          </h2>
          <p className="text-gray-300 text-sm max-w-xl mx-auto">
            Let's create something beautiful for your home decor collection, luxury store, or interior project.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onOpenInquiry()}
              className="px-10 py-4 bg-[var(--color-accent)] text-[var(--color-primary)] font-bold text-xs uppercase tracking-widest rounded hover:bg-[var(--color-accent-light)] transition-all shadow-lg inline-flex items-center gap-2"
            >
              <span>SEND AN INQUIRY</span>
              <ArrowRight className="w-4 h-4 rtl-flip" />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 10 — FAQ */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs uppercase tracking-widest text-[var(--color-accent)] font-semibold">
            Commercial & Ordering Information
          </span>
          <h2 className="text-3xl font-serif font-bold text-[var(--color-text)]">
            {t('sec_faq_heading')}
          </h2>
          <div className="w-16 h-0.5 bg-[var(--color-accent)] mx-auto" />
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white border border-[var(--color-border)] rounded-lg overflow-hidden transition-colors"
            >
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full px-6 py-4 flex items-center justify-between text-left font-serif font-bold text-sm text-[var(--color-text)] hover:text-[var(--color-accent)]"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-[var(--color-accent)] transition-transform ${
                    openFaq === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openFaq === idx && (
                <div className="px-6 pb-5 text-xs text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
