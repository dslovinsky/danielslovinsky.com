import { camelCase, kebabCase } from 'utils/functions';

const testStrings = [
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
  it('should return a camelCased string', () => {
    testStrings.forEach(string => {
      const result = camelCase(string);
      expect(result).toBe('testString');
    });
  });
});

describe('kebabCase', () => {
  it('should return a kebab-cased string', () => {
    testStrings.forEach(string => {
      const result = kebabCase(string);
      expect(result).toBe('test-string');
    });
  });
});
