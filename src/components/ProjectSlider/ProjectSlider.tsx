'use client';
import { type FC, useState } from 'react';

import SectionHeading from 'molecules/SectionHeading';

import DesktopSlider from 'components/ProjectSlider/DesktopSlider';
import MobileSlider from 'components/ProjectSlider/MobileSlider.tsx';

const ProjectSlider: FC<ComponentProjectSliderFragment> = ({ heading, projects }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div className="flex flex-col items-center xl:items-start">
      {heading && <SectionHeading heading={heading} alignOnDesktop="left" />}
      <div className="grid min-h-[82px] w-full grid-cols-1 gap-x-8 pt-6 md:grid-cols-[286px_1fr] md:pt-10 lg:grid-cols-[430px_1fr] xl:grid-cols-[470px_1fr]">
        <DesktopSlider projects={projects} activeSlide={activeSlide} setActiveSlide={setActiveSlide} />
        <MobileSlider projects={projects} activeSlide={activeSlide} setActiveSlide={setActiveSlide} />
      </div>
    </div>
  );
};

export default ProjectSlider;
