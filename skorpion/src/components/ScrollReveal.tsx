'use client';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface ScrollFadeInProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  delay?: number;
}

const ScrollReveal = ({ children, className = '', threshold = 0.5, delay = 0 }: ScrollFadeInProps) => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const previousY = useRef<number | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (hasAnimated) return;

          const top = entry.boundingClientRect.top;
          const isInView = entry.isIntersecting;
          const isScrollingDown = previousY.current !== null && top < previousY.current;

          if (isInView && isScrollingDown) {
            controls.start('visible');
            setHasAnimated(true);
          }

          previousY.current = top;
        });
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [controls, threshold, hasAnimated]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: 'easeOut', delay },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
