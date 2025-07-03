'use client';
import { useEffect } from "react";
import React from 'react';
import FirstSection from "@/components/FirstSection";
import FixedUI from "@/components/FixedUI";
import RefundPolicyHeader from "@/components/RefundPolicyHeader";
import RefundPolicy from "@/components/RefundPolicy";
import Footer from "@/components/Footer";


export default function RefundPolicyPage() {
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
      <RefundPolicyHeader />
      <RefundPolicy />
      <Footer />
    </main>
  );
};
