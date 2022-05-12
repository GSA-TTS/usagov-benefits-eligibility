import { config, mount } from "@vue/test-utils"
import Header from "@/components/Header.vue"
import beforeAllTests from "@/test/beforeAllTests"

describe("Header", () => {
  beforeAll(async () => {
    await beforeAllTests()
  })

  it("should be a Vue instance", () => {
    const wrapper = mount(Header, {
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
  })

  it("does toggle lang", async () => {
    const wrapper = mount(Header, {
      mocks: {
        $router: {
          push: jest.fn(),
        },
        $config: {
          languageToggleActive: true,
          oneEventVersion: "death-of-a-loved-one",
        },
      },
    })
    expect(wrapper.vm).toBeTruthy()
    const esButton = wrapper.find("#language-toggle-button")
    esButton.trigger("click")
    await wrapper.vm.$nextTick()
    config.mocks.$i18n.locale = "es"
    esButton.trigger("click")
    await wrapper.vm.$nextTick()
  })

  it("does toggle lang full", async () => {
    const wrapper = mount(Header, {
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
    await wrapper.vm.$nextTick()
    config.mocks.$i18n.locale = "es"
    esButton.trigger("click")
    await wrapper.vm.$nextTick()
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
