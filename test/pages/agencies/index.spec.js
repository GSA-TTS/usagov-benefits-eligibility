import { shallowMount } from "@vue/test-utils"
import Page from "@/pages/agencies/index.vue"
import beforeAllTests from "@/test/beforeAllTests"

describe("pages/agencies/index.vue", () => {
  const content = {
    benefits: [
      { source: { name: "Agency one" } },
      { source: { name: "Agency two" } },
      { source: { name: "Agency two" } },
      { source: { name: "Agency three" } },
    ],
    agencies: [{ title: "Agency one", slug: "agency-one", summary: "summary one" }],
  }

  beforeAll(async () => {
    await beforeAllTests()
  })

  it("should be a Vue instance with default data", () => {
    const wrapper = shallowMount(Page)
    expect(wrapper.vm).toBeTruthy()
    expect(wrapper.vm.$options.data().agencies).toBeTruthy()
  })

  it("should get all the agencies, return a unique list that's sorted", async () => {
    let contentRequest
    const contentMock = {
      only: () => contentMock,
      fetch: () => {
        return Promise.resolve(content[contentRequest])
      },
    }
    const $content = (path) => {
      contentRequest = path
      return contentMock
    }
    const wrapper = shallowMount(Page)
    const result = await wrapper.vm.$options.asyncData({ $content })
    expect(result.agencies.join()).toBe("Agency one,Agency three,Agency two")
  })

  it("should map agencies to content and fallback if there is no content available", async () => {
    let contentRequest
    const contentMock = {
      only: () => contentMock,
      fetch: () => {
        return Promise.resolve(content[contentRequest])
      },
    }
    const $content = (path) => {
      contentRequest = path
      return contentMock
    }
    const wrapper = shallowMount(Page)
    const data = await wrapper.vm.$options.asyncData({ $content })
    wrapper.vm.contentAgencies = data.contentAgencies
    const results = wrapper.vm.mapAgencies(content.benefits.map((b) => b.source.name))
    expect(results[0].slug).toBe("agency-one")
  })
})
