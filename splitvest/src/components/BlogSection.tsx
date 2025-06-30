'use client';
import React from 'react';
import Image from 'next/image';

const articles = [
  {
    id: '01',
    title: 'Reasons Why People Use Discord',
    date: 'August 09, 2022',
    category: 'MetaVerse',
    comments: '4 Comments',
  },
  {
    id: '02',
    title: 'Trial-By-Combat: The Death Cup',
    date: 'August 09, 2022',
    category: 'MetaVerse',
    comments: '4 Comments',
  },
  {
    id: '03',
    title: 'Graffiti Racer Research Center #10',
    date: 'August 09, 2022',
    category: 'NFT',
    comments: '4 Comments',
  },
  {
    id: '04',
    title: '',
    date: 'August 09, 2022',
    category: 'MetaVerse',
    comments: '4 Comments',
  },
];

const BlogSection = () => {
  return (
    <section
      className="text-white pt-60 relative"
    >
      <h2
        className="text-center text-3xl md:text-[38px] font-normal tracking-wider"
        style={{ color: '#e8d2ff' }}
        >
          BLOG ARTICLES
      </h2>
      <div className="text-center mt-7">
        <p className="text-[#B4B4CC] text-[18px] tracking-wide">
            Home <span className="mx-1">/</span> Blog Articles
        </p>
      </div>

      <div className="flex items-center justify-center w-full mt-[72px]">
        <div className="flex-1 h-px bg-[#b4b4cc] opacity-40" />

        <div className="flex items-center gap-3 px-6">
            <div className="w-[12px] h-[12px] rounded-full border-2 border-[#b4b4cc] opacity-70" />
            <div className="w-[200px] h-[12px] rounded-full border-2 border-[#b4b4cc] opacity-70" />
            <div className="w-[12px] h-[12px] rounded-full border-2 border-[#b4b4cc] opacity-70" />
        </div>

        <div className="flex-1 h-px bg-[#b4b4cc] opacity-40" />
      </div>

    <div className='px-6 md:px-24'>
      <div className="grid md:grid-cols-2 gap-10 mt-36">
        <div className="group border border-[#4d345c] p-10 rounded-[8px] shadow-[0_0_30px_rgba(0,0,0,0.3)] transition-all duration-500">
          <div className="w-[50px] h-[50px] rounded-full border-2 border-fuchsia-600 flex items-center justify-center tracking-wider text-[#b4b4cc] text-[17px]">
                01
          </div>
          <p className="text-[18px] text-gray-400 mt-4">{articles[0].date} / {articles[0].category} / {articles[0].comments}</p>
          <h3 className="cursor-pointer hover:text-blue-500 text-[30px] font-light mt-1 max-w-sm leading-tight">{articles[0].title}</h3>
          <Image
            src="images/article-1.png"
            alt="Article"
            width={600}
            height={380}
            className="w-full h-auto rounded-xl mt-8 object-cover"
          />
          <div className="flex items-center space-x-4 mt-7 cursor-pointer">
            <div
                className="peer bg-[#b4b4cc] h-[2px] w-24 transition-all duration-500 origin-right group-hover:w-14"
            ></div>
            <span
                className="text-white text-[17px] opacity-0 translate-x-4 group-hover:translate-x-0 group-hover:opacity-100 peer-hover:text-blue-500 transition-all duration-500"
            >
                READ MORE
            </span>
         </div>
        </div>

        <div className="flex flex-col gap-9">
          {articles.slice(1).map((article) => (
            <div 
                key={article.id} 
                className="group border border-[#4d345c] px-10 py-10 rounded-[8px] shadow-[0_0_30px_rgba(0,0,0,0.3)] transition-all duration-500"
            >
              <div className="w-[50px] h-[50px] rounded-full border-2 border-fuchsia-600 flex items-center justify-center tracking-wider text-[#b4b4cc] text-[17px]">
                {article.id.toString().padStart(2, '0')}
              </div>
              
              <p className="text-[18px] text-gray-400 mt-4">{article.date} / {article.category} / {article.comments}</p>
              {article.title && <h4 className="cursor-pointer hover:text-blue-500 text-[29px] font-light mt-1">{article.title}</h4>}

              <div className="flex items-center space-x-4 mt-7 cursor-pointer">
                <div
                    className="bg-[#b4b4cc] h-[2px] w-24 transition-all duration-500 origin-right group-hover:w-14"
                ></div>
                <span
                    className="text-white text-[17px] opacity-0 translate-x-4 group-hover:translate-x-0 group-hover:opacity-100 hover:text-blue-500 transition-all duration-500"
                >
                    READ MORE
                </span>
             </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex flex-col md:flex-row justify- items-center gap-20">
        <button 
            className="px-48 py-7 rounded-[8px] text-[#d8d8f6] text-[14px] tracking-wide hover:bg-[#d24fff]/10 transition-all"
            style={{
              border: '3px solid blue',
              color: '#ffffff',
            }}
        >
            READ ALL ARTICLES
        </button>

        <p className="text-[#a4a4c6] text-center md:text-left max-w-[420px] tracking-wide leading-relaxed text-[17px]">
          We’re a team of creatives who are excited about unique ideas and create consectetur adipiscing elit. 
          Etiam vitae purus a lectus semper.
        </p>
      </div>
     </div>
    </section>
  );
};

export default BlogSection;
