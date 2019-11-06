import mixin from './../mixin';
import directive from './../directive/client';

const install = (Vue, options = {}) => {
    if (options.key && typeof options.key !== 'string') {
        console.error('Please pass a string as key');
        return;
    }

    Vue.directive(options.key ? options.key : 'cssm', directive);
    Vue.mixin(mixin(options.key ? `$${options.key}` : 'cssm'));
};

export default install;
