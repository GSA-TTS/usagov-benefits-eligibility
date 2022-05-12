import { mount } from "@vue/test-utils"
import Header from "@/components/Header.vue"
import beforeAllTests from "@/test/beforeAllTests"

describe("Header", () => {
  beforeAll(async () => {
    await beforeAllTests()
  })

  it("should be a Vue instance", () => {
    const wrapper = mount(Header)
    expect(wrapper.vm).toBeTruthy()
  })

  it("does toggle lang", () => {
    const wrapper = mount(Header, {
      $i18n: { locale: "en" },
      mocks: {
        $router: {
          push: jest.fn(),
        },
        $config: {
          languageToggleActive: true,
        },
      },
    })
    expect(wrapper.vm).toBeTruthy()
    const esButton = wrapper.find("#language-toggle-button")
    esButton.trigger("click")
    esButton.trigger("click")
  })

  it("should change links based on routes", () => {
    const $route = {
      matched: [],
    }
    const wrapper = mount(Header, {
      mocks: { $route },
    })
    expect(wrapper.vm.isLifeEventPage).toBeFalsy()
    wrapper.vm.$set($route, "matched", [{ path: "/:slug" }])
    wrapper.vm.$options.watch.$route.call(wrapper.vm)
    expect(wrapper.vm.isLifeEventPage).toBe(true)
  })
})
