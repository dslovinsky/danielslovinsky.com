'use client';
import Image from 'next/image';
import { type FC, useEffect, useRef, useState } from 'react';

import Slide from 'components/ProjectSlider/Slide';

interface DesktopSliderProps {
  projects: ProjectFragment[];
  activeSlide: number;
  setActiveSlide: (index: number) => void;
}

const DesktopSlider: FC<DesktopSliderProps> = ({ projects, activeSlide, setActiveSlide }) => {
  const buttonContainerRef = useRef<HTMLDivElement>(null);
  const [activeButtonRect, setActiveButtonRect] = useState<Pick<DOMRect, 'top' | 'height'>>({ top: 0, height: 112 });

  const containerTop = buttonContainerRef.current?.getBoundingClientRect().top || 0;

  useEffect(() => {
    const activeButton = buttonContainerRef.current?.children[activeSlide];
    if (activeButton) {
      setActiveButtonRect(activeButton.getBoundingClientRect());
    }
  }, [activeSlide, buttonContainerRef]);

  const { top: activeButtonTop, height: activeButtonHeight } = activeButtonRect;
  const sliderTop = activeButtonTop - containerTop;

  return (
    <>
      <div className="relative hidden flex-col md:flex" ref={buttonContainerRef}>
        {projects.map(({ id, name: projectName, skills }, i) => (
          <button
            key={id}
            onClick={() => setActiveSlide(i)}
            className="flex flex-col justify-start gap-y-4 border-l-4 border-l-white-10 py-4 pl-4 transition-colors hover:bg-white-5 xl:py-6 xl:pl-10"
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
        <div
          className="absolute w-1 bg-maya-blue transition-[top]"
          style={{ height: activeButtonHeight, top: sliderTop }}
        />
      </div>
      <Slide project={projects[activeSlide]} className="hidden flex-col md:flex" />
    </>
  );
};

export default DesktopSlider;
