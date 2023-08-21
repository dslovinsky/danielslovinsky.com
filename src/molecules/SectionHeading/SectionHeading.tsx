import type { FC } from 'react';

interface SectionHeadingProps {
  heading: string;
  alignOnDesktop?: 'left' | 'center';
}

const SectionHeading: FC<SectionHeadingProps> = ({ heading, alignOnDesktop = 'center' }) => (
  <div className="relative flex h-11 w-min items-center">
    <h2 className="relative z-10 font-titillium text-2xl font-bold uppercase tracking-6xl">{heading}</h2>
    <span
      aria-hidden="true"
      className={`text-stroke-1 text-stroke-maya-blue absolute left-2/4 top-2/4 -translate-x-1/2 -translate-y-1/2 font-titillium text-9xl font-black uppercase tracking-5xl text-transparent text-opacity-10 ${
        alignOnDesktop === 'left' && 'lg:left-0 lg:translate-x-0'
      }`}
    >
      {heading}
    </span>
  </div>
);

export default SectionHeading;
