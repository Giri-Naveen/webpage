'use client';
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import BlogPostHeader from "@/components/BlogPostHeader";
import BlogPostSection from "@/components/BlogPostSection";
import OtherBlogSection from "@/components/OtherBlogSection";
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
      <BlogPostHeader />
      <BlogPostSection />
      <OtherBlogSection />
      <Footer />
    </main>
  );
}