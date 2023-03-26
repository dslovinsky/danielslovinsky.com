import { writeFileSync } from 'fs';

// @ts-expect-error types not supported
import css from '@webref/css';

const getCssProperties = async () => {
  const parsedFiles = await css.listAll();
  const allProprties = Object.entries(parsedFiles).flatMap(([_shortname, data]) =>
    // @ts-expect-error types not supported
    data.properties.map(property => property.name),
  );
  writeFileSync('allProperties.json', JSON.stringify(allProprties));
};

getCssProperties();
