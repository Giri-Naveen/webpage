'use client';
import React from 'react';
import ScrollReveal from '@/components/ScrollReveal';

const MessageSection = () => {
  return (
    <section data-section id='message-section' className="w-full px-6 md:px-8 lg:px-24 xl:px-40 py-20 md:py-20 xl:py-28 flex flex-col justify-between bg-white">
      <ScrollReveal>
      <h1 className="text-[32px] md:text-[36px] lg:text-[40px] xl:text-[44px] font-light text-center mb-16 font-sans">
        <span className="font-semibold">Let's</span> Talk
      </h1>
      </ScrollReveal>

        <form className="w-full max-w-5xl md:mt-10 xl:mt-16 mx-auto">
          <ScrollReveal>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 md:gap-10">
                <input
                    type="text"
                    placeholder="WHAT'S YOUR NAME"
                    className="border-b border-gray-300 focus:outline-none px-6 py-4 text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] tracking-widest font-medium placeholder:uppercase placeholder:text-[13px] placeholder:tracking-widest placeholder:text-gray-500"
                />
                <input
                    type="email"
                    placeholder="YOUR EMAIL"
                    className="border-b border-gray-300 focus:outline-none px-6 py-4 text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] tracking-widest font-medium placeholder:uppercase placeholder:text-[13px] placeholder:tracking-widest placeholder:text-gray-500"
                />
            </div>
            </ScrollReveal>

            <ScrollReveal>
            <textarea
                rows={10}
                placeholder="TELL US ABOUT OUR PROJECT"
                className="w-full border-b border-gray-300 focus:outline-none mt-10 md:mt-10 xl:mt-8 px-6 py-2 resize-none text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] tracking-widest font-medium placeholder:uppercase placeholder:text-[13px] placeholder:tracking-widest placeholder:text-gray-500"
            ></textarea>
            </ScrollReveal>

        <div className="flex flex-col md:gap-8 xl:flex-row xl:items-center xl:justify-between md:mt-6 xl:mt-10">
          <ScrollReveal>
          <p className="text-[15px] text-gray-400">
            <span className="text-[#1ECDFE] text-lg mr-1">*</span>
            We promise not to disclose your personal information to third parties.
          </p>
          </ScrollReveal>

          <ScrollReveal>
          <button
            type="submit"
            className="group mt-6 md:mt-0 bg-[#1ECDFE] text-black pl-8 md:pl-12 pr-4 py-[6px] md:py-2 lg:py-3 rounded-full flex items-center gap-6 md:gap-8 transition"
          >
           <span className="font-medium text-[11px] md:text-[12px] lg:text-[13px] tracking-widest">SEND MESSAGE</span>
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
          </button>
          </ScrollReveal>
        </div>
      </form>
    </section>
  );
};

export default MessageSection;
