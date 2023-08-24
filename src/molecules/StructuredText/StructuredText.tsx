import { type StructuredTextGraphQlResponse, StructuredText as StructuredTextParser } from 'react-datocms';

import Button from 'molecules/Button';

import type { ComponentPropsWithoutRef, FC } from 'react';

type Data = {
  __typename?: string;
  value: unknown;
  links?: Record<string, unknown>[];
  blocks?: Record<string, unknown>[];
};

interface StructuredTextProps extends ComponentPropsWithoutRef<'div'> {
  data: Data;
}

const StructuredText: FC<StructuredTextProps> = ({ data, className, ...props }) => (
  <div className={className} {...props}>
    <StructuredTextParser
      data={data as StructuredTextGraphQlResponse}
      renderBlock={({ record }) => {
        switch (record.__typename) {
          case 'ButtonRecord':
            return <Button {...(record as ButtonFragment)} />;
          default:
            return null;
        }
      }}
    />
  </div>
);

export default StructuredText;
