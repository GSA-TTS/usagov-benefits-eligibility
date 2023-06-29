/// <reference types="cypress"/>

import { pages } from "../../support/page-objects/pages.js"
import * as EN_CRITERIA from "../../../locales/en/criteria.json"

describe("Select criteria and print selections", () => {
  before(() => {
    cy.visit("/")
  })

  it("Select a criteria and stub printing when user clicks Print My Selections", () => {
    pages.checkboxLabels().contains(EN_CRITERIA["criteria.deceased_death_location_is_US.label"]).click()
    cy.window().then((win) => {
      cy.stub(win, "print").as("print")
    })
    pages.buttons().contains("Print my selections").click()
    cy.get("@print").should("be.calledOnce")
  })
})
