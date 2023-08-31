import Image from 'next/image';

import Button from 'molecules/Button';
import StructuredText from 'molecules/StructuredText';

import type { ComponentPropsWithoutRef, FC } from 'react';

interface SlideProps extends ComponentPropsWithoutRef<'div'> {
  project: ProjectFragment;
}

const Slide: FC<SlideProps> = ({ project: { name, skills, featuredImage, summary, link }, ...props }) => (
  <div {...props}>
    {featuredImage?.url && (
      <Image
        src={featuredImage.url}
        alt={featuredImage.alt || name || 'Project image'}
        width={670}
        height={380}
        className="mb-4 md:mb-8"
      />
    )}
    <h2 className="mb-4 text-xl font-bold md:text-2xl">{name}</h2>
    {skills && (
      <span className="mb-4">
        <strong>Tools used: </strong>
        {skills.map(({ name: skillName }) => skillName).join(', ')}, and more
      </span>
    )}
    {summary && <StructuredText data={summary} />}
    {link && <Button url={link} label="Visit site" endIcon="arrow-up-right" />}
  </div>
);

export default Slide;
