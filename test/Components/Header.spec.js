import { shallowMount } from "@vue/test-utils"
import Header from "@/components/Header.vue"
import beforeAllTests from "@/test/beforeAllTests"

describe("Header", () => {
  beforeAll(async () => {
    await beforeAllTests()
  })

  it("should be a Vue instance", () => {
    const wrapper = shallowMount(Header)
    expect(wrapper.vm).toBeTruthy()
  })

  it("should put the query string into the search box and go to the search page when the search button is pressed", async () => {
    const $router = { push: jest.fn() }
    const wrapper = shallowMount(Header, {
      mocks: {
        $route: { query: { search: "example search" } },
        $router,
      },
    })
    expect(wrapper.vm).toBeTruthy()
    await wrapper.find("button.usa-button").trigger("click")
    expect($router.push).toHaveBeenCalled()
  })

  it("should change links based on routes", () => {
    const $route = {
      matched: [],
    }
    const wrapper = shallowMount(Header, {
      mocks: { $route },
    })
    expect(wrapper.vm.isLifeEventPage).toBeFalsy()
    wrapper.vm.$set($route, "matched", [{ path: "/:slug" }])
    wrapper.vm.$options.watch.$route.call(wrapper.vm)
    expect(wrapper.vm.isLifeEventPage).toBe(true)
  })
})
