import { install } from './../../dist/vue-css-modules.module';
import installComponent from './install.vue';
import { shallowMount, createLocalVue } from '@vue/test-utils';

let component;

const localVue = createLocalVue();
localVue.use(install, {
    key: 'cat',
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

    test('Check the plugin', () => {
        let vm = component.vm;
        expect(vm.$cat).toBeTruthy();
    });
});
