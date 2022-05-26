import { config, mount, shallowMount } from "@vue/test-utils"
import UsaGovHeader from "@/components/UsaGovHeader.vue"
import beforeAllTests from "@/test/beforeAllTests"

describe("<UsaGovHeader />", () => {
  beforeAll(() => {
    beforeAllTests()
  })

  it("is a Vue instance", () => {
    const wrapper = mount(UsaGovHeader, {
      $i18n: { locale: "en" },
    })
    expect(wrapper.vm).toBeTruthy()
  })

  it("does toggle lang", () => {
    const wrapper = mount(UsaGovHeader, {
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
    config.mocks.$i18n.locale = "es"
    esButton.trigger("click")
  })

  it("does toggle lang full", () => {
    const wrapper = mount(UsaGovHeader, {
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
    config.mocks.$i18n.locale = "es"
    esButton.trigger("click")
  })
})

describe("sanitizedBenefitUrl tests", () => {
  it("text example.com", () => {
    const wrapper = shallowMount(UsaGovHeader, {})
    const url = wrapper.vm.sanitizedHeadingUrl("http://www.example.com")
    expect(url).toBe("http://www.example.com")
  })
  it("sanitizedBenefitUrl about:blank if javascript is injected", () => {
    const wrapper = shallowMount(UsaGovHeader, {})
    const url = wrapper.vm.sanitizedHeadingUrl({
      source: {
        link: "javascript:somethingBad('dd')",
      },
    })
    expect(url).toBe("#")
  })
})
