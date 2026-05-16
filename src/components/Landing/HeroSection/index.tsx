"use client";

import GoldButton from "@/components/ui/GoldButton";
import { mdiChevronDoubleDown } from "@mdi/js";
import Icon from "@mdi/react";
import Image from "next/image";

export const HeroSection = () => {
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
      <div className="w-full z-0">
        <Image
          src="/images/hero-background2.png"
          alt="Background"
          width={1920}
          height={1080}
          className="w-full h-auto block"
          priority
        />
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <GoldButton
          className="w-[200px] h-[50px] text-sm group"
          onClick={scrollToDemo}
        >
          XEM DEMO TOOL
          <Icon path={mdiChevronDoubleDown} size={1} className="animate-shimmer-zoom" />
        </GoldButton>
      </div>
    </section>
  );
};

