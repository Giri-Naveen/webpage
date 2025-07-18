'use client';
import React from 'react';

const BlogPostSection = () => {
  return (
    <section className="text-white px-6 md:px-8 xl:px-24 pt-6 pb-8 md:pb-10 lg:pb-12 xl:pb-14">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
            <span className="bg-black text-[#B4B4CC] text-[15px] md:text-[16px] px-4 py-2 rounded-full">
                June 01, 2022
            </span>
            <span className="bg-black text-[#B4B4CC] text-[15px] md:text-[16px] px-4 py-2 rounded-full">
                By Admin
            </span>
            <span className="bg-black text-[#B4B4CC] text-[15px] md:text-[16px] px-4 py-2 rounded-full">
                3 Comments
            </span>
        </div>


        <h2
          className="text-left text-[32px] md:text-[34px] lg:text-[36px] xl:text-[38px] font-normal tracking-wide leading-[1.0]"
          style={{ color: '#e8d2ff' }}
        >
            MetaPortal’s NFT Goes Public In Nod To Crypto Adoption
        </h2>

        <div className="text-[15px] md:text-[16px] font-medium text-[#B4B4CC] tracking-wide mt-6 uppercase">
          TOKENS, NFTS, CRYPTO
        </div>

        <p className="text-[#B4B4CC] text-[17px] md:text-[18px] leading-relaxed mt-6">
          Suspendisse eu velit est. Cras nec vestibulum quam. Donec tincidunt purus nec enim tincidunt, 
          sit amet facilisis massa laoreet. Integer mollis nec sapien eu lacinia. Nunc eu massa dictum, 
          vulputate neque ac, porta mauris. Sed sollicitudin nisi augue, a gravida turpis elementum vel. 
          Curabitur sagittis quis diam et rhoncus. Nam pellentesque imperdiet aliquet. Sed non ante malesuada, 
          ultrices sem at, tempus libero.
        </p>

        <p className="text-[#B4B4CC] text-[17px] md:text-[18px] leading-relaxed mt-6">
          Duis eu lorem ut mauris pulvinar auctor. Maecenas et dapibus orci, eleifend euismod justo. 
          Quisque luctus turpis eu tristique feugiat. Praesent ac magna feugiat, interdum lacus ac, 
          interdum dui. Pellentesque id quam quis enim malesuada rutrum. Orci varius natoque penatibus 
          et magnis dis parturient montes, nascetur ridiculus mus. Nulla vel neque et ex vestibulum 
          elementum at sed lacus. Fusce imperdiet mauris ac mi viverra viverra. Maecenas pharetra nibh 
          non arcu finibus, vel ultrices arcu porttitor. Quisque ac nisl id lectus faucibus pulvinar nec 
          ut nisl. Duis ultricies ut lacus sed rutrum.
        </p>

        <p className="text-[#B4B4CC] text-[17px] md:text-[18px] leading-relaxed mt-6">
          Nam et malesuada ante, in convallis libero. Aenean sollicitudin egestas ante, eget porttitor leo 
          fringilla sit amet. Nam cursus neque ligula, in egestas elit porttitor vel. Vestibulum ultricies 
          tempus orci a auctor. Curabitur sed pretium lacus, eget cursus dui. Aliquam at ex sit amet urna 
          interdum dignissim vel non dolor. Pellentesque mi nibh, sollicitudin at neque id, tincidunt molestie 
          lorem. Nulla facilisi. Phasellus viverra mi ut sapien efficitur, sit amet suscipit lorem commodo. 
          Interdum et malesuada fames ac ante ipsum primis in faucibus.
        </p>
      </div>
    </section>
  );
};

export default BlogPostSection;
