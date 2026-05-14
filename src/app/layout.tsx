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
    default: 'MD Premium - Giải Pháp & Tài Nguyên AI Chuyên Nghiệp',
    template: '%s | MD Premium'
  },
  description: 'MD Premium chuyên cung cấp tài nguyên AI hàng đầu: Tài khoản ChatGPT Plus, Gemini Advanced, Key Windows 11/10 Pro, Office 365 bản quyền, VPN giá rẻ (NordVPN, ExpressVPN). Uy tín, bảo hành 1 đổi 1, hỗ trợ 24/7.',
  keywords: [
    // Thương hiệu & chung
    'MD Premium', 'mdpremium.com.vn', 'mdpremium.com.vn', 'tài khoản premium giá rẻ', 'mua tài khoản giá rẻ',
    'bán key bản quyền', 'phần mềm giá rẻ', 'shop tài khoản uy tín', 'bảo hành 1 đổi 1', 'tài khoản vip',

    // Trí tuệ nhân tạo (AI)
    'Tài nguyên AI', 'Mua tài khoản ChatGPT Plus', 'Nâng cấp ChatGPT Plus', 'Tài khoản ChatGPT giá rẻ',
    'Mua tài khoản Gemini Advanced', 'Tài khoản Claude Pro', 'Tài khoản Midjourney', 'Midjourney giá rẻ',
    'Tài khoản Poe Premium', 'Copilot Pro bản quyền', 'OpenAI API key',

    // Windows & Office (Phần mềm công việc)
    'Mua key Windows 11 Pro bản quyền', 'Key Windows 10 Pro', 'Key Windows 11 Home',
    'Mua key Office 365 giá rẻ', 'Key Office 2021 Professional Plus', 'Key Office 2019',
    'Tài khoản Microsoft 365', 'Bản quyền Windows vĩnh viễn', 'Active Windows',

    // Công cụ làm việc & Học tập
    'Tài khoản Canva Pro', 'Nâng cấp Canva Pro chính chủ', 'Tài khoản Grammarly Premium',
    'Tài khoản Zoom Pro', 'Zoom không giới hạn', 'Google Drive Unlimited', 'Google One giá rẻ',
    'Tài khoản Duolingo Super', 'Tài khoản Elsa Speak Pro', 'Adobe Creative Cloud bản quyền',
    'Tài khoản Freepik Premium', 'Envato Elements giá rẻ',

    // Giải trí & Truyền hình
    'Tài khoản Netflix Premium', 'Mua Netflix giá rẻ', 'Spotify Premium', 'Nâng cấp Spotify chính chủ',
    'YouTube Premium giá rẻ', 'YouTube không quảng cáo', 'Tài khoản Disney+', 'Tài khoản VieON VIP',
    'Tài khoản FPT Play', 'Tài khoản K+', 'Tài khoản Crunchyroll', 'Tài khoản HBO Max',

    // Mạng riêng ảo (VPN) & Bảo mật
    'VPN giá rẻ', 'Tài khoản NordVPN', 'Mua ExpressVPN', 'Tài khoản Surfshark VPN',
    'Tài khoản CyberGhost', 'HMA VPN', 'Key Kaspersky Internet Security', 'Phần mềm diệt virus bản quyền'
  ],
  authors: [{ name: 'MD Premium', url: 'https://mdpremium.com.vn' }],
  creator: 'MD Premium',
  publisher: 'MD Premium',
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
    title: 'MD Premium - Giải Pháp & Tài Nguyên AI Chuyên Nghiệp',
    description: 'Nâng tầm công việc với tài khoản ChatGPT Plus, Gemini Advanced, phần mềm bản quyền Windows/Office, và dịch vụ giải trí Premium giá tốt nhất thị trường.',
    url: 'https://mdpremium.com.vn',
    siteName: 'MD Premium',
    images: [
      {
        url: 'https://res.cloudinary.com/drqbhj6ft/image/upload/v1777280469/background_ohy2um.png',
        width: 1200,
        height: 630,
        alt: 'MD Premium - Cung cấp tài nguyên công nghệ',
      },
    ],
    locale: 'vi_VN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MD Premium - Tài Nguyên AI & Phần Mềm Bản Quyền',
    description: 'Khám phá ngay các dịch vụ AI, VPN, bản quyền Windows, Office và tài khoản giải trí Premium ưu đãi nhất tại MD Premium.',
    images: ['https://res.cloudinary.com/drqbhj6ft/image/upload/v1777280469/background_ohy2um.png'],
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
  }
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
    name: 'MD Premium',
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
