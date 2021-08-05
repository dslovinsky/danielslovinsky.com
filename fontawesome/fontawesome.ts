import * as freeBrands from './freeBrands';
import {config, library} from '@fortawesome/fontawesome-svg-core';

config.autoAddCss = false;
library.add(freeBrands);

export {dom as default} from '@fortawesome/fontawesome-svg-core';
