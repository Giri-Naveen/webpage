'use client';
import { useEffect } from "react";
import ContactSection from "@/components/ContactSection"; 
import MapSection from "@/components/MapSection";
import MessageSection from "@/components/MessageSection";
import Footer from "@/components/Footer";
import FixedUI from "@/components/FixedUI";
import FirstSection from "@/components/FirstSection";

export default function ContactUs() {
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
      <ContactSection />
      <MapSection />
      <MessageSection />
      <Footer />
    </main>
  );
}
