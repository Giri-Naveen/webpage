'use client';
import React from 'react';
import Image from 'next/image';
import { FaTwitter,  FaFacebookF,  FaInstagram,  FaPinterest,  FaBehance, } from 'react-icons/fa';
import { BsFillFileFill } from 'react-icons/bs';
import { AiFillEye } from 'react-icons/ai';
import { ConnectButton, MediaRenderer, TransactionButton, useActiveAccount, useReadContract } from "thirdweb/react";
import { client } from "../app/client";
import { defineChain, getContract, toEther } from "thirdweb";
import { sepolia } from "thirdweb/chains";
import { getContractMetadata } from "thirdweb/extensions/common";
import { claimTo, getActiveClaimCondition, getTotalClaimedSupply, nextTokenIdToMint } from "thirdweb/extensions/erc721";
import { useState } from "react";

export default function MintHeader() {
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

  return (
    <section className="min-h-screen bg-transparent px-6 md:px-24 mt-1 pt-44 pb-10 text-white">
      <div className="max-w-9xl mx-auto grid md:grid-cols-[560px_1fr] gap-16 items-stretch rounded-[8px]">
        <div className="min-h-[650px] rounded-[8px] overflow-hidden border border-[#B4B4CC] shadow-xl p-5">
          <MediaRenderer
            client={client}
            src={contractMetadata?.image}
            className="object-cover rounded-[8px] w-full h-full"
            />
        </div>

        <div className="flex flex-col mt-4">
          <div className="flex items-center gap-6 tracking-wide text-[18px] text-[#B4B4CC]">
            <span>Share:</span>
            <FaTwitter className="hover:text-white cursor-pointer" />
            <FaFacebookF className="hover:text-white cursor-pointer" />
            <FaInstagram className="hover:text-white cursor-pointer" />
            <FaPinterest className="hover:text-white cursor-pointer" />
            <FaBehance className="hover:text-white cursor-pointer" />
          </div>

          <div className="text-[18px] text-[#B4B4CC] mt-3 tracking-wide">
            Home  / Collection  /  Meta Legends #5675
          </div>

          <h2
            className="mt-4 text-start text-3xl md:text-[38px] font-normal tracking-wider"
            style={{ color: '#e8d2ff' }}
          >
            Meta Legends #5675
          </h2>

          <p className="text-[#B4B4CC] text-[18px] leading-normal mt-7 mb-5">
            Suspendisse eu velit est. Cras nec vestibulum quam. Donec tincidunt purus nec enim 
            tincidunt, sit amet facilisis massa laoreet. Integer mollis nec sapien eu lacinia. 
            Nunc eu massa dictum, vulputate neque ac, porta mauris. Sed sollicitudin nisi augue, 
            a gravida turpis elementum vel. Curabitur sagittis quis diam et rhoncus. Nam pellentesque 
            imperdiet aliquet. Sed non ante malesuada, ultrices sem at, tempus libero.
          </p>
          <p className="text-[#B4B4CC] text-[18px] leading-normal">
            Duis eu lorem ut mauris pulvinar auctor. Maecenas et dapibus orci, eleifend euismod justo. 
            Quisque luctus turpis eu tristique feugiat. Praesent ac magna feugiat, interdum lacus ac, 
            interdum dui. Pellentesque id quam quis enim malesuada rutrum. Orci varius natoque penatibus 
            et magnis dis parturient.
          </p>

          <div className="mt-10 flex items-center gap-4">
            <h4 className="text-white text-[16px] tracking-wide mb-0">VIEW ON:</h4>
            <div className="flex items-center gap-4">
                <button className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:bg-white hover:text-black transition">
                <BsFillFileFill size={18} />
                </button>
                <button className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:bg-white hover:text-black transition">
                <AiFillEye size={18} />
                </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
