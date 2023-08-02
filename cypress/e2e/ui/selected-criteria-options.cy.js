/// <reference types="cypress"/>

import { pages } from "../../support/page-objects/pages.js"
import * as utils from "../../support/utils.js"
import * as EN_CRITERIA_DATA from "../../../locales/en/criteria.json"
import * as ES_CRITERIA_DATA from "../../../locales/es/criteria.json"
import * as EN_SURVIVOR_BENEFITS_CHILD_DATA from "../../../locales/en/benefits/ssa-survivor-benefits-child.json"
import * as ES_SURVIVOR_BENEFITS_PARENTS_DATA from "../../../locales/es/benefits/ssa-survivor-benefits-parents.json"
import * as EN_SSA_DISABILITY_INSURANCE_CHILD_DISABLED_DATA from "../../../locales/en/benefits/ssa-disability-insurance-child-disabled.json"
import * as ES_DOD_RETIREMENT_AND_DISABILITY_PAYMENTS_DATA from "../../../locales/es/benefits/dod-retirement-and-disability-payments.json"
import * as EN_DOD_THRIFT_SAVINGS_PLAN_DATA from "../../../locales/en/benefits/dod-thrift-savings-plan.json"
import * as ES_DOI_HOUSING_IMPROVEMENT_PROGRAM_DATA from "../../../locales/es/benefits/doi-housing-improvement-program.json"

describe("Validate selected creteria options in DOLO English Page", () => {
  it("Validate Survivor Benefits for Child accordion is rendered correctly based on selected criteria options", () => {
    //18 years ago minus one day - applicant under 18 years old
    //1 day = 365.2425 (accounts for leap year)
    const dateOfBirth = utils.getDateByOffset(-(18 * 365.2425 - 1))

    const maritalStatus = encodeURI(EN_SURVIVOR_BENEFITS_CHILD_DATA["ssa-survivor-benefits-child.eligibility.acceptableValues1"])
    const applicantRelationship = encodeURI(EN_CRITERIA_DATA["criteria.applicant_relationship.values2"])


    cy.visit({
      url: `death-of-a-loved-one/?e782efd=1&b95c6d4=${dateOfBirth}&a748b56=${maritalStatus}&9d65c08=1&8f306c9=${applicantRelationship}`,
    })

    pages
      .accordions()
      .contains(EN_SURVIVOR_BENEFITS_CHILD_DATA["ssa-survivor-benefits-child.title"])
      .click()
      .parent()
      .should("have.class", "border-success-dark")

    pages.survivorBenefitsChildIcons().each(($icon) => {
      cy.wrap($icon).parent().should("have.class", "text-success-dark")
    })
  })
})

describe("Validate selected creteria options in DOLO Spanish Page", () => {
  it("Validate Beneficios para padre/madre sobreviviente accordion is rendered correctly based on selected criteria options", () => {
    //62 years ago plus one day - applicant is at least 62 years old
    const dateOfBirth = utils.getDateByOffset(-(62 * 365.2425 + 1))
    const applicantRelationship = encodeURI(ES_SURVIVOR_BENEFITS_PARENTS_DATA["ssa-survivor-benefits-parents.eligibility.acceptableValues"])

    cy.visit({ url: `es/death-of-a-loved-one/?e782efd=1&b95c6d4=${dateOfBirth}&9d65c08=1&8f306c9=${applicantRelationship}` })

    pages
      .accordions()
      .contains(ES_SURVIVOR_BENEFITS_PARENTS_DATA["ssa-survivor-benefits-parents.title"])
      .click()
      .parent()
      .should("have.class", "border-success-dark")

    pages.survivorBenefitsParentIcons().each(($icon) => {
      cy.wrap($icon).parent().should("have.class", "text-success-dark")
    })
  })
})

