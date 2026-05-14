"use client";

import GoldText from "@/components/ui/GoldText";
import {
  mdiCart,
  mdiCheckCircle,
  mdiPlay,
  mdiRocketLaunch,
  mdiStarFourPoints,
  mdiStarOutline,
  mdiYoutube
} from "@mdi/js";
import Icon from "@mdi/react";
import { motion } from "framer-motion";
import Image from "next/image";

const statusSections = [
  {
    title: "MỚI BẮT ĐẦU",
    items: [
      "Chưa có kiến thức nền tảng",
      "Không biết bắt đầu từ đâu",
      "Không biết edit / làm nội dung",
      "Sợ làm nên không dám làm",
      "Muốn làm nhưng sợ không ra kết quả"
    ]
  },
  {
    title: "ĐÃ LÀM NHƯNG CHƯA RA KẾT QUẢ",
    items: [
      "Đăng video nhưng không có view",
      "Nội dung không ai xem hết",
      "Không biết sai ở đâu để sửa",
      "Làm một thời gian rồi nản",
      "Không biết cách làm bài bản"
    ]
  },
  {
    title: "NGƯỜI ĐÃ LÀM CÓ KẾT QUẢ NHƯNG CHƯA SCALE",
    items: [
      "Làm video thủ công, rất mất thời gian",
      "Không thể đăng đều mỗi ngày",
      "Không scale được nhiều kênh",
      "Phụ thuộc vào edit / content / nhân sự",
      "Có kết quả nhưng không tăng trưởng"
    ]
  }
];

