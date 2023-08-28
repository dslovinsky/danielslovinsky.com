'use client';
import Image from 'next/image';
import { type FC, useState } from 'react';

import Button from 'molecules/Button';
import SectionHeading from 'molecules/SectionHeading';
import StructuredText from 'molecules/StructuredText';

const ProjectSlider: FC<ComponentProjectSliderFragment> = ({ heading, projects }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const { name: activeName, skills: activeSkills, featuredImage, summary, link } = projects[activeSlide];

  return (
    <div className="flex flex-col items-center xl:items-start">
      {heading && <SectionHeading heading={heading} alignOnDesktop="left" />}
      <div className="grid grid-cols-1 gap-x-8 pt-6 md:grid-cols-[286px_1fr] md:pt-10 lg:grid-cols-[430px_1fr] xl:grid-cols-[470px_1fr]">
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
        <div className="flex flex-col">
          {featuredImage?.url && (
            <Image
              src={featuredImage.url}
              alt={featuredImage.alt || activeName || 'Project image'}
              width={670}
              height={380}
              className="mb-4 md:mb-8"
            />
          )}
          <h2 className="mb-4 text-xl font-bold md:text-2xl">{activeName}</h2>
          {activeSkills && (
            <span className="mb-4">
              <strong>Tools used: </strong>
              {activeSkills.map(({ name }) => name).join(', ')}, and more
            </span>
          )}
          {summary && <StructuredText data={summary} />}
          {link && <Button url={link} label="Visit site" endIcon="arrow-up-right" />}
        </div>
      </div>
    </div>
  );
};

export default ProjectSlider;
