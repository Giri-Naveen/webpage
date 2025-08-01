'use client';
import { useEffect } from "react";
import AboutUsHeaderSection from "@/components/AboutUsHeaderSection";
import OurMissionSection from "@/components/OurMissionSection";
import OurVisionSection from "@/components/OurVisionSection";
import PortolioSection from "@/components/PortfolioSection";
import CollabSection from "@/components/CollabSection";
import Footer from "@/components/Footer";
import FixedUI from "@/components/FixedUI";
import FirstSection from "@/components/FirstSection";

export default function AboutUs() {
  useEffect(() => {
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual';
      }
      window.scrollTo(0, 0);
    }, []);

  return (
    <main>
      <FirstSection />
      <FixedUI />
      <AboutUsHeaderSection />
      <OurMissionSection />
      <OurVisionSection />
      <PortolioSection />
      <CollabSection />
      <Footer />
    </main>
  );
}
