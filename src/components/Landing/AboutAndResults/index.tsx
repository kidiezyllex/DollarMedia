"use client";

import GoldButton from "@/components/ui/GoldButton";
import PremiumHeader from "@/components/ui/PremiumHeader";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import {
  mdiCheckDecagram,
  mdiChevronLeft,
  mdiChevronRight,
  mdiChevronTripleRight
} from "@mdi/js";
import Icon from "@mdi/react";
import axios from "axios";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";
import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

const slideImages = Array.from({ length: 14 }, (_, i) => `/images/slides/slide${i + 1}.webp`);

const packageNames: Record<number, string> = {
  1: "Tool tạo video AI - Gói trải nghiệm 1 tháng 899.000 VNĐ",
  2: "Tool tạo video AI - Gói kiếm tiền 3 tháng 2.290.000 VNĐ",
  3: "Tool tạo video AI - Gói đồng hành 6 tháng 4.590.000 VNĐ",
};

interface SharedProps {
  thumbsSwiper: any;
  setThumbsSwiper: (swiper: any) => void;
  openRegistration: (num: number) => void;
}

const AboutAndResultsDesktop = ({ thumbsSwiper, setThumbsSwiper, openRegistration }: SharedProps) => {
  return (
    <div className="hidden lg:block">
      <div className="relative z-10 mx-auto sm:container px-4">
        {/* SECTION 1: ABOUT US */}
        <div className="flex lg:flex-row flex-col items-start gap-6 border-2 border-accent/30 rounded-3xl p-4 md:p-6 relative overflow-hidden group">
          {/* Left Info */}
          <div className="space-y-4 lg:w-[40%] w-full">
            <Image
              src="/images/about-us.webp"
              alt="Đội ngũ Dollar Media - Chuyên gia trong lĩnh vực AI Video và YouTube Automation"
              width={1200}
              height={800}
              draggable={false}
              className="w-full h-auto object-contain rounded-2xl"
              sizes="(max-width: 768px) 90vw, (max-width: 1200px) 40vw, 500px"
            />
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-secondary text-lg font-semibold lg:text-start text-center">
                Chúng tôi xây dựng Dollar Media với mục tiêu:
              </p>
            </motion.div>

            <div className="space-y-4">
              {[
                "Giúp khách hàng tạo ra thu nhập thực tế từ AI",
                "Có đội ngũ IT mạnh hỗ trợ nhanh chóng",
                "Đúc kết phát triển hệ thống liên tục",
                "Đồng hành lâu dài cùng người dùng"
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="bg-secondary rounded-full p-1 flex-shrink-0">
                    <Icon path={mdiCheckDecagram} size={0.8} className="text-black" />
                  </div>
                  <span className="text-neutral-200 font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
            <div className="w-full mt-4 flex justify-center">
              <Link href="https://zalo.me/g/ake1jadogzfsxu8ntdkd" target="_blank">
                <GoldButton
                  className="w-[310px] h-[50px] text-sm group"
                >
                  Tham gia cộng đồng Dollar Media
                  <Image src="/images/Zalo.png" alt="Zalo" width={24} height={24} sizes="24px" />
                </GoldButton>
              </Link>
            </div>
          </div>
          {/* Right: Team Showcase */}
          <div className="space-y-4 lg:w-[60%] w-full">
            <p className="text-secondary text-lg font-semibold">
              Một vài kết quả của ae đã đồng hành với bên mình sau 2 tháng triển khai đúng quy trình:
            </p>
            <div className="w-full space-y-4 relative group/swiper">
              <Swiper
                spaceBetween={10}
                navigation={{
                  prevEl: '.prev-btn',
                  nextEl: '.next-btn',
                }}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                modules={[Navigation, Thumbs, Autoplay, FreeMode]}
                className="w-full aspect-[3/4] md:aspect-[4/5] max-h-[500px] rounded-2xl border-2 border-accent/30 overflow-hidden bg-neutral-900"
              >
                {slideImages.map((img, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="relative w-full h-full">
                      <Image
                        src={img}
                        alt={`Slide ${idx + 1}`}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 800px"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <button className="prev-btn absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-secondary rounded-full p-1 shadow-lg hover:scale-110 transition-all opacity-0 group-hover/swiper:opacity-100 disabled:opacity-0" aria-label="Slide trước">
                <Icon path={mdiChevronLeft} size={1} className="text-black" />
              </button>
              <button className="next-btn absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-secondary rounded-full p-1 shadow-lg hover:scale-110 transition-all opacity-0 group-hover/swiper:opacity-100 disabled:opacity-0" aria-label="Slide tiếp theo">
                <Icon path={mdiChevronRight} size={1} className="text-black" />
              </button>

              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={5}
                freeMode={true}
                watchSlidesProgress={true}
                slideToClickedSlide={true}
                modules={[Navigation, Thumbs, FreeMode]}
                className="thumbs-swiper w-full h-20 md:h-28 relative z-30"
              >
                {slideImages.map((img, idx) => (
                  <SwiperSlide key={idx} className="cursor-pointer rounded-lg overflow-hidden border-2 border-transparent transition-all !h-full">
                    <div className="relative w-full h-full opacity-40 [.swiper-slide-thumb-active_&]:opacity-100 [.swiper-slide-thumb-active_&]:border-accent transition-all">
                      <Image
                        src={img}
                        alt={`Thumb ${idx + 1}`}
                        fill
                        className="object-cover"
                        sizes="100px"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      <div className="relative pb-8 pt-1 mt-8">
        <Image
          src="/images/black-and-gold-luxury-background2.webp"
          alt="background"
          fill
          className="object-cover w-full opacity-20 -z-10"
          sizes="100vw"
        />
        <PremiumHeader>
          GÓI SỬ DỤNG
        </PremiumHeader>
        <div className="grid grid-cols-1 md:grid-cols-[0.9fr_1.2fr_0.9fr] items-center gap-3 sm:gap-4 mx-auto sm:container px-4">
          {[1, 2, 3].map((num) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: num * 0.1 }}
              className={cn(
                "overflow-hidden group relative cursor-pointer",
                num === 2 ? "z-10 md:scale-105" : "md:scale-95 opacity-80 hover:opacity-100"
              )}
            >
              <div className="relative w-full h-auto space-y-4">
                <Image
                  src={`/images/packages/package${num}.webp`}
                  alt={`Package ${num}`}
                  width={800}
                  height={1200}
                  className="w-full h-auto block transition-transform duration-700 border-2 border-accent/30 rounded-3xl"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                />
                <div className="flex justify-center w-full">
                  <GoldButton
                    className="w-full h-[46px] text-sm group"
                    onClick={() => openRegistration(num)}
                  >
                    ĐĂNG KÝ NGAY
                    <Icon path={mdiChevronTripleRight} size={1} className="animate-move-left-right" />
                  </GoldButton>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const AboutAndResultsMobile = ({ thumbsSwiper, setThumbsSwiper, openRegistration }: SharedProps) => {
  return (
    <div className="block lg:hidden">
      <div className="relative z-10 mx-auto sm:container px-4">
        {/* SECTION 1: ABOUT US */}
        <div className="flex flex-col items-start gap-6 border-2 border-accent/30 rounded-3xl p-4 relative overflow-hidden">
          {/* Left Info */}
          <div className="space-y-4 w-full">
            <Image
              src="/images/about-us.webp"
              alt="Đội ngũ Dollar Media - Chuyên gia trong lĩnh vực AI Video và YouTube Automation"
              width={1200}
              height={800}
              draggable={false}
              className="w-full h-auto object-contain rounded-2xl"
              sizes="(max-width: 768px) 90vw, 500px"
            />
            <div>
              <p className="text-secondary text-lg font-semibold text-center">
                Chúng tôi xây dựng Dollar Media với mục tiêu:
              </p>
            </div>

            <div className="space-y-4">
              {[
                "Giúp khách hàng tạo ra thu nhập thực tế từ AI",
                "Có đội ngũ IT mạnh hỗ trợ nhanh chóng",
                "Đúc kết phát triển hệ thống liên tục",
                "Đồng hành lâu dài cùng người dùng"
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3"
                >
                  <div className="bg-secondary rounded-full p-1 flex-shrink-0">
                    <Icon path={mdiCheckDecagram} size={0.8} className="text-black" />
                  </div>
                  <span className="text-neutral-200 font-medium">{item}</span>
                </div>
              ))}
            </div>
            <div className="w-full mt-4 flex justify-center">
              <Link href="https://zalo.me/g/ake1jadogzfsxu8ntdkd" target="_blank">
                <GoldButton
                  className="w-[310px] h-[50px] text-sm group"
                >
                  Tham gia cộng đồng Dollar Media
                  <Image src="/images/Zalo.png" alt="Zalo" width={24} height={24} sizes="24px" />
                </GoldButton>
              </Link>
            </div>
          </div>
          {/* Right: Team Showcase */}
          <div className="space-y-4 w-full">
            <p className="text-secondary text-lg font-semibold">
              Một vài kết quả của ae đã đồng hành với bên mình sau 2 tháng triển khai đúng quy trình:
            </p>
            <div className="w-full space-y-4 relative">
              <Swiper
                spaceBetween={10}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                modules={[Navigation, Thumbs, Autoplay, FreeMode]}
                className="w-full aspect-[3/4] rounded-2xl border-2 border-accent/30 overflow-hidden bg-neutral-900"
              >
                {slideImages.map((img, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="relative w-full h-full">
                      <Image
                        src={img}
                        alt={`Slide ${idx + 1}`}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 800px"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={8}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                slideToClickedSlide={true}
                modules={[Navigation, Thumbs, FreeMode]}
                className="thumbs-swiper w-full h-16 relative z-30"
              >
                {slideImages.map((img, idx) => (
                  <SwiperSlide key={idx} className="cursor-pointer rounded-lg overflow-hidden border-2 border-transparent transition-all !h-full">
                    <div className="relative w-full h-full opacity-40 [.swiper-slide-thumb-active_&]:opacity-100 [.swiper-slide-thumb-active_&]:border-accent transition-all">
                      <Image
                        src={img}
                        alt={`Thumb ${idx + 1}`}
                        fill
                        className="object-cover"
                        sizes="100px"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      <div className="relative pb-8 pt-1 mt-8">
        <Image
          src="/images/black-and-gold-luxury-background2.webp"
          alt="background"
          fill
          className="object-cover w-full opacity-20 -z-10"
          sizes="100vw"
        />
        <PremiumHeader>
          GÓI SỬ DỤNG
        </PremiumHeader>
        <div className="grid grid-cols-1 gap-4 px-4">
          {[1, 2, 3].map((num) => (
            <div
              key={num}
              className={cn(
                "overflow-hidden relative cursor-pointer"
              )}
            >
              <div className="relative w-full h-auto space-y-4">
                <Image
                  src={`/images/packages/package${num}.webp`}
                  alt={`Package ${num}`}
                  width={800}
                  height={1200}
                  className="w-full h-auto block border-2 border-accent/30 rounded-3xl"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                />
                <div className="flex justify-center w-full">
                  <GoldButton
                    className="w-full h-[46px] text-sm group"
                    onClick={() => openRegistration(num)}
                  >
                    ĐĂNG KÝ NGAY
                    <Icon path={mdiChevronTripleRight} size={1} className="animate-move-left-right" />
                  </GoldButton>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const AboutAndResults = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const [showRegistration, setShowRegistration] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", platform: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState("");

  const handleRegistrationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.platform) {
      toast.warning("Vui lòng chọn nền tảng làm video.");
      return;
    }
    setIsSubmitting(true);

    const message = `
<b>🚀 ĐĂNG KÝ MỚI TỪ LANDING PAGE DOLLAR MEDIA</b>
<b>Gói đăng ký:</b> ${selectedPackage}
<b>Họ và tên:</b> ${formData.name}
<b>Số điện thoại:</b> ${formData.phone}
<b>Email:</b> ${formData.email || "Không cung cấp"}
<b>Nền tảng làm video:</b> ${formData.platform}
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

  const openRegistration = (num: number) => {
    setSelectedPackage(packageNames[num]);
    setShowRegistration(true);
  };

  return (
    <section id="about" className="relative w-full overflow-hidden">
      <PremiumHeader>
        VỀ CHÚNG TÔI
      </PremiumHeader>

      <AboutAndResultsDesktop
        thumbsSwiper={thumbsSwiper}
        setThumbsSwiper={setThumbsSwiper}
        openRegistration={openRegistration}
      />

      <AboutAndResultsMobile
        thumbsSwiper={thumbsSwiper}
        setThumbsSwiper={setThumbsSwiper}
        openRegistration={openRegistration}
      />

      {/* Registration Dialog (Shared) */}
      <Dialog open={showRegistration} onOpenChange={setShowRegistration}>
        <DialogContent size="small">
          <div className="p-4 md:p-6 space-y-4">
            <div className="text-center space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-secondary">Đăng ký nhận tư vấn</h2>
              <p className="text-neutral-300 text-sm">Vui lòng để lại thông tin, đội ngũ của chúng tôi sẽ liên hệ với bạn ngay lập tức.</p>
              <div className="bg-secondary/10 border border-secondary/50 rounded-md p-2 mt-2">
                <p className="text-secondary text-xs font-bold uppercase">{selectedPackage}</p>
              </div>
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
