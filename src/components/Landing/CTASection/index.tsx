"use client";

import GoldButton from "@/components/ui/GoldButton";
import { mdiSend } from "@mdi/js";
import Icon from "@mdi/react";
import { motion } from "framer-motion";
import Image from "next/image";

import { useEffect, useState } from "react";

const packageNames: Record<number, string> = {
  1: "Tool tạo video AI - Gói trải nghiệm 1 tháng 899.000 VNĐ",
  2: "Tool tạo video AI - Gói kiếm tiền 3 tháng 2.290.000 VNĐ",
  3: "Tool tạo video AI - Gói đồng hành 6 tháng 4.590.000 VNĐ",
};

export const CTASection = () => {
  const [scale, setScale] = useState(1);
  const [selectedPackages, setSelectedPackages] = useState<number[]>([]);

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
            src="/images/cta-bckground.webp"
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
          className="px-10 shadow-2xl absolute right-[52px] top-40 -translate-y-1/2 w-[45%] overflow-hidden"
        >
          {/* Subtle glow */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent/10 blur-[100px] rounded-full" />
          <form className="space-y-4">
            <div className="space-y-2">
              <label className="text-xl font-semibold text-secondary">Họ và tên</label>
              <input
                type="text"
                placeholder="Nhập họ và tên của bạn"
                className="w-full bg-white/5 border rounded-xl p-4 text-white placeholder:text-neutral-300 focus:outline-none border-accent/50 transition-colors text-xl placeholder:italic"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xl font-semibold text-secondary">Số điện thoại / Zalo</label>
              <input
                type="tel"
                placeholder="Nhập số điện thoại để chúng tôi liên hệ"
                className="w-full bg-white/5 border rounded-xl p-4 text-white placeholder:text-neutral-300 focus:outline-none border-accent/50 transition-colors text-xl placeholder:italic"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xl font-semibold text-secondary">Email</label>
              <input
                type="email"
                placeholder="Nhập email của bạn"
                className="w-full bg-white/5 border rounded-xl p-4 text-white placeholder:text-neutral-300 focus:outline-none border-accent/50 transition-colors text-xl placeholder:italic"
              />
            </div>
            <div className="space-y-4">
              <label className="text-xl font-semibold text-secondary">Chọn gói bạn quan tâm</label>
              <div className="grid gap-3">
                {Object.entries(packageNames).map(([id, name]) => (
                  <label key={id} className="flex items-start space-x-4 cursor-pointer group p-1">
                    <div className="relative flex items-center justify-center mt-1">
                      <input
                        type="checkbox"
                        className="peer appearance-none w-8 h-8 border-2 border-accent/30 rounded-sm checked:bg-secondary checked:border-secondary transition-all duration-300 bg-white/5 group-hover:border-secondary/50 cursor-pointer"
                        onChange={() => {
                          const numId = Number(id);
                          setSelectedPackages((prev) =>
                            prev.includes(numId) ? prev.filter((p) => p !== numId) : [...prev, numId]
                          );
                        }}
                        checked={selectedPackages.includes(Number(id))}
                      />
                      <div className="absolute opacity-0 peer-checked:opacity-100 text-amber-950 pointer-events-none transition-opacity duration-300">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <span className="text-xl mt-1 text-neutral-300 group-hover:text-secondary transition-colors duration-300 leading-tight">
                      {name}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <GoldButton className="w-full h-16 text-lg group">
                GỬI YÊU CẦU NGAY
                <Icon path={mdiSend} size={1} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </GoldButton>
            </div>

            <p className="text-xl text-neutral-400 text-center pt-4 italic">
              * Chúng tôi cam kết bảo mật thông tin của bạn tuyệt đối.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
