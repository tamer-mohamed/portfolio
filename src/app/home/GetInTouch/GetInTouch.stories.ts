import { storiesOf } from '@storybook/vue';
import VueInfoAddon  from 'storybook-addon-vue-info';
import GetInTouch           from './GetInTouch.vue';

const story = (storiesOf('GetInTouch', module) as any);

story.addDecorator(VueInfoAddon);

story.add('Default', () => ({
  components: { GetInTouch },
  template:   `<getInTouch>GetInTouch</getInTouch>`,
}));
