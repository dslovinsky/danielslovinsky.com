import { setup, styled } from 'goober';
import { shouldForwardProp } from 'goober/should-forward-prop';
import { createElement, useState } from 'react';

import { camelToKebabCase } from 'utils/functions';
import { objectEntries } from 'utils/typeUtils';

// eslint-disable-next-line absolute-only/imports
import allProperties from '../../allProperties.json';

import type { Properties } from 'csstype';

setup(
  createElement,
  undefined,
  undefined,
  shouldForwardProp(prop => !allProperties.includes(camelToKebabCase(prop))),
);

const Div = styled('div')<Properties>(props =>
  objectEntries(props).reduce((prevValue, [propertyKey, value]) => {
    const key = camelToKebabCase(propertyKey);
    if (allProperties.includes(key)) {
      return {
        ...prevValue,
        [key]: value,
      };
    }

    return prevValue;
  }, {}),
);

const Test = () => {
  const [clicked, isClicked] = useState(false);

  return (
    <Div backgroundColor={clicked ? 'red' : 'blue'} display="flex" onClick={() => isClicked(!clicked)}>
      Test
    </Div>
  );
};

export default Test;
