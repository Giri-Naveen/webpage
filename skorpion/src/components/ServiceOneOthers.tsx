import React from 'react';
import Link from 'next/link';
import ScrollReveal from './ScrollReveal';

const services = [
  {
    title: "Ecom",
    description: "Build a powerful online presence with your very own branded e‑commerce app. Integrated payments, seamless deliveries, and dedicated support — all under one roof to deliver a better customer experience",
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

const ServiceOneOthers = () => {
  return (
    <section data-section className="w-full px-10 md:px-40 py-28 bg-white">
      <div className="flex items-center justify-between mb-14">
        <ScrollReveal>
        <h2 className="text-[42px] font-sans font-semibold">Other services</h2>
        </ScrollReveal>
        
        <ScrollReveal>
        <Link href="/services">
            <div className="group flex items-center space-x-4 text-black text-[13px] font-sans font-medium tracking-widest">
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        {services.map((service, index) => (
          <div key={index} className="border border-gray-300 px-12 py-10 flex flex-col justify-between h-full">
            <ScrollReveal>
            <h2 className="text-[26px] font-sans font-semibold leading-tight mb-5">
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
                <p className="text-[#6E6E6E] text-base font-sans mb-8 max-w-md">
                  {service.description}
                </p>
              ) : (
                <p className="text-black text-[36px] mx-auto font-semibold mt-56 pt-1 mb-60 max-w-md">
                  Coming Soon
                </p>
            )}
            </ScrollReveal>

            <ScrollReveal>
            <ul className="space-y-4 mb-7">
              {service.items.map((item, i) => (
                <li
                  key={i}
                  className={`border-t border-gray-300 pt-4 uppercase tracking-widest text-black font-sans font-medium text-[13px]
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
                  <span className="font-semibold text-[13px] tracking-widest mr-4">READ MORE</span>
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

export default ServiceOneOthers;
