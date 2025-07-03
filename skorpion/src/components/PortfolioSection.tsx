'use client';
import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';

export default function PortfolioSection() {
  return (
    <section data-section id='portfolio-section' className="px-40 space-y-20 py-28 bg-white">

      <ScrollReveal>
        <h1 className="text-[40px] md:text-[66px] font-sans text-center font-semibold text-black">
          Restaurant Application & Admin Panel
        </h1>
      </ScrollReveal>

      <div className="flex justify-between items-center">
        <div className="flex flex-col items-start">
          <ScrollReveal>
          <div className="relative w-[380px] h-[480px] overflow-hidden group border border-black">
            <Image 
              src="/images/img1.png" alt="portfolio-1" fill className="object-contain transition-transform duration-500 group-hover:scale-110" />
          </div>
          </ScrollReveal>

          <div className="mt-8">
            <ScrollReveal>
              <h3 className="text-[26px] font-sans font-semibold text-black">Innaiku.com</h3>
            </ScrollReveal>  
          </div>
        </div>
        <div className="flex flex-col items-start">
          <ScrollReveal>
          <div className="relative w-[380px] h-[480px] overflow-hidden group border border-black">
            <Image 
              src="/images/img2.png" alt="portfolio-3" fill className="object-contain transition-transform duration-500 group-hover:scale-110" />
          </div>
          </ScrollReveal>

          <div className="mt-8">
            <ScrollReveal>
              <h3 className="text-[26px] font-sans font-semibold text-black">Restaurant customer app</h3>
            </ScrollReveal>  
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex flex-col items-start">
          <ScrollReveal>
          <div className="relative w-[380px] h-[480px] overflow-hidden group border border-black">
            <Image 
              src="/images/img3.png" alt="portfolio-3" fill className="object-contain transition-transform duration-500 group-hover:scale-110" />
          </div>
          </ScrollReveal>

          <div className="mt-8">
            <ScrollReveal>
              <h3 className="text-[26px] font-sans font-semibold text-black">Restaurant mobile admin panel</h3>
            </ScrollReveal>
          </div>
        </div>
        <div className="flex flex-col items-start">
          <ScrollReveal>
          <div className="relative w-[380px] h-[480px] overflow-hidden group border border-black">
            <Image 
              src="/images/img4.png" alt="portfolio-4" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
          </div>
          </ScrollReveal>

          <div className="mt-8">
            <ScrollReveal>
              <h3 className="text-[26px] font-sans font-semibold text-black">Restaurant web admin panel</h3>
            </ScrollReveal>
          </div>
        </div>
      </div>

      <ScrollReveal>
        <h1 className="text-[40px] md:text-[66px] font-sans text-center font-semibold text-black">
          Ecom Application & Admin Panel
        </h1>
      </ScrollReveal>

      <div className="flex justify-between items-center">
        <div className="flex flex-col items-start">
          <ScrollReveal>
          <div className="relative w-[380px] h-[480px] overflow-hidden group border border-black">
            <Image 
              src="/images/img5.png" alt="portfolio-5" fill className=" object-contain transition-transform duration-500 group-hover:scale-110" />
          </div>
          </ScrollReveal>
          <div className="mt-8">
            <ScrollReveal>
              <h3 className="text-[26px] font-sans font-semibold text-black">Ecom</h3>
            </ScrollReveal>
          </div>
        </div>
        <div className="flex flex-col items-start">
          <ScrollReveal>
         <div className="relative w-[380px] h-[480px] overflow-hidden group border border-black">
            <Image 
              src="/images/img6.png" alt="portfolio-6" fill className="object-contain transition-transform duration-500 group-hover:scale-110" />
          </div>
          </ScrollReveal>

          <div className="mt-8">            
            <ScrollReveal>
              <h3 className="text-[26px] font-sans font-semibold text-black">Ecom customer app</h3>
            </ScrollReveal>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex flex-col items-start">
          <ScrollReveal>
          <div className="relative w-[380px] h-[480px] overflow-hidden group border border-black">
            <Image 
              src="/images/img7.png" alt="portfolio-7" fill className="object-contain transition-transform duration-500 group-hover:scale-110" />
          </div>
          </ScrollReveal>

          <div className="mt-8">
            <ScrollReveal>
              <h3 className="text-[26px] font-sans font-semibold text-black">Ecom product listing</h3>
            </ScrollReveal>
          </div>
        </div>
        <div className="flex flex-col items-start">
          <ScrollReveal>
         <div className="relative w-[380px] h-[480px] overflow-hidden group border border-black">
            <Image 
              src="/images/img8.png" alt="portfolio-8" fill className="object-contain transition-transform duration-500 group-hover:scale-110" />
          </div>
          </ScrollReveal>

          <div className="mt-8">
            <ScrollReveal>
              <h3 className="text-[26px] font-sans font-semibold text-black">Ecom web admin panel</h3>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}