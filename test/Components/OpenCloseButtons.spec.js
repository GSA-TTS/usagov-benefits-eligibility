import { shallowMount } from "@vue/test-utils"
import OpenCloseButtons from "@/components/OpenCloseButtons.vue"
import beforeAllTests from "@/test/beforeAllTests"

const USA_BTN_STYLE = "usa-button--outline"

describe("<OpenCloseButtons/>", () => {
  let actions

  beforeAll(async () => {
    await beforeAllTests()
  })

  beforeEach(() => {
    actions = {
      openAll: jest.fn(),
      closeAll: jest.fn(),
    }
  })

  test("is a Vue instance", () => {
    const wrapper = shallowMount(OpenCloseButtons, {
      propsData: {
        isOpenActiveProp: true,
      },
    })
    expect(wrapper.vm).toBeTruthy()
  })

  test("displays with no props", () => {
    const wrapper = shallowMount(OpenCloseButtons)
    expect(wrapper.vm).toBeTruthy()
  })

  test("styles closeAll  button", async () => {
    const wrapper = shallowMount(OpenCloseButtons, {
      propsData: {
        isOpenActiveProp: true,
      },
      actions,
    })
    const button = wrapper.find(".close-all")
    expect(button.classes()).toContain(USA_BTN_STYLE)
    await button.trigger("click")
    expect(wrapper.emitted("close-all")).toBeTruthy()
    expect(button.classes()).not.toContain(USA_BTN_STYLE)
  })

  test("styles openAll button", async () => {
    const wrapper = shallowMount(OpenCloseButtons, {
      propsData: {
        isCloseActiveProp: true,
      },
      actions,
    })
    const button = wrapper.find(".open-all")
    expect(button.classes()).toContain(USA_BTN_STYLE)
    await button.trigger("click")
    expect(wrapper.emitted("open-all")).toBeTruthy()
    expect(button.classes()).not.toContain(USA_BTN_STYLE)
  })

  test("click twice Close", async () => {
    const wrapper = shallowMount(OpenCloseButtons, {
      propsData: {
        isOpenActiveProp: true,
      },
      actions,
    })
    const button = wrapper.find(".close-all")

    await button.trigger("click")
    expect(wrapper.emitted("close-all")).toBeTruthy()
    await button.trigger("click")
    expect(wrapper.emitted("close-all")).toBeTruthy()
  })

  test("click twice Open", async () => {
    const wrapper = shallowMount(OpenCloseButtons, {
      propsData: {
        isCloseActiveProp: true,
      },
      actions,
    })
    const button = wrapper.find(".open-all")
    expect(button.classes()).toContain(USA_BTN_STYLE)
    await button.trigger("click")
    expect(wrapper.emitted("open-all")).toBeTruthy()
    await button.trigger("click")
    expect(wrapper.emitted("open-all")).toBeTruthy()
  })
})
