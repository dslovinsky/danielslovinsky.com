import Image from 'next/image';

import StructuredText from 'molecules/StructuredText';

import outlineText from 'utils/outlineText';

import type { FC } from 'react';

const Hero: FC<ComponentHeroFragment> = ({ eyebrow, heading, body, mediaReference }) => (
  <div className="grid grid-cols-1 gap-x-8 md:grid-cols-2 xl:grid-cols-[5fr_3fr]">
    <div className="flex flex-col">
      {eyebrow && <span className="font-titillium text-xl lowercase xl:text-2xl">{eyebrow}</span>}
      {heading && (
        <h1 className="text-8xl font-black uppercase leading-sm sm:text-9xl md:text-10xl xl:text-11xl">
          {outlineText(heading)}
        </h1>
      )}
      <hr className="w-full border-t-2 text-maya-blue-10" />
      {mediaReference && (
        <div className="relative h-full w-full max-w-md md:hidden">
          <Image
            src={mediaReference.url}
            alt={mediaReference.alt || ''}
            height={mediaReference.height || 426}
            width={mediaReference.width || 426}
            className="h-full w-full object-contain"
          />
        </div>
      )}
      {body && <StructuredText data={body} />}
    </div>
    {mediaReference && (
      <div className="relative hidden md:flex">
        <Image
          src={mediaReference.url}
          alt={mediaReference.alt || ''}
          height={mediaReference.height || 426}
          width={mediaReference.width || 426}
          className="h-full w-full object-contain"
        />
      </div>
    )}
  </div>
);

export default Hero;
