'use client';
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import ComingSoonSection from "@/components/ComingSoonSection"
import Footer from "@/components/Footer";

export default function ComingSoon() {
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <Navigation />
      <ComingSoonSection />
      <Footer />
    </main>
  );
}