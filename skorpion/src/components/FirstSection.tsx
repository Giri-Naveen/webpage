'use client';
import SimpleReveal from '@/components/SimpleReveal';
import { useState } from 'react';
import Navigation from './Navigation';

const FirstSection = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      {!navOpen && (
        <div className="fixed top-0 left-0 w-full flex justify-between items-center px-8 py-4 md:px-8 md:py-4 lg:px-10 lg:py-6 bg-black z-50 xl:hidden">
          <SimpleReveal>
            <div className="text-[38px] md:text-[38px] lg:text-[40px] font-semibold text-white">
              S.
            </div>
          </SimpleReveal>

          <SimpleReveal>
            <button
              id="hamburger-div"
              onClick={() => setNavOpen(true)}
              className="flex flex-col gap-[6px] focus:outline-none"
            >
              <span className="w-7 h-[2.5px] md:h-[3px] lg:h-[4px] bg-white" />
              <span className="w-7 h-[2.5px] md:h-[3px] lg:h-[4px] bg-white" />
              <span className="w-4 h-[2.5px] md:h-[3px] lg:h-[4px] bg-white self-start" />
            </button>
          </SimpleReveal>
        </div>
      )}

      {navOpen && <Navigation onClose={() => setNavOpen(false)} />}
    </>
  );
};

export default FirstSection;
