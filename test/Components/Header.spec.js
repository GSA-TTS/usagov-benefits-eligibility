import { shallowMount } from '@vue/test-utils'
import Header from '@/components/Header.vue'
import beforeAllTests from '@/test/beforeAllTests';

describe('Header', () => {
  beforeAll(async () => {
    await beforeAllTests();
  });

  test('is a Vue instance', () => {
    const wrapper = shallowMount(Header);
    expect(wrapper.vm).toBeTruthy();
  });

  it('should change links based on routes', () => {
    const $route = {
      matched: []
    };
    const wrapper = shallowMount(Header, {
      mocks: { $route }
    });
    expect(wrapper.vm.isLifeEventPage).toBeFalsy();
    wrapper.vm.$set($route, 'matched', [{ path: '/:slug' }]);
    wrapper.vm.$options.watch.$route.call(wrapper.vm);
    expect(wrapper.vm.isLifeEventPage).toBe(true);
  });
});
