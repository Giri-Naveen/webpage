'use client'
import React from "react";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";

const WelcomeSection = () => {
  return (
    <section data-section id="next-section" data-bg-section className="flex gap-10 md:gap-14 xl:gap-0 flex-col xl:flex-row w-full h-full px-8 md:px-8 lg:px-24 xl:px-40 pt-16 pb-14 md:py-20 lg:py-24 xl:py-28 bg-white">
      <div className="w-full xl:w-1/2 h-auto flex flex-col justify-center">
        <ScrollReveal>
        <h2 className="hidden xl:block text-[68px] text-black font-sans font-light leading-tight">
          <span className="block font-semibold">Welcome</span>
          <span className="block">
            <span className="font-semibold">to </span>
            <span className="text-black">Skorpion</span>
          </span>
        </h2>
        </ScrollReveal>

        <ScrollReveal>
        <h2 className="block xl:hidden text-[34px] md:text-[46px] lg:text-[58px] text-black font-sans font-semibold leading-tight">
          Welcome to Skorpion
        </h2>
        </ScrollReveal>

        <ScrollReveal>
        <p className="text-gray-500 text-[14px] md:text-[18px] xl:text-[16px] leading-normal mt-6 mb-4 md:mt-8 md:mb-6 xl:mt-10 xl:mb-8 max-w-7xl xl:max-w-[380px]">
         Meet Skorpion Digi Solutions – your reliable partner in driving digital growth and business innovation. 
         Since our inception in 2022, we've been empowering restaurants, online retailers, and entrepreneurs by 
         helping them launch, manage, and scale their businesses with smart, effective digital tools. Whether 
         it's developing seamless mobile applications, integrating secure payment gateways, or enabling online 
         ordering systems, we make technology accessible and impactful. 
        </p>
        </ScrollReveal>

        <ScrollReveal>
        <p className="text-gray-500 text-[14px] md:text-[18px] xl:text-[16px] leading-normal mb-6 md:mb-8 lg:mb-10 xl:mb-12 max-w-7xl xl:max-w-[380px]">
          At Skorpion, we believe in building meaningful connections that go beyond just software – we aim to 
          create long-term partnerships that help people and businesses thrive in today’s competitive market. 
          With a deep focus on user-friendly solutions, strong support, and modern design, we’re not just a 
          service provider we’re your digital growth partner. Let Skorpion help you move forward, faster and smarter.
        </p>
        </ScrollReveal>

        <div className="flex items-center">
          <ScrollReveal>
            <Link href="/about-us">
              <div className="bg-[#1ECDFE] group transition-colors text-black font-semibold pl-6 md:pl-8 pr-4 py-2 md:py-3 xl:py-4 rounded-full flex items-center md:gap-2 xl:gap-3 w-fit">
                <span className="ml-4 font-semibold text-[11px] md:text-[13px] tracking-widest">KNOW MORE</span>
                  <span className="ml-4 w-10 h-10 rounded-full bg-black flex items-center justify-center transition-transform duration-500 ease-in group-hover:scale-[115%]">
                    <svg
                      className='ml-1'
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
      </div>

      <div className="w-full xl:w-1/2 flex flex-col justify-center gap-0 xl:gap-12">
        <ScrollReveal>
          <div className="hidden xl:block relative w-full h-[340px]">
            <Image
              src="/images/about-1.avif"
              alt="Image 1"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="relative w-full h-[260px] md:h-[420px] xl:h-[340px]">
            <Image
              src="/images/about-2.jpg"
              alt="Image 2"
              fill
              className="object-fill md:object-cover md:object-center"
              priority
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default WelcomeSection;
