"use client";

import GoldText from "@/components/ui/GoldText";
import Link from "next/link";

export const TopHeader = () => {
  return (
    <div className="text-white h-9 hidden sm:flex md:flex lg:flex xl:flex items-center fixed top-0 w-full z-[60]">
      <div className="max-w-8xl mx-auto w-full px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 flex justify-between items-center text-[10px] sm:text-[11px] md:text-xs lg:text-sm xl:text-sm font-medium">
        <Link href="/" className="flex items-center gap-2">
          <GoldText absolute={false} className="text-xl sm:text-2xl md:text-3xl !tracking-widest">
            Fury-core
          </GoldText>
        </Link>
      </div>
    </div>
  );
};
