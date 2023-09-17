'use client';
import Image from 'next/image';
import { type FC, type MouseEvent, useState } from 'react';

import Slide from 'components/ProjectSlider/Slide';

import colors from 'theme/colors';

const generateDynamicGradient = (height: number) => `linear-gradient(
  to bottom,
  transparent 0px,
  ${colors['maya-blue']} 0px,
  ${colors['maya-blue']} ${height}px,
  transparent ${height}px,
  transparent 100%
)`;

interface DesktopSliderProps {
  projects: ProjectFragment[];
  activeSlide: number;
  setActiveSlide: (index: number) => void;
}

const DesktopSlider: FC<DesktopSliderProps> = ({ projects, activeSlide, setActiveSlide }) => {
  const [gradient, setGradient] = useState(generateDynamicGradient(94));
  const [backgroundPositionY, setBackgroundPositionY] = useState('0px');

  const handleClick = ({ currentTarget }: MouseEvent<HTMLButtonElement>, index: number) => {
    setActiveSlide(index);
    const { offsetTop, offsetHeight } = currentTarget;
    setGradient(generateDynamicGradient(offsetHeight));
    setBackgroundPositionY(`${offsetTop}px`);
  };

  return (
    <>
      <div className="hidden h-fit md:flex">
        <div
          className="w-1 bg-white-10 transition-[background-position]"
          style={{ backgroundImage: gradient, backgroundPositionY }}
        />
        <div className="relative flex flex-col">
          {projects.map(({ id, name: projectName, skills }, i) => (
            <button
              key={id}
              onClick={e => handleClick(e, i)}
              className="flex flex-col justify-start gap-y-4 py-4 pl-4 transition-colors hover:bg-white-5 xl:py-6 xl:pl-10"
            >
              <span className="text-start text-lg font-bold">{projectName}</span>
              <div className="flex h-6 gap-4">
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
      </div>
      <Slide project={projects[activeSlide]} className="hidden flex-col md:flex" />
    </>
  );
};

export default DesktopSlider;
