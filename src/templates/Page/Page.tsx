import Section from 'molecules/Section';

import componentGenerator from 'utils/componentGenerator';

import type { FC } from 'react';

const Page: FC<TemplatePageFragment> = ({ components }) =>
  components.map(
    component =>
      component && (
        <Section key={component.id} {...component.sectionOptions[0]}>
          {componentGenerator(component)}
        </Section>
      ),
  );

export default Page;
