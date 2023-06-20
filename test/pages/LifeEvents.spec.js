import { config, shallowMount } from "@vue/test-utils"
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
      replace: jest.fn(),
    }
    await beforeAllTests()
  })

  it("is a Vue instance", () => {
    const wrapper = shallowMount(LifeEventsPage)
    expect(wrapper.vm).toBeTruthy()
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
