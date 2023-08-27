import SectionHeading from 'molecules/SectionHeading';

import type { FC } from 'react';

const ProjectSlider: FC<ComponentProjectSliderFragment> = ({ heading }) => (
  <div>{heading && <SectionHeading heading={heading} alignOnDesktop="left" />}</div>
);

export default ProjectSlider;
