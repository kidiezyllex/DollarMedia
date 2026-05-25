"use client";

import { cn } from "@/lib/utils";
import { HTMLMotionProps, motion } from "framer-motion";
import Image from "next/image";
import React from "react";

interface PremiumCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  backgroundPath?: string;
}

const PremiumCard: React.FC<PremiumCardProps> = ({
  children,
  className,
  innerClassName,
  backgroundPath = "",
  ...props
}) => {
  return (
    <motion.div
      {...props}
      className={cn(
        "flex flex-col items-stretch gap-3 sm:gap-4 rounded-3xl border-2 border-accent/70 hover:border-accent shadow-2xl group transition-all duration-500 cursor-pointer relative overflow-hidden",
        className
      )}
    >
      {/* Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#A30101] to-[#740501] -z-20" />
      <Image
        src={backgroundPath}
        alt="background pattern"
        fill
        loading="lazy"
        className="object-cover opacity-70 -z-10 pointer-events-none mix-blend-soft-light"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 80vw"
      />

      {/* Border flares */}
      <div className="absolute top-0 left-2 w-24 h-[1px] bg-gradient-to-r from-transparent via-secondary to-transparent blur-[1px] z-20 opacity-80" />
      <div className="absolute top-[-2px] left-2 w-1.5 h-1.5 bg-secondary/50 rounded-full shadow-[0_0_15px_5px_rgba(255,255,255,0.8),0_0_30px_10px_rgba(255,255,255,0.2)] z-20" />

      <div className="absolute bottom-0 right-2 w-28 h-[1px] bg-gradient-to-r from-transparent via-secondary to-transparent blur-[1px] z-20 opacity-80" />
      <div className="absolute bottom-[-2px] right-2 w-1.5 h-1.5 bg-secondary/50 rounded-full shadow-[0_0_15px_5px_rgba(255,255,255,0.8),0_0_30px_10px_rgba(255,255,255,0.2)] z-20" />

      <div className={cn("relative z-10 w-full h-full", innerClassName)}>
        {children}
      </div>
    </motion.div>
  );
};

export default PremiumCard;
