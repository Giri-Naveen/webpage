import React from "react";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

const pricingPlans = [
  {
    price: "10,000",
    text : "upfront payment",
    title: "Android Application",
    description: "Pay only 5–10% commission on sales — no hidden fees. A complete solution with customizable dashboard, secure payments (incl. COD), smart logistics, and real-time analytics. Enjoy continuous tech support to keep operations smooth and your business growing strong.",
  },
  {
    price: "1,00,000",
    text:"",
    title: "IOS Application",
    description: "A premium, tailored app with a powerful dashboard for products, pricing, and customer management. Seamless logistics, secure payments (including COD), and real‑time customer and revenue insights — all built to help your business grow. Plus, enjoy dedicated technical support to keep your app running smoothly and your brand ahead of the competition.",
  },
];

const ServiceTwoPricing = () => {
  return (
    <section data-section className="bg-black text-white px-8 md:px-8 lg:px-24 xl:px-40 py-20 md:py-24 lg:py-28 xl:pt-32 xl:pb-28">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <ScrollReveal>
        <h2 className="text-4xl md:text-[44px] lg:text-[56px] xl:text-[68px] font-sans font-light">
          <span className="font-semibold">Reasonable</span> prices <br />
        </h2>
        </ScrollReveal>

        <ScrollReveal>
        <h2 className="text-4xl md:text-[44px] lg:text-[56px] xl:text-[68px] font-sans font-light mt-1 md:mt-3 lg:mt-7 xl:mt-10">
          <span className="font-semibold">for innovative</span> solutions
        </h2>
        </ScrollReveal>
        
        <ScrollReveal>
        <p className="text-[white] text-[13px] md:text-[15px] xl:text-[16px] mt-8 md:mt-12 xl:mt-10">
          At our agency, we specialize in crafting tailored digital solutions.
          We focus on seamless user experience and powerful functionality to help businesses grow.
        </p>
        </ScrollReveal>
      </div>

      <div className="space-y-16">
        {pricingPlans.map((plan, index) => (
          <ScrollReveal key={index}>
          <div
            className={`grid grid-col-1 lg:grid-cols-[2.5fr_1.5fr_4fr_0.5fr]  items-center pt-12 md:pt-16 xl:pt-12 gap-6 md:gap-8 xl:gap-20 
              border-t border-gray-800
              ${index === pricingPlans.length - 1 ? "border-b border-gray-800 pb-16" : "pt-16"}
            `}
          >
            <div className="flex items-baseline relative">
              <span className="text-[#1ECDFE] text-[40px] md:text-[44px] lg:text-[46px] xl:text-[48px] xl:ml-4 font-semibold leading-none">
                {plan.price}
                <span className="absolute bottom-0 lg:-bottom-10 lg:right-20 xl:right-14 text-[15px] md:text-[18px] xl:text-[19px] text-[#1ECDFE] font-normal">
                  {plan.text}
                </span>
              </span>
            </div>

            <div className="flex items-center">
              <h3 className="text-white font-sans font-semibold text-[20px] md:text-[24px] lg:text-[20px]">
                {plan.title}
              </h3>
            </div>

            <div className="flex items-center">
              <p className="text-[white] text-[15px] md:text-[17px] lg:text-[15px] leading-relaxed">
                {plan.description}
              </p>
            </div>

            <div className="flex xl:justify-end items-center">
              <Link href="/contact-us">
                <div className="group transition">
                  <span className="w-10 h-10 rounded-full bg-[#1ECDFE] flex items-center justify-center transition-transform duration-500 ease-in group-hover:scale-[115%]">
                    <svg
                      className="ml-[3px]"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="black"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="1" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                </div>
              </Link>
            </div>
          </div>
          </ScrollReveal>
        ))}
      </div>

      <div className="mt-20 flex justify-center">
        <ScrollReveal>
        <Link href="/contact-us">
          <div className="group bg-[#1ECDFE] text-black pl-12 pr-4 py-[12px] md:py-[13px] lg:py-[14px] xl:py-[15px] rounded-full flex items-center gap-6 transition">
            <span className="font-medium text-[11px] md:text-[13px] tracking-widest">Know More</span>
            <span className="w-10 h-10 rounded-full bg-black flex items-center justify-center transition-transform duration-500 ease-in group-hover:scale-[115%]">
              <svg
                className="ml-[3px]"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#1ECDFE"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="1" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </span>
          </div>
        </Link>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ServiceTwoPricing;