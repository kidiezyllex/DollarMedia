"use client";

import { AboutAndResults } from "@/components/Landing/AboutAndResults";
import { AutomationShowcase } from "@/components/Landing/AutomationShowcase";
import { DemoSection } from "@/components/Landing/DemoSection";
import { HeroSection } from "@/components/Landing/HeroSection";

export default function LandingPage() {
  return (
    <>
      <main className="relative z-10">
        <HeroSection />
        <DemoSection />
        <AutomationShowcase />
        <AboutAndResults />
      </main>
    </>
  );
}
