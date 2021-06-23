import { shallowMount } from "@vue/test-utils";
import beforeAllTests from '@/test/beforeAllTests';
import FilterChild from '~/components/Filter-Child.vue';
import Vuex from 'vuex';
import { state, mutations } from '~/store/questionGraph';

describe('Filters', () => {
  let store;

  beforeAll(async () => {
    await beforeAllTests();
  });

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        questionGraph: {
          namespaced: true,
          state,
          mutations,
        },
      },
    });
  });

  it('is a Vue instance', () => {
    const wrapper = shallowMount(FilterChild, {
      propsData: {
        criterion: {
          key: 'benefitOne',
          type: 'yes/no',
          label: 'Benefit One Label',
        }
      },
      store,
    });
    expect(wrapper.vm).toBeTruthy();
  });

  it('should update state when a button is clicked', async () => {
    const wrapper = shallowMount(FilterChild, {
      propsData: {
        criterion: {
          key: 'benefitOne',
          type: 'yes/no',
          label: 'Benefit One Label',
        }
      },
      store,
    });
    const buttons = wrapper.findAll('button');
    buttons.at(0).trigger('click');
    expect(store.state.questionGraph.answers.benefitOne).toBe(true);
    buttons.at(1).trigger('click');
    expect(store.state.questionGraph.answers.benefitOne).toBe(undefined);
    buttons.at(2).trigger('click');
    expect(store.state.questionGraph.answers.benefitOne).toBe(false);
  });

  it('should update state when a dropdown is used', async () => {
    const wrapper = shallowMount(FilterChild, {
      propsData: {
        criterion: {
          key: 'benefitTwo',
          type: 'multi-choice',
          label: 'Benefit Two Label',
          values: ['One', 'Two', 'Three'],
        }
      },
      store,
    });
    const options = wrapper.find('select').findAll('option');
    options.at(2).element.selected = true;
    wrapper.find('select').trigger('change');
    expect(store.state.questionGraph.answers.benefitTwo).toBe('Two');
  });
});
