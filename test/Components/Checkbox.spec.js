import { mount, shallowMount } from '@vue/test-utils'
import Checkbox from '@/components/Checkbox.vue'
import beforeAllTests from '@/test/beforeAllTests'
import { state as criteriaState, mutations, getters } from "~/store/criteria"
import { Store } from 'vuex'

const CRITERIA_KEY = 'deceased_buried_in_unmarked_grave'
const ID = `checkbox-1-${CRITERIA_KEY}`
const PROPS_DATA = {
  criteriaKey: CRITERIA_KEY,
  label: 'Testing Checkbox Label',
  response: 'test',
  location: 'benefit-card'
}

describe('Checkbox', () => {
  let store, actions
  beforeAll(async () => {
    await beforeAllTests()
  })

  beforeEach(() => {
    criteriaState.namespaced = true

    actions = {
      updateResponse: jest.fn()
    }

    store = new Store({
      modules: {
        criteria: {
          namespaced: true,
          state: criteriaState,
          actions,
          mutations,
          getters
        }
      }
    })
  })


  test('is a Vue instance', () => {
    const wrapper = mount(Checkbox, {
      propsData: PROPS_DATA
    })
    expect(wrapper.vm).toBeTruthy()
  })

  test('displays with no props', () => {
    const wrapper = mount(Checkbox)
    expect(wrapper.vm).toBeTruthy()
  })

  test('location (benefit-card) returns different selected style', () => {
    const wrapper = mount(Checkbox, {
      propsData: {
        ...PROPS_DATA,
        location: 'benefit-card',
        response: true
      }
    })
    expect(wrapper.vm.selectedStyle).toBe('text-success text-bold')
  })

  test('location (left-rail) returns different selected style', () => {
    const wrapper = mount(Checkbox, {
      propsData: {
        ...PROPS_DATA,
        location: 'left-rail',
        response: true
      }
    })
    expect(wrapper.vm.selectedStyle).toBe(null)
  })

  test('clicking checkbox results in update in store', async () => {
    const wrapper = shallowMount(Checkbox, { propsData: PROPS_DATA, store})
    const checkboxInput = wrapper.find("input")
    await checkboxInput.setChecked()
    expect(actions.updateResponse).toHaveBeenCalled()
  })

})