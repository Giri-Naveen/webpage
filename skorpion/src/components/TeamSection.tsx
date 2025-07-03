import React from "react";
import Image from "next/image";
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import ScrollReveal from "@/components/ScrollReveal";

const TeamSection = () => {
  return (
    <section data-section data-bg-section className="flex w-full h-full px-24 pr-28 mt-3 pt-36 pb-60 bg-white text-black">
      <div className="w-1/2 h-[100vh] flex flex-col justify-center pl-14 pt-20">
        <ScrollReveal>
        <h2 className="text-[68px] text-black font-sans font-semibold leading-tight">
          Meet Our<br /> Creative<br /> Team
        </h2>
        </ScrollReveal>

        <ScrollReveal>
        <p className="text-gray-500 text-base leading-normal mt-14 mb-8 max-w-[320px]">
         We are talented individuals who are passionate about bringing ideas to life. With a diverse range
          of backgrounds and skill sets, we collaborate to produce effective solutions for our clients.
        </p>
        </ScrollReveal>
        
        <ScrollReveal>
        <p className="text-gray-500 text-base leading-normal mb-14 max-w-[320px]">
          Together, our creative team is committed to delivering impactful work that exceeds expectations.
        </p>
        </ScrollReveal>

        
        <Link href="/team">
        <ScrollReveal>
          <div className="bg-[#1ECDFE] group transition-colors text-black font-semibold pl-8 pr-4 py-4 rounded-full flex items-center gap-3 w-fit">
            <span className="ml-4 font-semibold text-[13px] tracking-widest">READ MORE</span>
              <span className="ml-4 w-10 h-10 rounded-full bg-black flex items-center justify-center transition-transform duration-500 ease-in group-hover:scale-[115%]">
                <svg
                  className='ml-1'
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#1ECDFE"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="1" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
          </div>
          </ScrollReveal>
        </Link>  

        <div className="mt-14 font-sans leading-tight">
          <ScrollReveal>
          <p className="text-[28px] text-black font-light">
            We <span className="font-semibold">delivering</span> <br />
            <span className="font-light">exceptional</span>{' '}
            <span className="font-semibold">results.</span>
          </p>
          </ScrollReveal>
        </div>
      </div>

      <div className="w-full lg:w-1/2 pl-8 lg:pl-4 lg:pr-14 py-0 relative">
        <div className="grid grid-cols-2 gap-6 mt-0">
            <div className="flex flex-col gap-2">
              <ScrollReveal>
              <div className="w-[210px] h-[280px] relative group overflow-hidden">
                <Image
                  src="/images/team-1.jpeg"
                  alt="Team Member 1"
                  fill
                  className="object-cover object-top transition duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in cursor-pointer">
                  <div className="transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out flex flex-col items-center">
                    <h3 className="text-white hover:text-[#1ECDFE] text-[20px] font-sans font-bold mt-14">Balaji R.A.</h3>
                    <p className="text-gray-400 text-xs mt-3 mb-4 font-bold tracking-widest">CEO</p>
                    {/*
                    <div className="flex gap-2 text-white">
                      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebookF className="hover:text-[#1ECDFE] cursor-pointer" />
                      </a>
                      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="hover:text-[#1ECDFE] cursor-pointer" />
                      </a>
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FaLinkedinIn className="hover:text-[#1ECDFE] cursor-pointer" />
                      </a>
                      <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="hover:text-[#1ECDFE] cursor-pointer" />
                      </a>
                    </div>
                    */}
                  </div>  
                  <span className="absolute bottom-0 left-0 h-[6px] w-full bg-[#1ECDFE] transform scale-x-0 group-hover:scale-x-100 origin-left group-hover:origin-left transition-transform duration-500 ease-in-out" />
                </div>
              </div>
              </ScrollReveal>

              <ScrollReveal>
              <div className="mt-6 w-[210px] h-[280px] relative group overflow-hidden">
                  <Image
                    src="/images/team-3.jpg"
                    alt="Team Member 3"
                    fill
                    className="object-cover object-top transition duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in cursor-pointer">
                    <div className="transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out flex flex-col items-center">
                      <h3 className="text-white hover:text-[#1ECDFE] text-[20px] font-sans font-bold mt-14">K.S. Balaji </h3>
                      <p className="text-gray-400 text-xs mt-3 mb-4 font-bold tracking-widest">HRPM</p>
                      {/*
                      <div className="flex gap-2 text-white">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                          <FaFacebookF className="hover:text-[#1ECDFE] cursor-pointer" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                          <FaInstagram className="hover:text-[#1ECDFE] cursor-pointer" />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                          <FaLinkedinIn className="hover:text-[#1ECDFE] cursor-pointer" />
                        </a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                          <FaGithub className="hover:text-[#1ECDFE] cursor-pointer" />
                        </a>
                    </div>
                    */}
                  </div>    
                  <span className="absolute bottom-0 left-0 h-[6px] w-full bg-[#1ECDFE] transform scale-x-0 group-hover:scale-x-100 origin-left group-hover:origin-left transition-transform duration-500 ease-in-out" />
                </div>
              </div>
              </ScrollReveal>
            </div>

            <div className="flex flex-col gap-2 mt-32">
              <ScrollReveal>
              <div className="w-[210px] h-[280px] relative group overflow-hidden">
                <Image
                  src="/images/team-2.jpg"
                  alt="Team Member 2"
                  fill
                  className="object-cover object-top transition duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in cursor-pointer">
                  <div className="transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out flex flex-col items-center">
                    <h3 className="text-white hover:text-[#1ECDFE] text-[20px] font-sans font-bold mt-14">Udayakumar Dhanabal</h3>
                    <p className="text-gray-400 text-xs mt-3 mb-4 font-bold tracking-widest">CTO</p>

                    {/* 
                    <div className="flex gap-2 text-white">
                      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebookF className="hover:text-[#1ECDFE] cursor-pointer" />
                      </a>
                      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="hover:text-[#1ECDFE] cursor-pointer" />
                      </a>
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FaLinkedinIn className="hover:text-[#1ECDFE] cursor-pointer" />
                      </a>
                      <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="hover:text-[#1ECDFE] cursor-pointer" />
                      </a>
                    </div>
                    */}
                  </div>
                  <span className="absolute bottom-0 left-0 h-[6px] w-full bg-[#1ECDFE] transform scale-x-0 group-hover:scale-x-100 origin-left group-hover:origin-left transition-transform duration-500 ease-in-out" />
                </div>
              </div>
              </ScrollReveal>

              {/*
              <ScrollReveal>
              <div className="mt-6 w-[210px] h-[280px] relative group overflow-hidden">
                <Image
                  src="/images/teammate-4.png"
                  alt="Team Member 4"
                  fill
                  className="object-cover object-top transition duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in cursor-pointer">
                  <div className="transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out flex flex-col items-center">
                    <h3 className="text-white hover:text-[#1ECDFE] text-[20px] font-sans font-bold mt-14">Lisa Trueman</h3>
                    <p className="text-gray-400 text-xs mt-3 mb-4 font-bold tracking-widest">UI/UX DESIGNER</p>
                    <div className="flex gap-2 text-white">
                      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebookF className="hover:text-[#1ECDFE] cursor-pointer" />
                      </a>
                      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="hover:text-[#1ECDFE] cursor-pointer" />
                      </a>
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FaLinkedinIn className="hover:text-[#1ECDFE] cursor-pointer" />
                      </a>
                      <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="hover:text-[#1ECDFE] cursor-pointer" />
                      </a>
                    </div>
                  </div>  
                  <span className="absolute bottom-0 left-0 h-[6px] w-full bg-[#1ECDFE] transform scale-x-0 group-hover:scale-x-100 origin-left group-hover:origin-left transition-transform duration-500 ease-in-out" />
                </div>
              </div>  
              </ScrollReveal>
              */}
            </div>
        </div>
      </div> 
    </section>
  );
};

export default TeamSection;
