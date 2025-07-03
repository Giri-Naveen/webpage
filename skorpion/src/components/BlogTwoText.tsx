'use client'
import React from 'react';
import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';

const BlogTwoText = () => {
  return (
    <section data-section className="px-10 md:px-40 py-16 text-black bg-white">
      <div className="max-w-2xl mx-auto">
        <ScrollReveal>
        <p className="text-lg md:text-[22px] leading-9 mb-16">
          For years, D2C brands have depended on marketplaces — paying hefty commissions, competing with countless sellers, and 
          fighting to build their own identity. But what if you could break free? What if you could own the customer experience, 
          save costs, and scale nationwide… all while focusing on what you do best?
        </p>
        </ScrollReveal>

        <ScrollReveal>
        <div className="bg-gray-100 border-l-4 border-[#1ECDFE] py-12 px-16 mb-14">
          <p className="italic text-center text-[18px] text-gray-700">
            "Logic will take you from store to store. Innovation will bring the store to your screen." – Inspired by Albert Einsten
          </p>
        </div>
        </ScrollReveal>

        <ScrollReveal>
        <p className="text-lg md:text-[22px] leading-9 mb-16">
          That’s exactly what one growing D2C brand decided to do. They embraced a custom‑branded app, making their customers 
          feel right at home. No more high marketplace fees — with a solution costing roughly 1/10th of traditional platforms, 
          this brand could reinvest those savings into quality, service, and growth.
        </p>
        </ScrollReveal>

        <ScrollReveal>
        <p className="text-lg md:text-[22px] leading-9 mb-16">
          With seamless logistic support across the country, secure payment integration, and dedicated technical and maintenance 
          support, the brand no longer felt like a tiny shop buried in a giant marketplace. Instead, it became a bold, trusted, 
          and stand‑alone brand that customers could connect with.
        </p>
        </ScrollReveal>

        <ScrollReveal>
        <div className="bg-gray-100 border-l-4 border-[#1ECDFE] py-12 px-16 mb-14">
        <p className="italic text-center text-[18px] text-gray-700">
            "He who owns the app, owns the customer." – Inspired by Machiavelli
        </p>
        </div>
        </ScrollReveal>

        <ScrollReveal>
        <p className="text-lg md:text-[22px] leading-9 mb-16">
          Today, this D2C brand delivers a premium experience nationwide — serving its loyal customers with ease, growing its revenue 
          sustainably, and building a long‑term future. All thanks to a platform that put control, trust, and growth back in its hands.
        </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default BlogTwoText;
