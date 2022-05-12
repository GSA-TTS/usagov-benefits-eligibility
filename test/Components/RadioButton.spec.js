import { mount, shallowMount } from "@vue/test-utils"
import { Store } from "vuex"
import RadioButton from "@/components/RadioButton.vue"
import beforeAllTests from "@/test/beforeAllTests"
import { getters, mutations, state as criteriaState } from "~/store/criteria"

const LABEL = "The deceased served in the active military, naval, or air service and"
const VALUE_ONE = "was discharged under conditions other than dishonorable"
const VALUE_TWO = "died while on active duty"
const VALUE_THREE = "had retired from the service"

const MOCK_CRITERIA = {
  criteriaKey: "deceased_served_in_active_military",
  label: LABEL,
  type: "radio",
  values: [VALUE_ONE, VALUE_TWO, VALUE_THREE],
  location: "left-rail",
}

describe("<Radio/>", () => {
  let store
  let actions

  beforeAll(async () => {
    await beforeAllTests()
  })

  beforeEach(() => {
    criteriaState.namespaced = true

    actions = {
      updateResponse: jest.fn(),
    }

    store = new Store({
      modules: {
        criteria: {
          namespaced: true,
          state: criteriaState,
          actions,
          mutations,
          getters,
        },
      },
    })
  })

  test("is a Vue instance", () => {
    const wrapper = mount(RadioButton, {
      propsData: {
        criteriaKey: MOCK_CRITERIA.criteriaKey,
        label: MOCK_CRITERIA.label,
        values: MOCK_CRITERIA.values,
      },
    })
    expect(wrapper.vm).toBeTruthy()
  })

  test("displays with no props", () => {
    const wrapper = mount(RadioButton)
    expect(wrapper.vm).toBeTruthy()
  })

  test("displays eligibilityCriteria when one is passed in", () => {
    const wrapper = shallowMount(RadioButton, {
      propsData: { ...MOCK_CRITERIA },
      store,
    })
    expect(wrapper.find("legend").text()).toBe(LABEL)
    expect(wrapper.find("input").element.value).toBe(VALUE_ONE)
  })

  test("updates when a radio criteria response changes", async () => {
    const wrapper = mount(RadioButton, {
      propsData: { ...MOCK_CRITERIA },
      store,
    })
    const choices = wrapper.findAll('input[type="radio"]')
    await choices.at(1).setChecked()
    expect(choices.at(1).element.value).toBe(VALUE_TWO)
    expect(actions.updateResponse).toHaveBeenCalled()
  })

  test("when radio is not applicable it must have correct styling", async () => {
    const MOCK_RADIO_SELECTED = {
      criteriaKey: "deceased_served_in_active_military",
      label: LABEL,
      type: "radio",
      values: [VALUE_ONE, VALUE_TWO, VALUE_THREE, "not applicable"],
      location: "benefit-card",
      response: "not applicable",
    }

    const wrapper = shallowMount(RadioButton, {
      propsData: { ...MOCK_RADIO_SELECTED },
      store,
    })
    const choices = wrapper.findAll('input[type="radio"]')
    await choices.at(0).setChecked()
    expect(choices.at(0).element.value).toBe(VALUE_ONE)
  })

  test("component has disabled styles when disabled", () => {
    const wrapper = mount(RadioButton, {
      propsData: {
        criteriaKey: MOCK_CRITERIA.criteriaKey,
        label: MOCK_CRITERIA.label,
        values: MOCK_CRITERIA.values,
        isDisabled: true,
      },
    })
    expect(wrapper.vm.disabledStyle).toBe("border-2px border-dotted border-gray-30 padding-1")
    expect(wrapper.vm.disabledLabel).toBe("text-gray-30")
  })

  test("component no disabled styles when not disabled", () => {
    const wrapper = mount(RadioButton, {
      propsData: {
        criteriaKey: MOCK_CRITERIA.criteriaKey,
        label: MOCK_CRITERIA.label,
        values: MOCK_CRITERIA.values,
        isDisabled: false,
      },
    })
    expect(wrapper.vm.disabledStyle).toBeNull()
    expect(wrapper.vm.disabledLabel).toBeNull()
  })
})
