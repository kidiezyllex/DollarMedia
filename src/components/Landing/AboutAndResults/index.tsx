"use client";

import {
  mdiCalendarMonthOutline,
  mdiCheckDecagram,
  mdiChevronLeft,
  mdiChevronRight,
  mdiChevronTripleRight,
  mdiClockOutline,
  mdiHeadset,
  mdiLaptop,
  mdiYoutube
} from "@mdi/js";
import Icon from "@mdi/react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import GoldButton from "@/components/ui/GoldButton";
import PremiumHeader from "@/components/ui/PremiumHeader";
import { cn } from "@/lib/utils";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

const slideImages = Array.from({ length: 11 }, (_, i) => `/images/slides/slide${i + 1}.jpg`);

const teamData = [
  {
    title: "ĐỘI NGŨ IT",
    color: "blue",
    icon: mdiLaptop,
    items: [
      "Nâng cấp tool liên tục",
      "Tối ưu hiệu suất",
      "Fix lỗi - Bảo trì hệ thống"
    ],
    bg: "bg-blue-600/20",
    border: "border-blue-500/50",
    image: "/images/demo-3.png"
  },
  {
    title: "ĐỘI NGŨ SUPPORT",
    color: "green",
    icon: mdiHeadset,
    info: [
      { label: "Thời gian:", value: "8h sáng - 18h tối", icon: mdiClockOutline },
      { label: "Thứ 2 - Thứ 7", icon: mdiCalendarMonthOutline },
      { label: "Có hỗ trợ support thêm khi gấp", icon: mdiHeadset }
    ],
    bg: "bg-green-600/20",
    border: "border-green-500/50",
    image: "/images/demo-4.png"
  },
  {
    title: "ĐỘI NGŨ YOUTUBE INHOUSE",
    color: "red",
    icon: mdiYoutube,
    mainPoint: "ĐIỂM XOÁC ĐẾT LỚN NHẤT",
    items: [
      "Chiến lược chiến",
      "Hướng dẫn kênh lên top 1",
      "Đồng hành cùng đối tác"
    ],
    bg: "bg-red-600/20",
    border: "border-red-500/50",
    image: "/images/demo-5.png"
  }
];

const resultsImages = [
  "/images/demo-3.png",
  "/images/demo-4.png",
  "/images/demo-5.png",
  "/images/demo-3.png",
  "/images/demo-4.png"
];

