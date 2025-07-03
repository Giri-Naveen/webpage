import React from "react";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";

const DiscoverSection = () => {
  return (
    <section data-section id="next-section" data-bg-section className="flex w-full h-full pl-24 pr-24 pt-28 pb-28 bg-white">
      <div className="w-1/2 h-auto flex flex-col justify-center pl-14">
        <ScrollReveal>
        <h2 className="text-[68px] text-black font-sans font-light leading-tight">
          <span className="block font-semibold">Welcome</span>
          <span className="block">
            <span className="font-semibold">to </span>
            <span className="text-black">Skorpion</span>
          </span>
        </h2>
        </ScrollReveal>

        <ScrollReveal>
        <p className="text-gray-500 text-base leading-normal mt-10 mb-8 max-w-[420px]">
         Meet Skorpion Digi Solutions – your reliable partner in driving digital growth and business innovation. Since our inception in 2022, we've been empowering restaurants, online retailers, and entrepreneurs by helping them launch, manage, and scale their businesses with smart, effective digital tools. Whether it's developing seamless mobile applications, integrating secure payment gateways, or enabling online ordering systems, we make technology accessible and impactful. 
        </p>
        </ScrollReveal>

        <ScrollReveal>
        <p className="text-gray-500 text-base leading-normal mb-12 max-w-[420px]">
          At Skorpion, we believe in building meaningful connections that go beyond just software – we aim to create long-term partnerships that help people and businesses thrive in today’s competitive market. With a deep focus on user-friendly solutions, strong support, and modern design, we’re not just a service provider—we’re your digital growth partner. Let Skorpion help you move forward, faster and smarter.
        </p>
        </ScrollReveal>

        <div className="flex items-center max-w-[300px]">
          <ScrollReveal>
            <Link href="/about-us">
              <div className="group flex items-center justify-between bg-[#1ECDFE] text-black rounded-full pl-12 pr-4 py-4">
                <span className="font-semibold text-[13px] tracking-widest">KNOW MORE</span>
                <span className="ml-8 w-10 h-10 rounded-full bg-black flex items-center justify-center transition-transform duration-500 ease-in group-hover:scale-[115%]">
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

      <div className="w-1/2 pl-12 pr-16 pt-0 flex flex-col justify-center gap-6">
        <ScrollReveal>
          <div className="relative w-full h-[340px]">
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
          <div className="relative w-full h-[340px]">
            <Image
              src="/images/about-2.jpg"
              alt="Image 2"
              fill
              className="object-fill"
              priority
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default DiscoverSection;
