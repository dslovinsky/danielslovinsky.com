export const stringToKebabCase = (id: string) =>
  id
    .toLowerCase()
    .replace(/[^A-Za-z0-9 ]/g, '')
    .trim()
    .replace(/\s+/g, '-');

export const toCamelCase = (string?: string | null) =>
  string
    ? string
        .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => (index === 0 ? word.toLowerCase() : word.toUpperCase()))
        .replace(/\s+/g, '')
    : '';
