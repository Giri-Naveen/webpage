import React from "react";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";

const ServiceOneWork = () => {
  return (
    <section
      data-section
      id="next-section"
      data-bg-section
      className="flex flex-col xl:flex-row w-full h-full px-8 md:px-8 lg:px-24 pt-16 pb-8 md:pt-20 md:pb-14 lg:pt-24 lg:pb-12 xl:py-28 xl:gap-10 bg-gray-100"
    >
      <div className="w-full xl:w-1/2 h-auto flex flex-col justify-center xl:pl-14">
        <ScrollReveal>
          <h2 className="text-[38px] md:text-[52px] lg:text-[60px] xl:text-[68px] text-black font-sans font-light leading-tight">
            <span className="block font-semibold">Innaiku.com</span>
            <span className="block">
              <span className="text-black">Workflow</span>
            </span>
          </h2>
        </ScrollReveal>

        <div className="mt-3 md:mt-6 xl:mt-10">
          {[
            {
              title: "Brand Setup",
              desc: `We gather your restaurant details — menu, logo, and preferences — 
              to build a fully branded app that reflects your identity.`,
            },
            {
              title: "App Development",
              desc: `Your app is built with online ordering, integrated payments, 
              and delivery support — tailored for your restaurant's operations.`,
            },
            {
              title: "Go Live",
              desc: `Your branded app is published on the Play Store. Customers can 
              start placing direct orders from day one.`,
            },
            {
              title: "Order & Delivery Management",
              desc: `You receive and manage orders in real-time through your dashboard. 
              Delivery is handled via trusted logistics partners.`,
            },
            {
              title: "Weekly Payouts",
              desc: `Every Saturday, your earnings are credited directly to your account — 
              fast, transparent, and hassle-free.`,
            },
            {
              title: "Marketing & Digital Support",
              desc: `We help promote your app with creative campaigns, offers, and digital 
              strategies to grow your customer base and boost visibility.`,
            },
          ].map((item, index) => (
            <div key={index} className="mt-6">
              <ScrollReveal>
                <h3 className="font-semibold text-[20px] md:text-[21px] lg:text-[24px] xl:text-[22px] ">{item.title}</h3>
              </ScrollReveal>
              <ScrollReveal>
                <p className="mt-2 md:mt-2 lg:mt-4 xl:mt-2 text-[14px] md:text-[15px] lg:text-[18px] xl:text-[16px] text-gray-800">{item.desc}</p>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full xl:w-1/2 xl:pl-12 xl:pr-16 md:pt-10 lg:pt-6">
        <ScrollReveal>
          <div className="relative w-full h-[400px] hidden md:block lg:block md:h-[500px] lg:h-[600px] xl:hidden">
            <Image
              src="/images/work1.jpg"
              alt="Mobile Image"
              fill
              className="object-contain"
              priority
            />
          </div>

          <div className="relative w-full h-[800px] block md:hidden lg:hidden xl:block">
            <Image
              src="/images/service1.jpg"
              alt="Desktop Image"
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
