import Link from 'next/link';

import { DOMAIN } from 'utils/constants';

const parseUrl = (href: string) => {
  if (!href) {
    return {
      Component: 'div',
      href: '',
    } as const;
  }

  let url: URL;
  try {
    url = new URL(href);
  } catch (error) {
    console.error(error);
    throw new Error(`Invalid URL: ${href}`, { cause: error });
  }

  const isInternal = url.hostname === `www.${DOMAIN}` || url.hostname === DOMAIN;

  return {
    Component: isInternal ? Link : 'a',
    rel: isInternal ? '' : 'noreferrer noopener',
    target: isInternal ? '' : '_blank',
    href: isInternal ? url.href.split(url.host)[1] : href,
  } as const;
};

export default parseUrl;
