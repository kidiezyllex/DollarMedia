"use client";

import React from 'react';
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface GoldTextProps {
  children: React.ReactNode;
  className?: string;
  absolute?: boolean;
}

const GoldText: React.FC<GoldTextProps> = ({ children, className, absolute = true }) => {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={cn(
        absolute && "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
        "font-['Times_New_Roman',serif] tracking-[5px] text-[40px] md:text-[150px] font-bold",
        "bg-clip-text text-transparent select-none whitespace-nowrap",
        className
      )}
      style={{
        backgroundImage: 'linear-gradient(to right, #462523 0%, #cb9b51 22%, #f6e27a 45%, #f6f2c0 50%, #f6e27a 55%, #cb9b51 78%, #462523 100%)',
        WebkitBackgroundClip: 'text',
      }}
    >
      {children}
    </motion.span>
  );
};

export default GoldText;

