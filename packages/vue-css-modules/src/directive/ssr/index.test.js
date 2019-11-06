const { createRenderer } = require('vue-server-renderer');
import VueCSSModules from '../../../dist/vue-css-modules';

import { shallowMount } from '@vue/test-utils';

import directiveComponent from './directive.vue';

const wrapper = shallowMount(directiveComponent);

const renderer = createRenderer({
    directives: {
        cssm: VueCSSModules.ssrDirective,
    },
});

describe('Test SSR directive', () => {
    test('Check the directive', async () => {
        const html = await renderer
            .renderToString(wrapper.vm)
            .catch((err) => console.log(err));

        expect(html).toBeTruthy();
    });
});
