"use client";

import GoldButton from "@/components/ui/GoldButton";
import { mdiSend } from "@mdi/js";
import Icon from "@mdi/react";
import { motion } from "framer-motion";
import Image from "next/image";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";

export const CTASection = () => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      // Use 1920px as the design baseline
      const targetWidth = 1920;
      const currentWidth = window.innerWidth;
      setScale(currentWidth / targetWidth);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="cta"
      className="relative w-full overflow-hidden bg-black"
      style={{ height: `${1000 * scale}px` }} // Adjust section height based on scaled image
    >
      <div
        style={{
          width: "1920px",
          transform: `scale(${scale})`,
          transformOrigin: "top left",
          position: "relative"
        }}
      >
        {/* Background Image - relative to define section height */}
        <div className="relative w-full z-0">
          <Image
            src="/images/cta-bckground.png"
            alt="CTA Background"
            width={1920}
            height={600}
            draggable={false}
            priority
            className="w-full h-auto block"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="px-10 shadow-2xl absolute right-12 top-36 -translate-y-1/2 w-[45%] overflow-hidden"
        >
          {/* Subtle glow */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent/10 blur-[100px] rounded-full" />
          <form className="space-y-4">
            <div className="space-y-2">
              <label className="text-xl font-semibold text-accent">Họ và tên</label>
              <input
                type="text"
                placeholder="Nhập họ và tên của bạn"
                className="w-full bg-white/5 border rounded-xl p-4 text-white placeholder:text-neutral-300 focus:outline-none border-accent/50 transition-colors text-xl"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xl font-semibold text-accent">Số điện thoại / Zalo</label>
              <input
                type="tel"
                placeholder="Nhập số điện thoại để chúng tôi liên hệ"
                className="w-full bg-white/5 border rounded-xl p-4 text-white placeholder:text-neutral-300 focus:outline-none border-accent/50 transition-colors text-xl"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xl font-semibold text-accent">Lĩnh vực bạn quan tâm</label>
              <Select defaultValue="tiktok">
                <SelectTrigger>
                  <SelectValue placeholder="Chọn lĩnh vực bạn quan tâm" />
                </SelectTrigger>
                <SelectContent className="bg-neutral-900 border-accent/50 text-white">
                  <SelectItem value="tiktok">Tạo video TikTok / Shorts</SelectItem>
                  <SelectItem value="youtube">Xây dựng kênh Youtube Automation</SelectItem>
                  <SelectItem value="multichannel">Tự động hoá nội dung đa kênh</SelectItem>
                  <SelectItem value="other">Khác</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="pt-4">
              <GoldButton className="w-full h-14 text-lg group">
                GỬI YÊU CẦU NGAY
                <Icon path={mdiSend} size={1} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </GoldButton>
            </div>

            <p className="text-xl text-neutral-400 text-center mt-4 italic">
              * Chúng tôi cam kết bảo mật thông tin của bạn tuyệt đối.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
