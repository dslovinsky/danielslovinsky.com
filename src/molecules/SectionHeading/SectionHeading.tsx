import type { FC } from 'react';

interface SectionHeadingProps {
  heading: string;
  alignOnDesktop?: 'left' | 'center';
}

const SectionHeading: FC<SectionHeadingProps> = ({ heading, alignOnDesktop = 'center' }) => (
  <div className="relative flex h-11 w-min items-center">
    <h2 className="relative z-10 font-titillium text-2xl font-bold uppercase tracking-4xl md:text-3xl xl:text-4xl">
      {heading}
    </h2>
    <span
      aria-hidden="true"
      className={`text-stroke text-stroke-maya-blue/10 text-stroke-fill-transparent absolute left-2/4 top-2/4 -translate-x-1/2 -translate-y-1/2 font-titillium text-6xl font-black uppercase tracking-4xl md:text-8xl xl:text-9xl xl:tracking-6xl ${
        alignOnDesktop === 'left' ? 'xl:left-0 xl:translate-x-0' : 'md:ml-px xl:ml-1' // left margin to account for extra space on right from letter-spacing
      }`}
    >
      {heading}
    </span>
  </div>
);

export default SectionHeading;
