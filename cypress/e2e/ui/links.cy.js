/// <reference types="cypress"/>

const sitePages = require("../../fixtures/site-pages.json")

describe("Verify correct status code when user navigates links", () => {
  sitePages.forEach((sitePage) => {
    it(`Verify success status code response for links in ${sitePage.name} `, () => {
      cy.visit({ url: sitePage.route })
      cy.get("a[href]").each((link) => {
        cy.request(link.prop("href"))
      })
    })
  })
})
