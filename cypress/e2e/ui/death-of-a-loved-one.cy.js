/// <reference types="cypress"/>

import { pages } from "../../support/page-objects/pages.js"
import * as utils from "../../support/utils.js"
import * as EN_CRITERIA_DATA from "../../../locales/en/criteria.json"
import * as ES_CRITERIA_DATA from "../../../locales/es/criteria.json"
import * as EN_SURVIVOR_BENEFITS_CHILD_DATA from "../../../locales/en/benefits/ssa-survivor-benefits-child.json"
import * as ES_SURVIVOR_BENEFITS_PARENTS_DATA from "../../../locales/es/benefits/ssa-survivor-benefits-parents.json"
import * as EN_BENEFITS_COVID_19_DATA from "../../../locales/en/benefits/fema-covid-19-funeral-assistance.json"

describe("Tests for Death of a loved one English Page", () => {
  beforeEach(() => {
    cy.visit("/")
    cy.wait(1000)
  })

  it("Validate benefits are sorted by Relevance by default", () => {
    pages.checkboxLabels().contains(EN_CRITERIA_DATA["criteria.deceased_died_of_COVID.label"]).click()

    const benefitsList = []

    pages
      .accordionButtons()
      .each(($el) => {
        benefitsList.push($el.text().trim())
      })
      .then(() => {
        expect(benefitsList[0]).to.include(EN_BENEFITS_COVID_19_DATA["fema-covid-19-funeral-assistance.title"])
      })
  })

  it("Validate benefits are sorted alphabetically when using benefit sorted by Title A-Z", () => {
    pages.benefitSortDropDown().select("Title (A-Z)")
    pages.checkboxLabels().contains(EN_CRITERIA_DATA["criteria.deceased_died_of_COVID.label"]).click()

    const benefitsList = []
    const benefitsListSorted = []

    pages
      .accordionButtons()
      .each(($el) => {
        benefitsList.push($el.text().trim())
        benefitsListSorted.push($el.text().trim())
      })
      .then(() => {
        expect(benefitsList).to.deep.equal(benefitsListSorted.sort())
      })
  })

  it("Validate benefits are sorted by Relevance when user changes sort by Title A-Z to sort by Relevance", () => {
    pages.benefitSortDropDown().select("Title (A-Z)")
    pages.checkboxLabels().contains(EN_CRITERIA_DATA["criteria.deceased_died_of_COVID.label"]).click()
    pages.benefitSortDropDown().select("Relevance")
    cy.wait(1200)

    const benefitsList = []

    pages
      .accordionButtons()
      .each(($el) => {
        benefitsList.push($el.text().trim())
      })
      .then(() => {
        expect(benefitsList[0]).to.include(EN_BENEFITS_COVID_19_DATA["fema-covid-19-funeral-assistance.title"])
      })
  })

  it("Select a criteria and stub printing when user clicks Print My Selections", () => {
    pages.checkboxLabels().contains(EN_CRITERIA_DATA["criteria.deceased_death_location_is_US.label"]).click()
    cy.window().then((win) => {
      cy.stub(win, "print").as("print")
    })
    pages.buttons().contains("Print my selections").click()
    cy.get("@print").should("be.calledOnce")
  })

  it("Validate Survivor Benefits for Child accordion is rendered correctly based on selected criteria options", () => {
    //18 years ago minus one day - applicant under 18 years old
    //1 day = 365.2425 (accounts for leap year)
    const dateOfBirth = utils.getDateByOffset(-(18 * 365.2425 - 1))

    cy.enterApplicantDateOfBirth(dateOfBirth.month, dateOfBirth.day, dateOfBirth.year)
    pages.applicantRelationshipDropdown().select(EN_CRITERIA_DATA["criteria.applicant_relationship.values2"])
    pages.checkboxLabels().contains(EN_CRITERIA_DATA["criteria.deceased_paid_into_SS.label"]).click()
    pages
      .applicantMaritalStatus()
      .select(EN_SURVIVOR_BENEFITS_CHILD_DATA["ssa-survivor-benefits-child.eligibility.acceptableValues1"])
    pages.checkboxLabels().contains(EN_CRITERIA_DATA["criteria.applicant_citizen_status.label"]).click()

    pages
      .accordionHeadings()
      .contains(EN_SURVIVOR_BENEFITS_CHILD_DATA["ssa-survivor-benefits-child.title"])
      .click()
      .parent()
      .should("have.class", "border-success-dark")

    pages.accordionButtons().contains(EN_SURVIVOR_BENEFITS_CHILD_DATA["ssa-survivor-benefits-child.title"]).click()
    pages
      .survivorBenefitsChildCard()
      .should("contain", EN_SURVIVOR_BENEFITS_CHILD_DATA["ssa-survivor-benefits-child.source.name"])
      .and("contain", EN_SURVIVOR_BENEFITS_CHILD_DATA["ssa-survivor-benefits-child.summary"])
      .and("contain", EN_SURVIVOR_BENEFITS_CHILD_DATA["ssa-survivor-benefits-child.criticalApplicationInformation"])
      .and("contain", EN_SURVIVOR_BENEFITS_CHILD_DATA["ssa-survivor-benefits-child.eligibility.acceptableValues"])
      .and("contain", EN_SURVIVOR_BENEFITS_CHILD_DATA["ssa-survivor-benefits-child.eligibility.label"])
      .and("contain", EN_SURVIVOR_BENEFITS_CHILD_DATA["ssa-survivor-benefits-child.eligibility.acceptableValues1"])

    pages.survivorBenefitsChildIcons().each(($icon) => {
      cy.wrap($icon).parent().should("have.class", "text-success-dark")
    })
  })
})

