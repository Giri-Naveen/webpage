'use client';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer
      className="mt-10 text-sm flex flex-col md:flex-row justify-between items-center border-t py-8 px-6 md:px-24"
      style={{ borderColor: '#2a2a2a', color: '#b4b4cc' }}
    >
      <p className="text-[16px]">
        Copyright 2025 — All rights{' '}
        <span style={{ color: '#ffffff' }}>Reserved</span>
      </p>
      <div className="text-[16px] flex gap-6 mt-2 md:mt-0">
        <a href="#" className="hover:text-blue-500">
          Privacy Policy
        </a>
        <a href="#" className="hover:text-blue-500">
          Cookies
        </a>
        <a href="#" className="hover:text-blue-500">
          Terms & Conditions
        </a>
      </div>
    </footer>
  );
};

export default Footer;
