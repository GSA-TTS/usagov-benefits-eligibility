import { shallowMount, createLocalVue } from "@vue/test-utils"
import Accordion from "@/components/Accordion.vue"
import beforeAllTests from "@/test/beforeAllTests"
import Vuex from "vuex"

const localVue = createLocalVue()
localVue.use(Vuex)

describe("Accordion", () => {
  let store
  let getters
  let oldClient

  beforeAll(async () => {
    await beforeAllTests()
  })

  beforeEach(() => {
    oldClient = process.client
    process.client = true
    getters = {
      doesCriterionMatchSelection: () => jest.fn().mockReturnValue(true).mockReturnValueOnce(false),
      getTotalEligibleCriteria: () => jest.fn().mockReturnValue(2).mockReturnValueOnce(3).mockReturnValueOnce(0),
    }
    store = new Vuex.Store({
      modules: {
        criteria: {
          namespaced: true,
          getters,
        },
      },
    })
  })

  afterEach(() => {
    process.client = oldClient
  })

  const propsData = {
    lifeEventBenefits: [
      {
        title: "One title",
        slug: "one-slug",
        tags: [],
        eligibility: [
          {
            criteriaKey: "one-criteria",
            acceptableValues: [true],
          },
          {
            criteriaKey: "two-criteria",
            acceptableValues: [true],
          },
          {
            criteriaKey: "three-criteria",
            acceptableValues: [true],
          },
        ],
      },
      {
        title: "Two title",
        slug: "two-slug",
        tags: [],
        eligibility: [
          {
            criteriaKey: "one-criteria",
            acceptableValues: [true],
          },
          {
            criteriaKey: "two-criteria",
            acceptableValues: [true],
          },
          {
            criteriaKey: "three-criteria",
            acceptableValues: [true],
          },
        ],
      },
      {
        title: "Three title",
        slug: "three-slug",
        tags: [],
        eligibility: [
          {
            criteriaKey: "one-criteria",
            acceptableValues: [true],
          },
          {
            criteriaKey: "two-criteria",
            acceptableValues: [true],
          },
          {
            criteriaKey: "three-criteria",
            acceptableValues: [true],
          },
          {
            criteriaKey: "virtual-criteria",
          },
        ],
      },
    ],
    lifeEventCriteria: [
      {
        criteriaKeys: ["one-criteria"],
      },
      {
        criteriaKeys: ["two-criteria", "three-criteria"],
      },
    ],
  }

  it("should be a Vue instance", () => {
    const doesCriterionMatchSelectionSpy = jest.fn()
    const wrapper = shallowMount(Accordion, {
      propsData,
      store,
      localVue,
    })
    expect(wrapper.vm).toBeTruthy()
    expect(wrapper.vm.$options.data()).toBeTruthy()
  })

  it("should open and close accordions when called", () => {
    const doesCriterionMatchSelectionSpy = jest.fn()
    const wrapper = shallowMount(Accordion, {
      propsData,
      store,
      localVue,
    })
    jest.spyOn(wrapper.vm, "toggleAccordion").mockReturnValue()
    wrapper.vm.closeAll()
    expect(wrapper.vm.toggleAccordion).toHaveBeenCalled()
    wrapper.vm.openAll()
    expect(wrapper.vm.toggleAccordion).toHaveBeenCalled()
    wrapper.vm.focus()
    expect(wrapper.vm.toggleAccordion).toHaveBeenCalled()
  })
})
