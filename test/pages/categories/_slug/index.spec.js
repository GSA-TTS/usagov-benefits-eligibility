import { shallowMount } from '@vue/test-utils'
import Page from '@/pages/categories/_slug/index.vue'
import beforeAllTests from '@/test/beforeAllTests';

describe('pages/categories/index.vue', () => {
  let $fetchState;

  beforeAll(async () => {
    await beforeAllTests();
    $fetchState = {
      pending: false,
      error: false,
    };
  });

  it('should be a Vue instance with default data', () => {
    const wrapper = shallowMount(Page, {
      mocks: { $fetchState }
    });
    expect(wrapper.vm).toBeTruthy();
    const results = wrapper.vm.$options.data();
    expect(results.benefitCategory).toBe('');
    expect(results.lifeEventBenefits).toBeTruthy();
  });

  it('should fetch benefits for a specific category', async () => {
    let contentRequest;
    const contentMock = {
      sortBy: () => contentMock,
      where: () => contentMock,
      fetch: () => {
        return Promise.resolve({
          benefits: [
            { title: 'One', summary: 'One summary' },
            { title: 'Two', summary: 'Two summary' },
          ],
          criteria: [],
        }[contentRequest]);
      },
    };
    const $content = (path) => {
      contentRequest = path;
      return contentMock;
    };
    const $route = {
      params: {
        slug: 'one-two-three',
      }
    };
    const $store = {
      dispatch: () => Promise.resolve(),
    };
    const wrapper = shallowMount(Page, {
      mocks: {
        $content,
        $fetchState,
        $route,
        $store,
      },
    });
    await wrapper.vm.$options.fetch.apply(wrapper.vm);
    expect(wrapper.vm.benefitCategory).toBe('One two three');
    expect(wrapper.vm.lifeEventBenefits.map(b => b.title).join()).toBe('One,Two');
  });
});
