'use client'
import React from 'react'
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

const CollabSection = () => {
  return (
    <section data-section className="bg-gray-100 text-black w-full px-40 py-28 font-sans">
      <ScrollReveal>
      <div className="max-w-7xl mx-auto relative">
        <p className="text-base text-gray-500 text-right mr-40">
          Looking to make your mark? We’ll help you turn <br /> 
          your brand into a success story.
        </p>
        <div className="absolute left-[86.5%] top-1/4 w-[30%] border-t border-gray-500" />
      </div>
      </ScrollReveal>

      <div className="flex flex-col justify-center items-center text-center mt-16">
        <ScrollReveal>
        <h2 className="text-[48px] md:text-[66px] font-sans font-semibold leading-tight text-black">
            Connect with <span className="font-light">us Today</span>
        </h2>
        </ScrollReveal>
        <ScrollReveal>
        <h1 className="text-[48px] md:text-[66px] font-sans font-semibold leading-tight text-black">
           <span className="font-light">We’re Here to </span>Support, Guide, and Grow <span className="font-light"> with You</span>
        </h1>
        </ScrollReveal>
        
        <Link href="/contact-us">
        <ScrollReveal>
          <div
              className="group mt-16 bg-[#1ECDFE] text-black pl-12 pr-4 py-[15px] rounded-full flex items-center gap-8 transition"
          >
            <span className="font-medium text-[13px] tracking-widest">CONTACT US</span>
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

export default CollabSection;