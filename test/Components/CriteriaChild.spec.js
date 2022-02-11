import { shallowMount } from "@vue/test-utils"
import Vuex from "vuex"
import CriteriaChild from "@/components/CriteriaChild.vue"
import beforeAllTests from "@/test/beforeAllTests"
import {
  state as criteriaState,
  mutations,
  getters,
  actions
} from "~/store/criteria"

describe("CriteriaChild", () => {
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
    const wrapper = shallowMount(CriteriaChild, {
      propsData: {},
      store
    })
    expect(wrapper.vm).toBeTruthy()
  })

  test("displays nothing when there are no criteria passed in", () => {
    const wrapper = shallowMount(CriteriaChild, {
      store
    })
    expect(wrapper.find(".eligibility-criterion").text()).toBeFalsy()
  })
})
