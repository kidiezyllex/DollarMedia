"use client";

import GoldButton from "@/components/ui/GoldButton";
import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
  const scrollToDemo = () => {
    setTimeout(() => {
      const target = document.getElementById("demo");
      if (!target) return;

      const targetPosition = target.getBoundingClientRect().top + window.scrollY;
      const startPosition = window.scrollY;
      const distance = targetPosition - startPosition;
      const duration = 800; // Tăng tốc độ lên một chút (0.8s) để nhanh nhạy hơn
      let start: number | null = null;

      const step = (timestamp: number) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const percentage = Math.min(progress / duration, 1);

        const easing = percentage < 0.5
          ? 4 * percentage * percentage * percentage
          : 1 - Math.pow(-2 * percentage + 2, 3) / 2;

        window.scrollTo(0, startPosition + distance * easing);

        if (progress < duration) {
          window.requestAnimationFrame(step);
        }
      };

      window.requestAnimationFrame(step);
    }, 100); // Giảm delay xuống 100ms để nhanh hơn
  };

  return (
    <section id="hero" className="relative flex flex-col items-center justify-center overflow-hidden">
      <h1 className="sr-only">
        Dollar Media - Công cụ AI Tạo Video Tự Động Chuyên Nghiệp trên TikTok, Shorts và Youtube Automation. Giải pháp bứt phá doanh thu với hệ thống AI tiên tiến nhất.
      </h1>
      <div className="w-full z-0">
        <Image
          src="/images/hero-background.webp"
          alt="Background"
          width={1920}
          height={1080}
          className="w-full h-auto hidden sm:block"
          priority
          sizes="100vw"
        />
      </div>
      <div className="w-full z-0 block sm:hidden">
        <Image
          src="/images/hero-background-mobile.webp"
          alt="Background"
          width={750}
          height={1334}
          className="w-full h-auto block"
          priority
          sizes="100vw"
        />
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <Link href="https://zalo.me/g/ake1jadogzfsxu8ntdkd" target="_blank">
          <GoldButton
            className="w-[310px] h-[50px] text-sm group"
          >
            Tham gia cộng đồng Dollar Media
            <Image src="/images/Zalo.png" alt="Zalo" width={24} height={24} />
          </GoldButton>
        </Link>
      </div>
    </section>
  );
};

