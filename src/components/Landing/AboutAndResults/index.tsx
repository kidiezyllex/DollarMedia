"use client";

import GoldText from "@/components/ui/GoldText";
import {
  mdiAccountGroupOutline,
  mdiBellOutline,
  mdiCalendarMonthOutline,
  mdiCart,
  mdiCheckDecagram,
  mdiChevronLeft,
  mdiChevronRight,
  mdiClockOutline,
  mdiHandshake,
  mdiHeadset,
  mdiLaptop,
  mdiShieldCheck,
  mdiStar,
  mdiTrendingUp,
  mdiYoutube
} from "@mdi/js";
import Icon from "@mdi/react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

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

  return (
    <section className="relative py-8 px-4 bg-black overflow-hidden">
      <Image
        src="/images/linefooter.png"
        alt="line decoration"
        width={1920}
        height={10}
        className="w-full h-auto "
      />
      <div className="flex justify-center w-full mb-8">
        <GoldText absolute={false} className="text-4xl md:!text-5xl !tracking-normal !leading-normal">
          VỀ CHÚNG TÔI
        </GoldText>
      </div>
      <div className="container mx-auto max-w-7xl relative z-10 space-y-24">
        {/* SECTION 1: ABOUT US */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: About Text */}
          <div className="lg:col-span-4 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="h-1 w-20 bg-accent mb-4"></div>
              <p className="text-accent text-lg font-bold leading-tight uppercase">
                CHÚNG TÔI XÂY DỰNG SAYMEDIA <br /> VỚI MỤC TIÊU:
              </p>
            </motion.div>

            <div className="space-y-4">
              {[
                "GIÚP KHÁCH HÀNG TẠO RA THU NHẬP THỰC TẾ TỪ AI",
                "CÓ ĐỘI NGŨ IT MẠNH HỖ TRỢ NHANH CHÓNG",
                "ĐÚC KẾT PHÁT TRIỂN HỆ THỐNG LIÊN TỤC",
                "ĐỒNG HÀNH LÂU DÀI CÙNG NGƯỜI DÙNG"
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-6 h-6 rounded-full border border-accent flex items-center justify-center flex-shrink-0">
                    <Icon path={mdiCheckDecagram} size={0.6} className="text-accent" />
                  </div>
                  <span className="text-white font-bold text-sm tracking-wide">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Team Showcase */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-3xl border-2 border-accent/40 p-4 md:p-8 bg-gradient-to-br from-[#111] to-black shadow-[0_0_50px_rgba(203,155,81,0.1)]"
            >
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-4 text-accent">
                  <span>{">>>"}</span>
                  <h3 className="text-2xl md:text-3xl font-semibold italic uppercase tracking-tighter">ĐỘI NGŨ SAYMEDIA</h3>
                  <span>{"<<<"}</span>
                </div>
                <p className="text-white text-[10px] md:text-xs font-bold uppercase mt-2">
                  3 ĐỘI NGŨ – 1 MỤC TIÊU: <span className="text-yellow-400">ĐEM LẠI KẾT QUẢ THỰC CHIẾN</span> CHO ĐỐI TÁC!
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {teamData.map((team, idx) => (
                  <div key={idx} className={`relative rounded-2xl border ${team.border} ${team.bg} overflow-hidden group`}>
                    <div className="p-4 flex items-center gap-2 border-b border-white/10">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center bg-black/40`}>
                        <Icon path={team.icon} size={0.8} className={team.color === 'blue' ? 'text-blue-400' : team.color === 'green' ? 'text-green-400' : 'text-red-400'} />
                      </div>
                      <span className="text-[10px] font-semibold text-white">{team.title}</span>
                    </div>

                    <div className="relative h-32 w-full overflow-hidden">
                      <Image src={team.image} alt={team.title} fill className="object-cover opacity-60 group-hover:scale-110 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                    </div>

                    <div className="p-4 space-y-2">
                      {team.items?.map((item, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className={`w-4 h-4 rounded-full flex items-center justify-center ${team.color === 'blue' ? 'bg-blue-500' : 'bg-red-500'}`}>
                            <Icon path={mdiCheckDecagram} size={0.4} className="text-white" />
                          </div>
                          <span className="text-[9px] font-bold text-white/90">{item}</span>
                        </div>
                      ))}
                      {team.info?.map((info, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <Icon path={info.icon} size={0.5} className="text-green-400" />
                          <div className="flex flex-col">
                            <span className="text-[8px] text-white/60">{info.label}</span>
                            {info.value && <span className="text-[9px] font-bold text-white leading-tight">{info.value}</span>}
                          </div>
                        </div>
                      ))}
                      {team.mainPoint && (
                        <div className="pt-2 border-t border-white/10">
                          <div className="flex items-center gap-1 text-yellow-400 mb-1">
                            <Icon path={mdiStar} size={0.5} />
                            <span className="text-[9px] font-semibold uppercase">{team.mainPoint}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Badges */}
              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-2">
                {[
                  { label: "CAM KẾT HIỆU QUẢ TẬN TÂM", icon: mdiStar, color: "text-orange-400" },
                  { label: "ĐỒNG HÀNH DÀI HẠN", icon: mdiShieldCheck, color: "text-green-400" },
                  { label: "RA KẾT QUẢ THỰC CHIẾN", icon: mdiTrendingUp, color: "text-yellow-400" },
                  { label: "THÀNH CÔNG CÙNG ĐỐI TÁC", icon: mdiHandshake, color: "text-blue-400" }
                ].map((badge, idx) => (
                  <div key={idx} className="flex items-center gap-1.5 p-2 rounded-lg bg-black/40 border border-white/5">
                    <Icon path={badge.icon} size={0.6} className={badge.color} />
                    <span className="text-[8px] font-semibold text-white leading-tight">{badge.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* SECTION 2: RESULTS SHOWCASE */}
        <div className="space-y-12">
          <div className="text-center">
            <div className="flex items-center justify-center gap-4 mb-2">
              <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent to-accent max-w-[100px]"></div>
              <h2 className="text-xl md:text-3xl font-semibold text-accent uppercase tracking-tight italic">
                MỘT VÀI KẾT QUẢ CỦA AE ĐÃ ĐỒNG HÀNH VỚI BÊN MÌNH
              </h2>
              <div className="h-[2px] flex-1 bg-gradient-to-l from-transparent to-accent max-w-[100px]"></div>
            </div>
            <p className="text-white text-lg font-bold uppercase italic">
              SAU 2 THÁNG TRIỂN KHAI ĐÚNG QUY TRÌNH
            </p>
          </div>

          {/* Chat Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto rounded-3xl border border-accent/30 bg-[#0d0d0d] overflow-hidden shadow-[0_0_60px_rgba(0,0,0,0.8)]"
          >
            <div className="flex h-[500px] md:h-[600px]">
              {/* Sidebar */}
              <div className="hidden md:flex w-64 flex-col border-r border-white/5 bg-[#121212] p-4">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                    <Icon path={mdiAccountGroupOutline} size={1} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">Hỗ trợ Kỹ Thuật FuryCore</h4>
                    <p className="text-[9px] text-white/40">80 thành viên</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-[10px] font-bold text-white/40 uppercase">
                      <span>Thông báo</span>
                      <Icon path={mdiBellOutline} size={0.5} />
                    </div>
                    <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20">
                      <p className="text-[10px] text-white leading-relaxed">Video đầu ra không đủ số phút...</p>
                      <span className="text-[8px] text-blue-400">+2</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-[10px] font-bold text-white/40 uppercase">Thành viên</p>
                    <div className="space-y-3">
                      {[
                        { name: "Vânny", status: "Xong nhé", color: "bg-orange-400" },
                        { name: "Hồng Xuyến", status: "Nghiện quá", color: "bg-green-400" },
                        { name: "Minh Anh", status: "Tuyệt quá", color: "bg-blue-400" }
                      ].map((member, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className={`w-6 h-6 rounded-full ${member.color}`}></div>
                          <div>
                            <p className="text-[10px] font-bold text-white">{member.name}</p>
                            <p className="text-[8px] text-white/40">{member.status}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="flex-1 flex flex-col bg-black">
                <div className="p-4 border-b border-white/5 flex items-center justify-between bg-[#151515]">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white text-[10px] font-bold">HX</div>
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-white leading-none">Hồng Xuyến</span>
                      <span className="text-[10px] text-green-400 font-bold">online</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-white/40">
                    <Icon path={mdiChevronLeft} size={0.8} />
                    <Icon path={mdiChevronRight} size={0.8} />
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4 bg-[#0d0d0d]">
                  <div className="flex flex-col items-start max-w-[85%] space-y-2">
                    <div className="rounded-2xl border border-white/10 bg-[#1a1a1a] p-1 overflow-hidden shadow-xl">
                      <div className="relative aspect-[9/16] w-full max-w-[240px] md:max-w-[280px] mx-auto rounded-xl overflow-hidden">
                        <Image src="/images/demo-4.png" alt="Analytics" fill className="object-cover" />
                      </div>
                    </div>
                    <div className="flex items-end gap-2">
                      <div className="px-4 py-2.5 rounded-2xl rounded-tl-none bg-[#2b5278] border border-blue-400/20 shadow-lg">
                        <p className="text-[11px] md:text-xs text-white font-medium">Chúc mn đầu tuần nổ view 😍</p>
                      </div>
                      <span className="text-[9px] text-white/20 mb-1">11:40</span>
                    </div>
                  </div>

                  <div className="flex flex-col items-end w-full space-y-2">
                    <div className="flex items-end gap-2 max-w-[85%]">
                      <span className="text-[9px] text-white/20 mb-1">11:41</span>
                      <div className="px-4 py-2.5 rounded-2xl rounded-tr-none bg-[#212121] border border-white/10 shadow-lg">
                        <p className="text-[11px] md:text-xs text-white italic font-medium">Khét thế nhì 🔥</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-[#121212] border-t border-white/5">
                  <div className="h-10 rounded-xl bg-white/5 border border-white/10 flex items-center px-4">
                    <span className="text-xs text-white/20 italic">Nhập tin nhắn...</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Carousel thumbnails */}
          <div className="flex items-center justify-center gap-4">
            <button className="w-10 h-10 rounded-full border border-accent/30 flex items-center justify-center text-accent hover:bg-accent/10 transition-colors">
              <Icon path={mdiChevronLeft} size={1} />
            </button>
            <div className="flex gap-4 overflow-hidden">
              {resultsImages.map((img, i) => (
                <div key={i} className={`relative w-24 h-32 md:w-40 md:h-56 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${i === 0 ? 'border-accent' : 'border-transparent opacity-40 hover:opacity-100'}`}>
                  <Image src={img} alt={`Result ${i}`} fill className="object-cover" />
                </div>
              ))}
            </div>
            <button className="w-10 h-10 rounded-full border border-accent/30 flex items-center justify-center text-accent hover:bg-accent/10 transition-colors">
              <Icon path={mdiChevronRight} size={1} />
            </button>
          </div>
        </div>

        {/* SECTION 3: CTA */}
        <div className="pt-12 border-t border-accent/20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-semibold text-accent italic leading-tight uppercase"
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
        </div>

      </div>
    </section>
  );
};
