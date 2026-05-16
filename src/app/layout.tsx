import { cn } from "@/lib/utils";
import type { Metadata } from 'next';
import { Lexend } from "next/font/google";
import './globals.css';

const lexend = Lexend({
  subsets: ["latin", "vietnamese"],
  variable: "--font-lexend",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: 'Dollar Media - Công cụ AI Tạo Video Tự Động Chuyên Nghiệp',
    template: '%s | Dollar Media'
  },
  description: 'Dollar Media - Giải pháp tự động hóa nội dung bằng AI. Tạo video TikTok, Shorts, Youtube Automation chuyên nghiệp chỉ trong vài phút. Bứt phá doanh thu và tiết kiệm thời gian với hệ thống AI tiên tiến nhất.',
  keywords: [
    'Dollar Media', 'Furycore', 'tạo video ai', 'ai video automation', 'tự động hóa nội dung',
    'kiếm tiền youtube automation', 'tạo video tiktok ai', 'tạo video shorts ai',
    'công cụ làm video tự động', 'ai content creator', 'hệ thống tạo video hàng loạt'
  ],
  authors: [{ name: 'Dollar Media', url: 'https://mdpremium.com.vn' }],
  creator: 'Dollar Media',
  publisher: 'Dollar Media',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://mdpremium.com.vn'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Dollar Media - Công cụ AI Tạo Video Tự Động Chuyên Nghiệp',
    description: 'Tạo video TikTok, Shorts, Youtube Automation chuyên nghiệp chỉ trong vài phút với công nghệ AI hàng đầu từ Dollar Media.',
    url: 'https://mdpremium.com.vn',
    siteName: 'Dollar Media',
    images: [
      {
        url: 'https://res.cloudinary.com/drqbhj6ft/image/upload/v1778913017/hero-background_larfc0.webp',
        width: 1200,
        height: 630,
        alt: 'Dollar Media - AI Video Automation',
      },
    ],
    locale: 'vi_VN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dollar Media - Công cụ AI Tạo Video Tự Động',
    description: 'Giải pháp bứt phá doanh thu với hệ thống tạo video TikTok, Youtube Automation tự động bằng AI.',
    images: ['https://res.cloudinary.com/drqbhj6ft/image/upload/v1778913017/hero-background_larfc0.webp'],
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
  verification: {
  },
  icons: {
    icon: [
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon/apple-touch-icon.png' },
    ],
  },
  manifest: '/favicon/site.webmanifest',
};

import { LandingLayout } from '@/components/layout/LandingLayout';
import { SalesPopup } from '@/components/ui/SalesPopup';
import { ReactQueryClientProvider } from '@/provider/ReactQueryClientProvider';
import { ToastProvider } from '@/provider/ToastProvider';
import NextTopLoader from 'nextjs-toploader';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Dollar Media',
    url: 'https://mdpremium.com.vn',
    logo: 'https://mdpremium.com.vn/logo.png', // Thay thế bằng logo thực tế
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+84846731111',
      contactType: 'customer service',
      areaServed: 'VN',
      availableLanguage: 'Vietnamese',
    },
    sameAs: [
      'https://www.facebook.com/mdpremium', // Thay thế bằng link thực tế
      'https://zalo.me/g/tsrsfm261',
    ],
  };

  return (
    <html lang="vi" className={cn("dark scroll-smooth", lexend.variable)}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={cn(lexend.className, "bg-[#050505] text-white selection:bg-primary/30 selection:text-secondary")} suppressHydrationWarning>
        <NextTopLoader
          color="#ffffff"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px #ffffff,0 0 5px #ffffff"
        />
        <ReactQueryClientProvider>
          <LandingLayout>
            {children}
          </LandingLayout>
          <ToastProvider />
          <SalesPopup />
        </ReactQueryClientProvider>
      </body>
    </html>
  );
}
