import Link from 'next/link';

import parseUrl from 'utils/parseUrl';

describe('parseUrl', () => {
  it('should return as internal link', () => {
    expect(parseUrl('https://www.danielslovinsky.com/contact')).toStrictEqual({
      Component: Link,
      rel: '',
      target: '',
      href: '/contact',
    });
  });

  it('should return as external link', () => {
    expect(parseUrl('https://github.com/dslovinsky')).toStrictEqual({
      Component: 'a',
      rel: 'noreferrer noopener',
      target: '_blank',
      href: 'https://github.com/dslovinsky',
    });
  });

  it("should return as 'div'", () => {
    expect(parseUrl('')).toStrictEqual({ Component: 'div', href: '' });
  });
});
