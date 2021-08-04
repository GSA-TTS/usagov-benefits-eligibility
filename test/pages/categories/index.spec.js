import { shallowMount } from '@vue/test-utils'
import Page from '@/pages/categories/index.vue'
import beforeAllTests from '@/test/beforeAllTests';

describe('pages/categories/index.vue', () => {
  beforeAll(async () => {
    await beforeAllTests();
  });

  it('should be a Vue instance with default data and kebabCase things', () => {
    const wrapper = shallowMount(Page);
    expect(wrapper.vm).toBeTruthy();
    expect(wrapper.vm.$options.data().lifeEventTags).toBeTruthy();
    expect(wrapper.vm.$options.methods.kebabCase('One Two Three')).toBe('one-two-three');
  });

  it('should get all the tags, return a unique list that\'s sorted', async () => {
    const contentMock = {
      only: () => contentMock,
      fetch: () => {
        return Promise.resolve([
          { tags: ['one', 'two', 'three'] },
          { tags: ['one', 'two', 'three', 'four'] },
          { tags: ['one', 'two', 'three', 'four', 'five'] }
        ]);
      },
    };
    const $content = () => contentMock;
    const wrapper = shallowMount(Page);
    const result = await wrapper.vm.$options.asyncData({ $content });
    expect(result.lifeEventTags.join()).toBe("five,four,one,three,two");
  });
});
