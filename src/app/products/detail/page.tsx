'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import {
  ArrowLeft,
  Mail,
  CheckCircle2,
  ShieldCheck,
  Globe2,
  Sliders,
  Ruler,
  Sparkles,
} from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { InquiryModal } from '@/components/ui/InquiryModal';
import { useLanguage } from '@/context/LanguageContext';

interface ProductDetailItem {
  _id?: string;
  name: string;
  slug: string;
  category: string;
  subCategory?: string;
  material: string;
  shortDescription: string;
  description: string;
  images: string[];
  dimensions?: string;
  finish?: string;
  customizationAvailable?: boolean;
}

function DetailContent() {
  const { t, dir } = useLanguage();
  const searchParams = useSearchParams();
  const slug = searchParams.get('slug') || 'royal-floral-bone-inlay-console-table';

  const [product, setProduct] = useState<ProductDetailItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [relatedProducts, setRelatedProducts] = useState<ProductDetailItem[]>([]);

  useEffect(() => {
    fetchProductDetail();
  }, [slug]);

  const fetchProductDetail = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/products/${slug}`);
      const data = await res.json();
      if (data.success && data.product) {
        setProduct(data.product);
        fetchRelated(data.product.category, data.product.slug);
      }
    } catch (err) {
      console.error('Error loading product detail:', err);
    } finally {
      setLoading(false);
    }
  };

  const fetchRelated = async (category: string, currentSlug: string) => {
    try {
      const res = await fetch(`/api/products?category=${category}`);
      const data = await res.json();
      if (data.success && data.products) {
        const filtered = data.products
          .filter((p: ProductDetailItem) => p.slug !== currentSlug)
          .slice(0, 3);
        setRelatedProducts(filtered);
      }
    } catch (err) {
      console.error('Error fetching related products:', err);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-background)]" dir={dir}>
      <Header />

      <main className="flex-grow pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Breadcrumb Back Link */}
        <div className="mb-8">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-500 hover:text-[var(--color-accent)] transition-colors"
          >
            <ArrowLeft className="w-4 h-4 rtl-flip" />
            Back to Catalog
          </Link>
        </div>

        {loading ? (
          <div className="py-24 text-center space-y-4">
            <div className="w-12 h-12 border-4 border-[var(--color-accent)] border-t-transparent rounded-full animate-spin mx-auto" />
            <p className="text-xs text-gray-500 uppercase tracking-widest">
              Loading Product Specs...
            </p>
          </div>
        ) : !product ? (
          <div className="py-20 text-center bg-white border border-[var(--color-border)] rounded-lg space-y-4">
            <h2 className="text-xl font-serif font-bold text-[var(--color-text)]">
              Product Not Found
            </h2>
            <p className="text-xs text-gray-500">
              The requested item could not be retrieved from the catalog.
            </p>
            <Link
              href="/products"
              className="px-6 py-2.5 bg-[var(--color-primary)] text-white text-xs font-bold uppercase tracking-wider rounded inline-block"
            >
              Return to Catalog
            </Link>
          </div>
        ) : (
          <div className="space-y-16">
            {/* Main Product Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Product Gallery */}
              <div className="space-y-4">
                <div className="relative h-[480px] w-full rounded-lg overflow-hidden border border-[var(--color-border)] shadow-lg bg-gray-100">
                  <Image
                    src={product.images[selectedImage] || product.images[0]}
                    alt={product.name}
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-black/80 backdrop-blur rounded text-[10px] uppercase font-bold text-[var(--color-accent)]">
                    {product.material}
                  </div>
                </div>

                {/* Thumbnails */}
                {product.images.length > 1 && (
                  <div className="flex items-center gap-3 overflow-x-auto pb-2">
                    {product.images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedImage(idx)}
                        className={`relative w-20 h-20 rounded border overflow-hidden flex-shrink-0 transition-all ${
                          selectedImage === idx
                            ? 'border-[var(--color-accent)] ring-2 ring-[var(--color-accent)]/30 scale-105'
                            : 'border-gray-200 hover:border-gray-400'
                        }`}
                      >
                        <Image src={img} alt="Thumbnail" fill className="object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Product Info & Specifications */}
              <div className="space-y-6">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[var(--color-accent)] font-bold block mb-1">
                    B2B Commercial Catalog Item
                  </span>
                  <h1 className="text-3xl font-serif font-bold text-[var(--color-text)] leading-tight">
                    {product.name}
                  </h1>
                </div>

                <div className="p-4 bg-white border border-[var(--color-border)] rounded-lg space-y-3">
                  <div className="flex items-center justify-between text-xs text-gray-600 border-b border-gray-100 pb-2">
                    <span className="font-semibold text-gray-500">Material & Construction:</span>
                    <span className="font-bold text-[var(--color-text)]">{product.material}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-600 border-b border-gray-100 pb-2">
                    <span className="font-semibold text-gray-500">Standard Dimensions:</span>
                    <span className="font-bold text-[var(--color-text)]">{product.dimensions || 'Customizable on B2B Request'}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-600">
                    <span className="font-semibold text-gray-500">Surface Finish:</span>
                    <span className="font-bold text-[var(--color-text)]">{product.finish || 'Hand-polished artisan lacquer'}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--color-text)]">
                    Craftsmanship Description:
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed font-normal">
                    {product.description}
                  </p>
                </div>

                <div className="p-4 bg-[var(--color-primary)] text-white rounded-lg space-y-2 text-xs border border-[var(--color-border-gold)]">
                  <div className="flex items-center gap-2 text-[var(--color-accent)] font-bold">
                    <Sliders className="w-4 h-4" />
                    Custom & Private Label Manufacturing
                  </div>
                  <p className="text-gray-300 text-[11px] leading-relaxed">
                    This handcrafted item can be customized in terms of color, motif, dimensions, and hardware for bulk wholesale orders and OEM brand developments.
                  </p>
                </div>

                {/* Pricing Notice & Inquiry Actions */}
                <div className="pt-4 border-t border-[var(--color-border)] space-y-4">
                  <div className="text-xs text-gray-500 font-medium italic">
                    * B2B Catalog Notice: Prices, minimum order quantities, and freight estimates are tailored based on order volume and destination.
                  </div>

                  <div className="flex flex-wrap items-center gap-4">
                    <button
                      onClick={() => setInquiryModalOpen(true)}
                      className="flex-1 py-4 bg-[var(--color-accent)] text-[var(--color-primary)] font-bold text-xs uppercase tracking-widest rounded hover:bg-[var(--color-accent-light)] transition-colors flex items-center justify-center gap-2 shadow-lg"
                    >
                      <Mail className="w-4 h-4" />
                      Request Product Details & Quote
                    </button>

                    <Link
                      href="/contact-us"
                      className="px-6 py-4 bg-[var(--color-primary)] text-white font-bold text-xs uppercase tracking-widest rounded hover:bg-[var(--color-secondary)] transition-colors text-center"
                    >
                      Contact Export Manager
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Related Products */}
            {relatedProducts.length > 0 && (
              <div className="pt-16 border-t border-[var(--color-border)] space-y-8">
                <div className="space-y-1">
                  <span className="text-xs uppercase tracking-widest text-[var(--color-accent)] font-bold">
                    Related Collection Items
                  </span>
                  <h2 className="text-2xl font-serif font-bold text-[var(--color-text)]">
                    EXPLORE SIMILAR CRAFT PIECES
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {relatedProducts.map((rel) => (
                    <Link
                      key={rel.slug}
                      href={`/products/detail?slug=${rel.slug}`}
                      className="bg-white rounded-lg border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-all shadow-sm hover:shadow-lg overflow-hidden group"
                    >
                      <div className="relative h-48 w-full bg-gray-100">
                        <Image src={rel.images[0]} alt={rel.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                      </div>
                      <div className="p-4 space-y-1">
                        <span className="text-[10px] text-gray-400 font-semibold uppercase">{rel.material}</span>
                        <h4 className="text-xs font-serif font-bold text-[var(--color-text)] group-hover:text-[var(--color-accent-dark)] transition-colors line-clamp-1">
                          {rel.name}
                        </h4>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </main>

      <InquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
        productName={product?.name}
        categoryName={product?.category}
      />

      <Footer />
    </div>
  );
}

export default function ProductDetailPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[var(--color-primary)]" />}>
      <DetailContent />
    </Suspense>
  );
}
