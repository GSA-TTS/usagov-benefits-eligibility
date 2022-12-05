import { config, mount, shallowMount } from "@vue/test-utils"
import { Store } from "vuex"
import beforeAllTests from "@/test/beforeAllTests"
import { createContentMock } from "@/test/mockContent"
import LifeEventPage from "~/pages/_lifeEvent.vue"
import { actions, getters, mutations, state as criteriaState } from "~/store/criteria"

const THIS_LIFE_EVENT_SLUG = "this-life-event"
const LIFE_EVENTS_DIRECTORY = "life-events"
const CRITERIA_DIRECTORY = "criteria"
const BENEFITS_DIRECTORY = "benefits"
const SECONDARY_HEADLINE = "test life event secondary headline"
const mockContent = {
  landingPage: {
    title: "landing title",
    summary: "landing summary",
    processListSteps: ["one", "two", "three"],
  },

  lifeEvent: {
    slug: THIS_LIFE_EVENT_SLUG,
    title: "test life event title",
    summary: "test life event summary",
    lede: "test life event lede",
    secondaryHeadline: SECONDARY_HEADLINE,
    eligibilityCriteria: [
      {
        label: "first group label",
        description: "first group description",
        criteriaGroupKey: "group1",
        criteriaKeys: ["criteriaKey1", "criteriaKey2"],
      },
    ],
  },
  benefit: [
    {
      slug: THIS_LIFE_EVENT_SLUG,
      agency: "Benefit Agency",
      headline: "Benefit One",
      identifier: "benefitOne",
      lifeEvents: ["bereavement", THIS_LIFE_EVENT_SLUG],
      provider: "Federal Government",
      source: { name: "Dept. of Benefit One", link: "#" },
      summary: "Benefit one summary.",

      title: "Benefit One Title",
      toc: [],
      eligibility: [
        { criteriaKey: "criteriaKey1", acceptableValues: [true] },
        { criteriaKey: "criteriaKey2", acceptableValues: [true] },
        { criteriaKey: "virtualCriteriaKey1" },
      ],
    },
  ],
  criteria: {
    body: [
      {
        criteriaKey: "criteriaKey1",
        criteria: {
          criteriaKey: {
            label: "Benefit criteria label 1.",
          },
        },
        type: "boolean",
        values: [true],
      },
      {
        criteriaKey: "criteriaKey2",
        criteria: {
          criteriaKey: {
            label: "Benefit criteria label 2.",
          },
        },
        type: "boolean",
        values: [true],
      },
    ],
  },
}

const vueMocks = (mocks) => {
  return Object.assign(
    {},
    {
      $fetchState: {
        pending: false,
        error: false,
      },
      $route: {
        path: `/${THIS_LIFE_EVENT_SLUG}`,
        params: {
          lifeEvent: THIS_LIFE_EVENT_SLUG,
        },
      },
    },
    mocks
  )
}

