import Image from 'next/image';
import type { FC } from 'react';

import StructuredText from 'molecules/StructuredText';

import HeroAnimation from 'components/Hero/HeroAnimation';

import outlineText from 'utils/outlineText';

const Hero: FC<ComponentHeroFragment> = ({ eyebrow, heading, body, mediaReference }) => (
  <>
    <div className="relative mb-10 grid grid-cols-1 gap-x-8 pb-12 md:mb-0 md:grid-cols-[5fr_4fr] md:pb-0 xl:grid-cols-[5fr_3fr]">
      <div className="relative z-20 flex flex-col">
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
        {body && <StructuredText data={body} className="flex flex-col gap-4" />}
      </div>
      {mediaReference && (
        <Image
          src={mediaReference.url}
          alt={mediaReference.alt || ''}
          height={mediaReference.height || 426}
          width={mediaReference.width || 426}
          className="relative z-20 hidden h-full w-full object-contain md:flex"
          priority
        />
      )}
      {/* Empty div for background that blocks animation from touching rest of hero */}
      <div className="absolute z-10 -ml-6 hidden h-full w-[calc(100%+48px)] bg-black-pearl md:block" />
    </div>
    <HeroAnimation />
  </>
);

export default Hero;
