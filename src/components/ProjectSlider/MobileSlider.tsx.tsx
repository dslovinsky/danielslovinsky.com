'use client';
import { type FC, useRef } from 'react';

import Slide from 'components/ProjectSlider/Slide';

interface MobileSliderProps {
  projects: ProjectFragment[];
  activeSlide: number;
  setActiveSlide: (index: number) => void;
}

const MobileSlider: FC<MobileSliderProps> = ({ projects, activeSlide, setActiveSlide }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const container = containerRef.current;
    if (!container) {
      return;
    }
    const { left: containerLeft, right: containerRight } = container.getBoundingClientRect();

    const children = Array.from(container.children);

    const newIndex = children.findIndex(child => {
      const { left: childLeft, right: childRight } = child.getBoundingClientRect();

      return childLeft === containerLeft && childRight === containerRight;
    });

    if (newIndex !== -1) {
      setActiveSlide(newIndex);
    }
  };

  return (
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
      <div className="flex snap-x snap-mandatory gap-x-8 overflow-x-scroll" ref={containerRef} onScroll={handleScroll}>
        {projects.map((project, i) => (
          <Slide
            key={project.id}
            project={project}
            isActive={i === activeSlide}
            className="flex min-w-full snap-center flex-col md:hidden"
          />
        ))}
      </div>
    </>
  );
};

export default MobileSlider;
