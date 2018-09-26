import { mount, createLocalVue } from '@vue/test-utils';
import VueFooter                 from './VueFooter.vue';

const localVue = createLocalVue();

describe('VueFooter.vue', () => {

  test('renders component', () => {
    const wrapper = mount(VueFooter, { localVue });

    expect(wrapper.find('p').text()).toMatch('Copyright');
  });

});