describe("Life Event page", () => {
  let store

  beforeAll(async () => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    })
    config.mocks.$config = {
      oneEventVersion: false,
    }
    config.mocks.lifeEvent = {}
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

  it("should be a Vue instance", () => {
    const wrapper = shallowMount(LifeEventPage, {
      mocks: vueMocks(mockContent),
      store,
    })
    expect(wrapper.vm).toBeTruthy()
  })

 

  it("spanish styles return correct margin", () => {
    const additionalInfo = {...mockContent, $i18n: {locale: 'es'}}
    const wrapper = shallowMount(LifeEventPage, {
      mocks: vueMocks(additionalInfo),
      store,
    })
    const margin = wrapper.vm.spanishStyle
    expect(margin).toBe("margin-bottom-11")
  })

  it("should be able run its methods", () => {
    const wrapper = shallowMount(LifeEventPage, {
      mocks: vueMocks(mockContent),
      store,
    })
    const getVirtualCriteriaResult = wrapper.vm.getVirtualCriteria()
    expect(wrapper.vm).toBeTruthy()
  })

  it("should display the page content", async () => {
    let contentRequest
    const contentMock = {
      where: () => contentMock,
      sortBy: () => contentMock,
      fetch: () => {
        return Promise.resolve(Object.assign([], mockContent[contentRequest]))
      },
    }
    const $content = (path, path2, path3 = "") => {
      if (path === "life-events") {
        contentRequest = "lifeEvent"
      } else if (path === "benefits") {
        contentRequest = "benefit"
      } else {
        contentRequest = path
      }
      return contentMock
    }
    const wrapper = shallowMount(LifeEventPage, {
      mocks: vueMocks({ $content, ...mockContent }),
      store,
    })

    await wrapper.vm.$options.fetch.apply(wrapper.vm)
    await wrapper.vm.$nextTick()
    expect(wrapper.find("h1").text()).toBe(SECONDARY_HEADLINE)
    expect(wrapper.vm.lifeEventTitle).toBe(SECONDARY_HEADLINE)
  })

  it("should sort the results", async () => {
    const $content = createContentMock([
      {
        collectionName: LIFE_EVENTS_DIRECTORY,
        items: [{ ...mockContent.lifeEvent }],
      },
      {
        collectionName: BENEFITS_DIRECTORY,
        items: [{ ...mockContent.benefit }],
      },
      {
        collectionName: CRITERIA_DIRECTORY,
        items: [{ ...mockContent.criteria }],
      },
    ])
    const wrapper = shallowMount(LifeEventPage, {
      mocks: vueMocks({ $content, ...mockContent }),
      store,
    })
    wrapper.vm.lifeEventBenefits = [
      {
        title: "two",
        eligibility: [{}, {}, {}],
      },
      {
        title: "one",
        eligibility: [{}, {}, {}],
      },
      {
        title: "three",
        eligibility: [{}, {}, {}],
      },
      {
        title: "four",
        eligibility: [{}, {}, {}],
      },
    ]
    jest
      .spyOn(wrapper.vm, "getTotalEligibleCriteria")
      .mockReturnValueOnce(3)
      .mockReturnValueOnce(1)
      .mockReturnValueOnce(2)
      .mockReturnValueOnce(3)
    jest
      .spyOn(wrapper.vm, "getTotalIneligibleCriteria")
      .mockReturnValueOnce(1)
      .mockReturnValueOnce(0)
      .mockReturnValueOnce(0)
      .mockReturnValueOnce(0)
    jest.spyOn(wrapper.vm, "getVirtualCriteria").mockReturnValue({})
    await wrapper.find("#benefitSort").findAll("option").at(1).setSelected()
    expect(wrapper.vm.lifeEventBenefits.map((b) => b.title).join()).toBe("four,one,three,two")
    await wrapper.find("#benefitSort").findAll("option").at(0).setSelected()
    expect(wrapper.vm.getTotalEligibleCriteria).toHaveBeenCalled()
    expect(wrapper.vm.lifeEventBenefits.map((b) => b.title).join()).toBe("one,three,two,four")
  })

  it("should expand and collapse all accordion cards", async () => {
    const $content = createContentMock([
      {
        collectionName: LIFE_EVENTS_DIRECTORY,
        items: [{ ...mockContent.lifeEvent }],
      },
      {
        collectionName: BENEFITS_DIRECTORY,
        items: [{ ...mockContent.benefit }],
      },
      {
        collectionName: CRITERIA_DIRECTORY,
        items: [{ ...mockContent.criteria }],
      },
    ])
    const wrapper = mount(LifeEventPage, {
      mocks: vueMocks({ $content, ...mockContent }),
      store,
    })
    wrapper.vm.lifeEventBenefits = wrapper.vm.allLifeEventBenefits = [
      {
        title: "two",
        eligibility: [{}, {}, {}],
        tags: ["tagOne"],
      },
      {
        title: "one",
        eligibility: [{}, {}, {}],
        tags: ["tagOne", "tagTwo"],
      },
      {
        title: "three",
        eligibility: [{}, {}, {}],
        tags: ["tagThree"],
      },
    ]

    const openAllSpy = jest.fn()
    const closeAllSpy = jest.fn()
    wrapper.vm.$refs.accordion.openAll = openAllSpy
    wrapper.vm.$refs.accordion.closeAll = closeAllSpy
    await wrapper.find(".usa-button.open-all").trigger("click")
    expect(openAllSpy).toHaveBeenCalled()
    await wrapper.find(".usa-button.close-all").trigger("click")
    expect(closeAllSpy).toHaveBeenCalled()
  })
})
