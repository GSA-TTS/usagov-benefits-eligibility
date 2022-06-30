import { mount, shallowMount } from "@vue/test-utils"
import { Store } from "vuex"
import CriteriaChild from "@/components/CriteriaChild.vue"
import beforeAllTests from "@/test/beforeAllTests"
import { actions, getters, mutations, state as criteriaState } from "~/store/criteria"

const GROUP_KEY = "test-group-key"
const DISABLE_GROUP_KEY = "group-i-dont-care-about-2"
describe("CriteriaChild", () => {
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
          getters,
        },
      },
    })
  })
  test("is a Vue instance", () => {
    const wrapper = shallowMount(CriteriaChild, {
      propsData: {},
      store,
    })
    expect(wrapper.vm).toBeTruthy()
  })

  test("displays nothing when there are no criteria passed in", () => {
    const wrapper = shallowMount(CriteriaChild, {
      store,
    })
    expect(wrapper.find(".eligibility-criterion").text()).toBeFalsy()
  })

  test("test label", () => {
    const wrapper = mount(CriteriaChild, {
      store,
      propsData: {
        criteriaKey: "key",
        label: "bal bal",
        type: "boolean",
        values: ["true", "false"],
        criteriaGroupKey: GROUP_KEY,
        response: "balkajdflkjslf",
      },
    })
    expect(wrapper.find("label").text()).toBe("bal bal")
  })

  test("test label using criterion", async () => {
    await store.dispatch("criteria/populate", [
      {
        criteriaKey: "myKey",
        label: "bal bal",
        type: "boolean",
        values: "true",
        acceptableValues: [true],
      },
    ])
    const wrapper = mount(CriteriaChild, {
      store,
      propsData: {
        criteriaKey: "myKey",
        type: "boolean",
        values: ["true", "false"],
        criteriaGroupKey: GROUP_KEY,
        response: "balkajdflkjslf",
      },
    })
    expect(wrapper.vm.getCriterionLabel()).toBe("No label provided")
  })

  test("no watcher created if no top-level filter is defined", () => {
    const wrapper = mount(CriteriaChild, {
      store,
      propsData: {
        criteriaKey: "myKey",
        type: "boolean",
        values: ["true", "false"],
        criteriaGroupKey: GROUP_KEY,
        response: "balkajdflkjslf",
        topLevelFilters: [
          {
            criteriaKey: ["filterKey"],
            type: "boolean",
            values: ["true", "false"],
            disableGroupKey: "group-i-dont-care-about-1",
            disableGroupWhen: "true",
          },
          {
            criteriaKey: ["otherKey"],
            type: "boolean",
            values: ["true", "false"],
            disableGroupKey: DISABLE_GROUP_KEY,
            disableGroupWhen: "false",
          },
        ],
      },
    })

    let watcherWasCreated = false
    for (const watcherIndex in wrapper.vm._watchers) {
      const watcher = wrapper.vm._watchers[watcherIndex]
      if (
        watcher.expression === "$store.state.criteria.eligibilityCriteria.filterKey.response" ||
        watcher.expression === "$store.state.criteria.eligibilityCriteria.otherKey.response"
      ) {
        watcherWasCreated = true
      }
    }
    expect(watcherWasCreated).toBeFalsy()
  })

  test("watcher created for no top-level filter", () => {
    const wrapper = mount(CriteriaChild, {
      store,
      propsData: {
        criteriaKey: "myKey",
        type: "boolean",
        values: ["true", "false"],
        criteriaGroupKey: GROUP_KEY,
        response: "balkajdflkjslf",
        topLevelFilters: [
          {
            criteriaKey: ["filterKey"],
            type: "boolean",
            values: ["true", "false"],
            disableGroupKey: GROUP_KEY,
            disableGroupWhen: "true",
          },
          {
            criteriaKey: ["otherKey"],
            type: "boolean",
            values: ["true", "false"],
            disableGroupKey: DISABLE_GROUP_KEY,
            disableGroupWhen: "false",
          },
        ],
      },
    })

    let watcherWasCreated = false
    for (const watcherIndex in wrapper.vm._watchers) {
      const watcher = wrapper.vm._watchers[watcherIndex]
      if (watcher.expression === "$store.state.criteria.eligibilityCriteria.filterKey.response") {
        watcherWasCreated = true
      }
    }
    expect(watcherWasCreated).toBeTruthy()
  })

  test("watcher called when stated changes", () => {
    store.state.criteria = {
      eligibilityCriteria: {
        filterKey: {
          response: false,
        },
      },
    }

    const wrapper = mount(CriteriaChild, {
      store,
      propsData: {
        criteriaKey: "myKey",
        type: "boolean",
        values: ["true", "false"],
        criteriaGroupKey: GROUP_KEY,
        response: "balkajdflkjslf",
        topLevelFilters: [
          {
            criteriaKey: ["filterKey"],
            type: "boolean",
            values: ["true", "false"],
            disableGroupKey: GROUP_KEY,
            disableGroupWhen: "true",
          },
          {
            criteriaKey: ["otherKey"],
            type: "boolean",
            values: ["true", "false"],
            disableGroupKey: DISABLE_GROUP_KEY,
            disableGroupWhen: "false",
          },
        ],
      },
    })

    expect(wrapper.vm.isGroupKeyDisabled).toBeFalsy()
    store.state.criteria.eligibilityCriteria.filterKey.response = true
    expect(wrapper.vm.isGroupKeyDisabled).toBeFalsy()
  })
})
