"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { mdiStar } from "@mdi/js";
import Icon from "@mdi/react";
import Marquee from "react-fast-marquee";

export const Testimonials = () => {
  const reviews = [
    {
      name: "NGUYỄN HOÀNG NAM KHÁNH",
      role: "AI Developer",
      txt: "Tài khoản ChatGPT Plus tại Dollar Media rất ổn định, giúp mình tối ưu hóa quy trình coding hàng ngày. Hệ thống tự động nên nhận account siêu nhanh, support lại cực kỳ tận tâm.",
      img: "https://picsum.photos/seed/user1/100/100"
    },
    {
      name: "PHẠM TRẦN MINH ANH",
      role: "Content Creator",
      txt: "Dịch vụ nâng cấp CapCut Pro tại Dollar Media giúp mình edit video 4K mượt mà với đầy đủ hiệu ứng. Bảo hành 1 đổi 1 suốt thời gian sử dụng làm mình hoàn toàn yên tâm.",
      img: "https://picsum.photos/seed/user2/100/100"
    },
    {
      name: "LÊ NGUYỄN THIÊN KIM",
      role: "Data Analyst",
      txt: "Gemini Advanced hỗ trợ mình rất nhiều trong việc xử lý dữ liệu. Giao diện website Dollar Media dễ dùng, thanh toán xong là có quyền truy cập ngay, không phải chờ đợi lâu.",
      img: "https://picsum.photos/seed/user3/100/100"
    },
    {
      name: "ĐỖ PHAN GIA BẢO",
      role: "System Engineer",
      txt: "Dịch vụ VPN và Proxy tại Dollar Media rất chất lượng, giúp mình truy cập tài nguyên quốc tế ổn định. Giá thành rẻ hơn nhiều so với mua trực tiếp mà chất lượng không đổi.",
      img: "https://picsum.photos/seed/user4/100/100"
    },
    {
      name: "TRỊNH VÕ HOÀI AN",
      role: "Software Student",
      txt: "Mình đã mua Premium Key cho Windows và Office tại shop. Key kích hoạt chính chủ, dùng vĩnh viễn luôn. Dollar Media đúng là địa chỉ uy tín nhất cho anh em săn tool giá rẻ.",
      img: "https://picsum.photos/seed/user5/100/100"
    },
    {
      name: "VÕ HOÀNG PHƯƠNG NAM",
      role: "AI Researcher",
      txt: "Trải nghiệm Grok AI trên X qua Dollar Media rất thú vị. Tốc độ phản hồi nhanh, dữ liệu thời gian thực chính xác. Quy trình mua hàng cực kỳ chuyên nghiệp và bảo mật.",
      img: "https://picsum.photos/seed/user6/100/100"
    },
    {
      name: "LÝ THỊ MINH CHÂU",
      role: "Freelancer",
      txt: "Dollar Media thực sự là cứu cánh cho anh em làm tự do. Từ ChatGPT cho đến VPN đều chạy cực ngon, quan trọng nhất là khâu bảo hành chưa bao giờ làm mình thất vọng.",
      img: "https://picsum.photos/seed/user7/100/100"
    },
    {
      name: "DƯƠNG VĂN THÁI HÒA",
      role: "Project Manager",
      txt: "Đã sử dụng dịch vụ của Dollar Media hơn 1 năm nay. Chất lượng dịch vụ ngày càng nâng cấp, hệ thống tự động giúp việc mua hàng trở nên cực kỳ tiện lợi và nhanh chóng.",
      img: "https://picsum.photos/seed/user8/100/100"
    },
    {
      name: "LÂM PHAN HOÀNG YẾN",
      role: "Graphic Designer",
      txt: "Không đâu có giá Premium Key tốt và uy tín bằng Dollar Media. Mình đã giới thiệu cho rất nhiều đồng nghiệp và ai cũng khen cách làm việc chuyên nghiệp, nhanh gọn của shop.",
      img: "https://picsum.photos/seed/user9/100/100"
    }
  ];

  return (
    <section id="testimonials" className="py-16 relative overflow-hidden">
      <div className="max-w-8xl mx-auto px-4 sm:px-4 lg:px-8 mb-16">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-semibold uppercase tracking-tight mb-4 text-white">Đánh giá từ <span className="text-secondary">Khách hàng</span></h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">Những phản hồi chân thực từ cộng đồng người dùng tin tưởng hệ thống.</p>
        </div>
      </div>

      <Marquee speed={40} pauseOnHover={true} gradient={true} gradientColor="black" gradientWidth={100}>
        {reviews.map((rev, i) => (
          <Card key={i} className="bg-transparent border-none cyber-border transition-all clip-corner rounded-none mx-4 w-[350px]">
            <CardContent>
              <div className="flex text-secondary mb-4">
                {[1, 2, 3, 4, 5].map(star => <Icon key={star} path={mdiStar} size={0.8} />)}
              </div>
              <p className="text-neutral-200 text-sm leading-relaxed mb-4 line-clamp-4">&quot;{rev.txt}&quot;</p>
              <div className="flex items-center gap-3">
                <img src={rev.img} referrerPolicy="no-referrer" alt={rev.name} className="w-12 h-12 rounded-full border-2 border-secondary/70" />
                <div>
                  <h4 className="font-semibold text-neutral-200 capitalize text-sm mb-1">{rev.name}</h4>
                  <Badge variant="sky">{rev.role}</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </Marquee>
    </section>
  );
};
