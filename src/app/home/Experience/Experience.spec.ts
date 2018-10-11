import { mount, createLocalVue } from '@vue/test-utils';
import Experience from './Experience.vue';

const localVue = createLocalVue();

describe('Experience.vue', () => {
  test('renders component', () => {
    const wrapper = mount(Experience, { localVue });

    expect(wrapper.find('h3').text()).toBe('Resume');
  });

  test('renders list of experience', () => {
    const wrapper: any = mount(Experience, { localVue });

    expect(wrapper.find('ul').findAll('li').length).toBe(
      wrapper.vm.experience.length
    );
  });
});
