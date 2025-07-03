'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useLoading } from '@/app/ClientBody';

interface Props {
  children: React.ReactNode;
  className?: string;
  delay?: number
}

const SimpleReveal = ({ children, className = '', delay=0 }: Props) => {
  const { isAnimating } = useLoading();
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (!isAnimating) {
      setShouldAnimate(true);
    }
  }, [isAnimating]);

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 60 }}
      animate={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.8, ease: 'easeOut', delay: delay || 0  }}
    >
      {children}
    </motion.div>
  );
};

export default SimpleReveal;
