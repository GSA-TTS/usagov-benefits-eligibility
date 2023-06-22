/// <reference types="Cypress" />

import { pages } from "../../support/page-objects/pages.js"

describe("Header Tests", () => {
  before(() => {
    cy.visit("/")
  })

  it("Validate USA banner header text", () => {
    pages.usaBanner().should("contain", "An official website of the United States government")
  })

  it("Validate USA banner flag", () => {
    pages.usaBannerFlag().should("be.visible")
  })

  it("Validate expanded banner accordion", () => {
    pages.usaBannerAccordion().click()
    pages
      .usaBannerExpandedAccordion()
      .should("contain", "Official websites use .gov")
      .and("contain", "website belongs to an official government organization in the United States")
      .and("contain", "Secure .gov websites use HTTPS")
  })

  it("Validate main navigation link text", () => {
    pages
      .mainNavigation()
      .should("contain", "All topics and services")
      .and("contain", "About the U.S. and its government")
      .and("contain", "Government benefits")
      .and("contain", "Housing help")
      .and("contain", "Scams and fraud")
      .and("contain", "Taxes")
      .and("contain", "Travel")
  })

  it("Validate language switcher", () => {
    pages.languageSwitcher().click()
    pages.usaBanner().should("contain", "Un sitio oficial del Gobierno de Estados Unidos")
    pages.languageSwitcher().should("contain", "English")
  })
})
