'use client';
import React from 'react';

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="text-white pt-16 pb-10"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-24">
        <h2
          className="text-center text-3xl md:text-[38px] font-normal tracking-wider"
          style={{ color: '#e8d2ff' }}
        >
          CONTACT US
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-36 mb-16">
          <div className="text-[18px] space-y-6" style={{ color: '#b4b4cc' }}>
            <p>
              At SplitVest, we’re building the future of real estate investing—secure, transparent, and accessible through 
              fractional ownership. Whether you're a first-time investor, a seasoned portfolio builder, or simply curious 
              about how real estate tokenization works, we’re here to help.
            </p>
            <p>
              Have questions about property investments or how everything works?
              We’re here to help with listings, your dashboard, or partnership opportunities.
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <p className="uppercase text-[17px]" style={{ color: '#a4a4a4' }}>Phone</p>
              <p className="mt-1 text-[29px] font-light" style={{ color: '#ffffff' }}>+91 96000 52850</p>
            </div>
            <div>
              <p className="uppercase text-[17px]" style={{ color: '#a4a4a4' }}>Email</p>
              <p className="mt-1 text-[29px] font-light" style={{ color: '#ffffff' }}>splitvest@gmail.com</p>
            </div>
          </div>

          <div className="space-y-2">
            <p className="uppercase text-[17px]" style={{ color: '#a4a4a4' }}>Office</p>
            <p className="text-[20px] font-light leading-tight" style={{ color: '#ffffff' }}>
              Devapragasam Trade Centre, <br />
              Wing C, 3rd Floor, <br /> Venkateshwara nagar,<br />
              Maduravayol , Chennai,<br />
              Tamil Nadu - 600095
            </p>
          </div>
        </div>

        <form className="space-y-6 mt-[74px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name *"
              className="bg-transparent border-2 px-8 py-6 text-[16px] rounded outline-none placeholder-gray-500"
              style={{ borderColor: '#4d345c', color: '#fff' }}
              required
            />
            <input
              type="email"
              placeholder="Your Email *"
              className="bg-transparent border-2 px-8 text-[16px] py-6 rounded outline-none placeholder-gray-500"
              style={{ borderColor: '#4d345c', color: '#fff' }}
              required
            />
            <input
              type="text"
              placeholder="Your Phone (optional)"
              className="bg-transparent border-2 px-8 py-6 text-[17px] rounded outline-none placeholder-gray-500"
              style={{ borderColor: '#4d345c', color: '#fff' }}
            />
            <input
              type="text"
              placeholder="Topic (optional)"
              className="bg-transparent border-2 px-8 py-6 text-[17px] rounded outline-none placeholder-gray-500"
              style={{ borderColor: '#4d345c', color: '#fff' }}
            />
          </div>

          <textarea
            placeholder="Your Message *"
            rows={5}
            className="w-full bg-transparent border-2 px-8 pt-6 pb-10 text-[17px] rounded outline-none placeholder-gray-500"
            style={{ borderColor: '#4d345c', color: '#fff' }}
            required
          />
        </form>

        <div className="flex items-start mt-4 gap-4">
            <input type="checkbox" id="consent" className="bg-transparent mt-[5px] rounded-md scale-150 text-xl" 
            style={{
                border: '1.5px solid #4d345c',
                backgroundColor: 'transparent',
                appearance: 'none',
                width: '14px',
                height: '14px',
              }}
            />
            <label htmlFor="consent" className="text-[18px]" style={{ color: '#b4b4cc' }}>
              I'm okay with getting emails and having that activity tracked to improve my experience.
            </label>
          </div>

          <button
            type="submit"
            className="mt-9 px-24 py-6 rounded-[8px] transition-all"
            style={{
              border: '3px solid blue',
              color: '#ffffff',
            }}
            onMouseOver={e => e.currentTarget.style.background = '#6b21a8'}
            onMouseOut={e => e.currentTarget.style.background = 'transparent'}
          >
            SEND MESSAGE
          </button>
      </div>
      <div className="mt-[156px] text-sm flex flex-col md:flex-row justify-between items-center border-t pt-8 px-24"
          style={{ borderColor: '#2a2a2a', color: '#b4b4cc' }}>
          <p className='text-[16px]'>Copyright 2025 — All rights <span style={{ color: '#ffffff' }}>Reserved</span></p>
          <div className="text-[16px] flex gap-6 mt-2 md:mt-0">
            <a href="#" className="hover:text-blue-500">Privacy Policy</a>
            <a href="#" className="hover:text-blue-500">Cookies</a>
            <a href="#" className="hover:text-blue-500">Terms & Conditions</a>
          </div>
        </div>
    </section>
  );
};

export default ContactSection;
