import { useEffect, useState } from 'react';

// see https://stackoverflow.com/a/63408216
const useWindowDimensions = () => {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState<{
    width: number;
    height: number;
  }>({
    width: undefined!,
    height: undefined!,
  });

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      handleResize();

      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return windowSize;
};

export default useWindowDimensions;
