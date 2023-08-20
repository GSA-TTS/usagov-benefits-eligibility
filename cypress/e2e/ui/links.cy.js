/// <reference types="cypress"/>

import * as SITE_PAGES_DATA from "../../fixtures/site-pages.json"

const sitePages = SITE_PAGES_DATA.sitePages

describe("Verify correct status code when user navigates links", { browser: '!webkit' }, () => {
  sitePages.forEach((sitePage) => {
    it(`Verify success status code response for links in ${sitePage.name} `, () => {
      cy.visit({ url: sitePage.route })
      cy.get("a[href]").each((link) => {
        cy.request(link.prop("href"))
      })
    })
  })
})
