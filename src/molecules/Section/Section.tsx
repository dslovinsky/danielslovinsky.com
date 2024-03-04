import type { FC, ReactNode } from 'react';

import sectionStyles, { topPaddingVariants } from 'molecules/Section/section.styles';

import { objectHas } from 'utils/typeUtils';

interface SectionProps extends SectionFragment {
  children: ReactNode;
}

const defaultPadding = 72;
const getPaddingVariant = (padding?: string | null) => {
  const paddingNum = Number(padding);

  return objectHas(topPaddingVariants, paddingNum) ? paddingNum : defaultPadding;
};

const Section: FC<SectionProps> = ({ children, id, idLink, topPadding, bottomPadding }) => {
  const topPaddingVariant = getPaddingVariant(topPadding);
  const bottomPaddingVariant = getPaddingVariant(bottomPadding);

  return (
    <section
      id={idLink || id}
      className={sectionStyles({ topPadding: topPaddingVariant, bottomPadding: bottomPaddingVariant })}
    >
      <div className="w-full max-w-column px-4 md:px-14 xl:px-24">{children}</div>
    </section>
  );
};

export default Section;
