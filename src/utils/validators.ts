import isEmail from 'validator/lib/isEmail';

export type ValidatorFunction = (value: string) => string | undefined;

/**
 * Supply to `validationGenerator` to require a field value during validation
 * @param value Any acceptable form field value
 * @returns Error message or undefined
 */
export const required = (value: string) => (value ? undefined : 'is required');

/**
 * Supply to `validationGenerator` to check that the given value is a valid email
 * @param value Any string
 * @returns Error message or undefined
 */
export const validateEmail = (value: string) => (value === '' || isEmail(value) ? undefined : 'is not valid address');

/**
 * A validator collector that takes a given value and checks it against a series of validator function to return a single error message
 * @param value Any field value
 * @param validatorFuncs An array of validator functions which conditionally return error messages
 * @returns The first applicable error message or undefined if none
 */
export const validationGenerator = <T extends string>(
  value: T,
  validatorFuncs: (ValidatorFunction | false | undefined)[],
) => {
  const filteredFuncs = validatorFuncs.filter((validator): validator is ValidatorFunction => !!validator);

  const errorMessageArray = filteredFuncs.flatMap(validator => validator(value) || []);

  return errorMessageArray.length > 0 ? errorMessageArray : undefined;
};
