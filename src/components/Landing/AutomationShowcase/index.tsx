"use client";

import GoldButton from "@/components/ui/GoldButton";
import GoldText from "@/components/ui/GoldText";
import {
  mdiCheckDecagram,
  mdiChevronTripleRight,
  mdiPlay,
  mdiYoutube
} from "@mdi/js";
import Icon from "@mdi/react";
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
    <section className="relative max-w-7xl mx-auto overflow-hidden">
      <div className="flex justify-center w-full mb-8">
        <GoldText absolute={false} className="text-4xl md:!text-5xl !tracking-normal">
          CHI TIẾT VỀ TÍNH NĂNG TOOL
        </GoldText>
      </div>

      {/* BOTTOM SECTION: VIDEO DEMO */}
      <div className="border-2 border-accent/30 rounded-3xl p-6 bg-black/40 backdrop-blur-md relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
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
              <div className="bg-accent rounded-full p-1 flex-shrink-0">
                <Icon path={mdiYoutube} size={0.8} className="text-black" />
              </div>
              <p className="text-accent text-sm font-semibold text-start uppercase">
                VIDEO CHIA SẺ TÍNH NĂNG TOOL - HÃY DÀNH RA 8 PHÚT ĐỂ HIỂU CHI TIẾT VỀ TOOL NHA
              </p>
            </div>
          </div>

          {/* Right: Feature List */}
          <div className="space-y-4">
            <div className="space-y-3">
              <p className="text-neutral-300 font-medium leading-relaxed">
                Công cụ AI tạo video tự động – Không cần biết edit, không cần làm content. Bạn chỉ cần nhập ý tưởng, hệ thống sẽ tự động:
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
                    <Icon path={mdiCheckDecagram} size={0.8} className="text-accent" />
                    <span className="text-neutral-300 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <p className="text-accent font-bold flex items-center gap-2">
                <span className="text-xl">👉</span> Sau vài phút bạn nhận video hoàn chỉnh sẵn sàng đăng TikTok - YouTube - Facebook.
              </p>
            </div>
            <div className="flex justify-center w-full">
              <GoldButton className="w-[250px] h-[50px] text-sm group">
                MUA NGAY LIỀN TAY
                <Icon path={mdiChevronTripleRight} size={1} className="animate-move-left-right" />
              </GoldButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
