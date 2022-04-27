import { config, shallowMount } from "@vue/test-utils"
import beforeAllTests from "@/test/beforeAllTests"
import GoogleTagManagerFooter from "~/components/gtm/GoogleTagManagerFooter"

describe("GoogleTagManagerFooter", () => {
  const mockMethod = jest.spyOn(GoogleTagManagerFooter.methods, "initTagManager").mockImplementation(() => {})

  beforeAll(async () => {
    await beforeAllTests()
    jest.clearAllMocks()
    mockMethod.mockClear()
  })

  afterEach(async () => {
    mockMethod.mockClear()
  })

  test("if it has a tag key init tag manager", () => {
    config.mocks.$config = {
      tagManagerKey: "bla bla",
    }
    shallowMount(GoogleTagManagerFooter, {})
    expect(mockMethod).toHaveBeenCalled()
  })

  test("if we dont have a key dont use tag manager", () => {
    config.mocks.$config = {
      tagManagerKey: null,
    }
    shallowMount(GoogleTagManagerFooter, {})
    expect(mockMethod).toHaveBeenCalledTimes(0)
  })
})
