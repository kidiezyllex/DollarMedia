import { mdiAccountGroup, mdiChartTimelineVariant, mdiFlash, mdiShieldCheck } from "@mdi/js";
import Icon from "@mdi/react";

export const StatsSection = () => {
   const stats = [
      {
         value: "5K",
         suffix: "+",
         label: "Tài khoản kích hoạt",
         icon: mdiAccountGroup
      },
      {
         value: "24",
         suffix: "/7",
         label: "Hệ thống tự động",
         icon: mdiFlash
      },
      {
         value: "100",
         suffix: "%",
         label: "Bảo hành chính chủ",
         icon: mdiShieldCheck
      },
      {
         value: "99.9",
         suffix: "%",
         label: "Độ ổn định dịch vụ",
         icon: mdiChartTimelineVariant
      }
   ];

   return (
      <section className="py-16 border-t border-b border-primary/20 bg-[#050505]">
         <div className="max-w-8xl mx-auto px-4 sm:px-4 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center divide-x divide-primary/30">
               {stats.map((stat, idx) => (
                  <div key={idx} className="p-3 rounded-md bg-cover bg-center relative overflow-hidden flex flex-col items-center" style={{ backgroundImage: "url('/images/stat-background.png')" }}>
                     <div className="absolute inset-0 bg-primary/10 backdrop-blur-[2px]"></div>
                     <div className="relative z-10 flex flex-col items-center">
                        <div className="w-16 h-16 rounded-full bg-[#050505] border-2 border-primary flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(1,87,190,0.4),inset_0_0_30px_rgba(1,87,190,0.6)] relative">
                           <Icon path={stat.icon} size={1} className="text-secondary" />
                        </div>
                        <p className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}<span className="text-secondary">{stat.suffix}</span></p>
                        <p className="text-sm text-neutral-200 font-semibold">{stat.label}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};
