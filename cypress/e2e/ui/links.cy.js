/// <reference types="cypress"/>

const sitePages = require("../../fixtures/site-pages.json")

describe("Verify status code 200 when user navigates links", () => {
  sitePages.forEach((sitePage) => {
    it(`Verify success 200 response for links in ${sitePage.name} `, () => {
      cy.visit({ url: sitePage.route })
      cy.get("a[href]").each((link) => {
        cy.request({
          url: link.prop("href"),
          failOnStatusCode: false,
        }).then((response) => {
          expect(response.status).to.eq(200)
        })
      })
    })
  })
})
