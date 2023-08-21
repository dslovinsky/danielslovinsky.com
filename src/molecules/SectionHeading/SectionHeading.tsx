import type { FC } from 'react';

interface SectionHeadingProps {
  heading: string;
}

const SectionHeading: FC<SectionHeadingProps> = ({ heading }) => (
  <h2 className="font-titillium text-2xl font-bold tracking-4xl">{heading}</h2>
);

export default SectionHeading;
