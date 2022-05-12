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
      $i18n: { locale: "en" },
      mocks: {
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
})