export const AboutAndResults = () => {
  const [activeResult, setActiveResult] = useState(0);
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    <section id="about" className="relative w-full overflow-hidden">
      <PremiumHeader>
        VỀ CHÚNG TÔI
      </PremiumHeader>
      <div className="relative z-10">
        {/* SECTION 1: ABOUT US */}
        <div className="flex items-start gap-6 border-2 border-accent/30 rounded-3xl p-6 mx-auto container relative overflow-hidden group">
          {/* Left Info */}
          <div className="space-y-4 w-[40%] ">
            {/* About us Image here */}
            <Image
              src="/images/about-us.png"
              alt="About Us"
              width={1200}
              height={1200}
              draggable={false}
              className="w-full h-auto object-contain rounded-2xl"
            />
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-secondary text-lg font-semibold">
                Chúng tôi xây dựng Dollar Media với mục tiêu:
              </p>
            </motion.div>

            <div className="space-y-4">
              {[
                "Giúp khách hàng tạo ra thu nhập thực tế từ AI",
                "Có đội ngũ IT mạnh hỗ trợ nhanh chóng",
                "Đúc kết phát triển hệ thống liên tục",
                "Đồng hành lâu dài cùng người dùng"
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="bg-secondary rounded-full p-1 flex-shrink-0">
                    <Icon path={mdiCheckDecagram} size={0.8} className="text-black" />
                  </div>
                  <span className="text-neutral-200 font-medium">{item}</span>
                </motion.div>
              ))}
            </div>

          </div>

          {/* Right: Team Showcase */}
          <div className="space-y-4 w-[60%]">
            <p className="text-secondary text-lg font-semibold">
              Một vài kết quả của ae đã đồng hành với bên mình sau 2 tháng triển khai đúng quy trình:
            </p>
            <div className="w-full space-y-4 relative group/swiper">
              {/* Main Swiper */}
              <Swiper
                spaceBetween={10}
                navigation={{
                  prevEl: '.prev-btn',
                  nextEl: '.next-btn',
                }}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                modules={[Navigation, Thumbs, Autoplay, FreeMode]}
                className="w-full aspect-[3/4] md:aspect-[4/5] max-h-[500px] rounded-2xl border-2 border-accent/30 overflow-hidden bg-neutral-900"
              >
                {slideImages.map((img, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="relative w-full h-full">
                      <Image
                        src={img}
                        alt={`Slide ${idx + 1}`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Custom Navigation Buttons */}
              <button className="prev-btn absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-secondary rounded-full p-1 shadow-lg hover:scale-110 transition-all opacity-0 group-hover/swiper:opacity-100 disabled:opacity-0">
                <Icon path={mdiChevronLeft} size={1} className="text-black" />
              </button>
              <button className="next-btn absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-secondary rounded-full p-1 shadow-lg hover:scale-110 transition-all opacity-0 group-hover/swiper:opacity-100 disabled:opacity-0">
                <Icon path={mdiChevronRight} size={1} className="text-black" />
              </button>

              {/* Thumbnails Swiper */}
              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={5}
                freeMode={true}
                watchSlidesProgress={true}
                slideToClickedSlide={true}
                modules={[Navigation, Thumbs, FreeMode]}
                className="thumbs-swiper w-full h-20 md:h-28 relative z-30"
              >
                {slideImages.map((img, idx) => (
                  <SwiperSlide key={idx} className="cursor-pointer rounded-lg overflow-hidden border-2 border-transparent transition-all !h-full">
                    <div className="relative w-full h-full opacity-40 [.swiper-slide-thumb-active_&]:opacity-100 [.swiper-slide-thumb-active_&]:border-accent transition-all">
                      <Image
                        src={img}
                        alt={`Thumb ${idx + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
        <div className="relative pb-8 pt-1">
          <Image
            src="/images/black-and-gold-luxury-background2.jpg"
            alt="background"
            fill
            className="object-fill w-full opacity-20 -z-10"
          />
          <PremiumHeader>
            GÓI SỬ DỤNG
          </PremiumHeader>
          <div className="grid grid-cols-1 md:grid-cols-[0.9fr_1.2fr_0.9fr] items-center gap-4 mx-auto container">
            {[1, 2, 3].map((num) => (
              <motion.div
                key={num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: num * 0.1 }}
                className={cn(
                  "overflow-hidden group relative cursor-pointer",
                  num === 2 ? "z-10 md:scale-105" : "md:scale-95 opacity-80 hover:opacity-100"
                )}
              >
                <div className="relative w-full h-auto space-y-4">
                  <Image
                    src={`/images/packages/package${num}.jpg`}
                    alt={`Package ${num}`}
                    width={800}
                    height={1200}
                    className="w-full object-fill h-auto block transition-transform duration-700 border-2 border-accent/30 rounded-3xl"
                  />
                  <div className="flex justify-center w-full">
                    <GoldButton className="w-full h-[50px] text-sm group">
                      ĐĂNG KÝ NGAY
                      <Icon path={mdiChevronTripleRight} size={1} className="animate-move-left-right" />
                    </GoldButton>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* SECTION 3: CTA */}
        {/* <div className="pt-12 border-t border-accent/20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-semibold text-secondary italic leading-tight uppercase"
              >
                SẴN SÀNG BỨT PHÁ <br /> DOANH THU CÙNG AI?
              </motion.h2>
              <p className="text-white text-lg md:text-xl font-bold italic opacity-80">
                Tham gia ngay cộng đồng SayMedia để nhận <br className="hidden md:block" /> sự hỗ trợ tốt nhất và kết quả thực chiến!
              </p>
            </div>

            <div className="flex justify-center lg:justify-end">
              <button className="relative px-12 py-8 bg-gradient-to-r from-accent to-[#f4d193] rounded-3xl text-black font-semibold text-xl md:text-3xl shadow-[0_0_50px_rgba(203,155,81,0.5)] hover:scale-105 transition-all group overflow-hidden">
                <div className="flex flex-col items-center leading-none">
                  <div className="flex items-center gap-3">
                    <Icon path={mdiCart} size={1.5} />
                    MUA NGAY
                  </div>
                  <span className="text-xs uppercase mt-2 tracking-widest opacity-80">SỞ HỮU NGAY - TRIỂN KHAI NGAY</span>
                </div>
                <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:left-full transition-all duration-1000 ease-in-out"></div>
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};
