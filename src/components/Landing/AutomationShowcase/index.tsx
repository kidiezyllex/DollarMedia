"use client";

import GoldButton from "@/components/ui/GoldButton";
import PremiumCard from "@/components/ui/PremiumCard";
import PremiumHeader from "@/components/ui/PremiumHeader";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  mdiCheckDecagram,
  mdiChevronTripleRight,
  mdiPlay,
  mdiYoutube
} from "@mdi/js";
import Icon from "@mdi/react";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
export const AutomationShowcase = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [showRegistration, setShowRegistration] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", platform: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const videoUrl = "https://6b1c8wz28p.ufs.sh/f/j96j2uSUbsVoephVBqxdNkIo2y0YRuQaOTBVnwz9Etf5XHhc";

  const handleRegistrationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.platform) {
      toast.warning("Vui lòng chọn nền tảng làm video.");
      return;
    }
    setIsSubmitting(true);

    const message = `
<b>🚀 ĐĂNG KÝ MỚI TỪ LANDING PAGE DOLLAR MEDIA</b>
<b>Họ và tên:</b> ${formData.name}
<b>Email:</b> ${formData.email || "Không cung cấp"}
<b>Số điện thoại:</b> ${formData.phone}
<b>Nền tảng làm video:</b> ${formData.platform}
<b>Nguồn:</b> Khách đã nhấn đăng ký từ phần "Tính năng Tool ~ Công cụ AI tạo video tự động"
    `;

    try {
      const token = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN;
      const chatId = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;
      const url = `https://api.telegram.org/bot${token}/sendMessage`;

      await axios.post(url, {
        chat_id: chatId,
        text: message,
        parse_mode: 'HTML',
      });

      toast.success("Đăng ký thành công! Chúng tôi sẽ liên hệ sớm.");
      setShowRegistration(false);
      setFormData({ name: "", email: "", phone: "", platform: "" });
    } catch (error) {
      console.error(error);
      toast.error("Có lỗi xảy ra, vui lòng thử lại sau.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="automation" className="relative sm:container px-4 mx-auto">
      <PremiumHeader>
        TÍNH NĂNG TOOL
      </PremiumHeader>
      {/* BOTTOM SECTION: VIDEO DEMO */}
      <div className="mx-auto sm:container">
        <PremiumCard backgroundPath="/images/black-and-gold-luxury-background2.webp" className="p-4 md:p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            {/* Left: Video Placeholder */}
            <div className="space-y-4">
              <div
                onClick={() => setShowVideo(true)}
                className="relative aspect-video rounded-2xl overflow-hidden border-2 border-secondary/30 shadow-2xl group cursor-pointer bg-neutral-900"
              >
                <video
                  src={videoUrl}
                  muted
                  loop
                  playsInline
                  autoPlay
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-black/60 backdrop-blur-md border-2 border-secondary flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_30px_rgba(203,155,81,0.5)]">
                    <Icon path={mdiPlay} size={1.5} className="text-secondary ml-1" />
                  </div>
                </div>
              </div>
              <div className="mt-8 p-3 rounded-xl border border-dashed border-secondary/50 bg-gradient-to-r from-secondary/5 via-secondary/10 to-secondary/5 flex items-center gap-2">
                <div className="bg-secondary rounded-full p-1 flex-shrink-0">
                  <Icon path={mdiYoutube} size={0.8} className="text-black" />
                </div>
                <p className="text-secondary text-sm font-semibold text-start">
                  Video chia sẻ tính năng tool, hãy dành ra 8 phút to hiểu chi tiết về tool nha!
                </p>
              </div>
            </div>

            {/* Right: Feature List */}
            <div className="space-y-4">
              <div className="space-y-3">
                <p className="text-neutral-200 font-medium leading-relaxed">
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
                      <Icon path={mdiCheckDecagram} size={0.8} className="text-secondary" />
                      <span className="text-neutral-200 font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                <p className="text-secondary font-bold flex items-center gap-2">
                  <span className="text-xl">👉</span> Sau vài phút bạn nhận video hoàn chỉnh sẵn sàng đăng TikTok - YouTube - Facebook.
                </p>
              </div>
              <div className="flex justify-center w-full">
                <GoldButton
                  className="w-[250px] h-[50px] text-sm group"
                  onClick={() => setShowRegistration(true)}
                >
                  ĐĂNG KÝ NGAY LIỀN TAY
                  <Icon path={mdiChevronTripleRight} size={1} className="animate-move-left-right" />
                </GoldButton>
              </div>
            </div>
          </div>
        </PremiumCard>
      </div>

      <Dialog open={showVideo} onOpenChange={setShowVideo}>
        <DialogContent size="large" className="p-2 bg-black/95 overflow-hidden border-none max-w-[95vw] md:max-w-[1100px] rounded-2xl">
          {showVideo && (
            <div className="w-full h-full flex items-center justify-center bg-black rounded-xl overflow-hidden shadow-2xl">
              <video
                src={videoUrl}
                controls
                autoPlay
                className="w-full h-full max-h-[85vh] object-contain"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Registration Dialog */}
      <Dialog open={showRegistration} onOpenChange={setShowRegistration}>
        <DialogContent size="small">
          <div className="p-4 md:p-6 space-y-4">
            <div className="text-center space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-secondary">Đăng ký nhận tư vấn</h2>
              <p className="text-neutral-300 text-sm">Vui lòng để lại thông tin, đội ngũ của chúng tôi sẽ liên hệ với bạn ngay lập tức.</p>
            </div>

            <form onSubmit={handleRegistrationSubmit} className="space-y-4">
              <div className="space-y-1">
                <label className="text-base font-semibold text-secondary ml-1">Họ và tên <span className="text-red-500">(*)</span></label>
                <input
                  required
                  type="text"
                  placeholder="Nhập họ và tên của bạn"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white/5 border rounded-xl p-3 text-white placeholder:text-neutral-300 focus:outline-none border-secondary/50 transition-colors text-sm placeholder:italic"
                />
              </div>
              <div className="space-y-1">
                <label className="text-base font-semibold text-secondary ml-1">Số điện thoại / Zalo <span className="text-red-500">(*)</span></label>
                <input
                  required
                  type="tel"
                  placeholder="Nhập số điện thoại của bạn"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-white/5 border rounded-xl p-3 text-white placeholder:text-neutral-300 focus:outline-none border-secondary/50 transition-colors text-sm placeholder:italic"
                />
              </div>
              <div className="space-y-1">
                <label className="text-base font-semibold text-secondary ml-1">Email</label>
                <input
                  type="email"
                  placeholder="Nhập email của bạn (không bắt buộc)"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white/5 border rounded-xl p-3 text-white placeholder:text-neutral-300 focus:outline-none border-secondary/50 transition-colors text-sm placeholder:italic"
                />
              </div>
              <div className="space-y-1">
                <label className="text-base font-semibold text-secondary ml-1">Đang làm video ở nền tảng</label>
                <Select
                  value={formData.platform}
                  onValueChange={(val) => setFormData({ ...formData, platform: val })}
                >
                  <SelectTrigger className="w-full bg-white/5 border border-secondary/50 rounded-xl p-3 text-white text-sm font-normal h-11 flex items-center justify-between">
                    <SelectValue placeholder="Chọn nền tảng" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Facebook">Facebook</SelectItem>
                    <SelectItem value="Youtube">Youtube</SelectItem>
                    <SelectItem value="Tiktok">Tiktok</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <GoldButton
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 text-base group disabled:opacity-50"
              >
                {isSubmitting ? "ĐANG GỬI..." : "GỬI YÊU CẦU NGAY"}
                {!isSubmitting && <Icon path={mdiChevronTripleRight} size={0.8} className="animate-move-left-right" />}
              </GoldButton>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};
