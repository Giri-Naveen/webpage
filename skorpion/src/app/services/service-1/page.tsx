'use client';
import { useEffect } from "react";
import ServiceOneHeader from "@/components/ServiceOneHeader";
import ServiceOneAbout from "@/components/ServiceOneAbout";
import ServiceOneWork from "@/components/ServiceOneWork";
import ServiceOnePricing from "@/components/ServiveOnePricing";
import ServiceOneOthers from "@/components/ServiceOneOthers";
import Footer from "@/components/Footer";
import FixedUI from "@/components/FixedUI";

export default function ServiceOne() {
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <FixedUI /> 
      <ServiceOneHeader />
      <ServiceOneAbout />
      <ServiceOneWork />
      <ServiceOnePricing />
      <ServiceOneOthers />
      <Footer />
    </main>
  );
}