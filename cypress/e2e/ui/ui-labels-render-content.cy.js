/// <reference types="cypress"/>

import { pages } from "../../support/page-objects/pages.js"
import * as SITE_PAGES_DATA from "../../fixtures/site-pages.json"

const sitePages = SITE_PAGES_DATA.sitePages

describe("Verify UI is rendering content correctly", () => {
  sitePages.forEach((sitePage) => {
    it(`Verify ${sitePage.name} is rendering content correctly instead of dot notation value on checkbox labels`, () => {
      cy.visit({ url: sitePage.route })
      pages.checkboxLabels().each((checkboxLabel) => {
        cy.wrap(checkboxLabel).invoke("prop", "innerText").should("not.contain", "criteria.")
        cy.wrap(checkboxLabel).invoke("prop", "innerText").should("not.contain", ".label")
      })
    })
  })
})

