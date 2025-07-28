'use client';
import React from "react";
import Image from "next/image";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import ScrollReveal from "@/components/ScrollReveal";

const Footer = () => {
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Services', path: '/work' },
    { name: 'Our Team', path: '/team' },
    { name: 'Contact Us', path: '/contact-us' },
  ];

  const legalLinks = [
    { name: 'Terms and Conditions', path: '/policies/terms-and-conditions' },
    { name: 'Privacy Policy', path: '/policies/privacy-policy' },
    { name: 'Payment Policy', path: '/policies/payment-policy' },
    { name: 'Refund Policy', path: '/policies/refund-policy' },
  ];

  return (
    <footer data-section data-bg-section className="bg-black w-full text-white md:px-8 lg:px-24 xl:pl-40 xl:pr-10 pt-16 pb-8 md:pt-20 md:pb-8">
      <div className="flex flex-col items-center text-center gap-10 md:grid md:grid-cols-3 md:items-start md:text-left md:gap-20">
        <div className="flex flex-col items-center text-center md:items-start md:text-left w-[300px] md:w-[340px] lg:w-[400px]">
          <ScrollReveal>
            <Image
              src="/images/white_logo.png" 
              alt="Ashley Logo"
              width={240}
              height={100}
              className="mb-6 w-[160px] md:w-[180px] lg:w-[200px] xl:w-[240px] h-auto"
            />
          </ScrollReveal>

          <div className="text-[19px] md:text-[19px] xl:text-[20px] font-sans mt-4 md:mt-10 md:pt-2 space-y-5 md:space-y-8 xl:space-y-6">
            <ScrollReveal>
              <div className="md:flex md:items-start">
                <span className="min-w-[120px] text-white font-semibold">Address:</span>
                  <a
                  href="https://maps.app.goo.gl/D8C4QPUQiRsu94aa9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[white] leading-relaxed text-[16px] md:text-[15px] xl:text-[16px] cursor-pointer"
                >  
                  <p>
                    Devapragasam Trade Centre, <br />
                    Wing C, 3rd Floor, Madura Garden, <br />
                    Maduravayol, Chennai, <br />
                    Tamil Nadu - 600095
                  </p>
              </a>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="md:flex md:items-start">
                <span className="min-w-[120px] text-white font-semibold">Contact:</span>
                <div className="text-[white] leading-relaxed text-[16px] md:text-[15px] xl:text-[16px] space-y-1">
                  <a href="tel:+919876543210" className="block">+91 96000 52850</a>
                  <a href="tel:+919876543210" className="block">+91 98407 52850</a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        <div className="md:mt-3 xl:mt-0 w-[300px] md:ml-[125px] lg:ml-36 xl:ml-28">
          <div className="space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`md:text-[20px] xl:text-[26px] font-sans font-semibold block transform transition-transform duration-300 hover:translate-x-2 ${
                  pathname === link.path
                    ? 'text-[#1ECDFE]'
                    : 'text-white hover:text-[#1ECDFE]'
                }`}
              >
                <ScrollReveal>{link.name}</ScrollReveal>
              </Link>
            ))}
          </div>
        </div>

        <div className="sm:w-1/2 md:w-[180px] lg:w-[250px] xl:w-[300px] md:ml-8 lg:ml-14 xl:ml-0">
          <div className="space-y-3 text-white mt-4">
            {legalLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`block md:text-[16px] xl:text-[17px] transform transition-transform duration-300 hover:translate-x-2 ${
                  pathname === link.path ? 'text-[#1ECDFE]' : 'hover:text-[#1ECDFE]'
                }`}
              >
                <ScrollReveal>{link.name}</ScrollReveal>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center border-t border-[#6E6E6E] mt-16 md:mt-28 xl:mt-36 pt-6 xl:mr-24">
        <ScrollReveal>
          <p className="text-[white] md:text-[15px] xl:text-[16px] text-center md:text-left mb-4 md:mb-0">
            © Copyright 2023 - All Rights Reserved.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="flex space-x-6 md:text-[20px] xl:text-[24px]">
            <a href="https://www.instagram.com/skorpiondigisolution/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="hover:text-[#1ECDFE] cursor-pointer" />
            </a>
            <a href="https://www.linkedin.com/company/skorpion-digi-solutions-pvt-ltd/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="hover:text-[#1ECDFE] cursor-pointer" />
            </a>
            {/*
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="hover:text-[#1ECDFE] cursor-pointer" />
            </a>
            */}
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
};

export default Footer;
