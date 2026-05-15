"use client";

import GoldButton from "@/components/ui/GoldButton";
import { mdiArrowDownDropCircle } from "@mdi/js";
import Icon from "@mdi/react";
import Image from "next/image";

export const HeroSection = () => {
  const benefits = [
    "Tự động hoá công việc Edit, Content",
    "Nhân bản hệ thống YTB cực kỳ dễ dàng",
    "Triển khai được 90% chủ đề khó trên YTB",
    "Nhân bản số lượng, 1 Nhân sự làm 6 - 7 KÊNH YTB / THÁNG"
  ];

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
        <GoldButton className="w-[200px] h-[50px] text-sm group">
          XEM DEMO TOOL
          <Icon path={mdiArrowDownDropCircle} size={1} className="animate-shimmer-zoom" />
        </GoldButton>
      </div>
    </section>
  );
};

