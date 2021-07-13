import { shallowMount } from '@vue/test-utils'
import EligibilityList from '@/components/EligibilityList.vue'
import Vuex from 'vuex';
import beforeAllTests from '@/test/beforeAllTests';
import { state as criteriaState, mutations, getters } from '~/store/criteria';

const MOCK_CRITERIA = [
  {
    criteriaKey: "criteriaKey1",
    label: "Benefit criteria label 1.",
    type: "boolean",
    values: [true, false]
  },
  {
    criteriaKey: "criteriaKey2",
    label: "Benefit criteria label 2.",
    type: "select",
    values: ["one", "two", "three"]
  }
]

describe('EligibilityList', () => {
  let store;

  beforeAll(async () => {
    await beforeAllTests();
  });

  beforeEach(() => {
    criteriaState.namespaced = true;
    store = new Vuex.Store({
      modules: {
        criteria: {
          namespaced: true,
          state: criteriaState,
          mutations,
          getters
        },
      },
    });
  })
  test('is a Vue instance', () => {
    const wrapper = shallowMount(EligibilityList, {
      propsData: {
        benefitEligibilityCriteria: []
      },
      store
    });
    expect(wrapper.vm).toBeTruthy();
  });

  test('displays an error if there are no criteria passed in', () => {
    const wrapper = shallowMount(EligibilityList, {
      store
    });
    expect(wrapper.find(".usa-icon-list__content").text()).toBe('Key named "error" not found');
  });

  test('displays the eligibilityCriteria', () => {
    const wrapper = shallowMount(EligibilityList, {
      propsData: {
        benefitEligibilityCriteria: MOCK_CRITERIA
      },
      store
    });
    expect(wrapper.findAll("li")).toHaveLength(2);
  });

  test('updates when a criteria response changes', async () => {
    const wrapper = shallowMount(EligibilityList, {
      propsData: {
        benefitEligibilityCriteria: MOCK_CRITERIA
      },
      store
    });

    const trueCriteria = {
      criteriaKey: "criteriaKey1",
      response: true
    };

    await wrapper.vm.$nextTick();
    store.commit("criteria/populate", [...MOCK_CRITERIA]);
    store.commit("criteria/updateResponse", { ...trueCriteria });
    await wrapper.vm.$nextTick();
    // console.log(wrapper.html())
    expect(wrapper.findAll(".usa-icon-list__content.text-success")).toHaveLength(1);

  });

});
