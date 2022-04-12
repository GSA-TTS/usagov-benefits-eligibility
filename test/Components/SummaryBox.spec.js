import { mount } from "@vue/test-utils"
import { Store } from "vuex"
import SummaryBox from "@/components/SummaryBox.vue"
import beforeAllTests from "@/test/beforeAllTests"
import { actions, getters, mutations, state as criteriaState } from "~/store/criteria"

const MOCK_CRITERIA = [
  {
    criteriaKey: "criteriaKey1",
    label: "Benefit criteria label 1.",
    type: "boolean",
    values: "true",
    acceptableValues: [true],
  },
  {
    criteriaKey: "criteriaKey2",
    label: "Benefit criteria label 2.",
    type: "select",
    values: "one; two; three",
    acceptableValues: ["one"],
  },
]

describe("<SummaryBox />", () => {
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

  it("is a Vue instance", async () => {
    await store.dispatch("criteria/populate", [...MOCK_CRITERIA])
    const wrapper = mount(SummaryBox, {
      propsData: {
        lifeEventCriteria: [
          {
            criteriaGroupKey: "criteriaGroupKey`",
            label: "label1",
            description: "description1",
            criteriaKeys: ["criteriaKey1", "criteriaKey2"],
          },
        ],
      },
      store,
    })

    await wrapper.vm.$nextTick()
    expect(wrapper.vm).toBeTruthy()
  })
})
