import React from 'react';
import Link from 'next/link';
import ScrollReveal from './ScrollReveal';

const services = [
  {
    title: "Innaiku.com",
    description: "Innaiku.com helps restaurants launch their own mobile app with built‑in payments, delivery support, and ongoing help. It’s everything you need to build your brand, connect with customers, and grow your business online",
    items: ["Free Technical Support", "User‑Friendly Support", " Seamless Integration", "Attractive Interface", "Time & Cost Efficient"],
    link: "/services/service-1",
  },
  {
    title: "",
    description: "",
    items: [],
    link: "/",
  },
];

const ServiceTwoOthers = () => {
  return (
    <section data-section className="w-full px-10 md:px-8 lg:px-24 xl:px-40 py-28 bg-white">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 md:mb-14 gap-3 md:gap-0">
        <ScrollReveal>
        <h2 className="text-[32px] md:text-[34px] lg:text-[38px] xl:text-[42px] font-sans font-semibold">Other services</h2>
        </ScrollReveal>
        
        <ScrollReveal>
        <Link href="/work">
            <div className="group flex items-center space-x-2 md:space-x-4 text-black text-[11px] md:text-[13px] font-sans font-medium tracking-widest">
                <span>VIEW ALL</span>
                <span className="ml-8 w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center transition-transform duration-500 ease-in group-hover:scale-[115%]">
                    <svg
                        className='ml-1'
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
      </ScrollReveal>    
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-14 lg:gap-16 xl:gap-20">
        {services.map((service, index) => (
          <div key={index} className="border border-gray-300 px-6 md:px-8 lg:px-10 xl:px-12 py-10 flex flex-col justify-between h-full">
            <ScrollReveal>
            <h2 className="text-[22px] md:text-[24px] lg:text-[26px] font-sans font-semibold leading-tight mb-5">
              {service.title.split(" ").slice(0, 2).join(" ")} <br />
              {service.title.split(" ").slice(2).join(" ")}
            </h2>
            </ScrollReveal>

            {/*
            <ScrollReveal>
            <p className="text-[#6E6E6E] text-[16px] font-sans mb-7 max-w-md">
              {service.description}
            </p>
            </ScrollReveal>
            */}

            <ScrollReveal>
            {service.description ? (
                <p className="text-[#6E6E6E] text-[14px] md:text-[15px] lg:text-base font-sans mb-8 max-w-md">
                  {service.description}
                </p>
              ) : (
                <p className="text-black text-[30px] md:text-[32px] lg:text-[34px] xl:text-[36px] mx-auto text-center font-semibold mt-56 pt-1 mb-60 max-w-md">
                  Coming Soon...
                </p>
            )}
            </ScrollReveal>

            <ScrollReveal>
            <ul className="space-y-4 mb-7">
              {service.items.map((item, i) => (
                <li
                  key={i}
                  className={`border-t border-gray-300 pt-4 uppercase tracking-widest text-black font-sans font-medium text-[10px] md:text-[12px] lg:text-[13px]
                  ${
                    i === service.items.length - 1 ? 'border-b pb-4' : ''
                  }`}
                >
                  {item}
                </li>
              ))}
            </ul>
            </ScrollReveal>

            <ScrollReveal>
            <Link href={service.link}>
              <div className="group flex items-center justify-start text-black rounded-full transition">
                  <span className="font-semibold text-[11px] md:text-[13px] tracking-widest mr-2 md:mr-4">READ MORE</span>
                  <span className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center transition-transform duration-500 ease-in group-hover:scale-[115%]">
                  <svg
                      className='ml-1'
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
          </ScrollReveal>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceTwoOthers;
