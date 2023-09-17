'use client';
import { type FC, type MouseEventHandler, useState } from 'react';

import Hamburger from 'components/Header/Hamburger';
import MenuItem from 'components/Header/MenuItem';

interface MobileMenuProps {
  links: ButtonFragment[];
  mobileBottomLinks: ButtonFragment[];
}

const MobileMenu: FC<MobileMenuProps> = ({ links, mobileBottomLinks }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClick: MouseEventHandler = () => {
    if (isOpen) {
      document.body.style.overflow = 'auto';
    } else {
      document.body.style.overflow = 'hidden';
    }

    setIsOpen(!isOpen);
  };

  return (
    <>
      <Hamburger onClick={onClick} isOpen={isOpen} />
      <div
        className={`absolute left-0 top-[calc(100%+2px)] z-50 h-[calc(var(--dvh,1vh)*100-56px)] w-full overflow-hidden transition-[max-height] duration-200 sm:hidden ${
          isOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <div className="flex h-full flex-col justify-between bg-black-pearl py-4">
          <div className="flex flex-col items-center justify-center gap-y-8">
            {links.map(link => (
              <MenuItem key={link.id} {...link} onClick={onClick} />
            ))}
          </div>
          <div className="flex justify-center gap-x-8">
            {mobileBottomLinks.map(link => (
              <MenuItem key={link.id} {...link} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
