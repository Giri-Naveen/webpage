'use client';
import { useEffect } from "react";
import ServiceHeaderSection from "@/components/ServiceHeaderSection";
import OurServiceSection from "@/components/OurServiceSection";
import ServiceContactSection from "@/components/ServiceContactSection";
import Footer from "@/components/Footer";
import FixedUI from "@/components/FixedUI";

export default function OurProducts() {
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <FixedUI /> 
      <ServiceHeaderSection />
      <OurServiceSection />
      <ServiceContactSection />
      <Footer />
    </main>
  );
}