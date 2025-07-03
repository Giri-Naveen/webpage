'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

type Props = {
  onComplete?: () => void;
};

const LogoScreen: React.FC<Props> = ({ onComplete }) => {
  const pathname = usePathname();
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    setShowLoader(true);
    document.body.classList.add('no-scroll');

    const timer = setTimeout(() => setShowLoader(false), 1000);
    return () => clearTimeout(timer);
  }, [pathname]);

  const handleExitComplete = () => {
    document.body.classList.remove('no-scroll');
    onComplete?.();
  };

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {showLoader && (
        <motion.div
          key={pathname}
          initial={{ y: 0 }}
          animate={{ y: 0 }}
          exit={{ y: '0%' }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
        >
          <Image
            src="/images/white_logo.png"
            alt="Justvy Logo"
            width={250}
            height={250}
            className="object-contain"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LogoScreen;
