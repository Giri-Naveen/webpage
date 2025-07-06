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
  const hasAnimated = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          controls.start('visible');
          hasAnimated.current = true;
        }
      },
      { threshold }
    );

    observer.observe(node);

    if (node.getBoundingClientRect().top < window.innerHeight) {
      controls.start('visible');
      hasAnimated.current = true;
    }

    return () => observer.disconnect();
  }, [controls, threshold]);

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
