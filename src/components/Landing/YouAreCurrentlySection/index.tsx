import GoldText from "@/components/ui/GoldText";
import { mdiRocketLaunch, mdiStarFourPoints, mdiStarOutline } from "@mdi/js";
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
export const YouAreCurrentlySection = () => {
    return (
        <section id="current-status" className="relative overflow-hidden container mx-auto">
            <div className="flex justify-center w-full mb-8">
                <GoldText absolute={false} className="text-4xl md:!text-5xl !tracking-normal">
                    HIỆN TẠI BẠN ĐANG
                </GoldText>
            </div>
            {/* MIDDLE SECTION: CURRENT STATE */}
            <div className="border-2 border-accent/30 rounded-3xl p-6 bg-black/40 backdrop-blur-md relative mb-8">
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
                            <div className="flex items-center gap-2 mb-2">
                                <div className="bg-accent rounded-full p-1 flex-shrink-0">
                                    <Icon path={mdiRocketLaunch} size={0.8} className="text-black" />
                                </div>
                                <h3 className="text-accent font-semibold text-sm group-hover:text-accent transition-colors">
                                    {section.title}
                                </h3>
                            </div>
                            <div className="space-y-3">
                                {section.items.map((item, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <Icon path={mdiStarFourPoints} size={0.6} className="text-secondary mt-1 flex-shrink-0" />
                                        <span className="italic text-base text-neutral-300 transition-colors">
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom support banner */}
                <div className="mt-4 p-4 rounded-xl border border-dashed border-accent/50 bg-gradient-to-r from-accent/5 via-accent/10 to-accent/5 flex items-center justify-between gap-4">
                    <Icon path={mdiStarOutline} size={1} className="text-accent hidden md:block" />
                    <p className="text-accent text-sm font-semibold text-center uppercase">
                        CHÚNG TÔI LUÔN SẴN SÀNG ĐỒNG HÀNH HỖ TRỢ ANH EM TỪ VIỆC TRIỂN KHAI TOOL ĐẾN VIỆC TRIỂN KHAI HỆ THỐNG KÊNH SAO CHO HIỆU QUẢ
                    </p>
                    <Icon path={mdiStarOutline} size={1} className="text-accent hidden md:block" />
                </div>
            </div>
        </section>
    );
};