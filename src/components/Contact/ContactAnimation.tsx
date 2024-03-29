'use client';

import type { FC } from 'react';

import useWindowDimensions from 'hooks/useWindowDimensions';

import GameOfLife from 'components/animations/GameOfLife';

const responsiveSize = (width: number) => {
  if (width < 768) {
    return { height: 10, resolution: 5 };
  }
  if (width < 992) {
    return { height: 12, resolution: 6 };
  }

  return { height: 12, resolution: 6 };
};

const ContactAnimation: FC = () => {
  const { width } = useWindowDimensions();
  const widthInTens = Math.ceil(width / 100) * 10;

  const { height, resolution } = responsiveSize(width);

  return (
    <div className="fade-from-top-bottom absolute left-0 right-0 top-0 z-0 overflow-hidden">
      {/* if key changes, component rerenders - that way screen resizes are accounted for */}
      {width && (
        <GameOfLife
          key={`${widthInTens}${height}`}
          width={widthInTens}
          height={height}
          resolution={resolution}
          streak={0.5}
        />
      )}
    </div>
  );
};

export default ContactAnimation;
