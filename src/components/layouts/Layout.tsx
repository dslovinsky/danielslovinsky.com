import SEO from 'components/layouts/SEO';

import type { IMetaSeo } from 'contentful/types';
import type { FC, ReactNode } from 'react';

interface LayoutProps {
  seo: IMetaSeo;
  slug: string;
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children, seo, slug }) => (
  <>
    <SEO {...seo.fields} slug={slug} />
    {children}
  </>
);

export default Layout;
