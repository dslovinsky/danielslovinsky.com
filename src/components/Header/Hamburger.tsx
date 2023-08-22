'use client';
import { type ComponentPropsWithoutRef, type FC, useState } from 'react';
import { twMerge } from 'tailwind-merge';

type HamburgerProps = ComponentPropsWithoutRef<'button'>;

const Hamburger: FC<HamburgerProps> = ({ className, ...props }) => {
  const [isActive, setIsActive] = useState(false);

  const lines = [
    'origin-top-left rotate-45 translate-x-1',
    'origin-center opacity-0',
    'origin-bottom-left -rotate-45 translate-x-1',
  ];

  return (
    <button
      className={twMerge(`flex h-6 w-6 flex-col justify-between py-[2px] ${className}`)}
      onClick={() => setIsActive(!isActive)}
      {...props}
    >
      {Array.from({ length: 3 }, (_, index) => (
        <div
          key={index}
          className={`h-[3px] w-full rounded-xl bg-white transition-all duration-200 ${isActive && lines[index]}`}
        />
      ))}
    </button>
  );
};

export default Hamburger;
