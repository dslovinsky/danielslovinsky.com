import { setup, styled } from 'goober';
import { createElement } from 'react';

import { camelToKebabCase } from 'utils/functions';
import { objectEntries } from 'utils/typeUtils';

// eslint-disable-next-line absolute-only/imports
import allProperties from '../../allProperties.json';

import type { Properties } from 'csstype';

setup(createElement);

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

const Test = () => (
  <Div backgroundColor="red" display="flex" onClick={e => console.log(e)}>
    Test
  </Div>
);

export default Test;
