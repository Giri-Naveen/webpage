'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Menu } from 'lucide-react';
import Image from "next/image";
import { ConnectButton, MediaRenderer, TransactionButton, useActiveAccount, useReadContract } from "thirdweb/react";
import { client } from "../app/client";
import { defineChain, getContract, toEther } from "thirdweb";
import { sepolia } from "thirdweb/chains";
import { getContractMetadata } from "thirdweb/extensions/common";
import { claimTo, getActiveClaimCondition, getTotalClaimedSupply, nextTokenIdToMint } from "thirdweb/extensions/erc721";

const navItems = [
  { label: 'Home', targetId: '' },
  { label: 'About', targetId: 'about' },
  { label: 'Collection', targetId: 'collection' },
  { label: 'Blog', targetId: 'blog' },
  { label: 'Contact', targetId: 'contact' },
];

const mobileLinks = [
  { label: 'Home', href: '' },
  //{ label: 'Mint Page', href: '/mint' },
  { label: 'Pricing', href: '' },
  //{ label: 'Protected Page', href: '/protected-page' },
  { label: 'Blog', href: '/blog' },
  { label: 'Privacy Policy', href: '/policy/privacy-policy' },
  { label: 'Terms & Conditions', href: '/policy/terms-and-conditions' },
  { label: 'Cookies', href: '/policy/cookies' },
];


const Navigation = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const account = useActiveAccount();
  
    // Replace the chain with the chain you want to connect to
    const chain = defineChain( sepolia );
  
    const [quantity, setQuantity] = useState(1);
  
    // Replace the address with the address of the deployed contract
    const contract = getContract({
      client: client,
      chain: chain,
      address: "0x297586c0F0F9DC168bFeDAB7Ef71675452E37eAB"
    });
  
    const { data: contractMetadata, isLoading: isContractMetadataLaoding } = useReadContract( getContractMetadata,
      { contract: contract }
    );
  
    const { data: claimedSupply, isLoading: isClaimedSupplyLoading } = useReadContract( getTotalClaimedSupply,
      { contract: contract}
    );
  
    const { data: totalNFTSupply, isLoading: isTotalSupplyLoading } = useReadContract( nextTokenIdToMint,
      { contract: contract }
    );
  
    const { data: claimCondition } = useReadContract( getActiveClaimCondition,
      { contract: contract }
    );
  
    const getPrice = (quantity: number) => {
      const total = quantity * parseInt(claimCondition?.pricePerToken.toString() || "0");
      return toEther(BigInt(total));
    }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (targetId: string) => {
    if (pathname === '/') {
      if (targetId === '') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      router.push(`/?section=${targetId}`);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out
        border-b ${
          scrolled
            ? 'bg-[#150e1d] shadow-md py-[17px] border-b-[#B4B4CC] border-opacity-30'
            : 'bg-transparent py-6 border-transparent'
        }`}
    >

      <nav className="w-full mx-auto flex items-center justify-between px-8">
        <div className="flex items-center gap-1">
          <button
            onClick={toggleMobileMenu}
            className="w-14 h-14 rounded-full bg-black flex items-center justify-center hover:shadow-[0_0_15px_#a400ff]"
          >
            <Menu className="text-white w-6 h-6" />
          </button>
          <div>
            <Image
              src="/images/logo.png"
              alt="Meta Portal Logo"
              width={120}
              height={40}
              className="h-auto w-[150px]"
            />
          </div>
        </div>

        <div className="hidden md:flex items-center gap-10">
          {navItems.map(({ label, targetId }) => (
            <a
              key={label}
              onClick={() => handleNavClick(targetId)}
              className="text-white text-[18px] hover:text-blue-500 transition cursor-pointer"
            >
              {label}
            </a>
          ))}
        </div>

      <div className="hidden md:flex">
        <div className="px-8 py-[12px] text-white text-[14px] tracking-wide rounded-[8px]">
          <ConnectButton
            client={client}
            chain={chain}
          />
        </div>
      </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black bg-opacity-80 transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleMobileMenu}
      >
        {/* Side drawer */}
        <div
          className={`h-full bg-[#0e0b10] w-[80%] sm:w-[40%] md:w-[30%] transform transition-transform duration-300 ${
            mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col h-full px-6 py-8">
            <div className="flex justify-between items-center mb-6">
              <div>
                <Image
                  src="/images/logo.png"
                  alt="Meta Portal Logo"
                  width={120}
                  height={40}
                  className="h-auto w-auto"
                />
              </div>
              <button onClick={toggleMobileMenu} className="text-white text-3xl">
                ×
              </button>
            </div>

            <div className="flex flex-col space-y-6 mt-6">
              {mobileLinks.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white mt-10 text-center text-lg font-medium hover:text-blue-500 transition"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
