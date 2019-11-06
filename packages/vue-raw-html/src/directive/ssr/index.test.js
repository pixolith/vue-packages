const { createRenderer } = require('vue-server-renderer');
import VueRawHTML from '../../../dist/vue-raw-html';

import { shallowMount } from '@vue/test-utils';

import directiveComponent from './directive.vue';

const wrapper = shallowMount(directiveComponent);

const renderer = createRenderer({
    directives: {
        'raw-html': VueRawHTML.ssrDirective,
    },
});

describe('Test SSR directive', () => {
    test('Check the directive', async () => {
        const html = await renderer
            .renderToString(wrapper.vm)
            .catch((err) => console.log(err));

        expect(html).toBeTruthy();
        expect(html).toEqual('<div data-server-rendered="true"><div data-v-546595b4="" class="directive"><svg data-v-546595b4 xmlns="http://www.w3.org/2000/svg" width="26" height="24"><path data-v-546595b4 data-name="+" class="cls-1" fill="#fff" d="M15.75 22.38v-8.72h8.44V9.64h-8.44V.99h-4.58v8.65H2.73v4.02h8.44v8.72h4.58z"/></svg></div></div>');
    });
});
