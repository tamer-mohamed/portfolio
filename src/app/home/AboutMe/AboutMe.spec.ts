import { mount, createLocalVue } from '@vue/test-utils';
import AboutMe from './AboutMe.vue';

const localVue = createLocalVue();

describe('AboutMe.vue', () => {
  test('renders component', () => {
    const wrapper = mount(AboutMe, { localVue });

    expect(wrapper.find('h3').text()).toBe('Hello, I am Tamer');
  });
});
