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
});
