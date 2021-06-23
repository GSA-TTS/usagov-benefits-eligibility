import { shallowMount } from "@vue/test-utils";
import beforeAllTests from '@/test/beforeAllTests';
import Filters from '~/components/Filters.vue';

describe('Filters', () => {

  beforeAll(async () => {
    await beforeAllTests();
  });

  it('is a Vue instance', () => {
    const wrapper = shallowMount(Filters, {
      propsData: {
        lifeEventCriteria: [
          {
            label: 'General Information',
            key: 'general',
            criteria_keys: [
              { key: 'benefitOne' },
              { key: 'benefitTwo' },
              { key: 'benefitThree',
                'criteria_keys': [
                  { key: 'benefitFour' },
                ],
              },
            ],
          },
        ],
        lifeEventQuestions: [
          {
            label: "Additional Questions",
            key: 'additional-questions',
            open: true,
            criteria_keys: [
              {
                choices: "",
                key: "benefitOne",
                question: "Benefit One?",
                type: "yes/no",
              },
              {
                choices: "",
                key: "benefitTwo",
                question: "Benefit Two?",
                type: "yes/no",
              },
            ],
          },
        ],
      },
    });
    expect(wrapper.vm).toBeTruthy();
  });
});
