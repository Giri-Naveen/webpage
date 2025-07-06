'use client'
import Image from 'next/image'
import Link from 'next/link'
import ScrollReveal from "@/components/ScrollReveal";

const publications = [
  {
    title: 'How to Build a Successful Restaurant in 10 Simple Steps',
    category: 'Technology',
    date: 'May 24 2023',
    description: 'Running a successful restaurant is challenging — especially when relying too much on third‑party platforms that charge high commissions, manipulate rankings, and affect your regular customers. Here’s a quick guide for restaurants to regain control and build a strong, independent brand.',
    image: '/images/blog-1.gif',
    link: "/blogs/blog-1",
  },
  {
    title: 'From Marketplace Struggles to Nationwide D2C Growth',
    category: 'Technology',
    date: 'May 24 2023',
    description: 'For years, D2C brands have depended on marketplaces — paying hefty commissions, competing with countless sellers, and fighting to build their own identity. But what if you could break free? What if you could own the customer experience, save costs, and scale nationwide… all while focusing on what you do best?',
    image: '/images/blog-2.webp',
    link: "/blogs/blog-2",
  },
]

const PublicationSection = () => {
  return (
    <section data-section data-bg-section className="w-full px-8 md:px-8 lg:px-24 xl:px-40 py-16 md:py-20 lg:py-24 xl:py-28 font-sans bg-white text-black">
      <ScrollReveal>
      <div className="flex justify-between items-center mb-10 md:mb-12 lg:mb-14 xl:mb-16">
        <h2 className="text-[32px] md:text-[36px] lg:text-[40px] xl:text-[44px] font-sans font-semibold text-black leading-[1.0]">
          Popular Blogs:
        </h2>

        {/*
        <button className="group flex items-center space-x-4 text-black text-[13px] font-sans font-medium tracking-widest">
          <span>VIEW ALL</span>
          <span className="ml-8 w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center transition-transform duration-500 ease-in group-hover:scale-[115%]">
              <svg
                className='ml-1'
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="1" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </span>
        </button>
        */}
      </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-10 xl:gap-10 xl:pt-2 cursor-pointer">
        {publications.map((pub, index) => (
          <Link href={pub.link} key={index}>
            <div className="flex flex-col space-y-6">
              <ScrollReveal>
              <div className="w-full h-[300px] md:h-[420px] lg:h-64 xl:h-72 overflow-hidden relative group">
                  <Image
                      src={pub.image}
                      alt={pub.title}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                  />
              </div>
              </ScrollReveal>

              <div>
                {/*
                <ScrollReveal>
                <p className="text-[13px] text-[black] uppercase tracking-widest font-semibold mt-10">
                  {pub.category}{' '}
                  <span className="text-gray-500 font-semibold tracking-widest text-[13px] ml-2">{pub.date}</span>
                </p>
                </ScrollReveal>
                */}

                <ScrollReveal>
                <h3 className="text-[23px] md:text-[25px] lg:text-[27px] xl:text-[29px] font-sans font-semibold md:mt-2 lg:mt-4 xl:mt-6 text-black leading-tight">
                  {pub.title}
                </h3>
                </ScrollReveal>
                <ScrollReveal>
                <p className="text-gray-600 font-sans text-[14px] md:text-[15px] xl:text-base mt-3 mb-2 md:mt-4 md:mb-3 lg:mt-6 lg:mb-4 xl:mt-8 xl:mb-5">
                  {pub.description}
                </p>
                </ScrollReveal>
                <ScrollReveal>
                <div className="group flex items-center font-sans text-[11px] md:text-[13px] space-x-2 md:space-x-3 lg:space-x-4 font-medium text-black tracking-widest">
                  <span>READ MORE</span>
                  <span className="ml-8 w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center transition-transform duration-500 ease-in group-hover:scale-[115%]">
                      <svg
                        className='ml-1'
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="black"
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
              </div>
            </div>
          </Link>  
        ))}
      </div>
    </section>
  )
}

export default PublicationSection;