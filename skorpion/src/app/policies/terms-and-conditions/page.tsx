'use client';
import { useEffect } from "react";
import React from 'react';
import FixedUI from "@/components/FixedUI";
import TermsAndConditionHeader from "@/components/TermsAndConditionHeader";
import TermsAndConditions from "@/components/Terms&Conditions";
import Footer from "@/components/Footer";
import FirstSection from "@/components/FirstSection";

export default function TermsAndConditionPage() {
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
      <TermsAndConditionHeader />
      <TermsAndConditions />
      <Footer />
    </main>
  );
};