describe("Tests for Death of a loved one Spanish Page", () => {
  beforeEach(() => {
    cy.visit("/")
    pages.languageSwitcher().click()
    cy.wait(1000)
  })

  it("Validate Beneficios para padre/madre sobreviviente accordion is rendered correctly based on selected criteria options", () => {
     //62 years ago plus one day - applicant is at least 62 years old
    //1 day = 365.2425 (accounts for leap year)
    const dateOfBirth = utils.getDateByOffset(-(62 * 365.2425 + 1))

    cy.enterApplicantDateOfBirth(dateOfBirth.month, dateOfBirth.day, dateOfBirth.year)
    pages.applicantRelationshipDropdown().select(ES_SURVIVOR_BENEFITS_PARENTS_DATA["ssa-survivor-benefits-parents.eligibility.acceptableValues"])
    pages.checkboxLabels().contains(ES_CRITERIA_DATA["criteria.deceased_paid_into_SS.label"]).click()
    pages.checkboxLabels().contains("Usted es ciudadano de").click()
    pages.accordionButtons().contains(ES_SURVIVOR_BENEFITS_PARENTS_DATA["ssa-survivor-benefits-parents.title"]).click()
    
    pages
      .survivorBenefitsParentCard()
      .should("contain", ES_SURVIVOR_BENEFITS_PARENTS_DATA["ssa-survivor-benefits-parents.source.name"])
      .and("contain", ES_SURVIVOR_BENEFITS_PARENTS_DATA["ssa-survivor-benefits-parents.summary"])
      .and("contain", ES_SURVIVOR_BENEFITS_PARENTS_DATA["ssa-survivor-benefits-parents.criticalApplicationInformation"])
      .and("contain", ES_SURVIVOR_BENEFITS_PARENTS_DATA["ssa-survivor-benefits-parents.eligibility.acceptableValues"])
      .and("contain", ES_SURVIVOR_BENEFITS_PARENTS_DATA["ssa-survivor-benefits-parents.eligibility.label"])

      pages.survivorBenefitsParentIcons().each(($icon) => {
        cy.wrap($icon).parent().should("have.class", "text-success-dark")
      })
  })
})
