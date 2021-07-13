import { shallowMount } from '@vue/test-utils'
import CriteriaChild from '@/components/CriteriaChild.vue'
import Vuex from 'vuex';
import beforeAllTests from '@/test/beforeAllTests';
import { state as criteriaState, mutations, getters } from '~/store/criteria';

const MOCK_CRITERIA = [
  {
    criteriaKey: "criteriaKey1",
    label: "Benefit criteria label 1.",
    type: "boolean",
    values: [true, false],
    criteriaGroupKey: "group1"
  },
  {
    criteriaKey: "criteriaKey2",
    label: "Benefit criteria label 2.",
    type: "select",
    values: ["one", "two", "three"],
    criteriaGroupKey: "group2"
  }
]

describe('CriteriaChild', () => {
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
    const wrapper = shallowMount(CriteriaChild, {
      propsData: {},
      store
    });
    expect(wrapper.vm).toBeTruthy();
  });

  test('displays nothing when there are no criteria passed in', () => {
    const wrapper = shallowMount(CriteriaChild, {
      store
    });
    expect(wrapper.find(".eligibility-criterion").text()).toBeFalsy();

  });

  test('displays eligibilityCriteria when one is passed in', () => {
    const wrapper = shallowMount(CriteriaChild, {
      propsData: { ...MOCK_CRITERIA[0] },
      store
    });
    expect(wrapper.find(".usa-checkbox").text()).toBe("Benefit criteria label 1.");

  });

  test('updates when a criteria response changes', async () => {
    const wrapper = shallowMount(CriteriaChild, {
      propsData: { ...MOCK_CRITERIA[0] },

      store
    });

    const trueCriteria = {
      criteriaKey: "criteriaKey1",
      response: true
    };

    store.commit("criteria/populate", [...MOCK_CRITERIA]);
    await wrapper.vm.$nextTick();
    console.log(wrapper.html())
    wrapper.find(".usa-checkbox__input").trigger('click')
    // store.commit("criteria/updateResponse", { ...trueCriteria });
    await wrapper.vm.$nextTick();
    console.log(wrapper.html())
    // expect(wrapper.findAll(".usa-icon-list__content.text-success")).toHaveLength(1);

  });

});
