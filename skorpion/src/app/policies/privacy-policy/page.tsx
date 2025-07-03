'use client';
import { useEffect } from "react";
import React from 'react';
import FirstSection from "@/components/FirstSection";
import FixedUI from "@/components/FixedUI";
import PrivacyPolicyHeader from "@/components/PrivacyPolicyHeader";
import PrivacyPolicy from "@/components/PrivacyPolicy";
import Footer from "@/components/Footer";


export default function PrivacyPolicyPage() {
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
      <PrivacyPolicyHeader />
      <PrivacyPolicy />
      <Footer />
    </main>
  );
};
