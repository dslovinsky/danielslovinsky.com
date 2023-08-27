import Image from 'next/image';

import StructuredText from 'molecules/StructuredText';

import outlineText from 'utils/outlineText';

import type { FC } from 'react';

const Hero: FC<ComponentHeroFragment> = ({ eyebrow, heading, body, mediaReference }) => (
  <div className="grid grid-cols-1 gap-x-8 md:grid-cols-[5fr_4fr] xl:grid-cols-[5fr_3fr]">
    <div className="flex flex-col">
      {eyebrow && <span className="pb-4 font-titillium text-xl lowercase xl:text-2xl">{eyebrow}</span>}
      {heading && (
        <h1 className="text-8xl font-black uppercase leading-sm sm:text-9xl lg:text-10xl xl:text-11xl">
          {outlineText(heading)}
        </h1>
      )}
      <hr className="my-6 w-full border-t-2 text-maya-blue-10" />
      {mediaReference && (
        <Image
          src={mediaReference.url}
          alt={mediaReference.alt || ''}
          height={mediaReference.height || 426}
          width={mediaReference.width || 426}
          className="mx-auto h-full w-full max-w-md object-contain pb-6 md:hidden"
          priority
        />
      )}
      {body && <StructuredText data={body} />}
    </div>
    {mediaReference && (
      <Image
        src={mediaReference.url}
        alt={mediaReference.alt || ''}
        height={mediaReference.height || 426}
        width={mediaReference.width || 426}
        className="hidden h-full w-full object-contain md:flex"
        priority
      />
    )}
  </div>
);

export default Hero;
