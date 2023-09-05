import type { FC, SVGProps } from 'react';

export const iconIds = ['ds-logo', 'linkedin', 'github', 'arrow-right', 'arrow-up-right'] as const;
export type IconIds = (typeof iconIds)[number];

interface IconProps extends SVGProps<SVGSVGElement> {
  icon: IconIds;
  size: number;
}

const Icon: FC<IconProps> = ({ icon, size = 24, ...props }) =>
  iconIds.includes(icon) ? (
    <svg width={size} height={size} role="img" aria-label={icon} {...props}>
      <use href={`/sprites.svg#${icon}`} />
    </svg>
  ) : null;

export default Icon;
