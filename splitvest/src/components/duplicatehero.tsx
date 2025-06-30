'use client';
import Image from 'next/image';

export default function Hero() {
  return (
    <section
      className="relative py-24 pl-24 text-white bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: "url('/images/hero.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60 z-0" />

      {/* Content Container */}
      <div className="relative z-10 w-full mx-auto flex flex-col md:flex-row items-center md:items-start gap-20">
        
        {/* Left Text Block */}
        <div className="max-w-xs">
          <h2 className="text-4xl md:text-5xl font-light tracking-widest leading-tight text-[#e8d2ff]">
            META <br /> LEGENDS
          </h2>
          <p className="mt-6 text-gray-300 text-base leading-relaxed">
            Meta Legends represent a collection of 17,000 legends categorized by level of rarity and generated with hundreds of elements. The Legends are stored as ERC-721 tokens on the Ethereum blockchain and hosted on IPFS.
          </p>
          <button className="mt-6 border-2 border-[#e8d2ff] text-white px-6 py-3 rounded-md hover:bg-[#e8d2ff] hover:text-black transition-all duration-300">
            BUY ON OPENSEA
          </button>
        </div>

        {/* Right Image Cards */}
        <div className="relative flex gap-6 pr-0">
          {/* First Image */}
          <div className="rounded-xl overflow-hidden w-[460px] h-[600px] border border-[#e8d2ff] p-5">
            <Image
              src="/images/article-1.png"
              alt="Legend 1"
              width={420}
              height={100}
              className="rounded-lg object-fill"
            />
          </div>

          {/* Second Image (partially visible) */}
          <div className="relative rounded-xl overflow-hidden border border-[#e8d2ff] p-5 mr-[-400px]">
            <Image
              src="/images/image2.jpg"
              alt="Legend 2"
              width={300}
              height={400}
              className="rounded-[8px] object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <div className="w-12 h-12 bg-white/30 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
