export type valueof<T> = T[keyof T];

type ObjectEntriesReturn<T> = [keyof T, valueof<T>][];
type ObjectEntries = <T extends object>(object: T) => ObjectEntriesReturn<T>;
type ObjectKeys = <T extends object>(object: T) => (keyof T)[];

export const objectEntries: ObjectEntries = object => Object.entries(object) as ObjectEntriesReturn<typeof object>;
export const objectKeys: ObjectKeys = object => Object.keys(object) as (keyof typeof object)[];

export const objectHas = <T extends Record<string, unknown>>(
  object: T,
  potentialKey: string | number | symbol,
): potentialKey is keyof T => object[potentialKey as keyof object] !== undefined;

export const typedFetch = async <T>(url: string, config: RequestInit): Promise<T> => {
  const response = await fetch(url, config);

  return await response.json();
};
