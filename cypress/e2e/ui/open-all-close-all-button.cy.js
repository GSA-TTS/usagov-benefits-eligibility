/// <reference types="cypress"/>

import { pages } from "../../support/page-objects/pages.js"
import * as SITE_PAGES_DATA from "../../fixtures/site-pages.json"

const sitePages = SITE_PAGES_DATA.sitePages

describe("Validate Open All button functionality", () => {
  sitePages.forEach((sitePage) => {
    it(`Verify Open All button should open all accordion cards in ${sitePage.name}`, () => {
      cy.visit({ url: sitePage.route })
      pages.openAllButton().click()
      pages.accordions().each((accordion) => {
        cy.wrap(accordion).should("have.attr", "aria-expanded", "true")
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
        cy.wrap(accordion).should("have.attr", "aria-expanded", "false")
      })
    })
  })
})
