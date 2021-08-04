import {faGithub, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import {config, library} from '@fortawesome/fontawesome-svg-core';

config.autoAddCss = false;
library.add(faGithub, faLinkedinIn);

export {dom as default} from '@fortawesome/fontawesome-svg-core';
