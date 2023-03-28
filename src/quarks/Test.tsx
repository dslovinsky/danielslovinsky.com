import { setup, styled } from 'goober';
import { prefix } from 'goober/prefixer';
import { shouldForwardProp } from 'goober/should-forward-prop';
import { createContext, createElement, useContext, useState } from 'react';

import flattenObject from 'utils/flattenObject';
import { camelToKebabCase } from 'utils/functions';
import { hasOwnProperty, objectEntries } from 'utils/typeUtils';

import COLOR from 'theme/colors';

import type { Properties } from 'csstype';
import type { DefaultTheme, Tagged, Theme } from 'goober';
import type { OverwriteProperties } from 'utils/typeUtils';

const stylePropPrefix = '$';
const validateProp = (key: string) => key.startsWith(stylePropPrefix);

const theme = { primary: 'blue' };
const ThemeContext = createContext(theme);
const useTheme = () => useContext(ThemeContext);

setup(
  createElement,
  prefix,
  useTheme,
  shouldForwardProp(prop => !validateProp(prop)),
);

type MappedProperties<T> = {
  [P in keyof T & string as `$${P}`]?: T[P];
};

const flattenedColors = flattenObject(COLOR);

const themeMap = {
  $backgroundColor: (value: keyof typeof flattenedColors) => flattenedColors[value],
  $color: (value: keyof typeof flattenedColors) => flattenedColors[value],
};

type GetThemeValues<T> = {
  [P in keyof T]?: T[P] extends (...args: any) => string ? Parameters<T[P]>[0] : never;
};

type ThemeValues = GetThemeValues<typeof themeMap>;

type StyleProps = OverwriteProperties<MappedProperties<Properties>, ThemeValues>;

type StyledFunctionReturn = Tagged<
  JSX.LibraryManagedAttributes<'div', JSX.IntrinsicElements['div']> & StyleProps & Theme<DefaultTheme>
>;

type CallbackType = Parameters<StyledFunctionReturn>[0];

type ExtractFunctionsFromUnion<T> = T extends (...args: any) => any ? Parameters<T>[0] : never;

type DirectProps = ExtractFunctionsFromUnion<CallbackType>;

const getDirectProps = (props: DirectProps) =>
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
  }, {});

const Div = styled('div')<StyleProps>(props => getDirectProps(props));

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
        $color="common-white"
        onClick={() => isClicked(!clicked)}
      >
        Test
      </Div>
      <Control>Control</Control>
    </>
  );
};

export default Test;
