'use client';
import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';

const portfolioData = [
  {
    title: 'Restaurant Application & Admin Panel',
    items: [
      { image: '/images/img1.png', label: 'Innaiku.com' },
      { image: '/images/img2.png', label: 'Restaurant customer app' },
      { image: '/images/img3.png', label: 'Restaurant mobile admin panel' },
      { image: '/images/img4.png', label: 'Restaurant web admin panel' },
    ],
  },
  {
    title: 'Ecom Application & Admin Panel',
    items: [
      { image: '/images/img5.png', label: 'Ecom' },
      { image: '/images/img6.png', label: 'Ecom customer app' },
      { image: '/images/img7.png', label: 'Ecom product listing' },
      { image: '/images/img8.png', label: 'Ecom web admin panel' },
    ],
  },
];

export default function PortfolioSection() {
  return (
    <section
      data-section
      id="portfolio-section"
      className="px-8 md:px-8 lg:px-24 xl:px-40 space-y-20 py-28 bg-white"
    >
      {portfolioData.map((section, sectionIndex) => (
        <div key={sectionIndex} className="space-y-20">
          <ScrollReveal>
            <h1 className="text-[36px] md:text-[48px] lg:text-[58px] xl:text-[66px] font-sans text-center font-semibold text-black">
              {section.title}
            </h1>
          </ScrollReveal>

          {Array.from({ length: Math.ceil(section.items.length / 2) }).map(
            (_, rowIndex) => (
              <div
                key={rowIndex}
                className="grid grid-cols-1 md:grid-cols-2 md:gap-x-10 lg:gap-x-24 xl:gap-x-52 gap-y-16 md:px-[10px] lg:px-0"
              >
                {section.items
                  .slice(rowIndex * 2, rowIndex * 2 + 2)
                  .map((item, itemIndex) => (
                    <div key={itemIndex} className="flex flex-col text-center items-center">
                      <ScrollReveal>
                        <div className="relative w-[300px] h-[400px] md:w-[340px] md:h-[440px] lg:w-[380px] lg:h-[480px] overflow-hidden group border border-black">
                          <Image
                            src={item.image}
                            alt={item.label}
                            fill
                            className="object-contain transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>
                      </ScrollReveal>
                      <div className="mt-8">
                        <ScrollReveal>
                          <h3 className="text-[20px] md:text-[22px] lg:text-[24px] xl:text-[26px] font-sans font-semibold text-black">
                            {item.label}
                          </h3>
                        </ScrollReveal>
                      </div>
                    </div>
                  ))}
              </div>
            )
          )}
        </div>
      ))}
    </section>
  );
}
