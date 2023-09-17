import Button, { type ButtonsProps } from 'molecules/Button';

import type { FC } from 'react';

const MenuItem: FC<ButtonsProps> = ({ id, ...props }) => (
  <Button
    key={id}
    id={id}
    className="relative flex items-center pb-1 font-titillium text-md font-semibold uppercase tracking-lg after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0 after:-translate-x-1/2 after:bg-maya-blue after:transition-[width] after:duration-100 after:ease-in-out hover:after:w-full"
    {...props}
  />
);

export default MenuItem;
