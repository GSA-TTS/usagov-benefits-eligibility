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
  it('should emit clicks when asked', () => {
    const wrapper = mount(Tag, {
      propsData: {
        name: 'test tag',
        click: true,
      }
    });
    const spy = jest.fn();
    wrapper.vm.$root.$on('tag:click', spy);
    wrapper.find('.usa-tag button').trigger('click');
    expect(spy).toHaveBeenCalled();
    wrapper.vm.$root.$off('tag:click', spy);
  });
});
