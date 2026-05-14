"use client";

import { mdiConsole, mdiCpu64Bit, mdiKey, mdiShieldCheck } from "@mdi/js";
import Icon from "@mdi/react";
import { motion } from "framer-motion";

export const WorkflowProcess = () => {
  const steps = [
    { title: "Khởi tạo yêu cầu", desc: "Chọn sản phẩm trên hệ thống và gửi tín hiệu đến Admin.", icon: mdiConsole },
    { title: "Xử lý thanh toán", desc: "Tiến hành chuyển khoản qua hệ thống ngân hàng an toàn.", icon: mdiCpu64Bit },
    { title: "Cấp phát quyền", desc: "Nhận tài khoản/Key qua kênh liên lạc bảo mật.", icon: mdiKey },
    { title: "Sử dụng & bảo hành", desc: "Hệ thống online. Hỗ trợ 1-đổi-1 trong suốt chu kỳ.", icon: mdiShieldCheck }
  ];

  return (
    <section id="workflow" className="py-16 bg-[#080808] border-t border-b border-primary/20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none"></div>

      <div className="max-w-8xl mx-auto px-4 sm:px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-semibold uppercase tracking-tight mb-4 text-white">Quy trình <span className="text-secondary">Giao dịch</span></h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">Các bước đơn giản để sở hữu tài nguyên AI đỉnh cao tại MD Premium.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connection line for desktop */}
          <div className="hidden md:block absolute top-[40px] left-[10%] right-[10%] h-[1px] border-t border-dashed border-primary z-0"></div>

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="relative z-10 flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 rounded-full bg-[#050505] border-2 border-primary flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(1,87,190,0.4),inset_0_0_40px_rgba(1,87,190,0.6)] relative">
                <Icon path={step.icon} size={1.4} className="text-secondary" />
              </div>
              <h3 className="text-lg font-bold mb-1 text-white">{step.title}</h3>
              <p className="text-sm text-neutral-400">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
