import { mount } from '@vue/test-utils'
import Vuex from 'vuex';
import ResultsButton from '@/components/ResultsButton.vue'
import beforeAllTests from '@/test/beforeAllTests';
import { state as criteriaState, mutations, getters, actions } from '~/store/criteria';

const MOCK_CRITERIA = [
  {
    criteriaKey: "criteriaKey1",
    label: "Benefit criteria label 1.",
    type: "boolean",
    values: [true],
    acceptableValues: [true]
  },
  {
    criteriaKey: "criteriaKey2",
    label: "Benefit criteria label 2.",
    type: "select",
    values: ["one", "two", "three"],
    acceptableValues: ["one"]
  }
];

describe('ResultsButton', () => {
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
          actions,
          mutations,
          getters
        },
      },
    });
  });

  afterEach(() => {
    delete process.client;
  });

  it('is a Vue instance', async () => {
    await store.dispatch("criteria/populate", [...MOCK_CRITERIA]);
    const wrapper = mount(ResultsButton, { store });
    expect(wrapper.vm).toBeTruthy();
  });

  it('should have an enabled button when there are critera filled out and populate the clipboard when clicked', async () => {
    await store.dispatch("criteria/populate", [...MOCK_CRITERIA]);
    window.navigator.clipboard = { writeText: jest.fn() };
    const wrapper = mount(ResultsButton, { store });
    const trueCriteria = {
      criteriaKey: "criteriaKey1",
      response: true
    };

    store.commit("criteria/updateResponse", { ...trueCriteria });
    await wrapper.vm.$nextTick();
    expect(wrapper.find('button').attributes('disabled')).toBeUndefined();
    await wrapper.find('button').trigger('click');
    expect(window.navigator.clipboard.writeText).toHaveBeenCalledWith('http://localhost/?ae35859=1');
  });

  it('should load url search params into the store', async () => {
    await store.dispatch("criteria/populate", [...MOCK_CRITERIA]);
    const wrapper = mount(ResultsButton, {
      data: () => ({
        search: '?ae35859=1&77edd0d',
      }),
      store
    });
    await wrapper.vm.$nextTick();
    expect(store.state.criteria.eligibilityCriteria.criteriaKey1.response).toBe(true);
  });
});
