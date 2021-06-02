import { mount } from '@vue/test-utils'
import Tag from '@/components/Tag.vue'

describe('Tag', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Tag, {
      propsData: {
        name: 'test tag',
      }
    });
    expect(wrapper.vm).toBeTruthy();
  });
});
