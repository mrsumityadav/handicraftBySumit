'use client';

import React, { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSlider } from '@/components/home/HeroSlider';
import { HomeSections } from '@/components/home/HomeSections';
import { InquiryModal } from '@/components/ui/InquiryModal';
import { useLanguage } from '@/context/LanguageContext';

export default function HomePage() {
  const { dir } = useLanguage();
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [inquiryCategory, setInquiryCategory] = useState<string | undefined>();

  const handleOpenInquiry = (category?: string) => {
    setInquiryCategory(category);
    setInquiryModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-background)]" dir={dir}>
      {/* Navigation Header */}
      <Header />

      {/* Main Homepage Flow */}
      <main className="flex-grow">
        <HeroSlider onOpenInquiry={() => handleOpenInquiry('General Hero Inquiry')} />
        <HomeSections onOpenInquiry={handleOpenInquiry} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Inquiry Popup Modal */}
      <InquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
        categoryName={inquiryCategory}
      />
    </div>
  );
}
