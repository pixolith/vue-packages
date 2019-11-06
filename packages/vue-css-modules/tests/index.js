import { createLocalVue, shallowMount, createWrapper } from '@vue/test-utils';

const localVue = createLocalVue();

const createComponent = async (component, props = {}) => {
    let app = await createVue();

    return shallowMount(component, {
        ...app,
        propsData: props,
    });
};

const createVue = async () => {
    return {
        localVue,
    };
};

export { createComponent, createVue, createWrapper };
