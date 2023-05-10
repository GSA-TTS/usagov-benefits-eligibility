/// <reference types="Cypress" />

class Header {
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
        return cy.get('#gov-banner')
    }

    languageSwitcher() {
        return cy.get(".usa-button.language-link")
    }
    
    mainNavigation() {
        return cy.get(".usa-accordion.usa-nav__primary li")
    }
}

export const header = new Header