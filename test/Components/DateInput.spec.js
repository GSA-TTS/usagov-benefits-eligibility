import { mount, shallowMount } from '@vue/test-utils'
import DateInput from '@/components/DateInput.vue'
import beforeAllTests from '@/test/beforeAllTests'
import { state as criteriaState, mutations, getters } from "~/store/criteria"
import { Store } from 'vuex'

const CRITERIA_KEY = 'applicant_senior'
const PROPS_DATA = {
  criteriaKey: CRITERIA_KEY,
  label: 'Testing DateInput Label',
  response: 'test',
  dateResponse: ''
}

describe('DateInput', () => {
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
    const wrapper = mount(DateInput, {
      propsData: PROPS_DATA
    })
    expect(wrapper.vm).toBeTruthy()
  })

  test('displays with no props', () => {
    const wrapper = mount(DateInput)
    expect(wrapper.vm).toBeTruthy()
  })

  test('clicking input values results in update in store', async () => {
    document.getElementById = (id) => {
        let obj = {}
        if (id.includes('month')) {
            obj.value = '01'
        } else if (id.includes('day')) {
            obj.value = '01'
        } else if (id.includes('year')) {
            obj.value = '2022'
        }
        return obj
    } 
    const wrapper = shallowMount(DateInput, { propsData: PROPS_DATA, store})
    const monthInput = wrapper.find(`#${wrapper.vm.uniqueId}-${CRITERIA_KEY}-month`)
    monthInput.element.value = "01"
    monthInput.trigger('change')
    const dayInput = wrapper.find(`#${wrapper.vm.uniqueId}-${CRITERIA_KEY}-day`)
    dayInput.element.value = "01"
    dayInput.trigger('change')
    const yearInput = wrapper.find(`#${wrapper.vm.uniqueId}-${CRITERIA_KEY}-year`)
    yearInput.element.value = '2022'
    yearInput.trigger('change')
    expect(actions.updateResponse).toHaveBeenCalled()
  })

})