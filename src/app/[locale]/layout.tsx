import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Inter } from 'next/font/google';
import { locales } from '@/i18n/config';
import '../../app/globals.css';

const inter = Inter({ subsets: ['latin'] });

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: 'Ripped For Real - 리얼하게 찢었다',
  description: 'The Ultimate Motivation App for Men in Their 20s | 20대 남성을 위한 최강 동기부여 앱',
  keywords: ['motivation', 'self-improvement', 'mindset', 'success', '동기부여', '자기계발', '마인드셋', '성공'],
  authors: [{ name: 'Ripped For Real' }],
  creator: 'Ripped For Real',
  publisher: 'Ripped For Real',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    alternateLocale: 'en_US',
    url: 'https://rippedforreal.com',
    siteName: 'Ripped For Real',
    title: 'Ripped For Real - 리얼하게 찢었다',
    description: 'The Ultimate Motivation App for Men in Their 20s | 20대 남성을 위한 최강 동기부여 앱',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Ripped For Real App',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ripped For Real - 리얼하게 찢었다',
    description: 'The Ultimate Motivation App for Men in Their 20s | 20대 남성을 위한 최강 동기부여 앱',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-touch-icon.png',
    },
  },
  manifest: '/site.webmanifest',
};

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  if (!locales.includes(locale as (typeof locales)[number])) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className={inter.className}>
      <body className="bg-[#0A0A0A] text-white">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}