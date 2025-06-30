'use client';

import React, { useState, useEffect } from 'react';
import { FaCheckCircle } from 'react-icons/fa';

export default function MintSection() {
  const [quantity, setQuantity] = useState(1);
  const [timeLeft, setTimeLeft] = useState({ days: 34, hours: 9, minutes: 42, seconds: 34 });

  const unitPrice = 2.25;

  const handleIncrement = () => {
    if (quantity < 5) setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  useEffect(() => {
    const end = new Date();
    end.setDate(end.getDate() + 34);
    end.setHours(end.getHours() + 9);
    end.setMinutes(end.getMinutes() + 42);
    end.setSeconds(end.getSeconds() + 34);

    const timer = setInterval(() => {
      const now = new Date();
      const diff = end.getTime() - now.getTime();

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });

      if (diff < 0) clearInterval(timer);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative mt-10 mb-20 bg-transparent text-white py-8 rounded-[10px] border border-[#B4B4CC] border-opacity-30 max-w-7xl mx-24">

      <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gray-600/30 z-0" />

      <div className="relative inline-block mb-6">
        <div className="mint-tag px-14 py-3 text-black tracking-wide font-medium">
            PUBLIC MINT IS LIVE
        </div>
      </div>

      <div className="grid md:grid-cols-2 relative z-10">
        <div className="px-14 space-y-10 border-r border-gray-600/30">
          <div className="flex gap-8 mt-2">
            <div className="w-1/2 border-b border-[#b4b4cc] border-opacity-30">
              <p className="text-[17px] text-[#b4b4cc]">PRICE</p>
              <h2 className="text-2xl">{unitPrice} ETH</h2>
            </div>
            <div className="w-1/2 border-b border-[#b4b4cc] border-opacity-30 pb-2">
              <p className="text-[17px] text-[#b4b4cc]">REMAINING</p>
              <h2 className="text-2xl">344/999</h2>
            </div>
          </div>

          <div className="flex gap-8">
            <div className="w-1/2 border-b border-[#b4b4cc] border-opacity-30 pb-2">
              <p className="text-[17px] text-[#b4b4cc]">QUANTITY</p>
              <div className="flex items-center gap-4 text-2xl">
                <button onClick={handleDecrement} className="text-2xl rounded">-</button>
                <span>{quantity}</span>
                <button onClick={handleIncrement} className="text-2xl rounded">+</button>
              </div>
            </div>
            <div className="w-1/2 border-b border-[#b4b4cc] border-opacity-30 pb-2">
              <p className="text-[17px] text-[#b4b4cc]">TOTAL PRICE</p>
              <h2 className="text-xl">{(unitPrice * quantity).toFixed(2)} ETH + GAS</h2>
            </div>
          </div>

          <div className="pt-2">
            <button 
                className="px-8 py-3 rounded-[8px] text-white text-[15px] tracking-wide"
                style={{
                border: '3px solid blue',
                color: '#ffffff',
                }}
            >
              MINT NOW
            </button>
          </div>

          <p className="text-[16px] text-[#b4b4cc] max-w-sm">
            By clicking “MINT NOW” button, you agree to our{' '}
            <span className="text-white text-[16px] cursor-pointer">Terms of Service</span> and our{' '}
            <span className="text-white text-[16px] cursor-pointer">Privacy Policy</span>.
          </p>
        </div>

        {/* Right Section */}
        <div className="px-20 space-y-6 text-center justify-center mt-3">
          <div className="">
            <p className="text-[17px] text-[#b4b4cc] mb-1">PUBLIC MINT ENDS IN</p>
            <h2 className="text-2xl">
              {timeLeft.days}d: {timeLeft.hours}h: {timeLeft.minutes}m: {timeLeft.seconds}s
            </h2>
          </div>

          <div className="space-y-2 pt-5">
            <p className='text-[#b4b4cc] text-[18px] tracking-wide'>
              Whitelist: <span className="text-white tracking-wide">SOLDOUT</span>{' '}
              <FaCheckCircle className="inline text-green-400" />
            </p>
            <p className='text-[#b4b4cc] text-[18px] tracking-wide'>
              Presale: <span className="text-white tracking-wide">SOLDOUT</span>{' '}
              <FaCheckCircle className="inline text-green-400" />
            </p>
          </div>

          <p className="text-[#b4b4cc] text-[16px] max-w-[320px] pt-5 pl-20">
            You need to pay a GAS fee during minting. We allow max 5 mints per wallet.
          </p>
        </div>
      </div>
    </section>
  );
}
