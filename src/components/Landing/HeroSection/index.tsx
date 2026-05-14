"use client";

import GoldButton from "@/components/ui/GoldButton";
import GoldText from "@/components/ui/GoldText";
import {
  mdiArrowDownDropCircle,
  mdiBullseyeArrow,
  mdiCash100,
  mdiChartBoxMultiple,
  mdiCheckDecagram,
  mdiVideoVintage
} from "@mdi/js";
import Icon from "@mdi/react";
import { motion } from "framer-motion";
import Image from "next/image";

export const HeroSection = () => {
  const benefits = [
    "Tự động hoá công việc Edit, Content",
    "Nhân bản hệ thống YTB cực kỳ dễ dàng",
    "Triển khai được 90% chủ đề khó trên YTB",
    "Nhân bản số lượng, 1 Nhân sự làm 6 - 7 KÊNH YTB / THÁNG"
  ];

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black">
      {/* Background Image with Opacity */}
      <div className="absolute top-0 left-0 w-full h-[100vh] z-0 opacity-80">
        <Image
          src="/images/hero-background.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="container mx-auto px-8 relative z-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mt-20">
        {/* Left Side Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-4 text-left"
        >
          <GoldText absolute={false} className="text-4xl md:!text-5xl !tracking-normal">
            AI GENERATE TOOL
          </GoldText>

          <div className="space-y-4">
            <div className="flex items-center justify-center gap-4 w-full">
              <div className="h-[2px] w-12 bg-gradient-to-r from-transparent to-accent"></div>
              <h2 className="text-xl md:text-2xl font-semibold text-neutral-200 text-center justify-center ">
                Nền tảng AI tự động hoá video
              </h2>
              <div className="h-[2px] w-12 bg-gradient-to-l from-transparent to-accent"></div>
            </div>
            <p className="w-full text-neutral-400 text-sm md:text-lg leading-relaxed text-center justify-center">
              Phân tích & tái tạo video quy mô lớn với AI <br />
              Tự động hoá toàn bộ quy trình
            </p>
          </div>

          <ul className="flex flex-col gap-3">
            {benefits.map((benefit, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="flex items-center gap-3 text-neutral-300 text-sm md:text-lg"
              >
                <Icon path={mdiCheckDecagram} size={1} className="text-secondary flex-shrink-0" />
                {benefit}
              </motion.li>
            ))}
          </ul>
          <div className="flex justify-center w-full">
            <GoldButton className="w-[200px] h-[50px] text-sm group">
              XEM DEMO TOOL
              <Icon path={mdiArrowDownDropCircle} size={1} className="animate-shimmer-zoom" />
            </GoldButton>
          </div>

        </motion.div>

        {/* Right Side Content - Graphics */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex flex-col items-center justify-center"
        >
          {/* Bottom Icons Row */}
          <div className="flex items-start justify-between w-full max-w-[800px] px-4">
            {[
              { label: "AI VIDEO", icon: mdiVideoVintage },
              { label: "MARKETING", icon: mdiChartBoxMultiple },
              { label: "KIẾM TIỀN", icon: mdiCash100 },
              { label: "TĂNG TRƯỞNG", icon: mdiBullseyeArrow }
            ].map((item, i, arr) => (
              <div key={i} className="flex items-start">
                <div className="flex flex-col items-center group cursor-pointer">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#050505] border border-primary flex items-center justify-center shadow-[0_0_15px_rgba(215,158,46,0.4),inset_0_0_30px_rgba(215,158,46,0.6)] relative group-hover:scale-110 transition-transform">
                    <Icon path={item.icon} size={1.2} className="text-secondary" />
                  </div>
                  <span className="text-[8px] md:text-sm text-neutral-300 font-semibold group-hover:text-white transition-colors whitespace-nowrap mt-4">
                    {item.label}
                  </span>
                </div>
                {i < arr.length - 1 && (
                  <div className="hidden md:block h-[1px] w-8 lg:w-16 bg-gradient-to-r from-transparent via-accent to-transparent mt-7 md:mt-8"></div>
                )}
              </div>
            ))}
          </div>

          <div className="relative group mt-8">
            <div
              className="bg-gradient-to-r from-[#77530a] via-[#ffd277] to-[#77530a] p-[1px] rounded-lg"
              style={{ clipPath: 'polygon(5% 0, 95% 0, 100% 50%, 95% 100%, 5% 100%, 0 50%)' }}
            >
              <div
                className="bg-black/90 px-12 py-3 text-center"
                style={{ clipPath: 'polygon(5% 0, 95% 0, 100% 50%, 95% 100%, 5% 100%, 0 50%)' }}
              >
                <GoldText absolute={false} className="text-sm md:text-xl !tracking-[2px] uppercase">
                  Giải pháp AI – Tạo video tăng doanh thu
                </GoldText>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

