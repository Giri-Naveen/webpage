'use client'
import React from 'react'
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

const OurVisionSection = () => {
  return (
    <section data-section className="bg-gray-100 text-black w-full px-6 md:px-40 py-28 font-sans">
      <ScrollReveal>
      <div className="max-w-7xl mx-auto relative">
        <p className="text-base text-[#6B6B6B] text-left md:ml-36">
          Bringing our vision to life through meaningful work.<br /> 
          Take a look at what we’ve achieved so far.
        </p>
        <div className="absolute right-[87%] top-1/4 w-[30%] border-t border-[#6B6B6B]" />
      </div>
      </ScrollReveal>

      <div className="flex flex-col justify-center items-center text-center mt-16 max-w-4xl mx-auto">
        <ScrollReveal>
        <h1 className="text-[40px] md:text-[66px] font-sans font-semibold text-black">
          Our Vision
        </h1>
        </ScrollReveal>

        <ScrollReveal>
        <p className="text-sm md:text-[18px] text-black mt-8 leading-relaxed">
         To create a connected digital ecosystem where restaurants, businesses, and individuals can 
         grow, prosper, and build a more accessible, inclusive future — powered by technology, trust, 
         and innovation.
        </p>
        </ScrollReveal>

        <div
          onClick={() => {
            document.getElementById("portfolio-section")?.scrollIntoView({ behavior: "smooth" });
          }} 
        >
          <ScrollReveal>
          <div
              className="group mt-16 bg-[#1ECDFE] text-black pl-12 pr-4 py-[15px] rounded-full flex items-center gap-6 transition cursor-pointer"
          >
            <span className="font-medium text-[13px] tracking-widest">OUR WORK</span>
              <span className="w-10 h-10 rounded-full bg-black flex items-center justify-center transition-transform duration-500 ease-in group-hover:scale-[115%]">
                <svg
                  className='mt-[2px]'
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
                  <line x1="12" y1="1" x2="12" y2="19" />
                  <polyline points="19 12 12 19 5 12" />
                </svg>
              </span>
            </div>
          </ScrollReveal>  
          </div>
      </div>
    </section>
  )
}

export default OurVisionSection;
