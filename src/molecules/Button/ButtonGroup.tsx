import Button from 'molecules/Button/Button';

import type { FC } from 'react';

const ButtonGroup: FC<ButtonGroupFragment> = ({ buttons }) => (
  <div className="flex gap-x-8">
    {buttons.map(button => (
      <Button key={button.id} {...button} iconSize={32} />
    ))}
  </div>
);

export default ButtonGroup;
