'use client';
import { useEffect, useRef, useState, createContext, useContext } from 'react';
import { usePathname } from 'next/navigation';
import LoadingScreen from '@/components/LoadingScreen';
import LogoScreen from '@/components/LogoScreen';
import { useViewportHeight } from '@/hooks/useViewportHeight';
import ScrollProgressBar from '@/components/ScrollProgressBar';

const LoadingContext = createContext<{ isAnimating: boolean }>({ isAnimating: true });
export const useLoading = () => useContext(LoadingContext);

export default function ClientBody({ children }: { children: React.ReactNode }) {
  const pathname  = usePathname();
  const firstLoad = useRef(true);
  const [showSite,setShowSite] = useState(false);
  const [routeAnimating,setRouteAnimating] = useState(false);

  useViewportHeight();

  useEffect(() => {
    document.body.classList.add('no-scroll');

    const t = setTimeout(() => {
      setShowSite(true);
      document.body.classList.remove('no-scroll');
      window.dispatchEvent(new Event('scroll'));
      firstLoad.current = false;
    }, 4500);

    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (firstLoad.current) return;
    setRouteAnimating(true);
  }, [pathname]);

  const handleRouteAnimDone = () => setRouteAnimating(false);

  const canShowChildren = showSite && !routeAnimating;
  const isAnimating = !showSite || routeAnimating;

  return (
    <LoadingContext.Provider value={{ isAnimating }}>
      <body
        className={`antialiased ${pathname.startsWith('/work') ? 'bg-black text-white' : 'bg-white text-black'}`}
        suppressHydrationWarning
      >
        <ScrollProgressBar />

        {!showSite && <LoadingScreen />}

        {!firstLoad.current && routeAnimating && (
          <LogoScreen key={pathname} onComplete={handleRouteAnimDone} />
        )}

        {canShowChildren && children}
      </body>
    </LoadingContext.Provider>
  );
}