export const AutomationShowcase = () => {
  return (
    <section className="relative px-4 bg-black overflow-hidden">
      <div className="flex justify-center w-full mb-8">
        <GoldText absolute={false} className="text-4xl md:!text-5xl !tracking-normal">
          AI GENERATE TOOL
        </GoldText>
      </div>
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* TOP SECTION: AI GENERATE TOOL */}
        <div className="border-2 border-accent/30 mb-20 rounded-3xl p-6 md:p-10 bg-black/40 backdrop-blur-md relative overflow-hidden group">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Info */}
            <div className="lg:col-span-5 space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <p className="text-accent text-lg font-semibold">
                  Đây không chỉ là tool tạo video. Đây là hạ tầng <br className="hidden md:block" />
                  AI Automation giúp:
                </p>
              </motion.div>

              <div className="space-y-4">
                {[
                  "Kết nối nhiều AI + nhiều công cụ + nhiều nền tảng",
                  "Tự động hoá toàn bộ quy trình làm nội dung",
                  "Giảm 80-90% công việc thủ công",
                  "Vận hành hệ thống nội dung 24/7 - scale không giới hạn"
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="bg-primary rounded-full p-1 flex-shrink-0">
                      <Icon path={mdiCheckCircle} size={0.8} className="text-black" />
                    </div>
                    <span className="text-neutral-200 font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Graphic (Workflow Visualization) */}
            <div className="lg:col-span-7 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <Image
                  src="/images/day-khong-chi-la-tool-tao-video.jpg"
                  alt="Đây không chỉ là tool tạo video"
                  width={1000}
                  height={600}
                  draggable={false}
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full mb-8">
          <GoldText absolute={false} className="text-4xl md:!text-5xl !tracking-normal">
            HIỆN TẠI BẠN ĐANG
          </GoldText>
        </div>
        {/* MIDDLE SECTION: CURRENT STATE */}
        <div className="border-2 border-accent/30 rounded-3xl p-6 md:p-8 bg-black/40 backdrop-blur-md relative mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {statusSections.map((section, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="border-2 border-accent/30 rounded-2xl p-4 hover:border-accent transition-all duration-500 group relative cursor-pointer overflow-hidden"
              >
                <Image
                  src="/images/magical-celestial-interstellar-frame.jpg"
                  alt="background"
                  fill
                  className="object-cover opacity-20 -z-10 group-hover:opacity-20 transition-all duration-700 scale-125 group-hover:scale-[1.4]"
                />
                <div className="flex items-center gap-3 mb-4">
                  <Icon path={mdiRocketLaunch} size={0.8} className="text-secondary" />
                  <h3 className="text-accent font-semibold text-base uppercase group-hover:text-accent transition-colors">
                    {section.title}
                  </h3>
                </div>
                <div className="space-y-3">
                  {section.items.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Icon path={mdiStarFourPoints} size={0.6} className="text-secondary mt-1 flex-shrink-0" />
                      <span className="text-neutral-400 text-sm font-semibold group-hover:text-neutral-300 transition-colors">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom support banner */}
          <div className="mt-8 p-4 rounded-xl border border-dashed border-accent/50 bg-gradient-to-r from-accent/5 via-accent/10 to-accent/5 flex items-center justify-between gap-4">
            <Icon path={mdiStarOutline} size={1} className="text-accent hidden md:block" />
            <p className="text-accent text-sm font-semibold text-center uppercase">
              CHÚNG TÔI LUÔN SẴN SÀNG ĐỒNG HÀNH HỖ TRỢ ANH EM TỪ VIỆC TRIỂN KHAI TOOL ĐẾN VIỆC TRIỂN KHAI HỆ THỐNG KÊNH SAO CHO HIỆU QUẢ
            </p>
            <Icon path={mdiStarOutline} size={1} className="text-accent hidden md:block" />
          </div>
        </div>
        <div className="flex justify-center w-full mb-8">
          <GoldText absolute={false} className="text-4xl md:!text-5xl !tracking-normal">
            CHI TIẾT VỀ TÍNH NĂNG TOOL
          </GoldText>
        </div>

        {/* BOTTOM SECTION: VIDEO DEMO */}
        <div className="border-2 border-accent/30 rounded-3xl p-6 md:p-8 bg-black/40 backdrop-blur-md relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left: Video Placeholder */}
            <div className="space-y-4">
              <div className="relative aspect-video rounded-2xl overflow-hidden border-2 border-accent/30 shadow-2xl group cursor-pointer bg-neutral-900">
                <Image
                  src="/images/demo-3.png"
                  alt="Video thumbnail"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-black/60 backdrop-blur-md border-2 border-accent flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_30px_rgba(203,155,81,0.5)]">
                    <Icon path={mdiPlay} size={1.5} className="text-accent ml-1" />
                  </div>
                </div>
              </div>
              <div className="mt-8 p-4 rounded-xl border border-dashed border-accent/50 bg-gradient-to-r from-accent/5 via-accent/10 to-accent/5 flex items-center justify-between gap-4">
                <Icon path={mdiYoutube} size={1} className="text-accent hidden md:block" />
                <p className="text-accent text-sm font-semibold text-center uppercase">
                  VIDEO CHIA SẺ TÍNH NĂNG TOOL - HÃY DÀNH RA 8 PHÚT ĐỂ HIỂU CHI TIẾT VỀ TOOL NHA
                </p>
              </div>
            </div>

            {/* Right: Feature List */}
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-neutral-200 font-medium leading-relaxed">
                  Công cụ AI tạo video tự động – Không cần biết edit, <br />
                  không cần làm content. Bạn chỉ cần nhập ý tưởng, <br />
                  hệ thống sẽ tự động:
                </p>

                <div className="space-y-3">
                  {[
                    "Tạo kịch bản",
                    "Viết prompts",
                    "Đồng bộ nhân vật",
                    "Tạo hình ảnh / video",
                    "Tự edit video hoàn chỉnh",
                    "Đồng bộ ngữ điệu, giọng đọc, âm thanh"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <Icon path={mdiCheckCircle} size={0.8} className="text-accent" />
                      <span className="text-neutral-300 font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                <p className="text-accent text-sm font-bold flex items-center gap-2">
                  <span className="text-xl">👉</span> Sau vài phút bạn nhận video hoàn chỉnh sẵn sàng đăng TikTok - YouTube - Facebook.
                </p>
              </div>

              <div className="pt-4 flex justify-center lg:justify-start">
                <button className="relative px-12 py-6 bg-gradient-to-r from-accent to-[#f4d193] rounded-2xl text-black font-semibold text-xl md:text-2xl shadow-[0_0_40px_rgba(203,155,81,0.4)] hover:scale-105 transition-all group overflow-hidden">
                  <div className="flex flex-col items-center leading-none">
                    <div className="flex items-center gap-2">
                      <Icon path={mdiCart} size={1} />
                      MUA NGAY
                    </div>
                    <span className="text-[10px] uppercase mt-1 tracking-widest opacity-80">SỞ HỮU NGAY - TRIỂN KHAI NGAY</span>
                  </div>
                  <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:left-full transition-all duration-1000 ease-in-out"></div>
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
