'use client';
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import BlogTwoImage from "@/components/BlogTwoImage";
import BlogTwoContent from "@/components/BlogTwoContent";
import BlogTwoOther from "@/components/BlogTwoOther";
import Footer from "@/components/Footer";

export default function BlogTwo() {
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <Navigation />
      <BlogTwoImage />
      <BlogTwoContent />
      <BlogTwoOther />
      <Footer />
    </main>
  );
}