import { shallowMount } from '@vue/test-utils'
import Page from '@/pages/agencies/index.vue'
import beforeAllTests from '@/test/beforeAllTests';

describe('pages/agencies/index.vue', () => {
  beforeAll(async () => {
    await beforeAllTests();
  });

  it('should be a Vue instance with default data', () => {
    const wrapper = shallowMount(Page);
    expect(wrapper.vm).toBeTruthy();
    expect(wrapper.vm.$options.data().agencies).toBeTruthy();
  });

  it('should get all the agencies, return a unique list that\'s sorted', async () => {
    let contentRequest;
    const contentMock = {
      only: () => contentMock,
      fetch: () => {
        return Promise.resolve({
          benefits: [
            { source: { name: 'Agency one' } },
            { source: { name: 'Agency one' } },
            { source: { name: 'Agency one' } },
            { source: { name: 'Agency two' } },
            { source: { name: 'Agency two' } },
            { source: { name: 'Agency three' } }
          ],
      }[contentRequest]);
      },
    };
    const $content = (path) => {
      contentRequest = path;
      return contentMock;
    };
    const wrapper = shallowMount(Page);
    const result = await wrapper.vm.$options.asyncData({ $content });
    expect(result.agencies.join()).toBe("Agency one,Agency three,Agency two");
  });
});
