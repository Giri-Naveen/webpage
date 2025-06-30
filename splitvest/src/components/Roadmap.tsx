import React, { useEffect, useState } from 'react';
import { FaShoePrints } from 'react-icons/fa';

type RoadmapItem = {
  phase: string;
  date: string;
  title: string;
  content: string;
};

const timelineData: RoadmapItem[] = [
  {
    phase: 'PHASE 01',
    date: 'October 09, 2022',
    title: 'Why splitvest?',
    content:
      'Splitvest unlocks premium real estate investing for everyone through secure fractional ownership. Earn passive income and long-term growth — without owning the whole property or managing it.',
  },
  {
    phase: 'PHASE 02',
    date: 'October 17, 2022',
    title: 'How often will I receive payouts?',
    content:
      'Rental income is distributed as monthly payouts directly to your Meta mask wallet. Your earnings depend on the property’s rental performance and your ownership share. ',
  },
  {
    phase: 'PHASE 03',
    date: 'October 28, 2022',
    title: 'What kind of properties do you offer?',
    content:
      'Splitvest offers carefully curated commercial and residential properties in high-demand Indian cities. We focus on assets that generate stable rental income and have strong appreciation potential.',
  },
  {
    phase: 'PHASE 04',
    date: 'November 11, 2022',
    title: 'Can I sell my share anytime?',
    content:
      "Yes, you can sell your fractional ownership through Splitvest’s upcoming resale marketplace or on external platforms like OpenSea. This gives you the flexibility to list your NFTs (ownership shares) and exit your investment either partially or fully, depending on buyer interest. Whether you're looking for liquidity or adjusting your portfolio, our secondary marketplace makes it easy to trade your real estate-backed NFTs with transparency and ease.",
  },
  /*
  {
    phase: 'PHASE 05',
    date: 'November 29, 2022',
    title: 'Mini Game Launch For Community',
    content:
      'Morbi non dignissim erat, a blandit felis. Suspendisse nec lorem vel orci varius congue ut vitae est. Nam quis tempus nisl. Fusce posuere nibh a mi molestie, sit amet ornare lectus interdum.',
  },

  {
    phase: 'PHASE 06',
    date: 'December 03, 2022',
    title: 'Mini Game Launch For Community',
    content:
      'Morbi non dignissim erat, a blandit felis. Suspendisse nec lorem vel orci varius congue ut vitae est. Nam quis tempus nisl. Fusce posuere nibh a mi molestie, sit amet ornare lectus interdum.',
  },
  {
    phase: 'PHASE 07',
    date: 'December 20, 2022',
    title: 'Mini Game Launch For Community',
    content:
      'Morbi non dignissim erat, a blandit felis. Suspendisse nec lorem vel orci varius congue ut vitae est. Nam quis tempus nisl. Fusce posuere nibh a mi molestie, sit amet ornare lectus interdum.',
  },
  {
    phase: 'PHASE 08',
    date: 'December 31, 2022',
    title: 'Mini Game Launch For Community',
    content:
      'Morbi non dignissim erat, a blandit felis. Suspendisse nec lorem vel orci varius congue ut vitae est. Nam quis tempus nisl. Fusce posuere nibh a mi molestie, sit amet ornare lectus interdum.',
  },
  */
];

const Roadmap = () => {
  const [index, setIndex] = useState(0);
  const visibleCards = 4;
  const totalSlides = timelineData.length - visibleCards + 1;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % totalSlides);
    }, 6000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <section className="text-white py-16">
        <div className='px-24'>
            <h2
                className="text-center text-3xl md:text-[38px] font-normal tracking-wider"
                style={{ color: '#e8d2ff' }}
            >
                ROADMAP
            </h2>
            
            <div className="relative mt-36 mb-8">
                <div className="relative rounded-[8px] z-10 py-14 px-14 flex justify-between items-center">
                    {Array.from({ length: 12 }).map((_, i) => (
                    <FaShoePrints key={i} className="text-[#B4B4CC] text-xl transform
                        ${i % 2 === 0 ? 'rotate- translate-y-1' : 'rotate-180 -translate-y-1'}`}" 
                    />
                    ))}
                </div>
                <svg className="absolute inset-0 w-full h-full z-0 rounded-[8px] pointer-events-none">
                    <rect
                    x="1"
                    y="1"
                    width="99.5%"
                    height="90%"
                    rx="16"
                    ry="16"
                    fill="none"
                    stroke="#B4B4CC"
                    strokeWidth="1"
                    strokeDasharray="12 12"
                    />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto relative overflow-hidden">
                <div className="absolute top-[0px] left-0 w-full h-5 z-10 overflow-hidden">
                    <div
                    className="w-[200%] flex items-center relative transition-transform duration-1000 ease-in-out"
                    style={{ transform: `translateX(-${index * 12.5}%)` }}
                    >
                    <div className="absolute top-1/2 left-0 w-full h-px bg-[#b4b4cc] opacity-60 transform -translate-y-1/2 z-0" />

                    {timelineData.map((_, i) => (
                        <div
                        key={i}
                        className="w-1/8 flex justify-center items-center z-10"
                        style={{ width: '12.5%' }}
                        >
                        <div className="w-5 h-5 rounded-full border-[5px] border-purple-500 bg-[#1f0f3a]" />
                        </div>
                    ))}
                    </div>
                </div>

                <div
                    className="flex transition-transform duration-1000 ease-in-out pt-14"
                    style={{ transform: `translateX(-${index * 25}%)` }}
                >
                    {timelineData.map((item, idx) => (
                        <div key={idx} className="w-1/4 px-3 flex-shrink-0">
                            <div className="bg-[#1e0d38] border border-[#B4B4CC] border-opacity-30 rounded-[8px] px-[44px] py-12 shadow-lg relative">
                                <div className="absolute top-0 left-0 bg-[#3a2154] px-10 py-2 rounded-tl-[8px] rounded-br-[8px] rounded-bl-md text-[15px] tracking-wide text-[#B4B4CC]">
                                    {item.phase}
                                </div>
                                <div className="mt-4 text-[19px] text-[#B4B4CC] mb-2">{item.date}</div>
                                <div className="text-[18px] leading-tight mb-4">{item.title}</div>
                                <p className="text-[17px] text-[#B4B4CC]">{item.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <div className="flex items-center justify-center w-full mt-40">
            <div className="flex-1 h-px bg-[#b4b4cc] opacity-40" />

            <div className="flex items-center gap-3 px-6">
                <div className="w-[12px] h-[12px] rounded-full border-2 border-[#b4b4cc] opacity-70" />
                <div className="w-[200px] h-[12px] rounded-full border-2 border-[#b4b4cc] opacity-70" />
                <div className="w-[12px] h-[12px] rounded-full border-2 border-[#b4b4cc] opacity-70" />
            </div>

            <div className="flex-1 h-px bg-[#b4b4cc] opacity-40" />
        </div>
    </section>
  );
};

export default Roadmap;