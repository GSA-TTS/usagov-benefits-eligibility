import { mount, shallowMount } from "@vue/test-utils"
import { Store } from "vuex"
import CheckBox from "@/components/CheckBox.vue"
import beforeAllTests from "@/test/beforeAllTests"
import {
  state as criteriaState,
  mutations,
  getters,
  actions
} from "~/store/criteria"

const MOCK_CRITERIA = {
  criteriaKey: "criteriaKey1",
  label: "Benefit criteria label 1.",
  type: "boolean",
  value: true,
  criteriaGroupKey: "group1"
}

describe("CheckBox", () => {
  let store

  beforeAll(async () => {
    await beforeAllTests()
  })

  beforeEach(() => {
    criteriaState.namespaced = true
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
    const wrapper = mount(CheckBox, {
      propsData: {
        criteriaKey: "active_duty_member",
        label: "You served in the active military, naval or air service and",
        response: false
      }
    })
    expect(wrapper.vm).toBeTruthy()
  })

  test("displays eligibilityCriteria when one is passed in", () => {
    const wrapper = shallowMount(CheckBox, {
      propsData: { ...MOCK_CRITERIA },
      store
    })
    expect(wrapper.find("label").text()).toBe("Benefit criteria label 1.")
  })

  test("updates when a checkbox criteria response changes", async () => {
    const wrapper = shallowMount(CheckBox, {
      propsData: { ...MOCK_CRITERIA },
      store
    })
    const localCriterion = [
      {
        criteriaKey: MOCK_CRITERIA.criteriaKey,
        response: MOCK_CRITERIA.value
      }
    ]
    await store.dispatch("criteria/populate", localCriterion)
    await wrapper.find(".usa-checkbox__input").setChecked()
    await wrapper.vm.$nextTick()
    expect(wrapper.find(".usa-checkbox__input").element.checked).toBeTruthy()
  })
})
