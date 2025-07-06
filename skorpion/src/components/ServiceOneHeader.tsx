import React from 'react';
import Link from 'next/link';
import SimpleReveal from './SimpleReveal';

const ServiceOneHeader = () => {
    return (
    <section data-section id='hero' className="w-full pt-28 px-8 md:px-8 lg:px-24 xl:px-40 flex flex-col items-start bg-white">
      <div className="relative flex w-full mt-10">
         <SimpleReveal>
        <div className="hidden xl:block absolute right-[102%] top-1/2 w-full border-t border-gray-300" />
         </SimpleReveal>
        
         <SimpleReveal>
        <div className="bg-white mt-6 md:mt-5 xl:mt-0 px-0 z-10 text-[11px] md:text-[14px] whitespace-nowrap">
          <Link href="/" className="text-black tracking-widest font-semibold hover:text-[#1ECDFE]">HOMEPAGE</Link>
          <span className="mx-3 text-black text-base">/</span>
          <Link href="/work" className="text-black tracking-widest font-semibold hover:text-[#1ECDFE]">SERVICES</Link>
          <span className="mx-3 text-black text-base">/</span>
          <span className="text-gray-400 font-semibold cursor-not-allowed tracking-widest">SERVICE</span>
        </div>
         </SimpleReveal>
      </div>
      
       <SimpleReveal>
      <h1 className="text-[34px] md:text-[54px] lg:text-[64px] xl:text-[74px] font-light font-sans text-black text-start mt-16 md:mt-14 lg:mt-16 leading-[1.0]"><span className='font-semibold'>Innaiku.com</span></h1>
       </SimpleReveal>
       {/* <h1 className="text-6xl md:text-[74px] font-light font-sans text-black text-start mt-3"><span className='font-semibold'>Identity </span>Design</h1> */}
      
      <div
         onClick={() => {
            document.getElementById("about-service")?.scrollIntoView({ behavior: "smooth" });
          }} 
        className="mt-14 md:mt-16 pt-1 flex items-center gap-2 md:gap-4 cursor-pointer"
      >
         <SimpleReveal>
         <span className="tracking-widest text-black text-[11px] md:text-[13px] font-semibold">ABOUT SERVICE</span>
         </SimpleReveal>
         
        <SimpleReveal>
         <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
          <svg
                className='mt-[2px]'
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
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

export default ServiceOneHeader;
