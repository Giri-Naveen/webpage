'use client';
import { useEffect } from "react";
import React from 'react';
import FirstSection from "@/components/FirstSection";
import FixedUI from "@/components/FixedUI";
import PaymentPolicyHeader from "@/components/PaymentPolicyHeader";
import PaymentPolicy from "@/components/PaymentPolicy";
import Footer from "@/components/Footer";


export default function PaymentPolicyPage() {
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
      <PaymentPolicyHeader />
      <PaymentPolicy />
      <Footer />
    </main>
  );
};
