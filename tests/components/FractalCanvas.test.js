import { mount } from '@vue/test-utils';
import FractalCanvas from '../../src/components/FractalCanvas.vue';

describe('FractalCanvas.vue', () => {
    it('renders canvas', () => {
        const wrapper = mount(FractalCanvas);
        expect(wrapper.find('canvas').exists()).toBe(true);
    });
});