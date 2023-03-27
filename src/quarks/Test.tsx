import { setup, styled } from 'goober';
import { shouldForwardProp } from 'goober/should-forward-prop';
import { createElement, useState } from 'react';

import flattenObject from 'utils/flattenObject';
import { camelToKebabCase } from 'utils/functions';
import { hasOwnProperty, objectEntries } from 'utils/typeUtils';

import COLOR from 'theme/colors';

import type { Properties } from 'csstype';
import type { OverwriteProperties } from 'utils/typeUtils';

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

const flattenedColors = flattenObject(COLOR);

const themeMap = {
  $backgroundColor: (value: keyof typeof flattenedColors) => flattenedColors[value],
};

type GetThemeValues<T> = {
  [P in keyof T]: T[P] extends (...args: any) => any ? Parameters<T[P]>[0] : never;
};

type ThemeValues = GetThemeValues<typeof themeMap>;

type StyleProps = OverwriteProperties<MappedProperties<Properties>, ThemeValues>;

const Div = styled('div')<StyleProps>(props =>
  objectEntries(props).reduce((prevValue, [propertyKey, value]) => {
    const key = camelToKebabCase(propertyKey.slice(1));
    if (validateProp(propertyKey)) {
      if (hasOwnProperty(themeMap, propertyKey)) {
        const newValue = themeMap[propertyKey](value);

        return {
          ...prevValue,
          [key]: newValue,
        };
      }

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
      <Div
        $backgroundColor={clicked ? 'gray-400' : 'primary-200'}
        $display="flex"
        $flexDirection="column"
        onClick={() => isClicked(!clicked)}
      >
        Test
      </Div>
      <Control>Control</Control>
    </>
  );
};

export default Test;
