'use client';
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import PricingSection from "@/components/PricingSection";
import SecondPricingSection from "@/components/SecondPricingSection";
import Footer from "@/components/Footer";
import NftSection from "@/components/NftSection";

export default function Home() {
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <Navigation />
      <PricingSection />
      <SecondPricingSection />
      <Footer />
    </main>
  );
}