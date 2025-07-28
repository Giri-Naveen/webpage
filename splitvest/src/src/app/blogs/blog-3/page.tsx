'use client';
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import BlogThreeImage from "@/components/BlogThreeImage";
import BlogThreeContent from "@/components/BlogThreeContent";
import BlogThreeOther from "@/components/BlogThreeOther";
import Footer from "@/components/Footer";

export default function BlogThree() {
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <Navigation />
      <BlogThreeImage />
      <BlogThreeContent />
      <BlogThreeOther />
      <Footer />
    </main>
  );
}