describe("Validate selected creteria options in Disability English Page", () => {
  it("Validate Social Security Disability Insurance for Child with Disabilities accordion is rendered correctly based on selected criteria options", () => {
    //18 years ago plus one day - applicant at least 18 years old
    const dateOfBirth = utils.getDateByOffset(-(18 * 365.2425 + 1))
    const applicantRelationship = encodeURI(EN_SSA_DISABILITY_INSURANCE_CHILD_DISABLED_DATA["ssa-disability-insurance-child-disabled.eligibility.acceptableValues"])

    cy.visit({ url: `disability/?b95c6d4=${dateOfBirth}&a748b56=${applicantRelationship}&9d65c08=1&8c5fff1=1&32c6b93=1&52fb8ed=1` })

    pages
      .accordions()
      .contains(EN_SSA_DISABILITY_INSURANCE_CHILD_DISABLED_DATA["ssa-disability-insurance-child-disabled.title"])
      .click()
      .parent()
      .should("have.class", "border-success-dark")

    pages.disabilityInsuranceChildDisabledIcons().each(($icon) => {
      cy.wrap($icon).parent().should("have.class", "text-success-dark")
    })
  })
})

describe("Validate selected creteria options in Disability Spanish Page", () => {
  it("Validate Pagos Concurrentes de Jubilación y de Discapacidad (CRDP) accordion is rendered correctly based on selected criteria options", () => {
    //60 years ago plus one day - applicant at least 60 years old
    const dateOfBirth = utils.getDateByOffset(-(60 * 365.2425 + 1))
    const applicantServiceStatus =  encodeURI(ES_CRITERIA_DATA["criteria.applicant_service_status.values3"])
    const applicantServedMilitary =  encodeURI(ES_DOD_RETIREMENT_AND_DISABILITY_PAYMENTS_DATA["dod-retirement-and-disability-payments.eligibility.acceptableValues"])
    
    cy.visit({ url: `es/disability/?b95c6d4=${dateOfBirth}&8c5fff1=1&2fe2b3a=${applicantServedMilitary}&633dad2=${applicantServiceStatus}` })

    pages
      .accordions()
      .contains(ES_DOD_RETIREMENT_AND_DISABILITY_PAYMENTS_DATA["dod-retirement-and-disability-payments.title"])
      .click()
      .parent()
      .should("have.class", "border-success-dark")

    pages.retirementAndDisabilityPaymentsIcons().each(($icon) => {
      cy.wrap($icon).parent().should("have.class", "text-success-dark")
    })
  })
})

describe("Validate selected creteria options in Retirement English Page", () => {
  it("Validate Thrift Savings Plan (TSP) accordion is rendered correctly based on selected criteria options", () => {
    //60 years ago plus one day - applicant is at least 60 years old
    const dateOfBirth = utils.getDateByOffset(-(60 * 365.2425 + 1))
    const applicantRelationship = EN_DOD_THRIFT_SAVINGS_PLAN_DATA["dod-thrift-savings-plan.eligibility.acceptableValues"]

    cy.visit({ url: `retirement/?b95c6d4=${dateOfBirth}&2fe2b3a=${applicantRelationship}` })

    pages
      .accordions()
      .contains(EN_DOD_THRIFT_SAVINGS_PLAN_DATA["dod-thrift-savings-plan.title"])
      .click()
      .parent()
      .should("have.class", "border-success-dark")

    pages.thriftSavingsPlanIcons().each(($icon) => {
      cy.wrap($icon).parent().should("have.class", "text-success-dark")
    })
  })
})

describe("Validate selected creteria options in Retirement Spanish Page", () => {
  it("Validate Programa de mejoramiento de vivienda (HIP) accordion is rendered correctly based on selected criteria options", () => {
    const applicantAmericanIndia = ES_DOI_HOUSING_IMPROVEMENT_PROGRAM_DATA["doi-housing-improvement-program.eligibility.acceptableValues"]
    
    cy.visit({ url: `es/retirement/?05c56fb=1&6c8cb1d=${applicantAmericanIndia}` })

    pages
      .accordions()
      .contains(ES_DOI_HOUSING_IMPROVEMENT_PROGRAM_DATA["doi-housing-improvement-program.title"])
      .click()
      .parent()
      .should("have.class", "border-success-dark")

    pages.housingImprovementProgramIcons().each(($icon) => {
      cy.wrap($icon).parent().should("have.class", "text-success-dark")
    })
  })
})
