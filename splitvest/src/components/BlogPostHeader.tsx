'use client';
import Image from 'next/image';
import Link from 'next/link';
import {  FaTwitter,  FaFacebookF,  FaInstagram,  FaPinterestP, FaBehance,} from 'react-icons/fa';

const BlogPostHeader = () => {
  return (
    <div className="mt-48 md:mt-44 lg:mt-40 xl:mt-36 px-6 md:px-8 xl:px-24 py-6 text-white">
      <div className="flex items-center gap-3 md:gap-4 xl:gap-5 text-[17px] xl:text-[18px] mb-3 md:mb-3 xl:mb-4 text-[#B4B4CC]">
        <span className='tracking-wide'>Share:</span>
        <FaTwitter className="hover:text-blue-500 cursor-pointer" />
        <FaFacebookF className="hover:text-blue-500 cursor-pointer" />
        <FaInstagram className="hover:text-blue-500 cursor-pointer" />
        <FaPinterestP className="hover:text-blue-500 cursor-pointer" />
        <FaBehance className="hover:text-blue-500 cursor-pointer" />
      </div>

      <div className="text-[17px] text-[#B4B4CC] space-x-2 md:space-x-3 mb-6">
        <Link href="/" className="hover:text-blue-500">
          Home
        </Link>
        <span>/</span>
        <Link href="/" className="hover:text-blue-500">
          Blog
        </Link>
        <span>/</span>
        <span>
          MetaPortal's NFT Goes Public in Nod to Crypto Adoption
        </span>
      </div>

      <div className="rounded-[8px] overflow-hidden">
        <Image
          src="/images/bg.png"
          alt="Featured"
          width={1600}
          height={800}
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default BlogPostHeader;
