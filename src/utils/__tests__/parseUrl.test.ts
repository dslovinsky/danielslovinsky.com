import Link from 'next/link';

import parseUrl from 'utils/parseUrl';

describe('parseUrl', () => {
  it('should return as internal link', () => {
    const result = parseUrl('https://www.danielslovinsky.com/contact');
    expect(result).toStrictEqual({
      Component: Link,
      rel: '',
      target: '',
      href: '/contact',
    });
  });

  it('should return as external link', () => {
    const result = parseUrl('https://github.com/dslovinsky');
    expect(result).toStrictEqual({
      Component: 'a',
      rel: 'noreferrer noopener',
      target: '_blank',
      href: 'https://github.com/dslovinsky',
    });
  });

  it("should return as 'div'", () => {
    const result = parseUrl('');
    expect(result).toStrictEqual({ Component: 'div', href: '' });
  });
});
