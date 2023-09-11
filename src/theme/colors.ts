const baseColors = {
  black: '#000000',
  white: '#FFFFFF',
  red: '#FF0000',
  'black-pearl': '#0D1115',
  'maya-blue': '#6ADBFF',
} as const;

const opacities = [
  { percent: '5', value: '0D' },
  { percent: '10', value: '1A' },
  { percent: '25', value: '40' },
  { percent: '50', value: '80' },
  { percent: '75', value: 'BF' },
] as const;

const colorsWithOpacities = Object.entries(baseColors).reduce<Record<string, string>>((prevVal, [key, value]) => {
  const color = opacities.reduce<Record<string, string>>((innerPrevVal, { percent, value: opacityValue }) => {
    const opacityKey = `${key}-${percent}`;
    const hexWithOpacity = `${value}${opacityValue}`;
    innerPrevVal[opacityKey] = hexWithOpacity;

    return innerPrevVal;
  }, {});

  return {
    ...prevVal,
    ...color,
  };
}, {});

const colors = {
  current: 'currentColor',
  transparent: 'transparent',
  ...baseColors,
  ...colorsWithOpacities,
};

export default colors;
