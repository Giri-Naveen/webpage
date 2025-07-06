'use client';
import { useEffect } from "react";
import Hero from "@/components/Hero";
import FirstSection from "@/components/FirstSection";
import WelcomeSection from "@/components/WelcomeSection";
import BusinessSection from "@/components/BusinessSection";
import TeamSection from "@/components/TeamSection";
import PublicationSection from "@/components/PublicationSection";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import FixedUI from '@/components/FixedUI';

export default function Home() {
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
      <Hero />
      <WelcomeSection />
      <BusinessSection />      
      <TeamSection />
      <Testimonials />
      <PublicationSection />
      <Footer />
    </main>
  );
}