import { createComponent } from '~/tests';
import directiveComponent from './directive.vue';

let component;

describe('Directive', () => {
    beforeEach(async () => {
        component = await createComponent(directiveComponent);
    });

    test('Can be mounted', () => {
        expect(component.isVueInstance()).toBeTruthy();
    });

    test('Check the directive', () => {
        let vm = component.vm;
        expect(vm.$vnode).toBeTruthy();
    });
});
