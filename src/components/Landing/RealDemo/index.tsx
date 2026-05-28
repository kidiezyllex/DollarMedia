"use client";

import GoldButton from "@/components/ui/GoldButton";
import GoldText from "@/components/ui/GoldText";
import PremiumCard from "@/components/ui/PremiumCard";
import PremiumHeader from "@/components/ui/PremiumHeader";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { mdiPlay, mdiShimmer } from "@mdi/js";
import Icon from "@mdi/react";
import dynamic from "next/dynamic";
import { useState } from "react";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false }) as any;

const demoItems = [
  {
    id: "01",
    title: "DẠNG 1: VIDEO TỪ LINK YOUTUBE SANG VIDEO MỚI CHỈ 5P",
    description: "Chuyển đổi video từ link YouTube sang nội dung mới độc đáo, tối ưu chỉ trong 5 phút.",
    video: "https://6b1c8wz28p.ufs.sh/f/j96j2uSUbsVoNq5sHWPzOlUG1oaicmhKEf7V6vC0ZFRAq8e9"
  },
  {
    id: "02",
    title: "DẠNG 2: KỊCH BẢN Ý TƯỞNG CÓ SẴN SANG VIDEO KHÔNG CẦN EDIT, KHÔNG CẦN CONTENT CREATOR",
    description: "Chỉ cần kịch bản hoặc ý tưởng – AI tự động tạo video hoàn chỉnh mà không cần kỹ năng dựng.",
    video: "https://6b1c8wz28p.ufs.sh/f/j96j2uSUbsVokrPLODwqrAY1UPO6vSw8kjqfZQLIdRb9xGg0"
  },
  {
    id: "03",
    title: "DẠNG 3: VIDEO TỪ TRUYỆN TRANH, TRUYỆN CHỮ CỰC ĐƠN GIẢN",
    description: "Biến truyện tranh, truyện chữ thành video hấp dẫn, chuẩn xu hướng triệu views cực kỳ đơn giản.",
    video: "https://res.cloudinary.com/dypkxr0zr/video/upload/v1778727530/Ch%E1%BB%A9c_n%C4%83ng_l%C3%A0m_video_t%E1%BB%AB_truy%E1%BB%87n_k8kxkb.mp4"
  },
  {
    id: "04",
    title: "DẠNG 4: LÀM VIDEO AI TỪ BÀI BÁO MỚI NHẤT",
    description: "Tạo video chuyên nghiệp từ các bài báo mới nhất một cách dễ dàng, nhanh chóng và hiệu quả.",
    video: "https://res.cloudinary.com/dypkxr0zr/video/upload/v1778727716/Ch%E1%BB%A9c_n%C4%83ng_l%C3%A0m_video_t%E1%BB%AB_B%C3%A1o_btmu2w.mp4"
  },
];

export const RealDemo = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const scrollToAutomation = () => {
    setTimeout(() => {
      const target = document.getElementById("automation");
      if (!target) return;

      const targetPosition = target.getBoundingClientRect().top + window.scrollY;
      const startPosition = window.scrollY;
      const distance = targetPosition - startPosition;
      const duration = 800;
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
    }, 100);
  };

  return (
    <section id="demo" className="relative overflow-hidden bg-mainBackgroundV1">
      <div className="sm:container px-4 mx-auto relative z-10">
        <PremiumHeader>
          DEMO THỰC TẾ
        </PremiumHeader>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 w-full">
          {demoItems.map((item, index) => (
            <PremiumCard
              backgroundPath="/images/halftone-dot-field-graphic-print.webp"
              key={item.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              onClick={() => setSelectedVideo(item.video)}
              innerClassName="flex flex-col items-center gap-3 sm:gap-4 p-4 w-full"
            >
              {/* Video Thumbnail */}
              <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-white/10 group-hover:border-accent/50 transition-colors bg-black/40">
                <video
                  src={item.video}
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors flex items-center justify-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-black/60 backdrop-blur-md border-2 border-accent flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_30px_rgba(203,155,81,0.5)] touch-manipulation">
                    <Icon path={mdiPlay} size={1.2} className="text-secondary sm:text-[1.5rem]" />
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                {/* Number Box */}
                <div className="flex-shrink-0 w-20 h-20 rounded-2xl border-2 border-accent flex items-center justify-center bg-black shadow-[0_0_25px_rgba(203,155,81,0.4)] transition-all">
                  <GoldText absolute={false} className="text-4xl md:!text-5xl !tracking-normal">
                    {item.id}
                  </GoldText>
                </div>
                {/* Text Content */}
                <div className="flex-1 text-left">
                  <h3 className="text-secondary font-semibold text-base sm:text-lg uppercase">
                    {item.title}
                  </h3>
                  <p className="text-neutral-200 text-base md:text-base font-medium sm:block hidden">
                    {item.description}
                  </p>
                </div>
              </div>
              <p className="text-neutral-200 text-base md:text-base font-medium block sm:hidden">
                {item.description}
              </p>
            </PremiumCard>
          ))}
        </div>
        <div className="flex justify-center w-full mt-8">
          <GoldButton
            className="w-[250px] h-[50px] text-sm group"
            onClick={scrollToAutomation}
          >
            XEM TÍNH NĂNG TOOL
            <Icon path={mdiShimmer} size={1} className="animate-shimmer-zoom" />
          </GoldButton>
        </div>
      </div>
      <Dialog open={!!selectedVideo} onOpenChange={(open) => !open && setSelectedVideo(null)}>
        <DialogContent size="large" className="p-2 bg-black/95 overflow-hidden border-none max-w-[95vw] md:max-w-[1100px] rounded-2xl">
          {selectedVideo && (
            <div className="w-full h-full flex items-center justify-center bg-black rounded-xl overflow-hidden shadow-2xl">
              <video
                src={selectedVideo}
                controls
                autoPlay
                className="w-full h-full max-h-[85vh] object-contain"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
