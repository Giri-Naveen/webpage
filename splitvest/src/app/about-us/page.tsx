'use client';
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import BlogSection from "@/components/BlogSection";

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
      <BlogSection />
    </main>
  );
}