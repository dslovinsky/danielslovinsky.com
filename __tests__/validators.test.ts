import { required, validateEmail, validationGenerator } from 'utils/validators';

describe('required', () => {
  it('should return an error message if the value is empty', () => {
    const result = required('');
    expect(result).toBe('is required');
  });

  it('should return undefined if the value is not empty', () => {
    const result = required('test');
    expect(result).toBeUndefined();
  });
});

describe('validateEmail', () => {
  const invalidEmails = ['test', '@', '@test', 'test@', 'test@test.'];
  const invalidTable = invalidEmails.map(input => [input, 'is not valid address']);
  it.each(invalidTable)('should return an error message if the value is not a valid email', (input, expected) => {
    const result = validateEmail(input);
    expect(result).toBe(expected);
  });

  const validEmails = ['test@danielslovinsky.com', 'dslovinsky@test.com', ''];
  it.each(validEmails)('should return undefined if the value is a valid email or empty', input => {
    const result = validateEmail(input);
    expect(result).toBeUndefined();
  });
});

describe('validationGenerator', () => {
  it('should return an error message if the value is empty', () => {
    const result = validationGenerator('', [required]);
    expect(result).toStrictEqual(['is required']);
  });

  it('should return an error message if the value is not a valid email', () => {
    const result = validationGenerator('test', [validateEmail]);
    expect(result).toStrictEqual(['is not valid address']);
  });

  it('should return an error message if the value is empty', () => {
    const result = validationGenerator('', [required, validateEmail]);
    expect(result).toStrictEqual(['is required']);
  });

  it('should return an error message if the value is not a valid email', () => {
    const result = validationGenerator('test', [required, validateEmail]);
    expect(result).toStrictEqual(['is not valid address']);
  });

  it('should return undefined if the value is not empty and a valid email', () => {
    const result = validationGenerator('test@danielslovinsky.com', [required, validateEmail]);
    expect(result).toBeUndefined();
  });
});
