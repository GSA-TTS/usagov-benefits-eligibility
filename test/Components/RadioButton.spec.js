import { mount, shallowMount } from "@vue/test-utils"
import { Store } from "vuex"
import RadioButton from "@/components/RadioButton.vue"
import beforeAllTests from "@/test/beforeAllTests"
import { state as criteriaState, mutations, getters } from "~/store/criteria"

const MOCK_CRITERIA = {
  criteriaKey: "deceased_served_in_active_military",
  label:
    "The deceased served in the active military, naval, or air service and",
  type: "radio",
  values: [
    "was discharged under conditions other than dishonorable",
    "died while on active duty",
    "had retired from the service"
  ]
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

  test("is a Vue instance", () => {
    const wrapper = mount(RadioButton, {
      propsData: {
        criteriaKey: MOCK_CRITERIA.criteriaKey,
        label: MOCK_CRITERIA.label,
        values: MOCK_CRITERIA.values
      }
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
      store
    })
    expect(wrapper.find("legend").text()).toBe(
      "The deceased served in the active military, naval, or air service and"
    )
    expect(wrapper.find("input").element.value).toBe(
      "was discharged under conditions other than dishonorable"
    )
  })

  test("updates when a radio criteria response changes", async () => {
    const wrapper = shallowMount(RadioButton, {
      propsData: { ...MOCK_CRITERIA },
      store
    })
    const choices = wrapper.findAll('input[type="radio"]')
    await choices.at(1).setChecked()
    expect(choices.at(1).element.value).toBe("died while on active duty")
    expect(actions.updateResponse).toHaveBeenCalled()
  })
})
