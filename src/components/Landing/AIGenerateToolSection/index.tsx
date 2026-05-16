"use client"
import PremiumCard from "@/components/ui/PremiumCard";
import PremiumHeader from "@/components/ui/PremiumHeader";
import { mdiCheckDecagram } from "@mdi/js";
import Icon from "@mdi/react";
import { motion } from "framer-motion";
import Image from "next/image";

export const AIGenerateToolSection = () => {
    return (
        <section id="ai-tool" className="relative overflow-hidden">
            <PremiumHeader>
                AI GENERATE TOOL
            </PremiumHeader>
            <div className="container mx-auto">
                <PremiumCard backgroundPath="/images/black-and-gold-luxury-background.jpg">
                    <div className="p-6">
                        <div className="grid grid-cols-2 items-start gap-6">
                            {/* Left Info */}
                            <div className="space-y-4">
                                <motion.div
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                >
                                    <p className="text-secondary text-lg font-semibold">
                                        Đây không chỉ là tool tạo video. Đây là hạ tầng AI Automation giúp:
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
                                            <div className="bg-secondary rounded-full p-1 flex-shrink-0">
                                                <Icon path={mdiCheckDecagram} size={0.8} className="text-black" />
                                            </div>
                                            <span className="text-neutral-200 font-medium">{item}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                            {/* Right Graphic (Workflow Visualization) */}
                            <div className="relative">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    className="relative rounded-3xl overflow-hidden"
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
                </PremiumCard>
            </div>
        </section>
    );
};