import type { Route } from 'next';
import type { DatoRecord } from 'types/datoManagement/record';
import type { RecordType } from 'types/datoManagement/recordType';

const getSubdirectory = (modelKey: string) => {
  switch (modelKey) {
    case 'template_page':
      return '/';
    case 'template_case_study':
      return '/case-studies/';
    default:
      return undefined;
  }
};

type Args = {
  recordId: string;
  recordType: string;
  slug?: string;
};

const datoApiOptions = {
  headers: {
    Authorization: `Bearer ${process.env.DATO_API_TOKEN}`,
    Accept: 'application/json',
    'X-Api-Version': '3',
  },
};

/**
 * A recursive algorithm to accept a Dato record and return all page paths that reference that record. Works across any depth
 * @param param0 A collection of args representing a single Dato record
 * @returns An array of paths
 */
const getReferencingPaths = async ({ recordType, recordId, slug }: Args): Promise<Route[]> => {
  const recordTypeResponse = await fetch(`https://site-api.datocms.com/item-types/${recordType}`, datoApiOptions);

  if (!recordTypeResponse.ok) {
    console.error(`Record type of ID ${recordType} not found`);

    return [];
  }

  const { data: recordTypeData } = (await recordTypeResponse.json()) as RecordType;

  const subdirectory = getSubdirectory(recordTypeData.attributes.api_key);

  const recordIsPage = !!subdirectory;

  // base case
  if (recordIsPage) {
    const path = `${getSubdirectory(recordTypeData.attributes.api_key)}${slug}`;

    return [path];
  }

  // recursive case: get pages that reference this record
  const inverseReferencesResponse = await fetch(
    `https://site-api.datocms.com/items/${recordId}/references`,
    datoApiOptions,
  );

  if (!inverseReferencesResponse.ok) {
    console.error(`Record with ID ${recordId} not found`);

    return [];
  }

  const { data: inverseReferenceData } = (await inverseReferencesResponse.json()) as {
    data: DatoRecord[];
  };

  const referencingPathsPromises = inverseReferenceData.map(({ id, attributes, relationships }) => {
    const referencingRecord = {
      recordId: id,
      recordType: relationships.item_type.data.id,
      slug: attributes.slug as string,
    };

    return getReferencingPaths(referencingRecord);
  });

  const referencingPaths = (await Promise.all(referencingPathsPromises)).flat();

  return referencingPaths;
};

export default getReferencingPaths;
