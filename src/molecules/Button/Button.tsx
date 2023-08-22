import Icon, { type IconIds } from 'molecules/Icon';

import parseUrl from 'utils/parseUrl';

import type { ComponentPropsWithoutRef, FC } from 'react';

const isValidId = (id?: string | null): id is IconIds => !!id && ['ds-logo', 'linkedin', 'github'].includes(id);

type NativeButtonProps = ComponentPropsWithoutRef<'button'> & ComponentPropsWithoutRef<'a'>;

interface ButtonsProps extends ButtonFragment, Omit<NativeButtonProps, 'id'> {
  iconSize?: number;
}

const Button: FC<ButtonsProps> = ({ url, label, iconLabel, endIcon, iconSize = 24, id: _id, __typename, ...props }) => {
  const { Component: as, href, ...urlProps } = parseUrl(url || '');
  const Component = as === 'div' ? 'button' : as;

  return (
    <Component href={href} {...urlProps} {...props}>
      {(isValidId(iconLabel) && <Icon icon={iconLabel} size={iconSize} />) || label}
      {isValidId(endIcon) && <Icon icon={endIcon} size={iconSize} />}
    </Component>
  );
};

export default Button;
