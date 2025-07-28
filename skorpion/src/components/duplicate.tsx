'use client';
import React, { useEffect, useState } from 'react';
import ScrollReveal from '@/components/ScrollReveal';

type CompanyData = {
  companyName: string;
  websiteUrl: string;
  email: string;
  phoneNumber: string;
  logoUrl?: string;
};

type CompanyTermsSectionProps = {
  companyName: string;
};

const CompanyTermsSection = ({ companyName }: CompanyTermsSectionProps) => {
  const [companyData, setCompanyData] = useState<CompanyData | null>(null);

  useEffect(() => {
  if (companyName) {
    // Simulate API data if real API isn't available
    setCompanyData({
      companyName,
      websiteUrl: `https://www.${companyName}.com`,
      email: `info@${companyName}.com`,
      phoneNumber: '+91-1234567890',
      logoUrl: '',
    });
  }
}, [companyName]);


  if (!companyData) return <p>Loading...</p>;

  const { companyName: name, websiteUrl } = companyData;

  return (
    <section
      data-section
      id="next-section"
      className="bg-gray-100 flex justify-center items-start pt-12 pb-16 lg:py-20 px-8 lg:px-24 xl:px-40"
    >
      <div className="max-w-7xl text-black text-left md:text-justify space-y-4 text-[15px] md:text-[18px] leading-relaxed">
        <ScrollReveal>
          <p>Welcome to {name}!</p>
        </ScrollReveal>

        <ScrollReveal>
          <p>
            These terms and conditions outline the rules and regulations for the use of {name}'s Website,
            located at <a href={websiteUrl} className="text-blue-600">{websiteUrl}</a>.
          </p>
        </ScrollReveal>

        {/* Add all other terms sections here exactly as you already have */}
        {/* Example for one more section: */}
        <ScrollReveal>
          <h3 className="font-semibold text-2xl">Cookies</h3>
        </ScrollReveal>
        <ScrollReveal>
          <p>
            We employ the use of cookies. By accessing {name}, you agreed to use cookies in agreement with the {name}'s Privacy Policy.
          </p>
        </ScrollReveal>

        {/* ... other ScrollReveal sections as per your long content ... */}
      </div>
    </section>
  );
};

export default CompanyTermsSection;
