import { styled } from 'goober';
import { useState } from 'react';

import { validateProp } from 'quarks/gooberConfig';

import flattenObject from 'utils/flattenObject';
import { camelToKebabCase } from 'utils/functions';
import { hasOwnProperty, objectEntries } from 'utils/typeUtils';

import BREAKPOINTS from 'theme/breakpoints';
import COLOR from 'theme/colors';

import type { Properties } from 'csstype';
import type { CSSAttribute, DefaultTheme, Tagged, Theme } from 'goober';
import type { ExtractFunctionsFromUnion, OverwriteProperties } from 'utils/typeUtils';

type CreateMedia<T extends typeof BREAKPOINTS> = {
  [P in keyof T & string as `$${P}`]: T[P] extends string ? `@media screen and (min-width: ${T[P]})` : never;
};

type Media = CreateMedia<typeof BREAKPOINTS>;

const media = objectEntries(BREAKPOINTS).reduce(
  (prevValue, [breakpointKey, breakpointValue]) => ({
    ...prevValue,
    [`$${breakpointKey}`]: `@media screen and (min-width: ${breakpointValue})`,
  }),
  {} as Media,
);

type PrefixedProperties<T> = {
  [P in keyof T & string as `$${P}`]?: T[P];
};

const flattenedColors = flattenObject(COLOR);

const customOverwrites = {
  $backgroundColor: (value: keyof typeof flattenedColors) => flattenedColors[value],
  $color: (value: keyof typeof flattenedColors) => flattenedColors[value],
};

type GetThemeValues<T> = {
  [P in keyof T]?: T[P] extends (...args: any) => string ? Parameters<T[P]>[0] : never;
};

type ThemeValues = GetThemeValues<typeof customOverwrites>;

type StyleProps = OverwriteProperties<PrefixedProperties<Properties>, ThemeValues>;

type StylingFunction = Tagged<
  JSX.LibraryManagedAttributes<'div', JSX.IntrinsicElements['div']> & StyleProps & Theme<DefaultTheme>
>;

type CallbackArg = ExtractFunctionsFromUnion<Parameters<StylingFunction>[number]>;

const createStylesFromProps = (props: CallbackArg): CSSAttribute =>
  objectEntries(props).reduce((prevValue, [propertyKey, value]) => {
    const key = camelToKebabCase(propertyKey.replaceAll('$', ''));
    // checks if prop is for styling
    if (validateProp(propertyKey)) {
      // checks if prop is something from customOverwrites
      if (hasOwnProperty(customOverwrites, propertyKey)) {
        const themeValue = customOverwrites[propertyKey](value);

        return {
          ...prevValue,
          [key]: themeValue,
        };
      }

      // checks if prop is a media query
      if (hasOwnProperty(media, propertyKey)) {
        return {
          ...prevValue,
          [media[propertyKey]]: createStylesFromProps(value),
        };
      }

      // checks if prop is pseudo-class or pseudo-element
      if (typeof value === 'object') {
        const extraColon = propertyKey.split('$').length > 2 ? ':' : '';

        return {
          ...prevValue,
          [`&:${extraColon}${key}`]: createStylesFromProps(value),
        };
      }

      return {
        ...prevValue,
        [key]: value,
      };
    }

    return prevValue;
  }, {});

const Div = styled('div')<StyleProps>(props => createStylesFromProps(props));

const Control = styled('div')<{ clicked: boolean }>(({ clicked }) => ({
  backgroundColor: clicked ? 'purple' : 'green',
  '&::after': {
    content: "'asdasd'",
    backgroundColor: 'blue',
  },
}));

const Test = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <>
      <Div
        $backgroundColor={clicked ? 'gray-400' : 'primary-200'}
        $display="flex"
        $flexDirection="column"
        $color="common-white"
        // $lg={{ $backgroundColor: 'primary-800' }}
        $$after={{ $content: "'after'" }}
        $hover={{ $backgroundColor: 'primary-800' }}
        onClick={() => setClicked(!clicked)}
      >
        Test
      </Div>
      {/* <Component $selector={{ selector: '&:hover', $backgroundColor: 'gray-25' }} /> */}
      <Control clicked={clicked}>Control</Control>
    </>
  );
};

export default Test;
