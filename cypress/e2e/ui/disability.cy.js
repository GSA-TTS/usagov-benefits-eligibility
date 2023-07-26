/// <reference types="cypress"/>

import { pages } from "../../support/page-objects/pages.js"
import * as utils from "../../support/utils.js"
import * as EN_LIFE_EVENTS_DISABILITY_DATA from "../../../locales/en/life-events/disability.json"
import * as EN_CRITERIA_DATA from "../../../locales/en/criteria.json"
import * as ES_CRITERIA_DATA from "../../../locales/es/criteria.json"
import * as EN_SSA_DISABILITY_INSURANCE_CHILD_DISABLED_DATA from "../../../locales/en/benefits/ssa-disability-insurance-child-disabled.json"
import * as ES_DOD_RETIREMENT_AND_DISABILITY_PAYMENTS_DATA from "../../../locales/es/benefits/dod-retirement-and-disability-payments.json"
import * as EN_CMS_MEDICARE_SAVINGS_PROGRAMS_DATA from "../../../locales/en/benefits/cms-medicare-savings-programs.json"


describe("Tests for Disability English Page", () => {

  beforeEach(() => {
    cy.visit("/")
    cy.wait(1000)
    pages.otherBenefitsUsaCardGroup().contains(EN_LIFE_EVENTS_DISABILITY_DATA["disability.title"]).click()
  })

  it("Validate Social Security Disability Insurance for Child with Disabilities accordion is rendered correctly based on selected criteria options", () => {
    //18 years ago plus one day - applicant at least 18 years old
    //1 day = 365.2425 (accounts for leap year)
    const dateOfBirth = utils.getDateByOffset(-(18 * 365.2425 + 1))

    cy.enterApplicantDateOfBirth(dateOfBirth.month, dateOfBirth.day, dateOfBirth.year)
    pages.checkboxLabels().contains(EN_CRITERIA_DATA["criteria.applicant_disability.label"]).click()
    pages.checkboxLabels().contains(EN_CRITERIA_DATA["criteria.applicant_ability_to_work.label"]).click()
    pages.checkboxLabels().contains(EN_CRITERIA_DATA["criteria.applicant_child_spouse_SS.label"]).click()
    pages.checkboxLabels().contains(EN_CRITERIA_DATA["criteria.applicant_citizen_status.label"]).click()
    pages.applicantMaritalStatus().select(
      EN_SSA_DISABILITY_INSURANCE_CHILD_DISABLED_DATA[
        "ssa-disability-insurance-child-disabled.eligibility.acceptableValues"
      ]
    )

    pages
      .accordionHeadings()
      .contains(EN_SSA_DISABILITY_INSURANCE_CHILD_DISABLED_DATA["ssa-disability-insurance-child-disabled.title"])
      .click()
      .parent()
      .should("have.class", "border-success-dark")

    pages
      .disabilityInsuranceChildDisabled()
      .should(
        "contain",
        EN_SSA_DISABILITY_INSURANCE_CHILD_DISABLED_DATA["ssa-disability-insurance-child-disabled.source.name"]
      )
      .and(
        "contain",
        EN_SSA_DISABILITY_INSURANCE_CHILD_DISABLED_DATA["ssa-disability-insurance-child-disabled.summary"]
      )
      .and(
        "contain",
        EN_SSA_DISABILITY_INSURANCE_CHILD_DISABLED_DATA[
          "ssa-disability-insurance-child-disabled.criticalApplicationInformation"
        ]
      )
      .and(
        "contain",
        EN_SSA_DISABILITY_INSURANCE_CHILD_DISABLED_DATA["ssa-disability-insurance-child-disabled.eligibility.label"]
      )
      .and(
        "contain",
        EN_SSA_DISABILITY_INSURANCE_CHILD_DISABLED_DATA[
          "ssa-disability-insurance-child-disabled.eligibility.acceptableValues"
        ]
      )
      .and(
        "contain",
        EN_SSA_DISABILITY_INSURANCE_CHILD_DISABLED_DATA["ssa-disability-insurance-child-disabled.source.link"]
      )
      .and("contain", EN_CRITERIA_DATA["criteria.applicant_disability.label"])
      .and("contain", EN_CRITERIA_DATA["criteria.applicant_ability_to_work.label"])
      .and("contain", EN_CRITERIA_DATA["criteria.applicant_child_spouse_SS.label"])
      .and("contain", EN_CRITERIA_DATA["criteria.applicant_citizen_status.label"])

    pages.disabilityInsuranceChildDisabledEligibilityIcons().each(($icon) => {
      cy.wrap($icon).parent().should("have.class", "text-success-dark")
    })
  })

  it("Validate content on Medicare Savings Programs (MSP) accordion is displaying correctly", () => {
    pages.otherBenefitsUsaCardGroup().contains(EN_LIFE_EVENTS_DISABILITY_DATA["disability.title"]).click()
    pages.accordionButtons().contains(EN_CMS_MEDICARE_SAVINGS_PROGRAMS_DATA["cms-medicare-savings-programs.title"]).click()
    pages
      .medicareSavingsProgramsCard()
      .should("contain", EN_CMS_MEDICARE_SAVINGS_PROGRAMS_DATA["cms-medicare-savings-programs.source.name"])
      .and("contain", EN_CMS_MEDICARE_SAVINGS_PROGRAMS_DATA["cms-medicare-savings-programs.summary"])
      .and("contain", EN_CMS_MEDICARE_SAVINGS_PROGRAMS_DATA["cms-medicare-savings-programs.criticalApplicationInformation"])
      .and("contain", EN_CMS_MEDICARE_SAVINGS_PROGRAMS_DATA["cms-medicare-savings-programs.eligibility.label"])
      .and("contain", EN_CMS_MEDICARE_SAVINGS_PROGRAMS_DATA["cms-medicare-savings-programs.source.link"])
  })
})

