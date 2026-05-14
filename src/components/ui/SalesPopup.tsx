"use client";

import { mdiCheckDecagram, mdiClose } from "@mdi/js";
import Icon from "@mdi/react";
import { useEffect, useState } from "react";

const MOCK_SALES = [
  { name: "Nguyễn Trần Hải Đăng", product: "Tài khoản ChatGPT Plus 1 tháng" },
  { name: "Phạm Lê Mai Phương", product: "Key Windows 11 Pro Bản Quyền" },
  { name: "Trần Nguyễn Bảo Ngọc", product: "Tài khoản Gemini Advanced" },
  { name: "Lê Hoàng Tuấn Anh", product: "Key Office 365 Bản Quyền" },
  { name: "Vũ Đặng Phương Linh", product: "Tài khoản Netflix Premium 1 tháng" },
  { name: "Hoàng Tôn Phúc Lâm", product: "Tài khoản YouTube Premium" },
  { name: "Bùi Ngọc Quỳnh Như", product: "Tài khoản Canva Pro" },
  { name: "Đinh Công Hữu Phước", product: "Tài khoản Spotify Premium" },
  { name: "Trương Thảo Minh Anh", product: "Key Kaspersky Internet Security" },
  { name: "Lý Trần Tường Vy", product: "Tài khoản Zoom Pro 1 tháng" },
  { name: "Ngô Đặng Hoàng Long", product: "Tài khoản ChatGPT Plus 1 tháng" },
  { name: "Vương Nhã Uyên Thi", product: "Gói gia hạn YouTube Premium" },
  { name: "Dương Minh Quốc Bảo", product: "Key Windows 10 Pro Bản Quyền" },
  { name: "Phan Nguyễn Tú Uyên", product: "Tài khoản Grammarly Premium" },
  { name: "Đỗ Lê Xuân Quỳnh", product: "Tài khoản ChatGPT Plus 3 tháng" },
  { name: "Thái Việt Tiến Dũng", product: "Key Office 2021 Professional" },
  { name: "Nguyễn Đăng Hải Nam", product: "Tài khoản Adobe Creative Cloud" },
  { name: "Trần Phương Nhật Tiến", product: "Tài khoản Netflix Premium 3 tháng" },
  { name: "Lê Phạm Khả Hân", product: "Key Windows 11 Pro Bản Quyền" },
  { name: "Hoàng Lê Gia Huy", product: "Tài khoản Spotify Premium" },
  { name: "Phạm Đặng Gia Hân", product: "Tài khoản Gemini Advanced" },
  { name: "Nguyễn Tôn Quốc Khánh", product: "Tài khoản ChatGPT Plus 1 tháng" },
  { name: "Bùi Thị Tuyết Mai", product: "Tài khoản Canva Pro" },
  { name: "Vũ Nguyễn Thanh Hà", product: "Tài khoản YouTube Premium" },
  { name: "Trần Cảnh Thiên Bảo", product: "Key Office 365 Bản Quyền" }
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
