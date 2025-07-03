'use client';
import React from 'react';
import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';

const BlogTwoImageSection = () => {
  return (
    <section data-section className="w-full bg-white px-40 py-6 flex flex-col items-center">
      <div className="max-w-5xl w-full px-4">
        <div className="relative w-full h-[600px]">
          <Image
            src="/images/blog-2.webp"
            alt="Blog Visual"
            fill
            className="object-cover"
          />
        </div>

        {/*
        <div className="border-b border-gray-300 pb-12 px-2">
          <div className="flex flex-wrap justify-between text-sm text-gray-500 mt-12">
            <ScrollReveal>
              <div className="uppercase tracking-widest text-[13px]">
                  <span className="font-semibold">Category:</span>{' '}
                  <span className="font-bold text-black">Technology</span>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="uppercase tracking-widest text-[13px]">
                  <span className="font-semibold">Date:</span>{' '}
                  <span className="font-bold text-black">April 2023</span>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="uppercase tracking-widest text-[13px]">
                  <span className="font-semibold">Author:</span>{' '}
                  <span className="font-bold text-black">Paul Trueman</span>
              </div>
            </ScrollReveal>
          </div>
        </div>
        */}
      </div>
    </section>
  );
};

export default BlogTwoImageSection;
