import { config, shallowMount, mount } from "@vue/test-utils"
import LifeEventsPage from "~/pages/index.vue"
import beforeAllTests from "@/test/beforeAllTests"
import { createContentMock } from "@/test/mockContent"
import jestConfig from "~/jest.config"

const mockContent = {
  lifeEvents: [
    {
      slug: "testSlug",
      title: "testTitle",
      summary: "test summary",
    },
  ],
  landingPage: [
    {
      title: "landing title",
      summary: "landing summary",
      processListSteps: ["one", "two", "three"],
    },
  ],
}

const LIFE_EVENTS_DIRECTORY = "life-events"
const LANDING_PAGE_FILE = "landing-page"

describe("LifeEventsPage", () => {
  beforeAll(async () => {
    await beforeAllTests()
  })

  it("is a Vue instance", () => {
    const wrapper = shallowMount(LifeEventsPage)
    expect(wrapper.vm).toBeTruthy()
  })

  it("is a Vue instance (one-event-version)", () => {
    config.mocks.$config = {
      oneEventVersion: 'death-of-a-loved-one'
    }
    config.mocks.$router = {
      push: jest.fn()
    }
    const wrapper = shallowMount(LifeEventsPage)
    expect(wrapper.vm).toBeTruthy()
    config.mocks.$config = {
      oneEventVersion: false
    }
  })

  it("displays a list of one life event", async () => {
    const wrapper = shallowMount(LifeEventsPage)
    await wrapper.setData(mockContent)
    expect(wrapper.find(".usa-card-group").exists()).toBeTruthy()
    expect(wrapper.findAll(".usa-card").length).toBe(1)
  })

  it("asyncData() fetches the given data", async () => {
    const $content = createContentMock([
      {
        collectionName: LIFE_EVENTS_DIRECTORY,
        items: mockContent.lifeEvents,
      },
      {
        collectionName: LANDING_PAGE_FILE,
        items: mockContent.landingPage,
      },
    ])
    const asyncItems = await LifeEventsPage.asyncData({ $content })

    expect(mockContent).toMatchObject(asyncItems)
    expect($content).toHaveBeenCalledWith(LIFE_EVENTS_DIRECTORY)
  })
})
