/// <reference types="cypress"/>

import * as SITE_PAGES_DATA from "../../fixtures/site-pages.json"

const sitePages = SITE_PAGES_DATA.sitePages

const excludedlinks = [ "https://www.instagram.com/usagov/"]


describe("Verify correct status code when user navigates links", { browser: 'chrome' }, () => {
  sitePages.forEach((sitePage) => {
    it(`Verify success status code response for links in ${sitePage.name} `, () => {
      cy.visit({ url: sitePage.route })
      cy.get("a[href]").each((link) => {
        if (excludedlinks.indexOf(link.prop('href')) == -1) {
          cy.request(link.prop("href"))
        }
       
      })
    })
  })
})
