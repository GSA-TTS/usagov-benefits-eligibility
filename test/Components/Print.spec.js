import { mount } from "@vue/test-utils"
import Print from "@/components/Print.vue"
import beforeAllTests from "@/test/beforeAllTests"

describe("Print", () => {
  beforeAll(async () => {
    await beforeAllTests()
  })

  it("should be a Vue instance", () => {
    const wrapper = mount(Print, {
      propsData: {
        showSelections: false,
      },
    })
    expect(wrapper.vm).toBeTruthy()
  })

  it("should print", () => {
    const print = window.print
    jest.spyOn(window, "print").mockReturnValue(null)
    const wrapper = mount(Print, {
      propsData: {
        showSelections: false,
      },
    })
    wrapper.find("button").trigger("click")
    expect(window.print).toHaveBeenCalled()
    window.print = print
  })
})
