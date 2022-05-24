import { mount } from "@vue/test-utils"
import UsaGovFooter from "@/components/UsaGovFooter.vue"
import beforeAllTests from "@/test/beforeAllTests"

describe("<UsaGovFooter />", () => {
  beforeAll(() => {
    beforeAllTests()
  })

  it("is a Vue instance", () => {
    const wrapper = shallowMount(UsaGovFooter, {
      $i18n: { locale: "en" },
      mocks: {
        window: {
          scrollTo: jest.fn(),
        },
      },
    })
    expect(wrapper.vm).toBeTruthy()
  })

  it("should fetch a disclaimer", async () => {
    const wrapper = mount(UsaGovFooter, {
      $i18n: { locale: "en" },
    })
    const disclaimer = { body: "disclaimer" }

    wrapper.vm.$options.$content = () => ({
      fetch: () => {
        return disclaimer
      },
    })
    await wrapper.vm.$options.fetch()
    expect(wrapper.vm.$options.disclaimer).toBe(disclaimer)
  })
})
