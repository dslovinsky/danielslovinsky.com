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
  it('should return an error message if the value is not a valid email', () => {
    const invalidEmails = ['test', '@', '@test', 'test@', 'test@test.'];
    invalidEmails.forEach(invalidEmail => {
      const result = validateEmail(invalidEmail);
      expect(result).toBe('is not valid address');
    });
  });

  it('should return undefined if the value is a valid email or empty', () => {
    const validEmails = ['test@danielslovinsky.com', 'dslovinsky@test.com', ''];
    validEmails.forEach(validEmail => {
      const result = validateEmail(validEmail);
      expect(result).toBeUndefined();
    });
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
