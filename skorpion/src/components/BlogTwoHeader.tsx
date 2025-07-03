import React from 'react';
import Link from 'next/link';
import SimpleReveal from '@/components/SimpleReveal';

const BlogTwoHeader = () => {
  return (
    <section id='hero' data-section className="w-full py-28 flex flex-col items-center justify-center bg-white relative">
      <div className="relative flex items-center w-full justify-center mt-10">

        <SimpleReveal>
          <div className="absolute left-0 top-1/2 w-[40%] border-t border-gray-300" />
        </SimpleReveal>

        <SimpleReveal>
          <div className="bg-white px-8 z-10 text-[14px] whitespace-nowrap">
            <Link href="/" className="text-black tracking-widest font-semibold hover:text-[#1ECDFE]">HOMEPAGE</Link>
            <span className="mx-3 text-base">/</span>
            <span className="text-gray-400 font-semibold cursor-not-allowed tracking-widest">BLOG</span>
          </div>
        </SimpleReveal>
      </div>

      <SimpleReveal>
        <h1 className="text-6xl md:text-[68px] font-light font-sans text-black text-start mt-16">From Marketplace <span className='font-semibold'>Struggles to</span></h1>
      </SimpleReveal>
      
      <SimpleReveal>
        <h1 className="text-6xl md:text-[68px] font-light font-sans text-black text-start mt-3"><span className='font-semibold'>Nationwide </span>D2C Growth</h1>
      </SimpleReveal>
    </section>
  );
};

export default BlogTwoHeader;
