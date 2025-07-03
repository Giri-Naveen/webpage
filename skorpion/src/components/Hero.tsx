import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Navigation from "@/components/Navigation";
import SimpleReveal from '@/components/SimpleReveal';

const Hero = () => {
  const [navOpen, setNavOpen] = useState(false);
  const scrollTextRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const rotation = scrollY * 0.3; 
      if (scrollTextRef.current) {
        scrollTextRef.current.style.transform = `rotate(${rotation}deg)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <section data-section id='hero' data-bg-section className="flex flex-row justify-between items-center relative w-full h-screen bg-black text-white overflow-hidden">

      <div className="max-w-4xl pl-8 pr-6 md:pl-40 mb-6">
        <SimpleReveal>
        <h1 className="text-5xl md:text-[74px] font-sans font-light leading-tight">
          <span className="font-semibold">Creating</span> a Better<br />
          <span className="font-semibold">World</span> Tomorrow
        </h1>
        </SimpleReveal>

        <SimpleReveal>
        <p className="mt-14 text-gray-400 max-w-sm text-[15px] leading-relaxed">
          Skorpion delivers seamless digital solutions that enable smarter decisions and stronger 
          growth. We help businesses save time, optimize operations, and stay competitive. With 
          Skorpion, the future is built today. 
        </p>
        </SimpleReveal>

        <SimpleReveal>
        <div className="mt-16 flex items-center gap-6">
          <Link href="/services">
            <div className="group flex items-center justify-between bg-[#1ECDFE] text-black rounded-full pl-12 pr-4 py-4">
              <span className="font-semibold text-[13px] tracking-widest">WHAT WE DO</span>
              <span className="ml-8 w-10 h-10 rounded-full bg-black flex items-center justify-center transition-transform duration-500 ease-in group-hover:scale-[115%]">
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

          {/*
          <Link href="/about-us">
            <div className="group flex items-center justify-between text-white rounded-full pl-4 pr-2 py-4 hover:text-gray-300 transition">
              <span className="font-medium text-[13px] tracking-widest mr-4">VIEW WORKS</span>
              <span className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center transition-transform duration-500 ease-in group-hover:scale-[115%]">
                <svg
                  className='ml-1'
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
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
          */}

        </div>
        </SimpleReveal>
      </div>

      <div className="absolute top-[30%] right-[6%] items-center">
      <SimpleReveal>
        <img
          src="/images/white_logo.png"
          alt="Skorpion Logo"
          className="w-[350px] h-auto object-contain"
        />
      </SimpleReveal>
      </div>

      <div className="absolute bottom-[15%] right-[14%] flex items-center justify-center">
        <SimpleReveal>
        <div className="relative w-32 h-32 group">
          <div
            ref={scrollTextRef}
            className="absolute top-0 left-0 w-full h-full"
            style={{ willChange: "transform" }}
          >
            <svg
              viewBox="0 0 100 100"
              className="absolute top-0 left-0 w-full h-full"
            >
              <defs>
                <path
                  id="circlePath"
                  d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
                  fill="none"
                />
              </defs>
              <text className="fill-gray-400 group-hover:fill-white transition-colors duration-300" fontSize="10" fontFamily="sans-serif" letterSpacing="3">
                <textPath href="#circlePath" startOffset="50%" textAnchor="middle">
                  - SCROLL DOWN - SCROLL DOWN
                </textPath>
              </text>
            </svg>
          </div>

          <div 
             onClick={() => {
              document.getElementById("next-section")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[70px] h-[70px] rounded-full bg-[#1ECDFE] flex items-center justify-center cursor-pointer"
          >
            <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center transition-transform duration-500 ease-in group-hover:scale-[115%]">  
              <svg
                className='mt-1'
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
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
            </div>  
          </div>
        </div>
        </SimpleReveal>
      </div>
    </section>
  );
};

export default Hero;

