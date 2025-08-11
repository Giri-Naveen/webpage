'use client';
import { useSearchParams } from 'next/navigation';
import FixedUI from "@/components/FixedUI";
import TermsAndConditionHeader from "@/components/TermsAndConditionHeader";
import ShopTerms from "@/components/ShopTermsSection";
import Footer from "@/components/Footer";
import FirstSection from "@/components/FirstSection";

export default function ShopTermsPage() {
  const searchParams = useSearchParams();
  const shopName = searchParams.get('shopName') || '';

  return (
    <main>
      <FirstSection />
      <FixedUI />
      <TermsAndConditionHeader />
      <ShopTerms shopName={shopName} />
      <Footer />
    </main>
  );
}
