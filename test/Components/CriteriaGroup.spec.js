import { shallowMount } from '@vue/test-utils'
import Vuex from 'vuex';
import CriteriaGroup from '@/components/CriteriaGroup.vue'
import beforeAllTests from '@/test/beforeAllTests';
import { state as criteriaState, mutations, getters, actions } from '~/store/criteria';

const MOCK_CRITERIA = [
  {
    criteriaKey: "criteriaKey1",
    label: "Benefit criteria label 1.",
    type: "boolean",
    values: 'true',
    acceptableValues: [true]
  },
  {
    criteriaKey: "criteriaKey2",
    label: "Benefit criteria label 2.",
    type: "select",
    values: "one; two; three",
    acceptableValues: ["one"]
  }
];

describe('CriteriaGroup', () => {
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

    it('is a Vue instance', async () => {
        await store.dispatch("criteria/populate", [...MOCK_CRITERIA]);
        const wrapper = shallowMount(CriteriaGroup, {
            propsData: {
                lifeEventCriteria: [
                    {
                        criteriaGroupKey: 'criteriaGroupKey`',
                        label: 'label1',
                        description: 'description1',
                        criteriaKeys: ['criteriaKey1', 'criteriaKey2'],
                    },
                ],
            },
            store,
        });
        await wrapper.vm.$nextTick();
        expect(wrapper.vm).toBeTruthy();
        expect(wrapper.find('h2').text()).toBe('label1');
    });
});
