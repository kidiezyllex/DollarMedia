"use client";

import GoldButton from "@/components/ui/GoldButton";
import { SHOP_INFO } from "@/constants";
import { mdiChevronRight, mdiGoogleMaps, mdiPhoneClassic } from "@mdi/js";
import Icon from "@mdi/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export const Footer = () => {
  const [widths, setWidths] = useState<string[]>([]);

  useEffect(() => {
    const randomWidths = Array.from({ length: 20 }).map(
      () => Math.random() * 4 + 1 + "px"
    );
    setWidths(randomWidths);
  }, []);

  return (
    <footer className="bg-[#050505] pt-8 pb-4 border-t border-primary/40 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/magical-celestial-interstellar-frame.webp"
          alt="background"
          fill
          className="object-cover opacity-10 scale-150 md:scale-110"
        />
      </div>
      {/* Barcode Deco */}
      <div className="absolute top-0 right-10 w-32 h-8 opacity-20 flex items-center justify-between z-10">
        {widths.map((width, i) => (
          <div
            key={i}
            className="bg-secondary h-full"
            style={{ width }}
          ></div>
        ))}
      </div>

      <div className="container px-4 mx-auto sm:px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-8">
          <div className="col-span-1 lg:col-span-2 space-y-2">
            <div className="flex gap-2 items-center">
              <div className="flex items-center gap-2">
                <img draggable={false} src="/images/primary-logo.png" alt={SHOP_INFO.name} className="lg:h-20 lg:w-20 w-14 h-14 object-contain flex-shrink-0" />
              </div>
              <Link href="https://zalo.me/g/ake1jadogzfsxu8ntdkd" target="_blank">
                <GoldButton
                  className="w-[290px] lg:w-[310px] h-[50px] text-sm group"
                >
                  Tham gia cộng đồng Dollar Media
                  <Image src="/images/Zalo.png" alt="Zalo" width={24} height={24} />
                </GoldButton>
              </Link>
            </div>
            <p className="text-neutral-400 text-base mb-4 leading-relaxed">
              Dollar Media - Hệ thống hạ tầng AI Automation hàng đầu, giúp bứt phá doanh thu với giải pháp tạo video TikTok, Shorts và Youtube Automation tự động chuyên nghiệp.
            </p>
          </div>

          <div className="lg:block hidden">
            <h4 className="text-secondary font-bold mb-4 border-l-2 border-secondary pl-3 text-base">Liên kết nhanh</h4>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li><Link href="#hero" className="hover:text-secondary hover:underline transition-colors text-base inline-flex items-center gap-2"><Icon path={mdiChevronRight} size={0.6} /> Trang Chủ</Link></li>
              <li><Link href="#demo" className="hover:text-secondary hover:underline transition-colors text-base inline-flex items-center gap-2"><Icon path={mdiChevronRight} size={0.6} /> Demo Thực Tế</Link></li>
              <li><Link href="#ai-tool" className="hover:text-secondary hover:underline transition-colors text-base inline-flex items-center gap-2"><Icon path={mdiChevronRight} size={0.6} /> AI Generate Tool</Link></li>
              <li><Link href="#automation" className="hover:text-secondary hover:underline transition-colors text-base inline-flex items-center gap-2"><Icon path={mdiChevronRight} size={0.6} /> Tính năng Tool</Link></li>
              <li><Link href="#about" className="hover:text-secondary hover:underline transition-colors text-base inline-flex items-center gap-2"><Icon path={mdiChevronRight} size={0.6} /> Về chúng tôi</Link></li>
              <li><Link href="#cta" className="hover:text-secondary hover:underline transition-colors text-base inline-flex items-center gap-2"><Icon path={mdiChevronRight} size={0.6} /> Đăng ký tư vấn</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-secondary font-bold mb-4 border-l-2 border-secondary pl-3 text-base">Thông tin liên hệ</h4>
            <ul className="space-y-4 text-sm text-neutral-400">
              <li className="flex items-center gap-2">
                <div className="bg-secondary rounded-full p-1 flex-shrink-0">
                  <Icon path={mdiGoogleMaps} size={0.8} className="text-black" />
                </div>
                <span className="text-base">TOÀ HHB - CC THÁI HÀ, 43 Phạm Văn Đồng, Hà Nội</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="bg-secondary rounded-full p-1 flex-shrink-0">
                  <Icon path={mdiPhoneClassic} size={0.8} className="text-black" />
                </div>
                <span className="text-base">Hotline & Zalo: 0962.274.128 hoặc 084.673.1111</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary/20 pt-4 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-400">
          <p>© 2026 {SHOP_INFO.name}. All Rights Reserved. System initialized.</p>
          <div className="flex gap-4">
            <span className="hover:text-neutral-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-neutral-400 cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
