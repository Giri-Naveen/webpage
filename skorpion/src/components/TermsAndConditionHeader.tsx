'use client';
import React from 'react';
import Link from 'next/link';
import SimpleReveal from '@/components/SimpleReveal';

const TermsAndConditionHeader = () => {
    return (
    <section id="hero" data-section className="w-full py-28 px-8 md:px-8 lg:px-24 xl:px-40 flex flex-col items-start bg-black">
      <div className="relative flex w-full mt-10">
        <SimpleReveal>
          <div className="hidden xl:block absolute right-[102%] top-1/2 w-full border-t border-gray-300" />
        </SimpleReveal>

        <SimpleReveal>
          <div className="bg-black mt-6 md:mt-5 xl:mt-0 px-0 z-10 text-[11px] md:text-[14px] whitespace-nowrap">
            <Link href="/" className="text-white tracking-widest font-semibold hover:text-[#1ECDFE]">HOMEPAGE</Link>
            <span className="mx-3 text-white text-base">/</span>
            <span className="text-gray-400 font-semibold cursor-not-allowed tracking-widest">POLICY</span>
          </div>
        </SimpleReveal>
      </div>

      <SimpleReveal>
        <h1 className="text-[34px] md:text-[64px] lg:text-[69px] xl:text-[74px] font-light font-sans text-white text-start mt-16 md:mt-14 lg:mt-16 leading-[1.0]"><span className='font-semibold'>Terms </span>and</h1>
      </SimpleReveal>
      <SimpleReveal>
        <h1 className="text-[34px] md:text-[64px] lg:text-[69px] xl:text-[74px] font-light font-sans text-white text-start mt-2 md:mt-3 xl:mt-3 lg:mt-6 leading-[1.0]"><span className='font-semibold'>Conditions</span></h1>
      </SimpleReveal>

      <div
         onClick={() => {
            document.getElementById("next-section")?.scrollIntoView({ behavior: "smooth" });
          }} 
        className="mt-14 md:mt-16 pt-1 flex items-center gap-2 md:gap-4 cursor-pointer"
      >
        <SimpleReveal>
          <span className="tracking-widest text-[#1ECDFE] text-[11px] md:text-[13px] font-semibold">LEARN MORE</span>
        </SimpleReveal>
        
        <SimpleReveal>
          <div className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center">
            <svg
                  className='mt-[2px]'
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#1ECDFE"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="12" y1="1" x2="12" y2="19" />
                  <polyline points="19 12 12 19 5 12" />
                </svg>
          </div>
        </SimpleReveal>
      </div>
    </section>
  );
};

export default TermsAndConditionHeader;
