"use client";

import { mdiCheckDecagram, mdiClose } from "@mdi/js";
import Icon from "@mdi/react";
import { useEffect, useState } from "react";

const MOCK_SALES = [
  { name: "Hoàng Tôn Phúc Lâm", product: "Gói Diamond - AI Generate Tool" },
  { name: "Bùi Ngọc Quỳnh Như", product: "Hệ thống AI Automation 24/7" },
  { name: "Đinh Công Hữu Phước", product: "Gói Pro - Tool AI Video" },
  { name: "Trương Thảo Minh Anh", product: "Tài khoản YouTube Premium 1 năm" },
  { name: "Lý Trần Tường Vy", product: "Gói Silver - AI Generate Tool" },
  { name: "Ngô Đặng Hoàng Long", product: "Tài khoản ChatGPT Plus Private" },
  { name: "Vương Nhã Uyên Thi", product: "Gói gia hạn YouTube Premium" },
  { name: "Dương Minh Quốc Bảo", product: "Hệ thống AI Automation Hạ tầng" },
  { name: "Phan Nguyễn Tú Uyên", product: "Gói Master AI Video" },
  { name: "Đỗ Lê Xuân Quỳnh", product: "Gói Diamond - AI Generate Tool" },
  { name: "Thái Việt Tiến Dũng", product: "Tài khoản Gemini Advanced" },
  { name: "Nguyễn Đăng Hải Nam", product: "Gói Pro - Tool AI Video" },
  { name: "Trần Phương Nhật Tiến", product: "Hệ thống AI Automation 24/7" },
  { name: "Lê Phạm Khả Hân", product: "Gói gia hạn YouTube Premium" },
  { name: "Hoàng Lê Gia Huy", product: "Tài khoản ChatGPT Plus Private" },
  { name: "Phạm Đặng Gia Hân", product: "Gói Master AI Video" },
  { name: "Nguyễn Tôn Quốc Khánh", product: "Gói Silver - AI Generate Tool" },
  { name: "Bùi Thị Tuyết Mai", product: "Hệ thống AI Automation Hạ tầng" },
  { name: "Vũ Nguyễn Thanh Hà", product: "Tài khoản YouTube Premium 1 năm" },
  { name: "Trần Cảnh Thiên Bảo", product: "Gói Diamond - AI Generate Tool" }
];

const getRandomTime = () => {
  const times = ["Vừa xong", "1 phút trước", "2 phút trước", "3 phút trước", "5 phút trước", "7 phút trước", "10 phút trước", "12 phút trước", "15 phút trước"];
  return times[Math.floor(Math.random() * times.length)];
};

export function SalesPopup() {
  const [currentSale, setCurrentSale] = useState({ ...MOCK_SALES[0], time: "Vừa xong" });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let isMounted = true;
    let hideTimeout: NodeJS.Timeout;
    let nextShowTimeout: NodeJS.Timeout;

    const scheduleNext = () => {
      if (!isMounted) return;
      const nextDelay = 3000; // 3s delay between popups
      nextShowTimeout = setTimeout(showSale, nextDelay);
    };

    const showSale = () => {
      if (!isMounted) return;
      const randomSale = MOCK_SALES[Math.floor(Math.random() * MOCK_SALES.length)];
      setCurrentSale({ ...randomSale, time: getRandomTime() } as any);
      setIsVisible(true);

      hideTimeout = setTimeout(() => {
        if (!isMounted) return;
        setIsVisible(false);
        scheduleNext();
      }, 3000); // Show for 3 seconds
    };

    // Initial delay before showing first popup
    nextShowTimeout = setTimeout(showSale, 3000);

    return () => {
      isMounted = false;
      clearTimeout(hideTimeout);
      clearTimeout(nextShowTimeout);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-4 left-4 z-[100] max-w-[320px] bg-[#0a0a0a] border border-neutral-800 rounded-lg shadow-2xl p-3 flex items-start gap-3 transition-all duration-500 ease-in-out ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0 pointer-events-none"
        }`}
    >
      <div className="flex-shrink-0 mt-0.5">
        <Icon path={mdiCheckDecagram} size={1} className="text-[#10B981]" />
      </div>
      <div className="flex-1">
        <div className="text-sm">
          <span className="font-semibold text-white">{currentSale.name}</span>
          <span className="text-neutral-400"> đã mua </span>
        </div>
        <div className="text-sm font-medium text-secondary mt-0.5 leading-tight">
          {currentSale.product}
        </div>
        <div className="text-sm italic text-neutral-500 mt-1">
          {currentSale.time}
        </div>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="text-neutral-500 hover:text-white transition-colors flex-shrink-0"
      >
        <Icon path={mdiClose} size={0.6} />
      </button>
    </div>
  );
}
