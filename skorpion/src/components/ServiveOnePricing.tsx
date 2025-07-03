import React from "react";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

const pricingPlans = [
  {
    price: "12%",
    title: "Designed to fit your budget",
    description: "Get a premium app for your brand, seamless payments, and complete logistic support — all at just 12% commission.",
  },
];

const ServiceOnePricing = () => {
  return (
    <section data-section className="bg-black text-white px-6 md:px-40 pt-32 pb-28">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <ScrollReveal>
        <h2 className="text-4xl md:text-[68px] font-sans font-light">
          <span className="font-semibold">Reasonable</span> prices <br />
        </h2>
        </ScrollReveal>

        <ScrollReveal>
        <h2 className="text-4xl md:text-[68px] font-sans font-light mt-10">
          <span className="font-semibold">for innovative</span> solutions
        </h2>
        </ScrollReveal>

        <ScrollReveal>
        <p className="text-[white] text-[16px] mt-14">
          We blend clean design with smart features to help restaurants launch branded apps that work beautifully.
          <br />
          From payments to delivery, we focus on a smooth, end-to-end experience.
        </p>
        </ScrollReveal>
      </div>

      <div className="space-y-16">
        {pricingPlans.map((plan, index) => (
          <ScrollReveal key={index}>
          <div
            className={`grid grid-cols-[2fr_3fr_5fr_0.5fr] items-center pt-12 gap-20 
              border-t border-gray-800
              ${index === pricingPlans.length - 1 ? "border-b border-gray-800 pb-16" : "pt-16"}
            `}
          >
            <div className="flex items-baseline relative">
              {/* <span className="text-white text-[18px] mr-1 leading-none"></span> */}
              <span className="text-[#1ECDFE] text-[48px] ml-4 font-semibold leading-none">
                {plan.price}
                <span className="absolute -bottom-7 right-6 text-[18px] text-[#1ECDFE] font-normal">
                  Commission
                </span>
              </span>
            </div>

            <div className="flex items-center">
              <h3 className="text-white font-sans font-semibold text-[20px]">
                {plan.title}
              </h3>
            </div>

            <div className="flex items-center">
              <p className="text-[white] text-[15px] leading-relaxed">
                {plan.description}
              </p>
            </div>

            <div className="flex justify-end items-center">
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
          <div className="group bg-[#1ECDFE] text-black pl-12 pr-4 py-[15px] rounded-full flex items-center gap-6 transition">
            <span className="font-medium text-[13px] tracking-widest">Know More</span>
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

export default ServiceOnePricing;
