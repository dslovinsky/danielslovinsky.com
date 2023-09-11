import MenuItem from 'components/Header/MenuItem';

import type { FC } from 'react';

interface MobileMenuProps {
  links: ButtonFragment[];
  mobileBottomLinks: ButtonFragment[];
}

const MobileMenu: FC<MobileMenuProps> = ({ links, mobileBottomLinks }) => (
  <div className="flex h-full flex-col justify-between bg-black-pearl py-4">
    <div className="flex flex-col items-center justify-center gap-y-8">
      {links.map(link => (
        <MenuItem key={link.id} {...link} />
      ))}
    </div>
    <div className="flex justify-center gap-x-8">
      {mobileBottomLinks.map(link => (
        <MenuItem key={link.id} {...link} />
      ))}
    </div>
  </div>
);

export default MobileMenu;
