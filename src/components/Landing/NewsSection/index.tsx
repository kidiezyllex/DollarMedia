"use client";

import { Badge } from "@/components/ui/badge";
import CyberButton from "@/components/ui/CyberButton";
import { motion } from "framer-motion";
import Image from "next/image";

export const NewsSection = () => {
   return (
      <section id="news" className="py-16 bg-[#080808] border-t border-primary/20 relative">
         <div className="max-w-8xl mx-auto px-4 sm:px-4 lg:px-8">
            <div className="text-center mb-16">
               <h2 className="text-3xl md:text-5xl font-semibold uppercase tracking-tight mb-4 text-neutral-300">Blog <span className="text-secondary">Công nghệ</span></h2>
               <p className="text-neutral-400 max-w-2xl mx-auto">Cập nhật những tin tức mới nhất về trí tuệ nhân tạo và mẹo công nghệ hữu ích.</p>
            </div>

            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[250px]">
               <motion.div className="md:col-span-8 md:row-span-2 relative group overflow-hidden border-none cyber-border clip-corner p-4 flex flex-col justify-end" whileHover={{ scale: 0.99 }}>
                  <div className="absolute inset-0 bg-[#000]">
                     <Image src="https://picsum.photos/seed/cyber-news1/800/800" alt="News main" fill className="object-cover opacity-40 group-hover:opacity-60 transition-opacity" referrerPolicy="no-referrer" />
                  </div>
                  <div className="relative z-10 pl-6">
                     <Badge variant="sky">HOT NEWS</Badge>
                     <h3 className="text-2xl md:text-3xl font-bold uppercase text-neutral-300 mb-2 leading-tight">Gemini 1.5 Pro ra mắt: Kỷ nguyên AI mới</h3>
                     <p className="text-neutral-300 text-sm max-w-lg mb-4 line-clamp-2">Khám phá khả năng xử lý context window khổng lồ và cách ứng dụng vào công việc phân tích dữ liệu hiệu quả.</p>
                     <div className="w-full flex justify-center">
                        <CyberButton text="Xem bài viết" size="medium" variant="solid" />
                     </div>
                  </div>
               </motion.div>

               <div className="md:col-span-4 relative group overflow-hidden border-none cyber-border clip-corner p-4 flex flex-col justify-end bg-[#0a0a0a]">
                  <div className="absolute inset-0 z-0">
                     <Image src="https://picsum.photos/seed/cyber-security/400/400" alt="Security" fill className="object-cover opacity-30 group-hover:opacity-50 transition-opacity" referrerPolicy="no-referrer" />
                     <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
                  </div>
                  <div className="relative z-10">
                     <Badge variant="neutral">12/05/2026</Badge>
                     <h3 className="text-lg font-bold uppercase text-neutral-300 mt-1 mb-2">Cách bảo mật tài khoản AI</h3>
                     <div className="w-full flex justify-center">
                        <CyberButton text="Xem bài viết" size="medium" variant="solid" />
                     </div>
                  </div>
               </div>

               <div className="md:col-span-4 relative group overflow-hidden border-none cyber-border clip-corner p-4 flex flex-col justify-end bg-[#0a0a0a]">
                  <div className="absolute inset-0 z-0">
                     <Image src="https://picsum.photos/seed/cyber-design/400/400" alt="Design" fill className="object-cover opacity-30 group-hover:opacity-50 transition-opacity" referrerPolicy="no-referrer" />
                     <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
                  </div>
                  <div className="relative z-10">
                     <Badge variant="neutral">10/05/2026</Badge>
                     <h3 className="text-lg font-bold uppercase text-neutral-300 mt-1 mb-2">Review các công cụ AI Design</h3>
                     <div className="w-full flex justify-center">
                        <CyberButton text="Xem bài viết" size="medium" variant="solid" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};
