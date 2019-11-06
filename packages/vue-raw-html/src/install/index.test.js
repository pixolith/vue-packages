import { install } from './../../dist/vue-raw-html.module';
import installComponent from './install.vue';
import { shallowMount, createLocalVue } from '@vue/test-utils';

let component;

const localVue = createLocalVue();
localVue.use(install, {
    key: 'raw-h',
});

describe('Plugin', () => {
    beforeEach(async () => {
        component = shallowMount(installComponent, {
            localVue,
            install,
        });
    });

    test('Can be mounted', () => {
        expect(component.isVueInstance()).toBeTruthy();
    });
});
