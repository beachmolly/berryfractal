import { mount } from '@vue/test-utils';
import ColorPicker from '../../src/components/ColorPicker.vue';

describe('ColorPicker.vue', () => {
    it('renders color picker', () => {
        const wrapper = mount(ColorPicker);
        expect(wrapper.find('h2').text()).toBe('Color Picker');
    });
});