// import useWindowDimensions from './useWindowDimensions';
import {useEffect} from 'react';

// @see https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
export default function useViewHeight() {
  // const {height} = useWindowDimensions();

  useEffect(() => {
    const vh = window.innerHeight / 100;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }, []);
}
