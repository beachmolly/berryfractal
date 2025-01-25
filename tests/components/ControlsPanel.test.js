import { mount } from '@vue/test-utils';
import ControlsPanel from '../../src/components/ControlsPanel.vue';

describe('ControlsPanel.vue', () => {
    it('renders controls', () => {
        const wrapper = mount(ControlsPanel);
        expect(wrapper.find('h2').text()).toBe('Fractal Controls');
    });
});