"use client";

import { cn } from "@/lib/utils";
import { mdiFlare } from "@mdi/js";
import Icon from "@mdi/react";
import React from "react";
import GoldText from "./GoldText";

interface PremiumHeaderProps {
  children: React.ReactNode;
  className?: string;
  textClassName?: string;
  as?: React.ElementType;
}

const PremiumHeader: React.FC<PremiumHeaderProps> = ({
  children,
  className,
  textClassName,
  as = "h2",
}) => {
  return (
    <div className={cn("flex flex-col items-center my-6 md:my-8 text-center", className)}>
      <div className="flex items-center gap-3 sm:gap-4 w-full max-w-3xl">
        <div className="h-[3px] flex-1 bg-gradient-to-r from-transparent via-secondary to-secondary rounded-r-full"></div>
        <Icon path={mdiFlare} size={1} className="text-secondary" />
        <GoldText
          absolute={false}
          as={as}
          className={cn("text-4xl md:!text-5xl !tracking-normal !leading-normal", textClassName)}
        >
          {children}
        </GoldText>
        <Icon path={mdiFlare} size={1} className="text-secondary" />
        <div className="h-[3px] flex-1 bg-gradient-to-l from-transparent via-secondary to-secondary rounded-l-full"></div>
      </div>
    </div>
  );
};

export default PremiumHeader;
