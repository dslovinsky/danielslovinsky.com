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
      expect(camelCase(string)).toBe('testString');
    });
  });
});

describe('kebabCase', () => {
  it('should return a kebab-cased string', () => {
    testStrings.forEach(string => {
      expect(kebabCase(string)).toBe('test-string');
    });
  });
});
