import { mount, shallowMount } from "@vue/test-utils"
import Footer from "@/components/Footer.vue"
import beforeAllTests from "@/test/beforeAllTests"

describe("Footer", () => {
  beforeAll(async () => {
    await beforeAllTests()
  })

  it("is a Vue instance", () => {
    const wrapper = shallowMount(Footer, {
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
    const wrapper = mount(Footer, {
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

  it("test scrolltoTop function", () => {
    const wrapper = shallowMount(Footer, {})
    const scrollTopEl = wrapper.find("a", { id: "return-to-top" })
    scrollTopEl.trigger("click")
    expect(wrapper.vm.scrollToTop).toBeTruthy()
  })
})

describe("sanitizedBenefitUrl tests", () => {
  it("text example.com", () => {
    const wrapper = shallowMount(Footer, {})
    const url = wrapper.vm.sanitizedBearsUrl("http://www.example.com")
    expect(url).toBe("http://www.example.com")
  })
  it("sanitizedBenefitUrl about:blank if javascript is injected", () => {
    const wrapper = shallowMount(Footer, {})
    const url = wrapper.vm.sanitizedBearsUrl({
      source: {
        link: "javascript:somethingBad('dd')",
      },
    })
    expect(url).toBe("#")
  })
})
