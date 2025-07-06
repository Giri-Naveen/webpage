'use client';
import { useEffect } from "react";
import BlogTwoHeader from "@/components/BlogTwoHeader";
import BlogTwoImageSection from "@/components/BlogTwoImageSection";
import BlogTwoText from "@/components/BlogTwoText";
import Footer from "@/components/Footer";
import FixedUI from "@/components/FixedUI";
import FirstSection from "@/components/FirstSection";

export default function BlogTwo() {
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
      <BlogTwoHeader />
      <BlogTwoImageSection />
      <BlogTwoText />
      <Footer />
    </main>
  );
}
