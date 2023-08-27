'use client';
import useWindowDimensions from 'hooks/useWindowDimensions';

import GameOfLife from 'components/animations/GameOfLife';

import type { FC } from 'react';

const HeroAnimation: FC = () => {
  const { width } = useWindowDimensions();
  const widthInTens = Math.ceil(width / 100) * 10;

  return (
    <div className="fade-from-top absolute left-0 right-0 top-36 z-0 overflow-hidden">
      {/* if key changes, component rerenders - that way screen resizes are accounted for */}
      {width && <GameOfLife key={widthInTens} width={widthInTens} height={20} resolution={6} streak={0.5} />}
    </div>
  );
};

export default HeroAnimation;
