import { mount } from "@vue/test-utils"
import Card from "@/components/Card.vue"
import beforeAllTests from "@/test/beforeAllTests"

const CARD_TITLE = "Test card title"
const CARD_BODY = "Test card body"
const PRIMARY_BUTTON_TEXT = "Test card primary button text"
const PRIMARY_BUTTON_LINK = "#test-card-primary-button-link"

describe("Card", () => {
  beforeAll(async () => {
    await beforeAllTests()
  })

  test("is a Vue instance", () => {
    const wrapper = mount(Card, {
      propsData: {
        cardTitle: CARD_TITLE,
        cardBody: CARD_BODY,
        primaryButtonText: PRIMARY_BUTTON_TEXT,
        primaryButtonLink: PRIMARY_BUTTON_LINK,
      },
    })
    expect(wrapper.vm).toBeTruthy()
  })
  test("adds secondary buttons if both text and link are provided", () => {
    const wrapper = mount(Card, {
      propsData: {
        cardTitle: CARD_TITLE,
        cardBody: CARD_BODY,
        primaryButtonText: PRIMARY_BUTTON_TEXT,
        primaryButtonLink: PRIMARY_BUTTON_LINK,
        secondaryButtonText: "Test card secondary button text",
        secondaryButtonLink: "#test-card-secondary-button-link",
      },
    })
    expect(wrapper.vm).toBeTruthy()
  })
  test("adds tags if provided", () => {
    const wrapper = mount(Card, {
      propsData: {
        cardTitle: CARD_TITLE,
        cardBody: CARD_BODY,
        primaryButtonText: PRIMARY_BUTTON_TEXT,
        primaryButtonLink: PRIMARY_BUTTON_LINK,
        cardTags: ["test-card-tag-1"],
      },
    })
    expect(wrapper.vm).toBeTruthy()
  })
  test("uses a given heading level for the card title element", () => {
    const wrapper = mount(Card, {
      propsData: {
        cardTitle: CARD_TITLE,
        cardTitleHeadingLevel: "h4",
        cardBody: CARD_BODY,
        primaryButtonText: PRIMARY_BUTTON_TEXT,
        primaryButtonLink: PRIMARY_BUTTON_LINK,
      },
    })
    expect(wrapper.vm).toBeTruthy()
  })
})