describe("Tests for Disability Spanish Page", () => {
  beforeEach(() => {
    cy.visit("/")
    pages.otherBenefitsUsaCardGroup().contains(EN_LIFE_EVENTS_DISABILITY_DATA["disability.title"]).click()
    cy.wait(1000)
    pages.languageSwitcher().click()
  })

  it("Validate Pagos Concurrentes de Jubilación y de Discapacidad (CRDP) accordion is rendered correctly based on selected criteria options", () => {
    //60 years ago plus one day - applicant at least 60 years old
    const dateOfBirth = utils.getDateByOffset(-(60 * 365.2425 + 1))
    cy.enterApplicantDateOfBirth(dateOfBirth.month, dateOfBirth.day, dateOfBirth.year)

    pages
      .legend()
      .contains(ES_CRITERIA_DATA["criteria.applicant_served_in_active_military.label"])
      .parent()
      .find(".usa-radio__label")
      .contains("sí")
      .click()
    pages.checkboxLabels().contains(ES_CRITERIA_DATA["criteria.applicant_disability.label"]).click()
    pages
      .applicantServiceStatusDropdown()
      .select(
        ES_CRITERIA_DATA[
          "criteria.applicant_service_status.values3"
        ]
      )

    pages
      .accordionButtons()
      .contains(ES_DOD_RETIREMENT_AND_DISABILITY_PAYMENTS_DATA["dod-retirement-and-disability-payments.title"])
      .click()
    
      pages
      .retirementAndDisabilityPaymentsCard()
      .should(
        "contain",
        ES_DOD_RETIREMENT_AND_DISABILITY_PAYMENTS_DATA["dod-retirement-and-disability-payments.source.name"]
      )
      .and("contain", ES_DOD_RETIREMENT_AND_DISABILITY_PAYMENTS_DATA["dod-retirement-and-disability-payments.summary"])
      .and(
        "contain",
        ES_DOD_RETIREMENT_AND_DISABILITY_PAYMENTS_DATA[
          "dod-retirement-and-disability-payments.criticalApplicationInformation"
        ]
      )
      .and(
        "contain",
        ES_DOD_RETIREMENT_AND_DISABILITY_PAYMENTS_DATA["dod-retirement-and-disability-payments.eligibility.label"]
      )
      .and(
        "contain",
        ES_DOD_RETIREMENT_AND_DISABILITY_PAYMENTS_DATA["dod-retirement-and-disability-payments.eligibility.label1"]
      )
      .and(
        "contain",
        ES_DOD_RETIREMENT_AND_DISABILITY_PAYMENTS_DATA[
          "dod-retirement-and-disability-payments.eligibility.acceptableValues1"
        ]
      )
      .and(
        "contain",
        ES_DOD_RETIREMENT_AND_DISABILITY_PAYMENTS_DATA[
          "dod-retirement-and-disability-payments.eligibility.acceptableValues2"
        ]
      )

      pages.retirementAndDisabilityPaymentsIcons().each(($icon) => {
        cy.wrap($icon).parent().should("have.class", "text-success-dark")
      })
  })
})
