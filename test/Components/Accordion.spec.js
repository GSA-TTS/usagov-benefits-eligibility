import { createLocalVue, shallowMount } from "@vue/test-utils"
import Vuex, { Store } from "vuex"
import Accordion from "@/components/Accordion.vue"
import beforeAllTests from "@/test/beforeAllTests"

const CRITERIA_KEY_ONE = "one-criteria"
const CRITERIA_KEY_TWO = "two-criteria"
const CRITERIA_KEY_THREE = "three-criteria"
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
      getActiveState: () => jest.fn().mockReturnValue(false),
    }
    store = new Store({
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
            criteriaKey: CRITERIA_KEY_ONE,
            acceptableValues: [true],
          },
          {
            criteriaKey: CRITERIA_KEY_TWO,
            acceptableValues: [true],
          },
          {
            criteriaKey: CRITERIA_KEY_THREE,
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
            criteriaKey: CRITERIA_KEY_ONE,
            acceptableValues: [true],
          },
          {
            criteriaKey: CRITERIA_KEY_TWO,
            acceptableValues: [true],
          },
          {
            criteriaKey: CRITERIA_KEY_THREE,
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
            criteriaKey: CRITERIA_KEY_ONE,
            acceptableValues: [true],
          },
          {
            criteriaKey: CRITERIA_KEY_TWO,
            acceptableValues: [true],
          },
          {
            criteriaKey: CRITERIA_KEY_THREE,
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
        criteriaKeys: [CRITERIA_KEY_ONE],
      },
      {
        criteriaKeys: [CRITERIA_KEY_TWO, CRITERIA_KEY_THREE],
      },
    ],
  }

  it("should be a Vue instance", () => {
    const wrapper = shallowMount(Accordion, {
      propsData,
      store,
      localVue,
    })
    expect(wrapper.vm).toBeTruthy()
    expect(wrapper.vm.$options.data()).toBeTruthy()
  })

  it("should open and close accordions when called", () => {
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

  describe("sanitizedBenefitUrl tests", () => {
    it("text example.com", () => {
      const wrapper = shallowMount(Accordion, {
        propsData,
        store,
        localVue,
      })
      const url = wrapper.vm.sanitizedBenefitUrl({
        source: {
          link: "http://www.example.com",
        },
      })
      expect(url).toBe("http://www.example.com")
    })
    it("sanitizedBenefitUrl about:blank if javascript is injected", () => {
      const wrapper = shallowMount(Accordion, {
        propsData,
        store,
        localVue,
      })
      const url = wrapper.vm.sanitizedBenefitUrl({
        source: {
          link: "javascript:somethingBad('dd')",
        },
      })
      expect(url).toBe("about:blank")
    })
  })

  describe("getCriteriaMatchLanguage tests", () => {
    it("false value for criteria selected", () => {
      getters = {
        doesCriterionMatchSelection: () => jest.fn().mockReturnValue(false).mockReturnValueOnce(false),
        getTotalEligibleCriteria: () => jest.fn().mockReturnValue(2).mockReturnValueOnce(3).mockReturnValueOnce(0),
      }
      store = new Store({
        modules: {
          criteria: {
            namespaced: true,
            getters,
          },
        },
      })
      const wrapper = shallowMount(Accordion, {
        propsData,
        store,
        mocks: {
          $t: (val) => val,
        },
      })
      const text = wrapper.vm.getCriteriaMatchLanguage([{}])
      expect(text).toBe("(accordion.not_eligible)")
    })
    it("nothing selected", () => {
      getters = {
        doesCriterionMatchSelection: () => jest.fn().mockReturnValue(null),
        getTotalEligibleCriteria: () => jest.fn().mockReturnValue(0),
        getActiveState: () => jest.fn().mockReturnValue(false),
      }
      store = new Store({
        modules: {
          criteria: {
            namespaced: true,
            getters,
          },
        },
      })
      const wrapper = shallowMount(Accordion, {
        propsData,
        store,
        mocks: {
          $t: (val) => val,
        },
      })
      const text = wrapper.vm.getCriteriaMatchLanguage([{}])
      expect(text).toBe("(accordion.unknown)")
    })
  })
})
