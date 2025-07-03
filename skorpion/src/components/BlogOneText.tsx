'use client'
import React from 'react';
import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';

const BlogOneText = () => {
  return (
    <section data-section className="px-10 md:px-40 py-16 text-black bg-white">
      <div className="max-w-2xl mx-auto">
        <ScrollReveal>
        <p className="text-lg md:text-[22px] leading-9 mb-16">
          Running a successful restaurant is challenging — especially when relying too much on third‑party platforms that charge 
          high commissions, manipulate rankings, and affect your regular customers. Here’s a quick guide for restaurants to regain 
          control and build a strong, independent brand.
        </p>
        </ScrollReveal>

        <ScrollReveal>
        <div className="bg-gray-100 border-l-4 border-[#1ECDFE] py-12 px-16 mb-14">
          <p className="italic text-center text-[18px] text-gray-700">
            "The future belongs to those who digitize their kitchens today." – Inspired by Peter Drucker
          </p>
        </div>
        </ScrollReveal>

        <div className="mb-14">
          <ScrollReveal>
          <h2 className="font-semibold text-lg md:text-xl mb-8">Identify Your Target Customers</h2>
          </ScrollReveal>

          <ScrollReveal>
          <p className="text-gray-500 leading-relaxed">
            Understand who your regular patrons are and what they value most — quality, convenience, and trust.
          </p>
          </ScrollReveal>
        </div>

        <div className="mb-14">
          <ScrollReveal>
          <h2 className="font-semibold text-lg md:text-xl mb-8">Build Your Own Branded App</h2>
          </ScrollReveal>

          <ScrollReveal>
          <p className="text-gray-500 leading-relaxed">
            Break free from third‑party platforms charging hefty commissions and ranking fees. Launch an app that showcases your 
            brand, making it easy for loyal customers to order directly.
          </p>
          </ScrollReveal>
        </div>

        <div className="mb-10">
          <ScrollReveal>
          <h2 className="font-semibold text-lg md:text-xl mb-8">Choose Fair Pricing Models</h2>
          </ScrollReveal>

          <ScrollReveal>
          <p className="text-gray-500 leading-relaxed mb-14">
            Why give away 25–30% or more of your revenue? Choose platforms like Skorpion with a fair 12% commission — no 
            hidden charges, no fake ratings.
          </p>
          </ScrollReveal>
        </div>

        <div className="mb-14">
            <ScrollReveal>
            <h2 className="font-semibold text-lg md:text-xl mb-8">Focus on Regular Customers</h2>
            </ScrollReveal>

            <ScrollReveal>
            <p className="text-gray-500 leading-relaxed">
              Regular patrons don’t want to pay higher prices due to bloated platform charges. An independent app allows you to reward their loyalty with special offers, pricing, and personalized service.
            </p>
            </ScrollReveal>
          </div>

          <div className="mb-14">
            <ScrollReveal>
            <h2 className="font-semibold text-lg md:text-xl mb-8">Maintain Control of Your Branding</h2>
            </ScrollReveal>

            <ScrollReveal>
            <p className="text-gray-500 leading-relaxed">
              Your brand is your biggest asset. Maintain complete control over your menu, pricing, and customer experience.
            </p>
            </ScrollReveal>
          </div>

          {/*
          <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
            <Image
              src="/images/blog-img-1.png"
              alt="Designer with laptop"
              width={500}
              height={300}
              className="w-full object-cover"
            />
            <Image
              src="/images/blog-img-2.png"
              alt="Creative workspace"
              width={500}
              height={300}
              className="w-full object-cover"
            />
          </div>
          </ScrollReveal>

          <ScrollReveal>
          <p className="text-gray-500 leading-relaxed mb-14">
            Remember that creativity is at the core of graphic design. Embrace your creativity, experiment with
            different ideas, and think outside the box to create unique and impactful designs. Don’t be afraid to take
            risks and push the boundaries of traditional design. Steve Jobs once said:
          </p>
          </ScrollReveal>

          */}

          <ScrollReveal>
          <div className="bg-gray-100 border-l-4 border-[#1ECDFE] py-12 px-16 mb-14">
            <p className="italic text-center text-[18px] text-gray-700">
              "Code your menu, serve your dream." – Inspired by Ada Lovelace
            </p>
          </div>
          </ScrollReveal>

          <div className="mb-14">
            <ScrollReveal>
            <h2 className="font-semibold text-lg md:text-xl mb-8">Seamless Delivery Solutions</h2>
            </ScrollReveal>

            <ScrollReveal>
            <p className="text-gray-500 leading-relaxed">
              Use a platform that connects you directly with trusted logistics and delivery partners, ensuring quick, seamless service every time.
            </p>
            </ScrollReveal>
          </div>

          <div className="mb-14">
            <ScrollReveal>
            <h2 className="font-semibold text-lg md:text-xl mb-8">Build Trust Through Transparency</h2>
            </ScrollReveal>

            <ScrollReveal>
            <p className="text-gray-500 leading-relaxed">
              Customers deserve honesty — no artificial rankings, no hidden fees. Deliver quality meals with pricing that’s fair and trustworthy.
            </p>
            </ScrollReveal>
          </div>

          <div className="mb-14">
            <ScrollReveal>
            <h2 className="font-semibold text-lg md:text-xl mb-8">Save Time and Money</h2>
            </ScrollReveal>

            <ScrollReveal>
            <p className="text-gray-500 leading-relaxed">
              A custom app means lower overhead, fewer delays in payments, and more profits staying where they belong — with you.
            </p>
            </ScrollReveal>
          </div>

          <div className="mb-14">
            <ScrollReveal>
            <h2 className="font-semibold text-lg md:text-xl mb-8">Nurture Regular Customers</h2>
            </ScrollReveal>

            <ScrollReveal>
            <p className="text-gray-500 leading-relaxed">
              Reward long‑term patrons with special benefits, loyalty points, or discounts — making them feel valued and keeping them engaged.
            </p>
            </ScrollReveal>
          </div>

          <div className="mb-14">
            <ScrollReveal>
            <h2 className="font-semibold text-lg md:text-xl mb-8">Grow Sustainably and Profitiably</h2>
            </ScrollReveal>

            <ScrollReveal>
            <p className="text-gray-500 leading-relaxed">
              With an independent app and a fair pricing model, you gain the freedom to scale your restaurant, maintain quality, and secure long‑term profitability.
            </p>
            </ScrollReveal>
          </div>
      </div>
    </section>
  );
};

export default BlogOneText;
