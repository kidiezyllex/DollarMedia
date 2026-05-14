"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const contactItems = [
  {
    id: "phone",
    label: "0846731111",
    icon: <Image src="/images/logo/Phone.png" alt="Phone" width={32} height={32} className="object-contain" />,
    href: "tel:0846731111",
    color: "var(--primary)",
  },
  {
    id: "email",
    label: "nguyenphduy10@gmail.com",
    icon: <Image src="/images/logo/Email.png" alt="Email" width={32} height={32} className="object-contain" />,
    href: "mailto:nguyenphduy10@gmail.com",
    color: "var(--primary)",
  },
  {
    id: "zalo-group-1",
    label: "Tham gia cộng đồng Zalo 1",
    icon: <Image src="/images/logo/Zalo.png" alt="Zalo Group 1" width={32} height={32} className="object-contain" />,
    href: "https://zalo.me/g/tsrsfm261",
    color: "var(--primary)",
  },
  {
    id: "zalo-group-2",
    label: "Tham gia cộng đồng Zalo 2",
    icon: <Image src="/images/logo/Zalo.png" alt="Zalo Group 2" width={32} height={32} className="object-contain" />,
    href: "https://zalo.me/g/jnlpze819",
    color: "var(--primary)",
  },
];

export const FloatingContact = () => {
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[100] flex flex-col items-end gap-1">
      {contactItems.map((item) => (
        <motion.a
          key={item.id}
          href={item.href}
          target="_blank"
          rel="noreferrer"
          className="group relative flex items-center justify-end w-12 h-12 bg-primary border-y border-l border-primary/30 hover:w-[264px] transition-all duration-300 overflow-hidden"
        >
          {/* Label (Visible on Hover) */}
          <div className="absolute right-10 opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap text-white text-sm font-medium pr-4">
            {item.label}
          </div>

          {/* Icon (Always Visible) */}
          <div className="absolute right-0 w-12 h-12 flex items-center justify-center z-10 bg-primary">
            <div className="w-7 h-7 flex items-center justify-center">
              {item.icon}
            </div>
          </div>
        </motion.a>
      ))}
    </div>
  );
};
