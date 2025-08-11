'use client';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const words = ['Envision', 'Lead', 'Execute'];

const LoadingScreen = () => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ y: 0 }}
        animate={{ y: 0 }}
        exit={{ y: '-100%' }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
        className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
      >
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
          <motion.div
            className="absolute flex gap-[10px] md:gap-[13px] lg:gap-4 text-white text-3xl md:text-5xl font-semibold overflow-hidden"
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 0, y: -60 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            {words.map((word, index) => (
              <motion.span
                key={word}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.3, duration: 0.5 }}
                className={`${index === 1 ? 'font-semibold' : 'font-light'}`}
              >
                {word}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            className="absolute flex items-center justify-center w-full h-[3.5rem]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.3 }}
          >
            <div className="relative w-[300px] h-full flex items-center justify-center">
              <motion.div
                className="absolute bg-[#1ECDFE] w-full h-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  delay: 2.3,
                  duration: 0.4,
                  ease: 'easeInOut',
                }}
                style={{ transformOrigin: 'left' }}
              />

              <motion.div
                className="absolute bg-black w-full h-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  delay: 2.8,
                  duration: 0.4,
                  ease: 'easeInOut',
                }}
                style={{ transformOrigin: 'left' }}
              />

              <motion.div
                className="relative z-10 w-[250px] h-[250px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ delay: 3.3, duration: 0.5 }}
              >
                <Image
                  src="/images/white_logo.png"
                  alt="Skorpion Digi Solutions"
                  fill
                  className="object-contain"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;
