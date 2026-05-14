"use client";

import { cn } from "@/lib/utils";
import React from 'react';

interface GoldButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

const GoldButton: React.FC<GoldButtonProps> = ({
  children = "GO PREMIUM",
  className,
  ...props
}) => {
  return (
    <button
      className={cn(
        "relative z-[2] flex items-center justify-center gap-2",
        "w-[200px] h-[40px] rounded-[40px]",
        "bg-[linear-gradient(to_right,#bf953f,#fcf6ba,#b38728,#fbf5b7,#aa771c)]",
        "bg-[length:200%_200%] shadow-[5px_5px_10px_rgba(0,0,0,0.144)]",
        "text-[0.8em] font-semibold text-[#796703]",
        "cursor-pointer transition-all duration-[3000ms] ease-in-out",
        "hover:scale-95 hover:bg-right hover:animate-gradient",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default GoldButton;
