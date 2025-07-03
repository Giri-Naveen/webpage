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
    return () => {
      document.body.style.overflow = '';
    };
  }, []); 
  
  const links = [
    { label: 'Homepage', href: '/' },
    { label: 'About Us', href: '/about-us' },
    { label: 'Services', href: '/services' },
    { label: 'Our Team', href: '/team' },
    { label: 'Contact Us', href: '/contact-us' },
  ];

  return (
    <div className="fixed inset-0 z-30 bg-black text-white px-0 py-0">
      <div className="absolute pt-10 pl-16 text-[42px] font-semibold font-sans">
        S.
      </div>

      <button
        onClick={onClose}
        className="absolute top-[10%] right-[5%] w-6 h-6 z-40 flex items-center justify-center group"
      >
        <span className="absolute w-7 h-[3px] bg-white rotate-45 group-hover:opacity-80 transition"></span>
        <span className="absolute w-7 h-[3px] bg-white -rotate-45 group-hover:opacity-80 transition"></span>
      </button>

      <div className="mt-24 flex flex-col space-y-4 pl-40 pt-12">
        {links.map(({ label, href }) => {
          const isActive = pathname === href;

          return (
            <Link
              key={label}
              href={href}
              className={`group flex items-center text-[32px] font-semibold ${
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
