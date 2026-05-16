"use client";

import { AboutAndResults } from "@/components/Landing/AboutAndResults";
import { AIGenerateTool } from "@/components/Landing/AIGenerateTool";
import { AutomationShowcase } from "@/components/Landing/AutomationShowcase";
import { CTA } from "@/components/Landing/CTA";
import { Hero } from "@/components/Landing/Hero";
import { RealDemo } from "@/components/Landing/RealDemo";
import { YouAreCurrently } from "@/components/Landing/YouAreCurrently";

export default function LandingPage() {
  return (
    <>
      <main className="relative z-10">
        <Hero />
        <RealDemo />
        <YouAreCurrently />
        <AIGenerateTool />
        <AutomationShowcase />
        <AboutAndResults />
        <CTA />
      </main>
    </>
  );
}
