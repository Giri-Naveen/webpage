import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';

const services = [
  {
    title: 'Innaiku.com',
    description: 'Innaiku.com helps restaurants launch their own mobile app with built‑in payments, delivery support, and ongoing help. It’s everything you need to build your brand, connect with customers, and grow your business online.',
    link: '/services/service-1',
  },
  {
    title: 'Ecom',
    description:"Build a powerful online presence with your very own branded e‑commerce app. Integrated payments, seamless deliveries, and dedicated support — all under one roof to deliver a better customer experience.",
    link: '/services/service-2',
  },
  {
    title: '',
    description: '',
    link: '/',
  },
];

const BusinessSection = () => {
  return (
    <section data-section data-bg-section className="bg-black text-white w-full px-8 md:px-8 lg:px-24 xl:px-20 py-20 md:pt-20 lg:pt-24 xl:pt-28 xl:pb-0 font-sans">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
        <div className="text-center md:text-right xl:mr-60 text-[#6E6E6E] text-[15px] md:text-[16px] mb-12 md:mb-14 relative">
          Professionals focused on helping your brand<br />
          grow and move forward.
          <div className="hidden xl:block absolute left-[104%] top-1/4 w-[32%] border-t border-[#6E6E6E]" />
        </div>
        </ScrollReveal>

        <ScrollReveal>
        <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 lg:gap-5 xl:gap-6 text-center">
          <h2 className="text-[34px] md:text-[54px] lg:text-[64px] xl:text-[74px] font-sans font-semibold">Our</h2>
          <h2 className="text-[34px] md:text-[54px] lg:text-[64px] xl:text-[74px] font-sans font-semibold">Unique</h2>
          <h2 className="text-[34px] md:text-[54px] lg:text-[64px] xl:text-[74px] font-sans font-light">Ideas</h2>
        </div>
        </ScrollReveal>

        <ScrollReveal>
        <div className="flex flex-col md:flex-row justify-center items-center md:gap-4 lg:gap-5 xl:gap-6">
          <h2 className="text-[34px] md:text-[54px] lg:text-[64px] xl:text-[74px] font-sans font-semibold text-left">For Your <span className='text-[34px] md:text-[54px] lg:text-[64px] xl:text-[74px] font-light'>Business.</span></h2>
           
          <Link href="/work">
            <div className="group flex items-center justify-between bg-[#1ECDFE] text-black rounded-full pl-10 md:pl-12 pr-4 py-2 md:py-3 lg:py-[16px] xl:py-4 mt-4 md:mt-0">
              <span className="font-semibold text-[11px] md:text-[13px] tracking-widest">WHAT WE DO</span>
              <span className="ml-4 md:ml-6  xl:ml-8 w-10 h-10 rounded-full bg-black flex items-center justify-center transition-transform duration-500 ease-in group-hover:scale-[115%]">
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
        </div>
        </ScrollReveal>
      </div>

      <ScrollReveal>
      <div className="mt-[70px] md:mt-24 xl:mt-28 grid grid-cols-1 md:grid-cols-3 md:px-0 lg:px-0 xl:px-20">
        {services.map((item, index) => (
          <Link href={item.link} key={index}>
            <div className="group relative border border-gray-100 border-opacity-10 md:border-opacity-25 px-3 md:px-4 lg:px-6 xl:px-8 py-7 md:py-8 lg:py-9 xl:py-10 min-h-[380px] flex flex-col justify-evenly md:justify-between overflow-hidden hover:border-top-[#1ECDFE] transition-all duration-300">

              <span className="absolute top-0 left-0 h-[4px] w-full bg-[#1ECDFE] transform scale-x-0 group-hover:scale-x-100 origin-left group-hover:origin-left transition-transform duration-300 ease-in-out" />

              <h3 className="text-white text-[18px] md:text-[20px] mt-0 font-semibold leading-snug z-10 font-sans min-h-[30px]">
                {item.title}
              </h3>

              {/*
              <p className="text-gray-400 text-base opacity-100 transition-all duration-300 mt-0 z-10 min-h-[60px] fade-out-in">
                {item.description}
              </p>
              */}

              {item.description ? (
                <p className="text-gray-400 text-[14px] md:text-[15px] lg:text-[16px] opacity-100 transition-all duration-300 mt-0 z-10 min-h-[60px] fade-out-in">
                  {item.description}
                </p>
              ) : (
                <p className="text-white text-[24px] md:text-[26px] lg:text-[28px] xl:text-[30px] mx-auto font-semibold opacity-100 transition-all duration-300 mt-0 z-10 min-h-[60px] fade-out-in">
                  Coming Soon...
                </p>
              )}

              <div className="mt-2 z-10">
                <div className="bg-gray-600 group-hover:bg-[#1ECDFE] text-white group-hover:text-black w-8 h-8 group-hover:w-12 group-hover:h-12 rounded-full flex items-center justify-center transition-all duration-300">
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
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      </ScrollReveal>
    </section>
  );
};

export default BusinessSection;