/// <reference types="cypress"/>

const sitePages = require("../../fixtures/site-pages.json")

describe("Verify UI is rendering content correctly", () => {
  sitePages.forEach((sitePage) => {
    it(`Verify ${sitePage.name} is rendering content correctly instead of dot notation value on checkbox labels`, () => {
      cy.visit({ url: sitePage.route, })
      cy.get(".usa-checkbox__label").each((checkboxLabels) => {
        cy.wrap(checkboxLabels).invoke("prop", "innerText").should("not.contain", "criteria.")
        cy.wrap(checkboxLabels).invoke("prop", "innerText").should("not.contain", ".label")
      })
    })
  })
})
