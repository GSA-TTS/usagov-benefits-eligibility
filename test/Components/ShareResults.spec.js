import { mount } from "@vue/test-utils"
import { Store } from "vuex"
import ShareResults from "@/components/ShareResults.vue"
import beforeAllTests from "@/test/beforeAllTests"
import { actions, getters, mutations, state as criteriaState } from "~/store/criteria"

const MOCK_CRITERIA = [
  {
    criteriaKey: "criteriaKey1",
    label: "Benefit criteria label 1.",
    type: "boolean",
    values: [true],
    acceptableValues: [true],
  },
  {
    criteriaKey: "criteriaKey2",
    label: "Benefit criteria label 2.",
    type: "select",
    values: ["one", "two", "three"],
    acceptableValues: ["one"],
  },
]

const CRITERIA_POPULATE = "criteria/populate"

describe("ShareResults", () => {
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

  afterEach(() => {
    delete process.client
  })

  it("is a Vue instance", async () => {
    await store.dispatch(CRITERIA_POPULATE, [...MOCK_CRITERIA])
    const wrapper = mount(ShareResults, { store })
    expect(wrapper.vm).toBeTruthy()
  })

  it("will append query args with values from local store", async () => {
    let historyLocationChange = "nothing"
    jest.spyOn(window.history, "replaceState")
    window.history.replaceState.mockImplementation((state, title, url) => {
      historyLocationChange = url
    })

    await store.dispatch(CRITERIA_POPULATE, [...MOCK_CRITERIA])
    const trueCriteria = {
      criteriaKey: "criteriaKey1",
      response: true,
    }

    store.commit("criteria/updateResponse", { ...trueCriteria })

    expect(historyLocationChange).toBe("nothing")
    mount(ShareResults, { store })
    expect(historyLocationChange).toBe("http://localhost/?ae35859=1")
  })

  it("should have an enabled button when there are critera filled out and populate the clipboard when clicked", async () => {
    await store.dispatch(CRITERIA_POPULATE, [...MOCK_CRITERIA])
    window.navigator.clipboard = { writeText: jest.fn() }
    const wrapper = mount(ShareResults, { store })
    const trueCriteria = {
      criteriaKey: "criteriaKey1",
      response: true,
    }

    store.commit("criteria/updateResponse", { ...trueCriteria })
    await wrapper.vm.$nextTick()
    expect(wrapper.find("button.copy-selections").attributes("disabled")).toBeUndefined()
    await wrapper.find("button.copy-selections").trigger("click")
    expect(window.navigator.clipboard.writeText).toHaveBeenCalledWith("http://localhost/?ae35859=1")
  })

  it("should load url search params into the store", async () => {
    await store.dispatch(CRITERIA_POPULATE, [...MOCK_CRITERIA])
    const wrapper = mount(ShareResults, {
      data: () => ({
        search: "?ae35859=1&77edd0d",
      }),
      store,
    })
    await wrapper.vm.$nextTick()
    expect(store.state.criteria.eligibilityCriteria.criteriaKey1.response).toBe(true)
  })

  it("should display tooltip when the url is copied", async () => {
    jest.useFakeTimers()
    await store.dispatch(CRITERIA_POPULATE, [...MOCK_CRITERIA])
    const wrapper = mount(ShareResults, {
      data: () => ({
        search: "?ae35859=1&77edd0d",
      }),
      store,
    })
    await wrapper.vm.$nextTick()
    await wrapper.vm.copy()
    await wrapper.vm.$nextTick()
    expect(wrapper.find(".usa-tooltip")).toBeDefined()
    wrapper.vm.blur()
    await wrapper.vm.$nextTick()
    jest.runAllTimers()
    jest.useRealTimers()
  })

  it("should clear all filters", async () => {
    const dispatchMock = jest.fn()
    store.dispatch = dispatchMock

    const wrapper = mount(ShareResults, { store })

    await wrapper.find(".usa-button.clear-selections").trigger("click")
    expect(dispatchMock).toHaveBeenCalled()
    expect(dispatchMock.mock.calls[0][0]).toBe("criteria/clear")
  })
})
