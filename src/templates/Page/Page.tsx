import Section from 'molecules/Section';

import componentGenerator from 'utils/componentGenerator';

import type { FC } from 'react';

const Page: FC<TemplatePageFragment> = ({ components }) => (
  <main>
    {components.map(component => (
      <Section key={component.id} {...component.sectionOptions?.[0]}>
        {componentGenerator(component)}
      </Section>
    ))}
  </main>
);

export default Page;
