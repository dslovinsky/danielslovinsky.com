'use client';

import { type FC, useEffect, useRef } from 'react';

import Slide from 'components/ProjectSlider/Slide';

interface MobileSliderProps {
  projects: ProjectFragment[];
  activeSlide: number;
  setActiveSlide: (index: number) => void;
}

const MobileSlider: FC<MobileSliderProps> = ({ projects, activeSlide, setActiveSlide }) => {
  const slideContainerRef = useRef<HTMLDivElement>(null);
  const hasMounted = !!slideContainerRef?.current;

  useEffect(() => {
    if (hasMounted) {
      const activeProjectButton = document.getElementById(`project-${activeSlide}`);
      activeProjectButton?.scrollIntoView({ block: 'nearest', inline: 'center' });
    }
  }, [activeSlide]);

  const handleScroll = () => {
    const container = slideContainerRef.current;
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
      <div className="mb-8 flex snap-x snap-mandatory overflow-x-scroll md:hidden">
        {projects.map(({ id, name: projectName }, i) => (
          <button
            id={`project-${i}`}
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
      <div
        className="flex snap-x snap-mandatory gap-x-8 overflow-y-hidden overflow-x-scroll md:hidden"
        ref={slideContainerRef}
        onScroll={handleScroll}
      >
        {projects.map((project, i) => (
          <Slide
            key={project.id}
            project={project}
            isActive={i === activeSlide}
            className="flex min-w-full snap-center flex-col"
          />
        ))}
      </div>
    </>
  );
};

export default MobileSlider;
