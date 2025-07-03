import React from "react";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";

const ServiceOneWork = () => {
  return (
    <section data-section id="next-section" data-bg-section className="flex w-full h-full px-24 py-28 gap-10 bg-gray-100">
      <div className="w-1/2 h-auto flex flex-col justify-center pl-14">
        <ScrollReveal>
        <h2 className="text-[68px] text-black font-sans font-light leading-tight">
          <span className="block font-semibold">Innaiku.com</span>
          <span className="block">
            <span className="text-black">Workflow</span>
          </span>
        </h2>
        </ScrollReveal>

        <div className="mt-10">
        <ScrollReveal><h3 className="font-semibold text-2xl">Brand Setup</h3></ScrollReveal>
        <ScrollReveal>
        <p className="mt-[10px]">
          We gather your restaurant details — menu, logo, and preferences — to build a fully branded app 
          that reflects your identity.
        </p>
        </ScrollReveal>

        <ScrollReveal><h3 className="font-semibold mt-5 text-2xl">App Development</h3></ScrollReveal>
        <ScrollReveal>
        <p className="mt-[10px]">
          Your app is built with online ordering, integrated payments, and delivery support — tailored 
          for your restaurant's operations.
        </p>
        </ScrollReveal>

        <ScrollReveal><h3 className="font-semibold mt-5 text-2xl">Go Live</h3></ScrollReveal>
        <ScrollReveal>
        <p className="mt-[10px]">
          Your branded app is published on the Play Store. Customers can start placing direct orders from day one.
        </p>
        </ScrollReveal>

        <ScrollReveal><h3 className="font-semibold mt-5 text-2xl">Order & Delivery Management</h3></ScrollReveal>
        <ScrollReveal>
        <p className="mt-[10px]">
          You receive and manage orders in real-time through your dashboard. Delivery is handled via trusted 
          logistics partners.
        </p>
        </ScrollReveal>

        <ScrollReveal><h3 className="font-semibold mt-5 text-2xl">Weekly Payouts</h3></ScrollReveal>
        <ScrollReveal>
        <p className="mt-[10px]">
          Every Saturday, your earnings are credited directly to your account — fast, transparent, and hassle-free.
        </p>
        </ScrollReveal>

        <ScrollReveal><h3 className="font-semibold mt-5 text-2xl">Marketing & Digital Support</h3></ScrollReveal>
        <ScrollReveal>
        <p className="mt-[10px]">
          We help promote your app with creative campaigns, offers, and digital strategies to grow your customer base 
          and boost visibility.
        </p>
        </ScrollReveal>
        </div>
      </div>

      <div className="w-1/2 pl-12 pr-16 pt-10">
        <ScrollReveal>
          <div className="relative w-full h-[800px]">
            <Image
              src="/images/service1.jpg"
              alt="Image 1"
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

export default ServiceOneWork;
