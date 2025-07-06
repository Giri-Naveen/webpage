import React from 'react';
import Link from 'next/link';
import SimpleReveal from '@/components/SimpleReveal';

const BlogTwoHeader = () => {
  return (
     <section id='hero' data-section className="w-full pt-28 pb-20 md:pb-20 lg:pb-24 xl:py-28 flex flex-col items-center justify-center bg-white relative">
      <div className="relative flex items-center w-full justify-center mt-16 md:mt-16 xl:mt-10">

        <SimpleReveal>
          <div className="hidden md:block absolute left-0 top-1/2 md:w-[36%] xl:w-[40%] border-t border-gray-300" />
        </SimpleReveal>

        <SimpleReveal>
          <div className="bg-white px-8 z-10 text-[12px] md:text-[14px] whitespace-nowrap">
            <Link href="/" className="text-black tracking-widest font-semibold hover:text-[#1ECDFE]">HOMEPAGE</Link>
            <span className="mx-3 text-base">/</span>
            <span className="text-gray-400 font-semibold cursor-not-allowed tracking-widest">BLOG</span>
          </div>
        </SimpleReveal>
      </div>

      <SimpleReveal>
        <h1 className="px-4 md:px-0 text-[32px] md:text-[46px] lg:text-[56px] xl:text-[68px] font-light font-sans text-black text-center mt-16 leading-[1.0]">From Marketplace <span className='font-semibold'>Struggles to</span></h1>
      </SimpleReveal>
      
      <SimpleReveal>
        <h1 className="px-6 md:px-0 text-[32px] md:text-[46px] lg:text-[56px] xl:text-[68px] font-light font-sans text-black text-center md:mt-3 leading-[1.0]"><span className='font-semibold'>Nationwide </span>D2C Growth</h1>
      </SimpleReveal>
    </section>
  );
};

export default BlogTwoHeader;
