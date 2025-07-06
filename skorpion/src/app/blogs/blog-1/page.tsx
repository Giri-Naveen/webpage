'use client';
import { useEffect } from "react";
import BlogOneHeader from "@/components/BlogOneHeader";
import BlogOneImageSection from "@/components/BlogOneImageSection";
import BlogOneText from "@/components/BlogOneText";
import Footer from "@/components/Footer";
import FixedUI from "@/components/FixedUI";
import FirstSection from "@/components/FirstSection";

export default function BlogOne() {
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
      <BlogOneHeader />
      <BlogOneImageSection />
      <BlogOneText />
      <Footer />
    </main>
  );
}
