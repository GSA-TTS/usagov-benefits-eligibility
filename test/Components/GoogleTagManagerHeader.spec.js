import { config, shallowMount } from "@vue/test-utils"
import beforeAllTests from "@/test/beforeAllTests"
import GoogleTagManagerHeader from "~/components/gtm/GoogleTagManagerHeader"

describe("GoogleTagManagerHeader", () => {
  beforeAll(async () => {
    await beforeAllTests()
  })

  test("if it has a tag key init tag manager", () => {
    config.mocks.$config = {
      tagManagerKey: "daKey",
    }
    const wrapper = shallowMount(GoogleTagManagerHeader, {})
    expect(wrapper.find("iframe").element.src).toContain("daKey")
  })

  test("if we dont have a key dont use tag manager", () => {
    config.mocks.$config = {
      tagManagerKey: null,
    }
    const wrapper = shallowMount(GoogleTagManagerHeader, {})
    expect(wrapper.find("iframe").element).toBeUndefined()
  })
})
