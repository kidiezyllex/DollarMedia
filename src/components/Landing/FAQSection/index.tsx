"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SHOP_INFO } from "@/constants";

export const FAQSection = () => {
  return (
    <section id="faq" className="py-16 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-semibold uppercase tracking-tight mb-4 text-neutral-200">Câu hỏi <span className="text-secondary">Thường gặp</span></h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">Giải đáp các thắc mắc phổ biến của người dùng về dịch vụ và chế độ bảo hành.</p>
        </div>

        <Accordion className="w-full space-y-4">
          <AccordionItem value="item-1" className="border-none cyber-border clip-corner bg-[#0a0a0a] px-4 rounded-none">
            <AccordionTrigger className="text-neutral-200 hover:text-secondary hover:no-underline font-bold uppercase text-sm">
              Bảo hành sản phẩm như thế nào?
            </AccordionTrigger>
            <AccordionContent className="text-neutral-400">
              {SHOP_INFO.name} cam kết bảo hành 1-đổi-1 cho tất cả các sản phẩm lỗi thuộc về hệ thống trong suốt thời gian sử dụng đã đăng ký (1 tháng, 6 tháng, 1 năm).
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border-none cyber-border clip-corner bg-[#0a0a0a] px-4 rounded-none">
            <AccordionTrigger className="text-neutral-200 hover:text-secondary hover:no-underline font-bold uppercase text-sm">
              Thời gian giao dịch bao lâu?
            </AccordionTrigger>
            <AccordionContent className="text-neutral-400">
              Sau khi xác nhận thanh toán thành công, hệ thống Admin sẽ tiến hành xử lý và bàn giao tài khoản/Key cho bạn trong vòng từ 5 - 15 phút.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border-none cyber-border clip-corner bg-[#0a0a0a] px-4 rounded-none">
            <AccordionTrigger className="text-neutral-200 hover:text-secondary hover:no-underline font-bold uppercase text-sm">
              Làm sao để thanh toán?
            </AccordionTrigger>
            <AccordionContent className="text-neutral-400">
              Hệ thống hỗ trợ thanh toán tự động qua chuyển khoản ngân hàng (Vietcombank, MB Bank...) và các ví điện tử phổ biến. Sau khi thanh toán, hệ thống sẽ tự động xử lý và gửi thông tin tài khoản cho bạn ngay lập tức.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="border-none cyber-border clip-corner bg-[#0a0a0a] px-4 rounded-none">
            <AccordionTrigger className="text-neutral-200 hover:text-secondary hover:no-underline font-bold uppercase text-sm">
              Tôi có được hỗ trợ cài đặt không?
            </AccordionTrigger>
            <AccordionContent className="text-neutral-400">
              Đội ngũ kỹ thuật của {SHOP_INFO.name} sẵn sàng hỗ trợ bạn 24/7 qua Zalo hoặc UltraView nếu bạn gặp bất kỳ khó khăn nào trong quá trình kích hoạt và sử dụng dịch vụ.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="border-none cyber-border clip-corner bg-[#0a0a0a] px-4 rounded-none">
            <AccordionTrigger className="text-neutral-200 hover:text-secondary hover:no-underline font-bold uppercase text-sm">
              Có thể gia hạn trên tài khoản chính chủ không?
            </AccordionTrigger>
            <AccordionContent className="text-neutral-400">
              Đa số các dịch vụ như CapCut, Canva, Adobe, hay Microsoft 365 đều hỗ trợ nâng cấp trực tiếp trên email cá nhân của bạn. Một số dịch vụ đặc thù sẽ được cung cấp dưới dạng tài khoản dùng riêng tùy theo gói bạn chọn.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6" className="border-none cyber-border clip-corner bg-[#0a0a0a] px-4 rounded-none">
            <AccordionTrigger className="text-neutral-200 hover:text-secondary hover:no-underline font-bold uppercase text-sm">
              Tại sao mức giá lại rẻ hơn mua trực tiếp?
            </AccordionTrigger>
            <AccordionContent className="text-neutral-400">
              Chúng tôi tận dụng các gói ưu đãi dành cho doanh nghiệp, gói gia đình hoặc các khu vực có mức giá ưu tiên để mang đến cho khách hàng Việt Nam dịch vụ cao cấp với chi phí tối ưu nhất mà vẫn đảm bảo tính chính chủ.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7" className="border-none cyber-border clip-corner bg-[#0a0a0a] px-4 rounded-none">
            <AccordionTrigger className="text-neutral-200 hover:text-secondary hover:no-underline font-bold uppercase text-sm">
              Thông tin của tôi có được bảo mật không?
            </AccordionTrigger>
            <AccordionContent className="text-neutral-400">
              Tuyệt đối an toàn. {SHOP_INFO.name} cam kết không can thiệp vào dữ liệu cá nhân của khách hàng. Mọi thông tin đăng nhập và dữ liệu trong tài khoản đều thuộc quyền sở hữu và quản lý duy nhất của bạn.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};
