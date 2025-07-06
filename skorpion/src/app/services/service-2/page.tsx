'use client';
import { useEffect } from "react";
import ServiceTwoHeader from "@/components/ServiceTwoHeader";
import ServiceTwoAbout from "@/components/ServiceTwoAbout";
import ServiceTwoWork from "@/components/ServiceTwoWork";
import ServiceTwoPricing from "@/components/ServiceTwoPricing";
import ServiceTwoOthers from "@/components/ServiceTwoOthers";
import Footer from "@/components/Footer";
import FixedUI from "@/components/FixedUI";
import FirstSection from "@/components/FirstSection";

export default function ServiceTwo() {
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <FixedUI />
      <FirstSection />
      <ServiceTwoHeader />
      <ServiceTwoAbout />
      <ServiceTwoWork />
      <ServiceTwoPricing />
      <ServiceTwoOthers />
      <Footer />
    </main>
  );
}