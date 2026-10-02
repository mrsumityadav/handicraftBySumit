'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Search, Filter, Mail, ArrowRight, Layers, Sparkles } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { InquiryModal } from '@/components/ui/InquiryModal';
import { useLanguage } from '@/context/LanguageContext';
import { siteConfig } from '@/config/site';

interface ProductItem {
  _id?: string;
  name: string;
  slug: string;
  category: string;
  subCategory?: string;
  material: string;
  shortDescription: string;
  description: string;
  images: string[];
  featured: boolean;
}

function ProductsContent() {
  const { t, dir } = useLanguage();
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';
  const initialSearch = searchParams.get('search') || '';

  const [products, setProducts] = useState<ProductItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [selectedProductForInquiry, setSelectedProductForInquiry] = useState<string | undefined>();

  useEffect(() => {
    fetchProducts();
  }, [selectedCategory, searchQuery]);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const queryParams = new URLSearchParams();
      if (selectedCategory && selectedCategory !== 'all') {
        queryParams.set('category', selectedCategory);
      }
      if (searchQuery) {
        queryParams.set('search', searchQuery);
      }

      const res = await fetch(`/api/products?${queryParams.toString()}`);
      const data = await res.json();
      if (data.success) {
        setProducts(data.products || []);
      }
    } catch (err) {
      console.error('Error fetching products:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenInquiry = (productName?: string) => {
    setSelectedProductForInquiry(productName);
    setInquiryModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-background)]" dir={dir}>
      <Header />

      <main className="flex-grow pt-28 pb-20">
        {/* Banner Section */}
        <section className="bg-[var(--color-primary)] text-[var(--color-dark-text)] py-14 border-b border-[var(--color-border)] mb-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <span className="text-xs uppercase tracking-widest text-[var(--color-accent)] font-semibold">
              {t('catalog_showcase')}
            </span>
            <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white">
              HANDCRAFTED B2B PRODUCT CATALOG
            </h1>
            <p className="text-gray-300 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
              Explore our comprehensive collection of Indian handicrafts, bone inlay furniture, horn decorative objects, marble, wood, rattan, and Mother of Pearl inlay.
            </p>
          </div>
        </section>

        {/* Filter and Search Bar */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <div className="bg-white p-6 rounded-lg border border-[var(--color-border)] shadow-sm space-y-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Search Bar */}
              <div className="relative w-full md:w-96">
                <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t('filter_search')}
                  className="w-full pl-10 pr-4 py-2.5 bg-[var(--color-background)] border border-[var(--color-border)] rounded text-xs text-[var(--color-text)] focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                />
              </div>

              <div className="text-xs text-gray-500 font-medium">
                Showing <span className="text-[var(--color-accent)] font-bold">{products.length}</span> Products
              </div>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-colors ${
                  selectedCategory === 'all'
                    ? 'bg-[var(--color-accent)] text-[var(--color-primary)] shadow'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {t('filter_all')}
              </button>

              {siteConfig.productTaxonomy.map((cat) => (
                <button
                  key={cat.slug}
                  onClick={() => setSelectedCategory(cat.slug)}
                  className={`px-4 py-2 rounded text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-colors ${
                    selectedCategory === cat.slug
                      ? 'bg-[var(--color-accent)] text-[var(--color-primary)] shadow'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Product Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="py-20 text-center space-y-4">
              <div className="w-12 h-12 border-4 border-[var(--color-accent)] border-t-transparent rounded-full animate-spin mx-auto" />
              <p className="text-xs text-gray-500 uppercase tracking-widest">
                Loading Luxury Catalog...
              </p>
            </div>
          ) : products.length === 0 ? (
            <div className="py-20 text-center bg-white border border-[var(--color-border)] rounded-lg space-y-4">
              <Layers className="w-12 h-12 text-gray-300 mx-auto" />
              <h3 className="text-lg font-serif font-bold text-[var(--color-text)]">
                No Products Found
              </h3>
              <p className="text-xs text-gray-500">
                Try adjusting your search keywords or category filter.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
                className="px-6 py-2.5 bg-[var(--color-primary)] text-white text-xs uppercase font-bold tracking-wider rounded"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((prod) => (
                <div
                  key={prod.slug}
                  className="bg-white rounded-lg border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-all duration-300 shadow-sm hover:shadow-xl overflow-hidden flex flex-col group"
                >
                  {/* Product Image */}
                  <div className="relative h-72 w-full overflow-hidden bg-gray-100">
                    <Image
                      src={prod.images[0] || '/images/categories/bone-inlay.jpg'}
                      alt={prod.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute top-3 left-3 px-3 py-1 bg-black/70 backdrop-blur rounded text-[10px] uppercase font-bold text-[var(--color-accent)] tracking-wider">
                      {prod.material}
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <span className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold block">
                        Category: {prod.category.replace('-', ' ')}
                      </span>
                      <h3 className="text-lg font-serif font-bold text-[var(--color-text)] group-hover:text-[var(--color-accent-dark)] transition-colors leading-snug">
                        {prod.name}
                      </h3>
                      <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                        {prod.shortDescription}
                      </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-2 border-t border-gray-100 flex items-center justify-between gap-3">
                      <Link
                        href={`/products/detail?slug=${prod.slug}`}
                        className="text-xs text-[var(--color-primary)] font-bold uppercase tracking-wider hover:text-[var(--color-accent)] transition-colors inline-flex items-center gap-1"
                      >
                        Details <ArrowRight className="w-3.5 h-3.5 rtl-flip" />
                      </Link>

                      <button
                        onClick={() => handleOpenInquiry(prod.name)}
                        className="px-4 py-2 bg-[var(--color-accent)] text-[var(--color-primary)] font-bold uppercase tracking-wider text-[11px] rounded hover:bg-[var(--color-accent-light)] transition-colors flex items-center gap-1.5"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        Inquire
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>

      <InquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
        productName={selectedProductForInquiry}
      />

      <Footer />
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[var(--color-primary)]" />}>
      <ProductsContent />
    </Suspense>
  );
}
