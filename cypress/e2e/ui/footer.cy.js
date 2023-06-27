/// <reference types="Cypress" />

import { pages } from "../../support/page-objects/pages.js"
import * as ES_DATA from "../../../locales/es/es.json"
import * as EN_DATA from "../../../locales/en/en.json"
import * as SITE_PAGES_DATA from "../../fixtures/site-pages.json"

const betaFooterContentES = ES_DATA.beta.footer
const betaFooterContentEN = EN_DATA.beta.footer
const footerContentES = ES_DATA.footer
const footerContentEN = EN_DATA.footer
const sitePages = SITE_PAGES_DATA.sitePages

describe("Footer Tests", () => {
  sitePages.forEach((sitePage) => {
    it(`Validate footer content mapping in ${sitePage.name}`, () => {
      cy.visit({ url: sitePage.route })
      if (sitePage.route.includes("/es/")) {
        pages
          .primaryFooterHeading()
          .should("contain", betaFooterContentES.column1Title)
          .and("contain", betaFooterContentES.column2Title)
          .and("contain", betaFooterContentES.column3Title)
          .and("contain", betaFooterContentES.column4Title)

        pages
          .primaryFooterLinks()
          .should("contain", betaFooterContentES.column1[0].linkText)
          .and("contain", betaFooterContentES.column1[1].linkText)
          .and("contain", betaFooterContentES.column1[2].linkText)
          .and("contain", betaFooterContentES.column2[0].linkText)
          .and("contain", betaFooterContentES.column2[1].linkText)
          .and("contain", betaFooterContentES.column2[2].linkText)
          .and("contain", betaFooterContentES.column2[3].linkText)
          .and("contain", betaFooterContentES.column3[0].linkText)
          .and("contain", betaFooterContentES.column3[1].linkText)
          .and("contain", betaFooterContentES.column4[0].linkText)
          .and("contain", betaFooterContentES.column4[1].linkText)

        pages.footerSignUpHeading().should("contain", footerContentES.GroupThree.header)
        pages.footerSignUpEmailInputField().should("exist")
        pages.footerSignUpButton().should("exist")

        pages.secondaryFooterHeader().should("contain", footerContentES.GroupTwo.header)
        pages.secondaryFooterSubHeader().should("contain", footerContentES.GroupTwo.subHeader)
        pages.secondaryFooterContact().should("contain", footerContentES.GroupTwo.linkOne)

        pages
          .secondaryFooterSocialMedia()
          .should("contain", betaFooterContentES.social.icons[0].name)
          .and("contain", betaFooterContentES.social.icons[1].name)
          .and("contain", betaFooterContentES.social.icons[2].name)
      } else {
        pages
          .primaryFooterHeading()
          .should("contain", betaFooterContentEN.column1Title)
          .and("contain", betaFooterContentEN.column2Title)
          .and("contain", betaFooterContentEN.column3Title)
          .and("contain", betaFooterContentEN.column4Title)

        pages
          .primaryFooterLinks()
          .should("contain", betaFooterContentEN.column1[0].linkText)
          .and("contain", betaFooterContentEN.column1[1].linkText)
          .and("contain", betaFooterContentEN.column1[2].linkText)
          .and("contain", betaFooterContentEN.column2[0].linkText)
          .and("contain", betaFooterContentEN.column2[1].linkText)
          .and("contain", betaFooterContentEN.column2[2].linkText)
          .and("contain", betaFooterContentEN.column2[3].linkText)
          .and("contain", betaFooterContentEN.column2[4].linkText)
          .and("contain", betaFooterContentEN.column3[0].linkText)
          .and("contain", betaFooterContentEN.column3[1].linkText)
          .and("contain", betaFooterContentEN.column4[0].linkText)
          .and("contain", betaFooterContentEN.column4[1].linkText)

        pages.footerSignUpHeading().should("contain", footerContentEN.GroupThree.header)
        pages.footerSignUpEmailInputField().should("exist")
        pages.footerSignUpButton().should("exist")

        pages.secondaryFooterHeader().should("contain", footerContentEN.GroupTwo.header)
        pages.secondaryFooterSubHeader().should("contain", footerContentEN.GroupTwo.subHeader)
        pages.secondaryFooterContact().should("contain", footerContentEN.GroupTwo.linkOne)

        pages
          .secondaryFooterSocialMedia()
          .should("contain", betaFooterContentEN.social.icons[0].name)
          .and("contain", betaFooterContentEN.social.icons[1].name)
          .and("contain", betaFooterContentEN.social.icons[2].name)
          .and("contain", betaFooterContentEN.social.icons[3].name)
      }
    })
  })
})
