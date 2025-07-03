import React from "react";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";

const ServiceTwoWork = () => {
  return (
    <section data-section id="next-section" data-bg-section className="flex w-full h-full px-24 py-28 gap-10 bg-gray-100">
      <div className="w-1/2 h-auto flex flex-col justify-center pl-14">
        <ScrollReveal>
        <h2 className="text-[68px] text-black font-sans font-light leading-tight">
          <span className="block font-semibold">eCommerce</span>
          <span className="block">
            <span className="text-black">Workflow</span>
          </span>
        </h2>
        </ScrollReveal>

        <div className="mt-10">
        <ScrollReveal><h3 className="font-semibold text-2xl">Brand Setup</h3></ScrollReveal>
        <ScrollReveal>
        <p className="mt-[10px]">
          We collect your product details, brand elements, categories, and preferences to create a fully 
          customized online store under your name.
        </p>
        </ScrollReveal>

        <ScrollReveal><h3 className="font-semibold mt-5 text-2xl">App Development</h3></ScrollReveal>
        <ScrollReveal>
        <p className="mt-[10px]">
          We build a branded mobile app with product listing, cart, order tracking, secure payment integration, 
          and logistic support — tailored to your business.
        </p>
        </ScrollReveal>

        <ScrollReveal><h3 className="font-semibold mt-5 text-2xl">Go Live</h3></ScrollReveal>
        <ScrollReveal>
        <p className="mt-[10px]">
          Your app is launched on the Play Store with your branding. Customers can now place orders 
          directly — no marketplace needed.
        </p>
        </ScrollReveal>

        <ScrollReveal><h3 className="font-semibold mt-5 text-2xl">Order & Delivery Management</h3></ScrollReveal>
        <ScrollReveal>
        <p className="mt-[10px]">
          Orders appear in your dashboard instantly. You manage dispatch while delivery is handled by integrated 
          logistic partners.
        </p>
        </ScrollReveal>

        <ScrollReveal><h3 className="font-semibold mt-5 text-2xl">COD & Prepaid Payments</h3></ScrollReveal>
        <ScrollReveal>
        <ul className="list-disc pl-5 text-black space-y-2">
            <li className="mt-[14px]">
            <strong>COD payments</strong> are collected by your delivery partner and handed over to you directly.
            </li>
            <li>
            <strong>Prepaid payments</strong> are settled every <strong>Saturday</strong>, transferred to your bank 
            account securely and on time.
            </li>
        </ul>
        </ScrollReveal>

        <ScrollReveal><h3 className="font-semibold mt-5 text-2xl">Marketing & Digital Support</h3></ScrollReveal>
        <ScrollReveal>
        <p className="mt-[10px]">
          We help drive sales through tailored marketing campaigns, digital promotions, and branding strategies 
          designed to grow your customer base
        </p>
        </ScrollReveal>
        </div>
      </div>

      <div className="w-1/2 pl-12 pr-16 ">
        <ScrollReveal>
          <div className="relative w-full h-[1000px]">
            <Image
              src="/images/service2.jpg"
              alt="Image 2"
              fill
              className="object-contain"
              priority
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ServiceTwoWork;
