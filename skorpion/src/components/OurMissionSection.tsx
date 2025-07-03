'use client'
import React from 'react'
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

const OurMissionSection = () => {
  return (
    <section data-section id='mission-section' className="bg-white text-black w-full px-6 md:px-40 py-28 font-sans">
      <ScrollReveal>
      <div className="max-w-7xl mx-auto relative">
        <p className="text-base text-[#6B6B6B] text-right md:mr-40">
          Building brands with purpose and passion <br /> 
          learn why we do what we do.
        </p>
        <div className="absolute left-[86.5%] top-1/4 w-[30%] border-t border-[#6B6B6B]" />
      </div>
      </ScrollReveal>

      <div className="flex flex-col justify-center items-center text-center mt-16 max-w-4xl mx-auto">
        <ScrollReveal>
        <h1 className="text-[40px] md:text-[66px] font-sans font-semibold text-black">
          Our Mission
        </h1>
        </ScrollReveal>

        <ScrollReveal>
        <p className="text-sm md:text-[18px] text-black mt-8 leading-relaxed">
          To enable entrepreneurs and businesses across industries to operate smarter, grow sustainably, 
          and unlock new opportunities, by providing cost‑effective, customizable digital platforms, 
          seamless logistics, secure payments, and innovative investment tools that put people in control 
          of their success.
        </p>
        </ScrollReveal>

        <Link href="/services">
        <ScrollReveal>
          <div
              className="group mt-16 bg-[#1ECDFE] text-black pl-12 pr-4 py-[15px] rounded-full flex items-center gap-8 transition"
          >
            <span className="font-medium text-[13px] tracking-widest">WHAT WE DO</span>
              <span className="w-10 h-10 rounded-full bg-black flex items-center justify-center transition-transform duration-500 ease-in group-hover:scale-[115%]">
                <svg
                  className='ml-[3px]'
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
    </section>
  )
}

export default OurMissionSection;
