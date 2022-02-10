import { shallowMount } from "@vue/test-utils"
import Vuex from "vuex"
import EligibilityList from "@/components/EligibilityList.vue"
import beforeAllTests from "@/test/beforeAllTests"
import {
  state as criteriaState,
  mutations,
  getters,
  actions
} from "~/store/criteria"

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
]

describe("EligibilityList", () => {
  let store

  beforeAll(async () => {
    await beforeAllTests()
  })

  beforeEach(() => {
    criteriaState.namespaced = true
    store = new Vuex.Store({
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
    const wrapper = shallowMount(EligibilityList, {
      propsData: {
        benefitEligibilityCriteria: []
      },
      store
    })
    expect(wrapper.vm).toBeTruthy()
  })

  test("displays an error if there are no criteria passed in", () => {
    const wrapper = shallowMount(EligibilityList, {
      store
    })
    expect(wrapper.find(".usa-icon-list__icon").classes()).toStrictEqual([
      "usa-icon-list__icon",
      "text-base"
    ])
  })

  test("displays the eligibilityCriteria", () => {
    const wrapper = shallowMount(EligibilityList, {
      propsData: {
        benefitEligibilityCriteria: MOCK_CRITERIA
      },
      store
    })
    expect(wrapper.findAll("li")).toHaveLength(2)
  })
})
