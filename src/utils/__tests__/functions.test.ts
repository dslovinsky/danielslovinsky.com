import { camelCase, kebabCase } from 'utils/functions';

const testInputs = [
  'test string',
  'test-string',
  'Test_String',
  'Test.+\\String',
  'testString',
  'TES&T String',
  'TESTString',
  ' Test  String ',
  'TestSTRING',
];

describe('camelCase', () => {
  const table = testInputs.map(input => [input, 'testString']);
  it.each(table)('should return a camelCased string', (input, expected) => {
    const result = camelCase(input);
    expect(result).toBe(expected);
  });
});

describe('kebabCase', () => {
  const table = testInputs.map(input => [input, 'test-string']);
  it.each(table)('should return a kebab-cased string', (input, expected) => {
    const result = kebabCase(input);
    expect(result).toBe(expected);
  });
});
