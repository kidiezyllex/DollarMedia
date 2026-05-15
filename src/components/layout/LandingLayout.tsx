"use client";

import { Footer } from "@/components/Landing/Footer";
import { usePathname } from "next/navigation";
import React from "react";

export const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");

  if (isAdmin) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-mainBackgroundV1 text-white selection:bg-primary/30 selection:text-secondary overflow-x-hidden relative flex flex-col">
      {/* Background Overlays */}
      <div className="scanline"></div>
      {/* <TopHeader /> */}
      {/* <Header /> */}
      {/* <FloatingContact /> */}
      <main className="relative z-10 flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};
