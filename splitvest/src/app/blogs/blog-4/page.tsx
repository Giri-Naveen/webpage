'use client';
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import BlogFourImage from "@/components/BlogFourImage";
import BlogFourContent from "@/components/BlogFourContent";
import BlogFourOther from "@/components/BlogFourOther";
import Footer from "@/components/Footer";

export default function BlogFour() {
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <Navigation />
      <BlogFourImage />
      <BlogFourContent />
      <BlogFourOther />
      <Footer />
    </main>
  );
}