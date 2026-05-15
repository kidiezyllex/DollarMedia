"use client";

import { AboutAndResults } from "@/components/Landing/AboutAndResults";
import { AIGenerateToolSection } from "@/components/Landing/AIGenerateToolSection";
import { AutomationShowcase } from "@/components/Landing/AutomationShowcase";
import { CTASection } from "@/components/Landing/CTASection";
import { HeroSection } from "@/components/Landing/HeroSection";
import { RealDemoSection } from "@/components/Landing/RealDemoSection";
import { YouAreCurrentlySection } from "@/components/Landing/YouAreCurrentlySection";

export default function LandingPage() {
  return (
    <>
      <main className="relative z-10">
        <HeroSection />
        <RealDemoSection />
        <YouAreCurrentlySection />
        <AIGenerateToolSection />
        <AutomationShowcase />
        <AboutAndResults />
        <CTASection />
      </main>
    </>
  );
}
