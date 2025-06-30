'use client'
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const CollectionSection =() => {
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);
  const [images, setImages] = useState([
    "/images/article-1.png",
    "/images/image1.jpg",
    "/images/image2.jpg",
    "/images/image4.jpg",
    "/images/thumbnail.png",
    "/images/hero.jpg",
    "/images/logo.png",
    "/images/article-1.png",
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      const i = Math.floor(Math.random() * 8);
      let j = Math.floor(Math.random() * 8);
      while (j === i) j = Math.floor(Math.random() * 8);

      const apply = (idx: number) => {
        const img = imageRefs.current[idx];
        if (img) img.classList.add("tilt-swap");
      };

      const remove = (idx: number) => {
        const img = imageRefs.current[idx];
        if (img) img.classList.remove("tilt-swap");
      };

      apply(i);
      apply(j);

      setTimeout(() => {
        setImages(prev => {
          const next = [...prev];
          [next[i], next[j]] = [next[j], next[i]];
          return next;
        });
      }, 300);

      setTimeout(() => {
        remove(i);
        remove(j);
      }, 600);
    }, 4000);

    return () => clearInterval(interval);
  }, []);


  const getSizeClass = (i: number) => {
    const large = "w-[320px] h-[320px]";
    const small = "w-[200px] h-[200px]";
    return [0, 2, 5, 7].includes(i) ? large : small;
  };

  return (
    <section id="collection" className="py-20 text-center text-white">
       <div className="px-24"> 
        <h2
            className="text-center text-3xl md:text-[38px] font-normal tracking-wider"
            style={{ color: '#e8d2ff' }}
        >
            OUR COLLECTION
        </h2>

        <div className="flex flex-wrap justify-center gap-x-2 gap-y-6 mt-36 max-w-7xl mx-auto">
            <div className="flex items-end gap-5 w-full justify-center">
            {[0, 1, 2, 3].map((i) => (
              <Image
                key={i}
                src={images[i]}
                alt={`Legend ${i + 1}`}
                width={1}
                height={1}
                ref={(el) => { imageRefs.current[i] = el; }}
                className={`rounded-[8px] ${getSizeClass(i)} p-5 border border-[#B4B4CC] hover:shadow-[0_0_4px_4px_#e65bff] transition duration-300`}
              />
            ))}
          </div>

          <div className="flex items-start gap-5 w-full justify-center">
            {[4, 5, 6, 7].map((i) => (
              <Image
                key={i}
                src={images[i]}
                alt={`Legend ${i + 1}`}
                width={1}
                height={1}
                ref={(el) => { imageRefs.current[i] = el; }}
                className={`rounded-[8px] ${getSizeClass(i)} p-5 border border-[#B4B4CC] hover:shadow-[0_0_4px_4px_#e65bff] transition duration-300`}
              />
            ))}
          </div>
        </div>

        <p className="mt-[122px] max-w-4xl mx-auto text-[23px] tracking-wide text-[#B4B4CC]">
            Meta Legends represent a collection of 17,000 legends categorized by level of rarity and generated with hundreds 
            of elements. The Legends are stored as ERC-721 tokens on the Ethereum blockchain and hosted on IPFS.
        </p>

        <button 
            className="mt-10 px-7 py-3 text-[15px] tracking-wide rounded-[8px] hover:bg-purple-800 transition"
            style={{
                border: '3px solid blue',
                color: '#ffffff',
            }}
        >
            SEE ALL COLLECTION
        </button>
      </div>

      <div className="flex items-center justify-center w-full mt-36">
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
}

export default CollectionSection;