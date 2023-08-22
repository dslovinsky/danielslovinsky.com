'use client';
import { type ComponentPropsWithoutRef, type FC, type MouseEventHandler, type ReactNode, useState } from 'react';
import { twMerge } from 'tailwind-merge';

interface HamburgerProps extends ComponentPropsWithoutRef<'button'> {
  children: ReactNode;
}

const Hamburger: FC<HamburgerProps> = ({ className, children, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClick: MouseEventHandler<HTMLButtonElement> = e => {
    if (!(e.target as HTMLButtonElement).id?.includes('hamburger')) {
      return;
    }

    if (isOpen) {
      document.body.style.overflow = 'auto';
    } else {
      document.body.style.overflow = 'hidden';
    }

    setIsOpen(!isOpen);
  };

  const lines = [
    'origin-top-left rotate-45 translate-x-1',
    'origin-center opacity-0',
    'origin-bottom-left -rotate-45 translate-x-1',
  ];

  return (
    <button
      id="hamburger"
      className={twMerge(`flex h-6 w-6 flex-col justify-between py-[2px] ${className}`)}
      onClick={onClick}
      {...props}
    >
      {Array.from({ length: 3 }, (_, index) => (
        <div
          id={`hamburger-line-${index}`}
          key={index}
          className={`h-[3px] w-full rounded-xl bg-white transition-all duration-200 ${isOpen ? lines[index] : ''}`}
        />
      ))}
      <div
        className={`absolute left-0 top-[calc(100%+2px)] z-50 h-[calc(var(--dvh,1vh)*100-56px)] w-full overflow-hidden transition-[max-height] duration-200 ${
          isOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        {children}
      </div>
    </button>
  );
};

export default Hamburger;
