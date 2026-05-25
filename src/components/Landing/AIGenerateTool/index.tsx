"use client"
import GoldButton from "@/components/ui/GoldButton";
import PremiumCard from "@/components/ui/PremiumCard";
import PremiumHeader from "@/components/ui/PremiumHeader";
import { mdiCheckDecagram } from "@mdi/js";
import Icon from "@mdi/react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const featureList = [
    "Kết nối nhiều AI + nhiều công cụ + nhiều nền tảng",
    "Tự động hoá toàn bộ quy trình làm nội dung",
    "Giảm 80-90% công việc thủ công",
    "Vận hành hệ thống nội dung 24/7 - scale không giới hạn"
];

const AIGenerateToolDesktop = () => {
    return (
        <div className="hidden lg:block">
            <PremiumCard backgroundPath="/images/black-and-gold-luxury-background.webp">
                <div className="p-4 md:p-6">
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
                                {featureList.map((item, idx) => (
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
                                        <Image src="/images/Zalo.png" alt="Zalo" width={24} height={24} />
                                    </GoldButton>
                                </Link>
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
                                    src="/images/day-khong-chi-la-tool-tao-video.webp"
                                    alt="Hạ tầng AI Automation - Dollar Media giúp tự động hóa quy trình làm video TikTok và Youtube"
                                    width={1000}
                                    height={600}
                                    draggable={false}
                                    className="w-full h-auto object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </PremiumCard>
        </div>
    );
};

const AIGenerateToolMobile = () => {
    return (
        <div className="block lg:hidden">
            <PremiumCard backgroundPath="/images/black-and-gold-luxury-background.webp">
                <div className="p-4 md:p-6">
                    <div className="grid grid-cols-1 items-start gap-6">
                        {/* Left Info */}
                        <div className="space-y-4">
                            <div>
                                <p className="text-secondary text-lg font-semibold">
                                    Đây không chỉ là tool tạo video. Đây là hạ tầng AI Automation giúp:
                                </p>
                            </div>
                            <div className="space-y-4">
                                {featureList.map((item, idx) => (
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
                                        <Image src="/images/Zalo.png" alt="Zalo" width={24} height={24} />
                                    </GoldButton>
                                </Link>
                            </div>
                        </div>
                        {/* Right Graphic (Workflow Visualization) */}
                        <div className="relative">
                            <div className="relative rounded-2xl overflow-hidden border border-white/10">
                                <Image
                                    src="/images/day-khong-chi-la-tool-tao-video.webp"
                                    alt="Hạ tầng AI Automation - Dollar Media giúp tự động hóa quy trình làm video TikTok và Youtube"
                                    width={1000}
                                    height={600}
                                    draggable={false}
                                    className="w-full h-auto object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </PremiumCard>
        </div>
    );
};

export const AIGenerateTool = () => {
    return (
        <section id="ai-tool" className="relative overflow-hidden">
            <PremiumHeader>
                AI GENERATE TOOL
            </PremiumHeader>
            <div className="sm:container px-4 mx-auto">
                <AIGenerateToolDesktop />
                <AIGenerateToolMobile />
            </div>
        </section>
    );
};