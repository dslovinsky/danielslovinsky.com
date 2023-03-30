import { styled } from 'goober';
import { useState } from 'react';

import { validateProp } from 'quarks/gooberConfig';

import flattenObject from 'utils/flattenObject';
import { camelToKebabCase } from 'utils/functions';
import { hasOwnProperty, objectEntries } from 'utils/typeUtils';

import BREAKPOINTS from 'theme/breakpoints';
import COLOR from 'theme/colors';

import type { Properties } from 'csstype';
import type { DefaultTheme, Tagged, Theme } from 'goober';
import type { OverwriteProperties } from 'utils/typeUtils';

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

const themeMap = {
  $backgroundColor: (value: keyof typeof flattenedColors) => flattenedColors[value],
  $color: (value: keyof typeof flattenedColors) => flattenedColors[value],
  ...media,
};

type GetThemeValues<T> = {
  [P in keyof T]?: T[P] extends (...args: any) => string ? Parameters<T[P]>[0] : never;
};

type ThemeValues = GetThemeValues<typeof themeMap>;

type StyleProps = OverwriteProperties<PrefixedProperties<Properties>, ThemeValues>;

type StyledFunctionReturn = Tagged<
  JSX.LibraryManagedAttributes<'div', JSX.IntrinsicElements['div']> & StyleProps & Theme<DefaultTheme>
>;

type CallbackType = Parameters<StyledFunctionReturn>[0];

type ExtractFunctionsFromUnion<T> = T extends (...args: any) => any ? Parameters<T>[0] : never;

type DirectProps = ExtractFunctionsFromUnion<CallbackType>;

const createStylesFromProps = (props: DirectProps) =>
  objectEntries(props).reduce((prevValue, [propertyKey, value]) => {
    const key = camelToKebabCase(propertyKey.slice(1));
    // checks if prop is for styling
    if (validateProp(propertyKey)) {
      // checks if prop is something from themeMap
      if (hasOwnProperty(themeMap, propertyKey)) {
        // checks if prop is a media query
        if (hasOwnProperty(media, propertyKey)) {
          console.log(propertyKey, value);

          return {
            ...prevValue,
            [media[propertyKey]]: createStylesFromProps(value),
          };
        }
        const themeValue = themeMap[propertyKey](value);

        return {
          ...prevValue,
          [key]: themeValue,
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

const Control = styled('div')({
  backgroundColor: 'green',
});

// type Selector = { $selector: { selector: string } & StyleProps };

// const Component: FC<Selector> = props => <div>{console.log(props)}</div>;

const Test = () => {
  const [clicked, isClicked] = useState(false);

  return (
    <>
      <Div
        $backgroundColor={clicked ? 'gray-400' : 'primary-200'}
        $display="flex"
        $flexDirection="column"
        $color="common-white"
        $lg={{ $backgroundColor: 'primary-800' }}
        onClick={() => isClicked(!clicked)}
      >
        Test
      </Div>
      {/* <Component $selector={{ selector: '&:hover', $backgroundColor: 'gray-25' }} /> */}
      <Control>Control</Control>
    </>
  );
};

export default Test;
