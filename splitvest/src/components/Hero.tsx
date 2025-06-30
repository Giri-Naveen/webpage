'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const imageList = [
  '/images/image1.jpg',
  '/images/article-1.png',
  '/images/image2.jpg',
  '/images/image4.jpg',
];

const images = [...imageList, ...imageList.slice(0, 2)];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const imageWidth = 460;
  const transitionDuration = 1000;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    if (currentIndex >= imageList.length + 1) {
      setTimeout(() => {
        container.style.transition = 'none';
        container.style.transform = `translateX(0px)`;
        setCurrentIndex(1);
      }, transitionDuration);
    } else {
      container.style.transition = `transform ${transitionDuration}ms ease-in-out`;
      container.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
    }
  }, [currentIndex]);

  return (
    <section
      className="relative w-full h-full py-24 pl-20 text-white bg-transparent overflow-hidden"
      /*
      style={{
        backgroundImage: "url('/images/hero.jpg')",
      }} 
      */
    >
      {/* <div className="absolute inset-0 bg-black opacity-60 z-0" /> */}

      <div className="relative z-10 w-full mx-auto flex flex-col md:flex-row items-center md:items-start gap-24">
        <div className="max-w-xs">
          <h2
            className="mt-40 text-start text-3xl md:text-[38px] font-normal tracking-wider"
            style={{ color: '#e8d2ff' }}
          >
            SPLITVEST
          </h2>
          <p className="mt-10 text-[#B4B4CC] text-[17px] tracking-wide leading-normal">
            Splitvest is a modern platform for investing in premium real estate through fractional ownership. 
            By tokenizing properties on the blockchain, it offers secure, fully managed access to rental income 
            and long-term appreciation — without the hassle of full ownership. Splitvest makes real estate 
            simple,transparent, and flexible for today’s investors, offering a smarter way to grow wealth 
            through one of India’s most stable and rewarding asset classes. 
          </p>
          <button 
            className="mt-10 text-white px-7 py-3 text-[15px] tracking-wide rounded-[8px]"
            style={{
              border: '3px solid blue',
              color: '#ffffff',
            }}
          >
            Know more
          </button>
        </div>

        <div className="relative w-full h-auto mt-20 overflow-hidden">
          <div
            ref={containerRef}
            className="flex gap-6"
            style={{
              width: `${images.length * imageWidth}px`,
            }}
          >
            {images.map((src, i) => (
              <div key={i} className="flex-shrink-0 relative">
                <div className="rounded-[20px] overflow-hidden border border-[#e8d2ff] p-5 w-[440px] h-[600px]">
                  <Image
                    src={src}
                    alt={`Legend ${i + 1}`}
                    width={400}
                    height={560}
                    className="rounded-[20px] object-cover w-[400px] h-[560px]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
