"use client";

import { AboutAndResults } from "@/components/Landing/AboutAndResults";
import { AIGenerateToolSection } from "@/components/Landing/AIGenerateToolSection";
import { AutomationShowcase } from "@/components/Landing/AutomationShowcase";
import { HeroSection } from "@/components/Landing/HeroSection";
import { RealDemoSection } from "@/components/Landing/RealDemoSection";
import { YouAreCurrentlySection } from "@/components/Landing/YouAreCurrentlySection";
import Image from "next/image";

export default function LandingPage() {
  return (
    <>
      <main className="relative z-10">
        <HeroSection />
        <RealDemoSection />
        <Image
          src="/images/linefooter.png"
          alt="line decoration"
          width={1920}
          height={10}
          className="w-full h-auto "
        />
        <YouAreCurrentlySection />
        <Image
          src="/images/linefooter.png"
          alt="line decoration"
          width={1920}
          height={10}
          className="w-full h-auto "
        />
        <AIGenerateToolSection />
        <Image
          src="/images/linefooter.png"
          alt="line decoration"
          width={1920}
          height={10}
          className="w-full h-auto "
        />
        <AutomationShowcase />
        <AboutAndResults />
      </main>
    </>
  );
}
