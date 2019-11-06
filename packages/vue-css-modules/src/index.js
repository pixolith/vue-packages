import directive from './directive/client';
import ssrDirective from './directive/ssr';
import mixinInstance from './mixin';
import install from './install';

const mixin = mixinInstance();

export {
    directive,
    ssrDirective,
    mixin,
    install,
};

import * as self from './index.js';
export default self;
