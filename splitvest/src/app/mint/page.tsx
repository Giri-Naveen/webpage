'use client';
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import MintHeader from "@/components/MintHeader";
import MintSection from "@/components/MintSection";
import Footer from "@/components/Footer";

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
      <MintHeader />
      <MintSection />
      <Footer />
    </main>
  );
}