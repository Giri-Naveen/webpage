'use client';
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import RiseOfLegends from "@/components/RiseOfLegends";
import HowToMint from "@/components/HowToMint";
import CollectionSection from "@/components/CollectionSection";
import Roadmap from "@/components/Roadmap";
import LatestArticles from "@/components/LatestArticles";
import ContactSection from "@/components/ContactSection";

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
      <Hero />
      <StatsSection />
      <RiseOfLegends />
      <HowToMint />
      <CollectionSection />
      <Roadmap />
      <LatestArticles />
      <ContactSection />
    </main>
  );
}