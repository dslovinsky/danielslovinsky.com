'use client';
import Slide from 'components/ProjectSlider/Slide';

import type { FC } from 'react';

interface MobileSliderProps {
  projects: ProjectFragment[];
  activeSlide: number;
  setActiveSlide: (index: number) => void;
}

const MobileSlider: FC<MobileSliderProps> = ({ projects, activeSlide, setActiveSlide }) => (
  <>
    <div className="flex snap-x snap-mandatory overflow-x-scroll">
      {projects.map(({ id, name: projectName }, i) => (
        <button
          key={id}
          onClick={() => setActiveSlide(i)}
          className={`flex min-w-max snap-center justify-start border-b-4 p-4 hover:bg-white-5 ${
            activeSlide === i ? 'border-b-maya-blue' : 'border-b-white-10'
          }`}
        >
          <span className="text-start text-lg font-bold">{projectName}</span>
        </button>
      ))}
    </div>
    <div className="flex snap-x snap-mandatory gap-x-8 overflow-x-scroll">
      {projects.map(project => (
        <Slide key={project.id} project={project} className="flex min-w-full snap-center flex-col md:hidden" />
      ))}
    </div>
  </>
);

export default MobileSlider;
