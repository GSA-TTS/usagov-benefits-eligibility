import { shallowMount } from "@vue/test-utils";
import QuestionnairePage from '@/pages/questionnaire.vue'
import beforeAllTests from '@/test/beforeAllTests';

describe('QuestionnairePage', () => {

  beforeAll(async () => {
    await beforeAllTests();
  });

  it('is a Vue instance', () => {
    const wrapper = shallowMount(QuestionnairePage);
    expect(wrapper.vm).toBeTruthy();
  });
});
