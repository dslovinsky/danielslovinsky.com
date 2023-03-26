import { setup, styled } from 'goober';
import { shouldForwardProp } from 'goober/should-forward-prop';
import { createElement, useState } from 'react';

import { camelToKebabCase } from 'utils/functions';
import { objectEntries } from 'utils/typeUtils';

import type { Properties } from 'csstype';

const prefix = '$';
const validateProp = (key: string) => key.startsWith(prefix);

setup(
  createElement,
  undefined,
  undefined,
  shouldForwardProp(prop => !validateProp(prop)),
);

type MappedProperties<T> = {
  [P in keyof T & string as `$${P}`]?: T[P];
};

const Div = styled('div')<MappedProperties<Properties>>(props =>
  objectEntries(props).reduce((prevValue, [propertyKey, value]) => {
    const key = camelToKebabCase(propertyKey.slice(1));
    if (validateProp(propertyKey)) {
      return {
        ...prevValue,
        [key]: value,
      };
    }

    return prevValue;
  }, {}),
);

const Control = styled('div')({
  backgroundColor: 'green',
});

const Test = () => {
  const [clicked, isClicked] = useState(false);

  return (
    <>
      <Div $backgroundColor={clicked ? 'red' : 'blue'} $display="flex" onClick={() => isClicked(!clicked)}>
        Test
      </Div>
      <Control>Control</Control>
    </>
  );
};

export default Test;
