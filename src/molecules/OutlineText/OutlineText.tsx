import type { FC } from 'react';

interface OutlineTextProps {
  text: string;
}

/**
 * This component uses a two-layer approach to create an outlined text effect.
 * Using text-stroke is not practical because lines intersect in unexpected ways
 */
const OutlineText: FC<OutlineTextProps> = ({ text }) => {
  if (!text) {
    return null;
  }

  return (
    <>
      {text.split('__').map((segment, index) =>
        index % 2 === 1 ? (
          <span key={`${segment}-${index}`} className="relative inline-block">
            {/* Bottom layer: thicker stroke */}
            <span
              className="absolute inset-0 text-transparent [text-stroke:4px_var(--color-maya-blue)] [-webkit-text-stroke:4px_var(--color-maya-blue)]"
              aria-hidden="true"
            >
              {segment}
            </span>
            {/* Top layer: solid fill to cover interior intersections */}
            <span className="relative text-black-pearl [-webkit-text-fill-color:var(--color-black-pearl)]">
              {segment}
            </span>
          </span>
        ) : (
          segment
        ),
      )}
    </>
  );
};

export default OutlineText;
