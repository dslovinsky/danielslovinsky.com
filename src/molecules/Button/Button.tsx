import type { ComponentPropsWithoutRef, FC } from 'react';

import { twMerge } from 'tailwind-merge';

import Icon, { type IconIds, iconIds } from 'molecules/Icon';

import parseUrl from 'utils/parseUrl';

const isValidId = (id?: string | null): id is IconIds => !!id && iconIds.includes(id as IconIds);

type NativeButtonProps = ComponentPropsWithoutRef<'button'> & ComponentPropsWithoutRef<'a'>;

export interface ButtonsProps extends Partial<ButtonFragment>, Omit<NativeButtonProps, 'id'> {
  iconSize?: number;
}

const Button: FC<ButtonsProps> = ({
  url,
  label,
  iconLabel,
  endIcon,
  iconSize = 24,
  id: _id,
  __typename,
  className,
  ...props
}) => {
  const { Component: as, href, ...urlProps } = parseUrl(url || '');
  const Component = as === 'div' ? 'button' : as;

  return (
    <Component
      href={href}
      className={twMerge(`inline-flex w-fit items-center gap-x-2 font-bold ${className}`)}
      {...urlProps}
      {...props}
    >
      {isValidId(iconLabel) ? <Icon icon={iconLabel} size={iconSize} className="hover:text-maya-blue" /> : label}
      {isValidId(endIcon) && <Icon icon={endIcon} size={iconSize} />}
    </Component>
  );
};

export default Button;
