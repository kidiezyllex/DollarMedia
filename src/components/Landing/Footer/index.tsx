"use client";

import { SHOP_INFO } from "@/constants";
import { mdiChevronRight, mdiMapMarker, mdiPhone } from "@mdi/js";
import Icon from "@mdi/react";
import Link from "next/link";
import { useEffect, useState } from "react";

export const Footer = () => {
  const [widths, setWidths] = useState<string[]>([]);

  useEffect(() => {
    // Generate widths only on client side to avoid hydration mismatch
    const randomWidths = Array.from({ length: 20 }).map(
      () => Math.random() * 4 + 1 + "px"
    );
    setWidths(randomWidths);
  }, []);

  return (
    <footer className="bg-[#050505] py-8 border-t border-primary/40 relative overflow-hidden">
      {/* Barcode Deco */}
      <div className="absolute top-0 right-10 w-32 h-8 opacity-20 flex items-center justify-between">
        {widths.map((width, i) => (
          <div
            key={i}
            className="bg-secondary h-full"
            style={{ width }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img draggable={false} src="/images/primary-logo.png" alt={SHOP_INFO.name} className="h-20 w-20 p-1 object-contain" />
            </div>
            <p className="text-neutral-400 text-sm max-w-sm mb-4">
              Trung tâm cung cấp tài nguyên số và AI hàng đầu. Kết nối tương lai ngay hôm nay.
            </p>
          </div>

          <div>
            <h4 className="text-neutral-200 font-bold mb-4 border-l-2 border-secondary pl-3 text-base">Liên kết nhanh</h4>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li><Link href="#hero" className="hover:text-secondary hover:underline transition-colors inline-flex items-center gap-2"><Icon path={mdiChevronRight} size={0.6} /> Trang Chủ</Link></li>
              <li><Link href="#demo" className="hover:text-secondary hover:underline transition-colors inline-flex items-center gap-2"><Icon path={mdiChevronRight} size={0.6} /> Demo</Link></li>
              <li><Link href="#ai-tool" className="hover:text-secondary hover:underline transition-colors inline-flex items-center gap-2"><Icon path={mdiChevronRight} size={0.6} /> AI Tool</Link></li>
              <li><Link href="#automation" className="hover:text-secondary hover:underline transition-colors inline-flex items-center gap-2"><Icon path={mdiChevronRight} size={0.6} /> Tính năng</Link></li>
              <li><Link href="#about" className="hover:text-secondary hover:underline transition-colors inline-flex items-center gap-2"><Icon path={mdiChevronRight} size={0.6} /> Về chúng tôi</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-neutral-200 font-bold mb-4 border-l-2 border-secondary pl-3 text-base">Thông tin liên hệ</h4>
            <ul className="space-y-4 text-sm text-neutral-400">
              <li className="flex items-center gap-2">
                <Icon path={mdiMapMarker} size={0.8} className="text-secondary shrink-0 -mt-1" />
                <span>TOÀ HHB - CC THÁI HÀ, 43 Phạm Văn Đồng, Hà Nội</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon path={mdiPhone} size={0.8} className="text-secondary shrink-0 -mt-1" />
                <span>Hotline & Zalo: 0962.274.128 hoặc 084.673.1111</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-400">
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
