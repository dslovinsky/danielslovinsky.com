import Link from 'next/link';

import graphqlQuery from 'graphql/apolloClient';
import { GlobalHeaderDocument } from 'graphql/sdk';

import Button from 'molecules/Button';
import Icon from 'molecules/Icon';

import Hamburger from 'components/Header/Hamburger';

import type { FC } from 'react';

const Header: FC = async () => {
  const { componentHeader } = await graphqlQuery<GlobalHeaderQuery>(GlobalHeaderDocument);

  return (
    <nav className="flex justify-center border border-b-2 border-maya-blue-10 py-4">
      <div className="flex w-full max-w-column justify-between px-4 md:px-14 xl:px-24">
        <Link href="/">
          <Icon icon="ds-logo" size={24} className="md:h-8 md:w-8" />
        </Link>
        {componentHeader?.links && (
          <div className="hidden gap-y-10 sm:flex">
            {componentHeader.links.map(({ id, ...rest }) => (
              <Button
                key={id}
                id={id}
                {...rest}
                className="relative flex items-center pb-1 font-titillium text-md font-semibold uppercase tracking-lg after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0 after:-translate-x-1/2 after:bg-maya-blue after:transition-[width] after:duration-100 after:ease-in-out hover:after:w-full"
              />
            ))}
          </div>
        )}
        <Hamburger className="flex sm:hidden" />
      </div>
    </nav>
  );
};

export default Header;
