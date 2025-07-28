'use client';
import SimpleReveal from '@/components/SimpleReveal';
import { useEffect, useState } from 'react';
import Navigation from './Navigation';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const FixedUI = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const pathname = usePathname();

  let currentPageLabel = '';

  if (pathname === '/') {
    currentPageLabel = 'HOMEPAGE';
  } else if (pathname === '/about-us') {
    currentPageLabel = 'ABOUT US';
  } else if (pathname === '/team') {
    currentPageLabel = 'TEAM';
  } else if (pathname === '/contact-us') {
    currentPageLabel = 'CONTACT';
  } else if (pathname === '/work') {
    currentPageLabel = 'SERVICES';
  } else if (pathname.startsWith('/services')) {
    currentPageLabel = 'SERVICES';
  } else if (pathname.startsWith('/blogs')) {
    currentPageLabel = 'BLOG';
  } else if (pathname.startsWith('/policies')) {
    currentPageLabel = 'POLICIES';
  }

  useEffect(() => {
    const checkScroll = () => {
      const hero = document.getElementById('hero');
      if (hero) {
        const heroRect = hero.getBoundingClientRect();
        const backToTopY = window.innerHeight * 0.6;

        const isOutsideHero =
          backToTopY < heroRect.top || backToTopY > heroRect.bottom;

        setShowBackToTop(isOutsideHero);
      }
    };

    checkScroll();
    window.addEventListener('scroll', checkScroll);
    window.addEventListener('resize', checkScroll);

    return () => {
      window.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  return (
    <div className="hidden xl:block">
      {!navOpen && (
        <SimpleReveal>
          <Link href="/">
          <div
            id="a-div"
            className="fixed top-6 left-16 text-[42px] font-semibold font-sans z-50 transition-colors duration-300 mix-blend-difference text-white cursor-pointer"
          >
            S.
          </div>
          </Link>
        </SimpleReveal>
      )}

      {!navOpen && currentPageLabel && (
        
          <div
            className="fixed left-[6%] top-[85.5%] -rotate-90 origin-left text-[14px] tracking-widest z-50 mix-blend-difference text-white pointer-events-none"
          >
            {currentPageLabel}
          </div>
        
      )}  

      {showBackToTop && !navOpen && (
        <>
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed right-[4.4%] top-[62.5%] z-50 cursor-pointer select-none"
          >
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white text-black mix-blend-difference">
              <span className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center transition-transform duration-500 ease-in group-hover:scale-[115%]">
                <svg
                  className="mb-[2px] rotate-[-90deg]"
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
          </div>

          <div
            className="fixed right-[2%] top-[calc(62%+91px)] text-[14px] tracking-widest -rotate-90 mix-blend-difference text-white z-50 pointer-events-none"
            style={{ isolation: 'isolate' }}
          >
            BACK TO TOP
          </div>
        </>
      )}

      {!navOpen && (
        <SimpleReveal>
          <button
            id="hamburger-div"
            onClick={() => setNavOpen(true)}
            className="fixed top-12 right-[5%] z-50 flex flex-col gap-[7px] hover:opacity-80 transition focus:outline-none mix-blend-difference"
          >
            <span className="w-7 h-[3px] bg-white transition-colors duration-300" />
            <span className="w-7 h-[3px] bg-white transition-colors duration-300" />
            <span className="w-4 h-[3px] bg-white transition-colors duration-300" />
          </button>
        </SimpleReveal>
      )}

      {navOpen && <Navigation onClose={() => setNavOpen(false)} />}
    </div>
  );
};

export default FixedUI;