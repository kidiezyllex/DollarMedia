"use client";

import GoldButton from "@/components/ui/GoldButton";
import GoldText from "@/components/ui/GoldText";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { mdiPlay, mdiShimmer } from "@mdi/js";
import Icon from "@mdi/react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const demoItems = [
  {
    id: "01",
    title: "DẠNG 1: VIDEO TỪ LINK YOUTUBE SANG VIDEO MỚI CHỈ 5P",
    description: "Chuyển đổi video từ link YouTube sang nội dung mới độc đáo, tối ưu chỉ trong 5 phút.",
    video: "https://res.cloudinary.com/dypkxr0zr/video/upload/v1778727850/Ch%E1%BB%A9c_n%C4%83ng_l%C3%A0m_video_t%E1%BB%AB_link_YOUTUBE_vfmo9n.mp4"
  },
  {
    id: "02",
    title: "DẠNG 2: KỊCH BẢN Ý TƯỞNG CÓ SẴN SANG VIDEO KHÔNG CẦN EDIT, KHÔNG CẦN CONTENT CREATOR",
    description: "Chỉ cần kịch bản hoặc ý tưởng – AI tự động tạo video hoàn chỉnh mà không cần kỹ năng dựng.",
    video: "https://res.cloudinary.com/dypkxr0zr/video/upload/v1778727883/Ch%E1%BB%A9c_n%C4%83ng_l%C3%A0m_video_t%E1%BB%B1_nh%E1%BA%ADp_k2yowt.mp4"
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

export const DemoSection = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center mb-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-2"
          >
            <GoldText absolute={false} className="text-4xl md:!text-5xl !tracking-normal">
              DEMO THỰC TẾ
            </GoldText>
          </motion.div>

          <div className="flex items-center gap-4 w-full max-w-3xl">
            <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-accent to-accent"></div>
            <p className="text-neutral-200 text-sm md:text-xl font-semibold uppercase">
              KHÔNG NÓI LÝ THUYẾT - XEM CÁI HIỂU NGAY
            </p>
            <div className="h-[2px] flex-1 bg-gradient-to-l from-transparent via-accent to-accent"></div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 w-full">
          {demoItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              onClick={() => setSelectedVideo(item.video)}
              className="flex flex-col items-stretch gap-4 p-1 rounded-2xl border-2 border-accent/30 bg-black/60 backdrop-blur-xl group hover:border-accent transition-all duration-500 overflow-hidden cursor-pointer relative"
            >
              <Image
                src="/images/magical-celestial-interstellar-frame.jpg"
                alt="background"
                fill
                className="object-cover opacity-10 -z-10"
              />
              <div className="flex flex-col items-center gap-4 p-4 w-full">
                {/* Video Thumbnail */}
                <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-white/10 group-hover:border-accent/50 transition-colors bg-black/40">
                  <video
                    src={item.video}
                    muted
                    loop
                    playsInline
                    autoPlay
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-black/40 backdrop-blur-sm border border-white/30 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                      <Icon path={mdiPlay} size={1.5} className="text-white ml-1" />
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  {/* Number Box */}
                  <div className="flex-shrink-0 w-20 h-20 rounded-xl border-2 border-accent flex items-center justify-center bg-black shadow-[0_0_25px_rgba(203,155,81,0.4)] transition-all">
                    <GoldText absolute={false} className="text-4xl md:!text-5xl !tracking-normal">
                      {item.id}
                    </GoldText>
                  </div>
                  {/* Text Content */}
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-accent font-semibold text-lg mb-1 uppercase">
                      {item.title}
                    </h3>
                    <p className="text-neutral-300 text-base md:text-base font-medium">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center w-full mt-8">
          <GoldButton className="w-[250px] h-[50px] text-sm group">
            XEM TÍNH NĂNG TOOL
            <Icon path={mdiShimmer} size={1} />
          </GoldButton>
        </div>
      </div>

      <Dialog open={!!selectedVideo} onOpenChange={(open) => !open && setSelectedVideo(null)}>
        <DialogContent size="large" >
          {selectedVideo && (
            <div className="w-full bg-darkBorderV1 h-full flex items-center justify-center rounded-xl overflow-hidden shadow-2xl">
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
