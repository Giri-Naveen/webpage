'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavigationProps {
  onClose: () => void;
}

const Navigation = ({ onClose }: NavigationProps) => {
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    document.body.style.height = '100%';
    document.documentElement.style.height = '100%';

    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      document.body.style.height = '';
      document.documentElement.style.height = '';
    };
  }, []);
  
  const links = [
    { label: 'Homepage', href: '/' },
    { label: 'About Us', href: '/about-us' },
    { label: 'Services', href: '/work' },
    { label: 'Our Team', href: '/team' },
    { label: 'Contact Us', href: '/contact-us' },
  ];

  return (
    <div className="fixed inset-0 z-30 bg-black text-white px-0 py-0">
      <div className="absolute pt-5 pl-8 md:pt-4 md:pl-8 lg:pt-6 lg:pl-10 xl:pt-6 xl:pl-16 text-[36px] md:text-[38px] lg:text-[40px] xl:text-[42px] font-semibold font-sans">
        S.
      </div>

      <button
        onClick={onClose}
        className="absolute top-8 right-9 md:top-8 md:right-9 lg:top-10 lg:right-[44px] xl:top-12 xl:right-16 w-6 h-6 z-40 flex items-center justify-center group"
      >
        <span className="absolute w-7 h-[3px] bg-white rotate-45 group-hover:opacity-80 transition"></span>
        <span className="absolute w-7 h-[3px] bg-white -rotate-45 group-hover:opacity-80 transition"></span>
      </button>

      <div className="flex flex-col space-y-4 items-center justify-center h-screen">
        {links.map(({ label, href }) => {
          const isActive = pathname === href;

          return (
            <Link
              key={label}
              href={href}
              className={`group flex items-center text-[24px] md:text-[28px] lg:text-[30px] xl:text-[32px] font-semibold ${
                isActive ? 'text-[#1ECDFE]' : 'text-gray-300 hover:text-white'
              } transition-colors duration-300`}
            >
            <span className="inline-block w-2 h-2 rounded-full bg-gray-400 mr-1 transform -translate-x-3 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300"></span>

            <span className="transform group-hover:translate-x-2 transition-transform duration-300">
              {label}
            </span>
          </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Navigation;
