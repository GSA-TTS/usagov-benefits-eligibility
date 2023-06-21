/// <reference types="Cypress" />

class Footer {
    primaryFooter() {
        return cy.get(".usa-footer__primary-section")
    }
    primaryFooterHeading() {
        return cy.get(".usa-footer__primary-section h3")
    }
    primaryFooterLinks() {
        return cy.get(".usa-footer__primary-section .usa-footer__secondary-link")
    }
    signUpHeading() {
        return cy.get(".usa-footer__primary-section .usa-sign-up__heading")
    }
    signUpEmailInputField() {
        return cy.get("input#signup-email")
    }
    signUpButton() {
        return cy.get(".usa-sign-up .usa-button")
    }
    secondaryFooter() {
        return cy.get(".usa-footer__secondary-section")
    }
    secondaryFooterSocialMedia() {
        return cy.get(".usa-footer__social-links .usa-social-link")
    }



}

export const footer = new Footer