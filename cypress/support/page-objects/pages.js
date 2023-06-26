/// <reference types="Cypress" />

class Pages {
  usaBanner() {
    return cy.get(".usa-banner__inner")
  }
  usaBannerFlag() {
    return cy.get("img[alt='U.S. flag']")
  }
  usaBannerAccordion() {
    return cy.get(".usa-banner__inner .usa-accordion__button")
  }
  usaBannerExpandedAccordion() {
    return cy.get("#gov-banner")
  }
  languageSwitcher() {
    return cy.get(".usa-button.language-link")
  }
  mainNavigation() {
    return cy.get(".usa-accordion.usa-nav__primary li")
  }
  openAllButton() {
    return cy.get(".flex-row .open-all")
  }
  closeAllButton() {
    return cy.get(".flex-row .close-all")
  }
  accordions() {
    return cy.get(".usa-accordion__heading .usa-accordion__button")
  }
  checkboxLabels() {
    return cy.get(".usa-checkbox__label")
  }
  otherBenefitsUsaCardGroup() {
    return cy.get(".usa-card-group li")
  }

}

export const pages = new Pages()
