import type { FC } from 'react';

interface OutlineTextProps {
  text: string;
}

const OutlineText: FC<OutlineTextProps> = ({ text }) => {
  if (!text) {
    return null;
  }

  return (
    <>
      {text.split('__').map((segment, index) =>
        index % 2 === 1 ? (
          <span
            key={`${segment}-${index}`}
            className="text-stroke-2 text-stroke-maya-blue text-stroke-fill-transparent"
          >
            {segment}
          </span>
        ) : (
          segment
        ),
      )}
    </>
  );
};

export default OutlineText;
