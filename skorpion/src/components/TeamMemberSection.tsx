import React from 'react';
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import ScrollReveal from '@/components/ScrollReveal';
import SimpleReveal from '@/components/SimpleReveal';

const teamMembers = [
  {
    name: ' Balaji R.A.',
    role: 'CEO',
    image: '/images/team-1.jpeg',
  },
  {
    name: ' K.S. Balaji',
    role: 'HRPM',
    image: '/images/team-3.jpg',
  },
  {
    name: 'Udayakumar Dhanabal',
    role: 'CTO',
    image: '/images/team-2.jpg',
  },
  {
    name: 'Jhothish Kumar S',
    role: 'Developer',
    image: '/images/team-4.jpg',
  },
  {
    name: ' Kaleeswari M',
    role: 'Developer',
    image: '/images/team-5.jpg',
  },
  {
    name: 'Arokiya Anita S',
    role: 'CRM',
    image: '/images/team-6.jpg',
  },
];

const TeamMemberSection = () => {
  return (
    <section data-section id='team-section' className="w-full flex justify-center px-40 py-28 bg-white">
      <div className="grid grid-cols-3 gap-x-16 gap-y-8">
        {teamMembers.map((member, index) => (
          <ScrollReveal key={index}>
          <div className="w-56 h-72 relative group overflow-hidden rounded-md">
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover object-top rounded-md"
            />
            <div className="absolute inset-0 bg-black bg-opacity-80 flex justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in cursor-pointer">
              <div className="transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out flex flex-col items-center">
                <h3 className="text-white hover:text-[#1ECDFE] text-[20px] font-sans font-bold mt-14">
                  {member.name}
                </h3>
                <p className="text-gray-400 text-xs mt-3 mb-4 font-bold tracking-widest">
                  {member.role}
                </p>
                {/*
                <div className="flex gap-2 text-base text-white relative">
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
              <span className="absolute bottom-0 left-0 h-[6px] w-full bg-[#1ECDFE] transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-in-out" />
            </div>
          </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default TeamMemberSection;