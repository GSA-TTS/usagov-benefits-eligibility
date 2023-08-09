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
  benefitSortDropDown() {
    return cy.get("select#benefitSort")
  }
  primaryFooter() {
    return cy.get(".usa-footer__primary-section")
  }
  primaryFooterHeading() {
    return cy.get(".usa-footer__primary-section h3")
  }
  primaryFooterLinks() {
    return cy.get(".usa-footer__primary-section .usa-footer__secondary-link")
  }
  footerSignUpHeading() {
    return cy.get(".usa-footer__primary-section .usa-sign-up__heading")
  }
  footerSignUpEmailInputField() {
    return cy.get("input#signup-email")
  }
  footerSignUpButton() {
    return cy.get(".usa-sign-up .usa-button")
  }
  secondaryFooterHeader() {
    return cy.get(".usa-footer__logo-heading")
  }
  secondaryFooterSubHeader() {
    return cy.get("#bottom-phone p")
  }
  secondaryFooterContact() {
    return cy.get(".usa-footer__secondary-section")
  }
  secondaryFooterSocialMedia() {
    return cy.get(".usa-footer__social-links .usa-social-link")
  }
  buttons() {
    return cy.get(".usa-button")
  }
  survivorBenefitsChildCard() {
    return cy.get("#acc-content-ssa-survivor-benefits-child")
  }
  survivorBenefitsChildIcons() {
    return cy.get("#acc-content-ssa-survivor-benefits-child .print\\:display-none .usa-icon")
  }
  survivorBenefitsParentCard() {
    return cy.get("#acc-content-ssa-survivor-benefits-parents")
  }
  survivorBenefitsParentIcons() {
    return cy.get("#acc-content-ssa-survivor-benefits-parents .print\\:display-none .usa-icon")
  }
  medicareSavingsProgramsCard() {
    return cy.get("#acc-content-cms-medicare-savings-programs")
  }
  retirementAndDisabilityPaymentsCard() {
    return cy.get("#acc-content-dod-retirement-and-disability-payments")
  }
  retirementAndDisabilityPaymentsIcons() {
    return cy.get("#acc-content-dod-retirement-and-disability-payments .print\\:display-none .usa-icon")
  }
  thriftSavingsPlanCard() {
    return cy.get("#acc-content-dod-thrift-savings-plan")
  }
  thriftSavingsPlanIcons() {
    return cy.get("#acc-content-dod-thrift-savings-plan .print\\:display-none .usa-icon")
  }
  housingImprovementProgramCard() {
    return cy.get("#acc-content-doi-housing-improvement-program")
  }
  housingImprovementProgramIcons() {
    return cy.get("#acc-content-doi-housing-improvement-program .print\\:display-none .usa-icon")
  }
  disabilityInsuranceChildDisabledIcons() {
    return cy.get("#acc-content-ssa-disability-insurance-child-disabled  .print\\:display-none .usa-icon")
  }
}

export const pages = new Pages()
