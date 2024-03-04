import type { ComponentPropsWithoutRef, FC } from 'react';

import { isParagraph } from 'datocms-structured-text-utils';
import {
  type StructuredTextGraphQlResponse,
  StructuredText as StructuredTextParser,
  renderNodeRule,
} from 'react-datocms';

import Button from 'molecules/Button';
import ButtonGroup from 'molecules/Button/ButtonGroup';

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
      customNodeRules={[renderNodeRule(isParagraph, ({ children, key }) => <p key={key}>{children}</p>)]}
      renderBlock={({ record }) => {
        switch (record.__typename) {
          case 'ButtonRecord':
            return <Button {...(record as ButtonFragment)} className="mr-8 inline-flex" iconSize={32} />;
          case 'ButtonGroupRecord':
            return <ButtonGroup {...(record as ButtonGroupFragment)} />;
          default:
            return null;
        }
      }}
    />
  </div>
);

export default StructuredText;
