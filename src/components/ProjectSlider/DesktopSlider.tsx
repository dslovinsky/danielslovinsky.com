'use client';
import Image from 'next/image';

import Slide from 'components/ProjectSlider/Slide';

import type { FC } from 'react';

interface DesktopSliderProps {
  projects: ProjectFragment[];
  activeSlide: number;
  setActiveSlide: (index: number) => void;
}

const DesktopSlider: FC<DesktopSliderProps> = ({ projects, activeSlide, setActiveSlide }) => (
  <>
    <div className="hidden flex-col md:flex">
      {projects.map(({ id, name: projectName, skills }, i) => (
        <button
          key={id}
          onClick={() => setActiveSlide(i)}
          className={`flex flex-col justify-start gap-y-4 border-l-4 py-4 pl-4 transition-colors hover:bg-white-5 xl:py-6 xl:pl-10 ${
            activeSlide === i ? 'border-l-maya-blue' : 'border-l-white-10'
          }`}
        >
          <span className="text-start text-lg font-bold">{projectName}</span>
          <div className="flex gap-4">
            {skills.map(
              ({ id: skillId, name: skillName, logo }) =>
                logo && (
                  <Image
                    key={skillId}
                    src={logo?.url}
                    alt={logo.alt || `${skillName || ''} logo`}
                    height={24}
                    width={24}
                  />
                ),
            )}
          </div>
        </button>
      ))}
    </div>
    <Slide project={projects[activeSlide]} className="hidden flex-col md:flex" />
  </>
);

export default DesktopSlider;
