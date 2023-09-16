import Link from 'next/link';

import graphqlQuery from 'graphql/apolloClient';
import { GlobalHeaderDocument } from 'graphql/sdk';

import Icon from 'molecules/Icon';

import MenuItem from 'components/Header/MenuItem';
import MobileMenu from 'components/Header/MobileMenu';

import type { FC } from 'react';

const Header: FC = async () => {
  const { componentHeader } = await graphqlQuery<GlobalHeaderQuery>(GlobalHeaderDocument);

  if (!componentHeader) {
    throw new Error('Component Header data is missing');
  }

  const { links, mobileBottomLinks } = componentHeader;

  return (
    <nav className="sticky top-0 z-50 bg-black-pearl shadow-md shadow-black-pearl">
      <div className="relative flex justify-center border-b-2 border-b-maya-blue-10 py-4">
        <div className="flex w-full max-w-column justify-between px-4 md:px-14 xl:px-24">
          <Link href="/">
            <Icon icon="ds-logo" size={24} className="md:h-8 md:w-8" />
          </Link>
          {links && (
            <div className="hidden gap-x-10 sm:flex">
              {links.map(link => (
                <MenuItem key={link.id} {...link} />
              ))}
            </div>
          )}
          <MobileMenu links={links} mobileBottomLinks={mobileBottomLinks} />
        </div>
      </div>
    </nav>
  );
};

export default Header;
