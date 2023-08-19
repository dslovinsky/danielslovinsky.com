import SkillBar from 'components/SkillBar';

import type { FC } from 'react';

const Page: FC<TemplatePageFragment> = ({ components }) => (
  <section>
    {components?.map(component => {
      switch (component?.__typename) {
        case 'ComponentSkillBarRecord':
          return <SkillBar key={component.id} {...component} />;
        default:
          return null;
      }
    })}
  </section>
);

export default Page;
