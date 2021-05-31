import { shallowMount } from "@vue/test-utils";
import RulesFrame from '@/pages/rules.vue'
import beforeAllTests from '@/test/beforeAllTests';

describe('RulesFrame', () => {

  beforeAll(async () => {
    await beforeAllTests();
  });

  it('is a Vue instance', () => {
    const wrapper = shallowMount(RulesFrame);
    expect(wrapper.vm).toBeTruthy();
  });
});
