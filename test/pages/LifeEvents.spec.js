import { config, shallowMount, mount } from "@vue/test-utils"
import LifeEventsPage from "~/pages/index.vue"
import beforeAllTests from "@/test/beforeAllTests"
const mockContent = {
  "life-events": [
    {
      slug: "testSlug",
      title: "testTitle",
      summary: "test summary",
    },
  ],
  "landing-page": [
    {
      title: "landing title",
      summary: "landing summary",
      processListSteps: ["one", "two", "three"],
    },
  ],
}

const mockContent2 = {
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

describe("LifeEventsPage", () => {
  beforeAll(async () => {
    config.mocks.$route = {
      fullPath: "/death-of-a-loved-one",
    }
    config.mocks.$router = {
      push: jest.fn(),
    }
    await beforeAllTests()
  })

  it("is a Vue instance", () => {
    const wrapper = shallowMount(LifeEventsPage)
    expect(wrapper.vm).toBeTruthy()
  })

  it("is a Vue instance (one-event-version)", () => {
    config.mocks.$config = {
      oneEventVersion: "death-of-a-loved-one",
    }
    const wrapper = shallowMount(LifeEventsPage)
    expect(wrapper.vm).toBeTruthy()
    config.mocks.$config = {
      oneEventVersion: false,
    }
  })

  it("displays a list of one life event", async () => {
    const wrapper = shallowMount(LifeEventsPage)
    await wrapper.setData(mockContent2)
    expect(wrapper.find(".usa-card-group").exists()).toBeTruthy()
    expect(wrapper.findAll(".usa-card").length).toBe(1)
  })

  it("asyncData() fetches the given data", async () => {
    let contentRequest
    const contentMock = {
      only: () => contentMock,
      sortBy: () => contentMock,
      fetch: () => {
        return Promise.resolve(mockContent[contentRequest])
      },
    }
    const $content = (path, path2) => {
      if (path !== "en") {
        contentRequest = path
      } else {
        contentRequest = path2
      }
      return contentMock
    }
    const asyncItems = await LifeEventsPage.asyncData({ $content, i18n: { locale: "en" } })
    expect(mockContent2).toMatchObject(asyncItems)
  })
})
