/// <reference types="cypress"/>

import { pages } from "../../support/page-objects/pages.js"
const sitePages = require("../../fixtures/site-pages.json")

describe("Validate Open All button functionality", () => {
  sitePages.forEach((sitePage) => {
    it(`Verify Open All button should open all accordion cards in ${sitePage.name}`, () => {
      cy.visit({ url: sitePage.route })
      pages.openAllButton().click()
      pages.accordions().each((accordion) => {
        cy.wrap(accordion).invoke("prop", "ariaExpanded").should("eq", "true")
      })
    })
  })
})

describe("Validate Close All button functionality", () => {
  sitePages.forEach((sitePage) => {
    it(`Verify Close All button should close all accordion cards in ${sitePage.name}`, () => {
      cy.visit({ url: sitePage.route })
      pages.openAllButton().click()
      pages.closeAllButton().click()
      pages.accordions().each((accordion) => {
        cy.wrap(accordion).invoke("prop", "ariaExpanded").should("eq", "false")
      })
    })
  })
})
