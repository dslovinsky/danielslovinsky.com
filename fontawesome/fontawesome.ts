import * as freeBrands from './freeBrands';
import * as freeSolid from './freeSolid';
import {config, library} from '@fortawesome/fontawesome-svg-core';

config.autoAddCss = false;
library.add(freeBrands, freeSolid);

export {dom as default} from '@fortawesome/fontawesome-svg-core';
