'use client';

import { type ComponentPropsWithoutRef, type FC } from 'react';

interface HamburgerProps extends ComponentPropsWithoutRef<'button'> {
  isOpen: boolean;
}

const Hamburger: FC<HamburgerProps> = ({ isOpen, ...props }) => {
  const lines = [
    'origin-top-left rotate-45 translate-x-1',
    'origin-center opacity-0',
    'origin-bottom-left -rotate-45 translate-x-1',
  ];

  return (
    <button className="flex h-6 w-6 flex-col justify-between py-[2px] sm:hidden" {...props}>
      {Array.from({ length: 3 }, (_, index) => (
        <div
          key={index}
          className={`h-[3px] w-full rounded-xl bg-white transition-all duration-200 ${isOpen ? lines[index] : ''}`}
        />
      ))}
    </button>
  );
};

export default Hamburger;
