'use client';
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import ScrollReveal from './ScrollReveal';

const services = [
  {
    title: 'Multiple Logistics Partners',
    content: `Seamlessly integrate various delivery providers for faster and more flexible shipping.`,
  },
  {
    title: 'Branded Solution',
    content: `Own your delivery system with a customized app and dashboard tailored to your business needs.`,
  },
  {
    title: 'Real-Time Order Tracking',
    content: ` Monitor shipments, update customers, and ensure on-time deliveries with live tracking.`,
  },
  {
    title: 'Seamless Payment & COD',
    content: `Secure, quick, and hassle-free settlements with multiple payment options.`,
  },
  {
    title: 'Regional Language Support ',
    content: `Customize your app with multiple regional languages for a seamless customer experience and better engagement.`,
  },
];

const ServiceTwoAbout = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const heights = useRef<Array<HTMLDivElement | null>>([]);

  const toggleService = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <section data-section id='about-service' className="w-full xl:min-h-screen px-8 md:px-8 lg:px-24 xl:px-40 pt-16 pb-20 md:pt-20 md:pb-24 xl:py-28 flex flex-col xl:flex-row bg-white">
      <div className="xl:w-1/2 w-full xl:pr-40">
        <ScrollReveal>
        <h2 className="text-xl md:text-[24px] lg:text-[26px] xl:text-[28px] font-light font-sans text-black text-start mt-3 leading-[1.0]"><span className='font-semibold'>Our </span>Approach</h2>
        </ScrollReveal>

        <ScrollReveal>
        <h2 className="text-xl md:text-[24px] lg:text-[26px] xl:text-[28px] font-light font-sans text-black text-start mt-2 leading-[1.0]"><span className='font-semibold'>and </span>Work Specifics</h2>
        </ScrollReveal>

        <ScrollReveal>
        <p className="text-gray-500 w-full mt-8 md:mt-8 lg:mt-10 xl:mt-8 text-[14px] md:text-[16px] leading-relaxed md:max-w-9xl xl:max-w-md">
         Build a powerful online presence with your very own branded e‑commerce app.
         Integrated payments, seamless deliveries, and dedicated support — all under 
         one roof to deliver a better customer experience
        </p>
        </ScrollReveal>
        
        <ScrollReveal>
        <Link href="/about-us">
            <div className="mt-8 md:mt-8 lg:mt-10 xl:mt-8 group flex items-center space-x-4 text-black text-[11px] md:text-[13px] font-sans font-medium tracking-widest">
                <span>VIEW WORKS</span>
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

      <div className="xl:w-1/2 w-full mt-16 md:mt-16 xl:mt-3 flex flex-col justify-center space-y-8">
        {services.map((service, index) => {
          const isOpen = openIndex === index;
          const contentRef = heights.current[index];

          let contentHeight = 0;
          if (contentRef && contentRef.scrollHeight) {
            contentHeight = contentRef.scrollHeight;
          }

          return (
            <ScrollReveal key={index}>
            <div className="border-b border-gray-300 pb-6">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleService(index)}
              >
                <h4 className="text-[11px] md:text-[12px] lg:text-[13px] tracking-widest text-black font-sans uppercase font-semibold">{service.title}</h4>
                <div
                  className={`w-10 h-10 rounded-full mb-2 flex items-center justify-center text-[19px] md:text-[21px] lg:text-[23px] transition-all duration-300 ${
                    isOpen ? 'bg-[#1ECDFE] text-white' : 'bg-gray-200 text-black'
                  }`}
                >
                  {isOpen ? '−' : '+'}
                </div>
              </div>

              <div
                ref={(el) => {heights.current[index] = el}}
                style={{
                  height: isOpen ? `${contentHeight}px` : '0px',
                }}
                className="transition-all duration-500 overflow-hidden"
              >
                <div className="pt-3 text-[13px] md:text-[14px] lg:text-[15px] text-gray-500 leading-relaxed whitespace-pre-line">
                  {service.content}
                </div>
              </div>
            </div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
};

export default ServiceTwoAbout;
