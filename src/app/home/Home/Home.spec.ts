import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';
import { i18n } from '../../shared/plugins/i18n/i18n';
import Home from './Home.vue';
import Stage from '../Stage/Stage.vue';
import Experience from '../Experience/Experience.vue';
import GetInTouch from '../GetInTouch/GetInTouch.vue';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('Home.vue', () => {
  test('renders component', () => {
    const store = new Vuex.Store({
      state: {
        app: {
          config: {
            features: {
              disableParticles: false,
            },
          },
        },
      },
    });
    const wrapper = shallowMount(Home, {
      store,
      localVue,
      i18n,
    });

    expect(wrapper.findAll(Stage)).toHaveLength(1);
    expect(wrapper.findAll(Experience)).toHaveLength(1);
    expect(wrapper.findAll(GetInTouch)).toHaveLength(1);
  });
});
