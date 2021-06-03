import { shallowMount } from "@vue/test-utils";
import Results from '@/pages/Results.vue'
import beforeAllTests from '@/test/beforeAllTests';

describe('Results', () => {

  beforeAll(async () => {
    await beforeAllTests();
  });

  it('is a Vue instance', () => {
    const wrapper = shallowMount(Results);
    expect(wrapper.vm).toBeTruthy();
  });
});
