import Link from 'next/link';

import graphqlQuery from 'graphql/apolloClient';
import { GlobalHeaderDocument } from 'graphql/sdk';

import Button from 'molecules/Button';
import Icon from 'molecules/Icon';

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
          <div className="flex">
            {componentHeader.links.map(({ id, ...rest }) => (
              <Button key={id} id={id} {...rest} />
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
