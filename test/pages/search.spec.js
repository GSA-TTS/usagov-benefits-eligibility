import { shallowMount } from "@vue/test-utils"
import beforeAllTests from "@/test/beforeAllTests"
import { createContentMock } from "@/test/mockContent"
import SearchPage from "~/pages/search.vue"

describe("Search page", () => {
  beforeAll(async () => {
    await beforeAllTests()
  })

  it("should be a Vue instance with default data that calls search.gov", async () => {
    const $axios = jest.fn()
    const client = process.client
    process.client = true
    const wrapper = shallowMount(SearchPage, {
      mocks: {
        $route: { query: { search: "example search" } },
        $axios,
        $fetchState: {},
      },
    })
    const data = wrapper.vm.$options.data.apply(wrapper.vm)
    await wrapper.vm.$options.fetch.apply(wrapper.vm)
    expect(wrapper.vm).toBeTruthy()
    expect(data.results.web.results.length).toBe(0)
    expect($axios).toHaveBeenCalled()
    process.client = client
  })
})
