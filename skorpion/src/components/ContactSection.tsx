import Link from 'next/link';
import SimpleReveal from '@/components/SimpleReveal';

const ContactSection = () => {
  return (
    <section data-section id='hero' className="w-full pt-28 pb-20 md:pb-20 lg:pb-24 xl:py-28 flex flex-col items-center justify-center bg-white relative">
      <div className="relative flex items-center w-full justify-center mt-16 md:mt-[68px] lg:mt-[72px] xl:mt-10">

        <SimpleReveal>
        <div className="hidden md:block absolute left-0 top-1/2 md:w-[36%] xl:w-[40%] border-t border-gray-300" />
        </SimpleReveal>
        
        <SimpleReveal>
        <div className="bg-white px-8 z-10 text-[12px] md:text-[14px] whitespace-nowrap">
          <Link href="/" className="text-black tracking-widest font-semibold hover:text-[#1ECDFE]">HOMEPAGE</Link>
          <span className="mx-3 text-base">/</span>
          <span className="text-gray-400 font-semibold cursor-not-allowed tracking-widest">CONTACT</span>
        </div>
        </SimpleReveal>
      </div>

      <SimpleReveal>
      <h1 className="leading-[1.0] text-[40px] md:text-[58px] lg:text-[70px] xl:text-[76px] font-semibold font-sans text-black text-center mt-16">Get in touch!</h1>
      </SimpleReveal>

      <div
         onClick={() => {
            document.getElementById("message-section")?.scrollIntoView({ behavior: "smooth" });
          }} 
        className="mt-14 md:mt-16 pt-1 flex items-center gap-2 md:gap-4 cursor-pointer"
      >
        <SimpleReveal><span className="tracking-widest text-[11px] md:text-[13px] font-semibold">SEND MESSAGE</span></SimpleReveal>
        <SimpleReveal>
        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
              <svg
                className='mt-[2px]'
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="12" y1="1" x2="12" y2="19" />
                <polyline points="19 12 12 19 5 12" />
              </svg>
        </div>
        </SimpleReveal>
      </div>
    </section>
  );
};

export default ContactSection;
