const wordSeparators = /[-_\\.+\s]+/g;
const notAlphaNumericOrSpace = /[^ a-zA-Z0-9]+/g;
const notAlphaNumericSpaceOrDash = /[^ a-zA-Z0-9-]/g;
const capitalizedFirstLetter = /[A-Z]+(?![a-z])|[A-Z]/g;

/**
 * Safely camelCases a string, taking into account acronyms, kebab-case, snake_case, and sentence casing as well as special characters
 * @param string
 * @returns A `string` in camelCase form
 */
export const camelCase = (string: string): string => {
  const cleanedString = string
    .replace(wordSeparators, ' ')
    .replace(notAlphaNumericOrSpace, '')
    .replace(capitalizedFirstLetter, ($, ofs) => (ofs ? ' ' : '') + $.trim().toLowerCase())
    .trim();
  const words = cleanedString.split(' ');
  const camelCasedWords = words.map((word, index) =>
    index === 0 ? word.toLowerCase() : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
  );
  const camelCasedString = camelCasedWords.join('');

  return camelCasedString;
};

/**
 * Safely kebab-cases a string, taking into account acronyms, camelCase, snake_case, and sentence casing, as well as special characters
 * @param string
 * @returns a kebab-cased string
 */
export const kebabCase = (str: string) =>
  str
    .trim()
    .replace(wordSeparators, '-')
    .replace(notAlphaNumericSpaceOrDash, '')
    .replace(capitalizedFirstLetter, ($, ofs) => (ofs ? '-' : '') + $.trim().toLowerCase())
    .replace(/--+/g, '-');
