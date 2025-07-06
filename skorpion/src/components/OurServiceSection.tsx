import React from 'react';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

const services = [
  {
    title: "Innaiku.com",
    description: "Innaiku.com helps restaurants launch their own mobile app with built‑in payments, delivery support, and ongoing help. It’s everything you need to build your brand, connect with customers, and grow your business online",
    items: ["Free Technical Support", "User‑Friendly Support", " Seamless Integration", "Attractive Interface", "Time & Cost Efficient"],
    link: "/services/service-1",
  },
  {
    title: "Ecom",
    description:
      "Build a powerful online presence with your very own branded e‑commerce app. Integrated payments, seamless deliveries, and dedicated support — all under one roof to deliver a better customer experience",
    items: ["Multiple Logistics Partners", "Branded Solution", "Real-Time Order Tracking", "Seamless Payment & COD", "Regional Language Support"],
    link: "/services/service-2",
  },
 {
    title: "",
    description: "",
    items: [],
    link: "/",
  },
];

const OurServiceSection = () => {
  return (
    <section data-section id="service-section" className="bg-black text-white pt-20 pb-16 md:pb-28 lg:pt-24 lg:pb-28 xl:py-28 px-8 lg:px-24 xl:px-40">
      <div className="max-w-7xl xl:mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-14 lg:gap-20 xl:gap-28 items-start">
        {services.map((service, index) => (
          <div key={index}> 
            <ScrollReveal>
            <h2 className="text-[24px] md:text-[24px] lg:text-[28px] xl:text-[30px] font-sans font-semibold leading-tight mb-7">
              {service.title.split(" ").slice(0, 2).join(" ")} <br />
              {service.title.split(" ").slice(2).join(" ")}
            </h2>
            </ScrollReveal>

            <ScrollReveal>
            {/*  
            <p className="text-[#6E6E6E] text-[15px] lg:text-base font-sans mb-8 max-w-md">
              {service.description}
            </p>
            */}
            {service.description ? (
                <p className="text-[#6E6E6E] text-[15px] lg:text-base font-sans mb-8 max-w-md">
                  {service.description}
                </p>
              ) : (
                <p className="text-white text-[28px] md:text-[30px] lg:text-[32px] xl:text-[36px] font-semibold md:mt-48 lg:mt-52 xl:mt-56 pt-1 mb-60 max-w-md">
                  Coming Soon
                </p>
            )}
            </ScrollReveal>

            <ScrollReveal>
              <ul className="space-y-4 mb-8">
              {service.items.map((item, i) => (
                <li
                  key={i}
                  className={`border-t border-gray-800 pt-4 uppercase tracking-widest text-[#9B9B9B] font-sans font-medium text-[10px] md:text-[11px] lg:text-[12px] xl:text-[13px]
                    ${
                      i === service.items.length - 1 ? 'border-b pb-4' : ''
                    }`}
                >
                  {item}
                </li>
              ))}
            </ul>
            </ScrollReveal>
            
            <Link href={service.link}>
            <ScrollReveal>
              <div className="group flex items-center text-[#1ECDFE] rounded-full transition">
                  <span className="font-medium text-[10px] md:text-[11px] lg:text-[12px] xl:text-[13px] tracking-widest mr-4">READ MORE</span>
                  <span className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center transition-transform duration-500 ease-in group-hover:scale-[115%]">
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
            </ScrollReveal>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OurServiceSection