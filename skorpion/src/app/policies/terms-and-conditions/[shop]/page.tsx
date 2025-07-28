import FixedUI from "@/components/FixedUI";
import TermsAndConditionHeader from "@/components/TermsAndConditionHeader";
import ShopTermsSection from "@/components/ShopTermsSection";
import Footer from "@/components/Footer";
import FirstSection from "@/components/FirstSection";

type Props = {
  params: {
    shop: string;
  };
};

export async function generateStaticParams() {
  return [
    { shop: "zoho" },
    { shop: "wipro" },
    { shop: "tcs" }
  ];
}

export default function ShopTermsPage({ params }: Props) {
  const { shop } = params;

  return (
    <main>
      <FirstSection />
      <FixedUI />
      <TermsAndConditionHeader />
      <ShopTermsSection shopName={shop} />
      <Footer />
    </main>
  );
}