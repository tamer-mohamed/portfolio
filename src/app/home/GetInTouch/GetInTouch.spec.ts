import { createLocalVue, mount } from '@vue/test-utils';
import GetInTouch from './GetInTouch.vue';

const localVue = createLocalVue();

describe('GetInTouch.vue', () => {
  test('have the title', () => {
    const wrapper = mount(GetInTouch, {
      localVue,
    });

    expect(wrapper.find('h3').text()).toBe('Get in touch');
  });

  test('have the contacts list', () => {
    const wrapper = mount(GetInTouch, {
      localVue,
    });

    expect(
      wrapper
        .findAll('li')
        .at(0)
        .find('a')
        .text(),
    ).toBe('hi@tamermohamed.me');

    expect(
      wrapper
        .findAll('li')
        .at(1)
        .find('a')
        .text(),
    ).toBe('linkedin.com/in/tamer-a-mohamed');
  });
});
