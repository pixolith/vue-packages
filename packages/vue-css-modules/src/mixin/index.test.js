import { createComponent } from '~/tests';
import mixinComponent from './mixin.vue';

let component;

describe('Mixin', () => {
    beforeEach(async () => {
        component = await createComponent(mixinComponent);
    });

    test('Can be mounted', () => {
        expect(component.isVueInstance()).toBeTruthy();
    });

    test('Check the mixin', () => {
        let vm = component.vm;
        expect(vm.$cssm('mixin')).toBeTruthy();
        expect(vm.$style).toBeTruthy();

        expect(vm.$cssm('mixin') === 'mixin');
    });
});
