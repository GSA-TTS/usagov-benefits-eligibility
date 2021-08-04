import { mount } from '@vue/test-utils'
import Footer from '@/components/Footer.vue'
import beforeAllTests from '@/test/beforeAllTests';

describe('Footer', () => {
  beforeAll(async () => {
    await beforeAllTests();
  });

  test('is a Vue instance', () => {
    const wrapper = mount(Footer);
    expect(wrapper.vm).toBeTruthy();
  });
});
