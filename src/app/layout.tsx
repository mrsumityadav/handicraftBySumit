import type { Metadata } from 'next';
import '@/styles/globals.css';
import { LanguageProvider } from '@/context/LanguageContext';

export const metadata: Metadata = {
  title: 'AL QURESH | Premium Indian Handcrafted Home Decor & Furniture',
  description:
    'AL QURESH creates handcrafted home decor, luxury furniture and distinctive decorative pieces using natural materials such as horn, bone inlay, wood, marble and Mother of Pearl for international buyers worldwide.',
  keywords: [
    'AL QURESH Home Decor',
    'Indian Handicrafts Exporter',
    'Bone Inlay Furniture Moradabad',
    'Horn Handicrafts Manufacturer',
    'Luxury Home Decor B2B',
    'Mother of Pearl Inlay Wholesale',
    'Marble Home Decor Exporter',
    'Custom Artisan Furniture OEM',
  ],
  authors: [{ name: 'AL QURESH HOME DECOR' }],
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  openGraph: {
    title: 'AL QURESH | Premium Indian Handcrafted Home Decor & Furniture',
    description:
      'Discover handcrafted home decor and furniture that brings together traditional Indian craftsmanship, distinctive materials and contemporary design.',
    url: '/',
    siteName: 'AL QURESH HOME DECOR',
    images: [
      {
        url: '/images/logo-dark-bg.png',
        width: 1200,
        height: 630,
        alt: 'AL QURESH HOME DECOR',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" className="scroll-smooth">
      <head>
        <link rel="icon" href="/images/logo.png" />
      </head>
      <body className="antialiased selection:bg-[#C6A15B] selection:text-black">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
