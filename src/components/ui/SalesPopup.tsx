"use client";

import { mdiCheckDecagram, mdiClose } from "@mdi/js";
import Icon from "@mdi/react";
import { useEffect, useState } from "react";

const MOCK_SALES = [
  { name: "Hoàng Tôn Phúc Lâm", product: "Hệ thống AI Automation (Trọn đời)" },
  { name: "Bùi Ngọc Quỳnh Như", product: "Gói Dollar Media AI Tool - 1 Năm" },
  { name: "Đinh Công Hữu Phước", product: "Setup Hệ thống Kênh YouTube AI" },
  { name: "Trương Thảo Minh Anh", product: "Tài khoản YouTube Premium (Gia hạn)" },
  { name: "Lý Trần Tường Vy", product: "Gói Tool AI Video (Vĩnh viễn)" },
  { name: "Ngô Đặng Hoàng Long", product: "Setup Hệ thống TikTok Automation" },
  { name: "Vương Nhã Uyên Thi", product: "Khóa học Master Content AI" },
  { name: "Dương Minh Quốc Bảo", product: "Hệ thống AI Automation (1 Năm)" },
  { name: "Phan Nguyễn Tú Uyên", product: "Gói Dollar Media AI Tool - Trọn đời" },
  { name: "Đỗ Lê Xuân Quỳnh", product: "Tài khoản ChatGPT Plus (Shared)" },
  { name: "Thái Việt Tiến Dũng", product: "Hệ thống AI Automation (Trọn đời)" },
  { name: "Nguyễn Đăng Hải Nam", product: "Gói Dollar Media AI Tool - 6 Tháng" },
  { name: "Trần Phương Nhật Tiến", product: "Setup Hệ thống Kênh YouTube AI" },
  { name: "Lê Phạm Khả Hân", product: "Khóa học Master Content AI" },
  { name: "Hoàng Lê Gia Huy", product: "Hệ thống AI Automation (1 Năm)" },
  { name: "Phạm Đặng Gia Hân", product: "Gói Tool AI Video (Vĩnh viễn)" },
  { name: "Nguyễn Tôn Quốc Khánh", product: "Tài khoản YouTube Premium (1 Năm)" },
  { name: "Bùi Thị Tuyết Mai", product: "Gói Dollar Media AI Tool - 1 Năm" },
  { name: "Vũ Nguyễn Thanh Hà", product: "Hệ thống AI Automation (Trọn đời)" },
  { name: "Trần Cảnh Thiên Bảo", product: "Setup Hệ thống TikTok Automation" }
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
        <div className="text-sm italic text-neutral-400 mt-1">
          {currentSale.time}
        </div>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="text-neutral-400 hover:text-white transition-colors flex-shrink-0"
      >
        <Icon path={mdiClose} size={0.6} />
      </button>
    </div>
  );
}
