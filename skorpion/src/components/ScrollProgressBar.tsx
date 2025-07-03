'use client';
import { useEffect, useRef } from 'react';

const ScrollProgressBar = () => {
  const barRef = useRef<HTMLDivElement>(null);
  const currentProgress = useRef(0);
  const targetProgress = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      targetProgress.current = progress;
    };

    const animate = () => {
      currentProgress.current += (targetProgress.current - currentProgress.current) * 0.1;
      if (barRef.current) {
        barRef.current.style.height = `${currentProgress.current}%`;
      }
      requestAnimationFrame(animate);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    animate();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 right-0 h-full w-[2px] md:w-[3px] lg:[w-4px] xl:w-[5px] bg-black z-[9999]">
      <div
        ref={barRef}
        className="w-full bg-[#1ECDFE]"
        style={{
          height: '0%'
        }}
      />
    </div>
  );
};

export default ScrollProgressBar;
