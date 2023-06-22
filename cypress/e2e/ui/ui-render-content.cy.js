/// <reference types="cypress"/>

import { pages } from "../../support/page-objects/pages.js"
const sitePages = require("../../fixtures/site-pages.json")

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
