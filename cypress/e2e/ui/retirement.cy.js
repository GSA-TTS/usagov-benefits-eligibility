/// <reference types="cypress"/>

import { pages } from "../../support/page-objects/pages.js"
import * as utils from "../../support/utils.js"
import * as EN_CRITERIA_DATA from "../../../locales/en/criteria.json"
import * as ES_CRITERIA_DATA from "../../../locales/es/criteria.json"
import * as EN_DOD_THRIFT_SAVINGS_PLAN_DATA from "../../../locales/en/benefits/dod-thrift-savings-plan.json"
import * as EN_LIFE_EVENTS_RETIREMENT_DATA from "../../../locales/en/life-events/retirement.json"
import * as ES_DOI_HOUSING_IMPROVEMENT_PROGRAM_DATA from "../../../locales/es/benefits/doi-housing-improvement-program.json"

describe("Tests for Retirement English Page", () => {

  beforeEach(() => {
    cy.visit("/")
    cy.wait(1000)
    pages.otherBenefitsUsaCardGroup().contains(EN_LIFE_EVENTS_RETIREMENT_DATA["retirement.title"]).click()
  })

  it("Validate Thrift Savings Plan (TSP) accordion is rendered correctly based on selected criteria options", () => {
    //60 years ago plus one day - applicant is at least 60 years old
    //1 day = 365.2425 (accounts for leap year)
    const dateOfBirth = utils.getDateByOffset(-(60 * 365.2425 + 1))

    cy.enterApplicantDateOfBirth(dateOfBirth.month, dateOfBirth.day, dateOfBirth.year)

    pages
      .legend()
      .contains(EN_CRITERIA_DATA["criteria.applicant_served_in_active_military.label"])
      .parent()
      .find(".usa-radio__label")
      .contains(EN_DOD_THRIFT_SAVINGS_PLAN_DATA["dod-thrift-savings-plan.eligibility.acceptableValues"])
      .click()

    pages
      .accordionHeadings()
      .contains(EN_DOD_THRIFT_SAVINGS_PLAN_DATA["dod-thrift-savings-plan.title"])
      .parent()
      .should("have.class", "border-success-dark")

    pages.accordionButtons().contains(EN_DOD_THRIFT_SAVINGS_PLAN_DATA["dod-thrift-savings-plan.title"]).click()

    pages
      .thriftSavingsPlanCard()
      .should("contain", EN_DOD_THRIFT_SAVINGS_PLAN_DATA["dod-thrift-savings-plan.source.name"])
      .and("contain", EN_DOD_THRIFT_SAVINGS_PLAN_DATA["dod-thrift-savings-plan.summary"])
      .and("contain", EN_DOD_THRIFT_SAVINGS_PLAN_DATA["dod-thrift-savings-plan.criticalApplicationInformation"])
      .and("contain", EN_DOD_THRIFT_SAVINGS_PLAN_DATA["dod-thrift-savings-plan.eligibility.label"])
      .and("contain", EN_DOD_THRIFT_SAVINGS_PLAN_DATA["dod-thrift-savings-plan.source.link"])

    pages.thriftSavingsPlanIcons().each(($icon) => {
      cy.wrap($icon).parent().should("have.class", "text-success-dark")
    })
  })
})

describe("Tests for Retirement Spanish Page", () => {

  beforeEach(() => {
    cy.visit("/")
    pages.otherBenefitsUsaCardGroup().contains(EN_LIFE_EVENTS_RETIREMENT_DATA["retirement.title"]).click()
    cy.wait(1000)
    pages.languageSwitcher().click()
  })

  it("Validate Programa de mejoramiento de vivienda (HIP) accordion is rendered correctly based on selected criteria options", () => {
    pages
      .legend()
      .contains(ES_CRITERIA_DATA["criteria.applicant_american_indian.label"])
      .parent()
      .find(".usa-radio__label")
      .contains(ES_DOI_HOUSING_IMPROVEMENT_PROGRAM_DATA["doi-housing-improvement-program.eligibility.acceptableValues"])
      .click()

    pages.checkboxLabels().contains(ES_CRITERIA_DATA["criteria.applicant_income.label"]).click()

    pages
      .accordionButtons()
      .contains(ES_DOI_HOUSING_IMPROVEMENT_PROGRAM_DATA["doi-housing-improvement-program.title"])
      .click()

    pages
      .housingImprovementProgramCard()
      .should("contain", ES_DOI_HOUSING_IMPROVEMENT_PROGRAM_DATA["doi-housing-improvement-program.source.name"])
      .and("contain", ES_DOI_HOUSING_IMPROVEMENT_PROGRAM_DATA["doi-housing-improvement-program.summary"])
      .and("contain", ES_DOI_HOUSING_IMPROVEMENT_PROGRAM_DATA["doi-housing-improvement-program.eligibility.label"])
      .and("contain", ES_DOI_HOUSING_IMPROVEMENT_PROGRAM_DATA["doi-housing-improvement-program.source.link"])

      pages.housingImprovementProgramIcons().each(($icon) => {
        cy.wrap($icon).parent().should("have.class", "text-success-dark")
      })
  })
})
