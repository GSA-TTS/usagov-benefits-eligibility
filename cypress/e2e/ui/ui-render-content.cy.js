/// <reference types="cypress"/>

import { pages } from "../../support/page-objects/pages.js"
import * as SITE_PAGES_DATA from "../../fixtures/site-pages.json"
import * as EN_SURVIVOR_BENEFITS_CHILD from "../../../locales/en/benefits/ssa-survivor-benefits-child.json"
import * as ES_SURVIVOR_BENEFITS_PARENTS from "../../../locales/es/benefits/ssa-survivor-benefits-parents.json"
import * as EN_CMS_MEDICARE_SAVINGS_PROGRAMS from "../../../locales/en/benefits/cms-medicare-savings-programs.json"
import * as ES_DOD_RETIREMENT_AND_DISABILITY_PAYMENTS from "../../../locales/es/benefits/dod-retirement-and-disability-payments.json"
import * as EN_DOD_THRIFT_SAVINGS_PLAN from "../../../locales/en/benefits/dod-thrift-savings-plan.json"
import * as ES_DOI_HOUSING_IMPROVEMENT_PROGRAM from "../../../locales/es/benefits/doi-housing-improvement-program.json"
import * as EN_LIFE_EVENTS_DISABILITY from "../../../locales/en/life-events/disability.json"
import * as EN_LIFE_EVENTS_RETIREMENT from "../../../locales/en/life-events/retirement.json"

const sitePages = SITE_PAGES_DATA.sitePages

describe("Verify UI is rendering content correctly", () => {
  sitePages.forEach((sitePage) => {
    it(`Verify ${sitePage.name} is rendering content correctly instead of dot notation value on checkbox labels`, () => {
      cy.visit({ url: sitePage.route })
      pages.checkboxLabels().each((checkboxLabel) => {
        cy.wrap(checkboxLabel).invoke("prop", "innerText").should("not.contain", "criteria.")
        cy.wrap(checkboxLabel).invoke("prop", "innerText").should("not.contain", ".label")
      })
    })
  })
})

describe("Verify Benefits Card content is displaying correctly", ()=> {
  beforeEach(() => {
    cy.visit("/")
  })
  it("Verify content on Survivor Benefits for Child accordion is displaying correctly on DOLO English page", ()=> {
    pages.accordions().contains(EN_SURVIVOR_BENEFITS_CHILD["ssa-survivor-benefits-child.title"]).click()
    pages.survivorBenefitsChildCard().should("contain", EN_SURVIVOR_BENEFITS_CHILD["ssa-survivor-benefits-child.source.name"])
    .and("contain", EN_SURVIVOR_BENEFITS_CHILD["ssa-survivor-benefits-child.summary"])
    .and("contain", EN_SURVIVOR_BENEFITS_CHILD["ssa-survivor-benefits-child.criticalApplicationInformation"])
    .and("contain", EN_SURVIVOR_BENEFITS_CHILD["ssa-survivor-benefits-child.eligibility.acceptableValues"])
    .and("contain", EN_SURVIVOR_BENEFITS_CHILD["ssa-survivor-benefits-child.eligibility.label"])
    .and("contain", EN_SURVIVOR_BENEFITS_CHILD["ssa-survivor-benefits-child.eligibility.acceptableValues1"])
  })

  it("Verify content on Beneficios para padre/madre sobreviviente accordion is displaying correctly on DOLO Spanish page", ()=> {
    pages.languageSwitcher().click()
    pages.accordions().contains(ES_SURVIVOR_BENEFITS_PARENTS["ssa-survivor-benefits-parents.title"]).click()
    pages.survivorBenefitsParentCard().should("contain", ES_SURVIVOR_BENEFITS_PARENTS["ssa-survivor-benefits-parents.source.name"])
    .and("contain", ES_SURVIVOR_BENEFITS_PARENTS["ssa-survivor-benefits-parents.summary"])
    .and("contain", ES_SURVIVOR_BENEFITS_PARENTS["ssa-survivor-benefits-parents.criticalApplicationInformation"])
    .and("contain", ES_SURVIVOR_BENEFITS_PARENTS["ssa-survivor-benefits-parents.eligibility.acceptableValues"])
    .and("contain", ES_SURVIVOR_BENEFITS_PARENTS["ssa-survivor-benefits-parents.eligibility.label"])
  })

  it("Verify content on Medicare Savings Programs (MSP) accordion is displaying correctly on Disability English page", ()=> {
    pages.otherBenefitsUsaCardGroup().contains(EN_LIFE_EVENTS_DISABILITY["disability.title"]).click()
    pages.accordions().contains(EN_CMS_MEDICARE_SAVINGS_PROGRAMS["cms-medicare-savings-programs.title"]).click()
    pages.medicareSavingsProgramsCard().should("contain", EN_CMS_MEDICARE_SAVINGS_PROGRAMS["cms-medicare-savings-programs.source.name"])
    .and("contain", EN_CMS_MEDICARE_SAVINGS_PROGRAMS["cms-medicare-savings-programs.summary"])
    .and("contain", EN_CMS_MEDICARE_SAVINGS_PROGRAMS["cms-medicare-savings-programs.criticalApplicationInformation"])
    .and("contain", EN_CMS_MEDICARE_SAVINGS_PROGRAMS["cms-medicare-savings-programs.eligibility.label"])
    .and("contain", EN_CMS_MEDICARE_SAVINGS_PROGRAMS["cms-medicare-savings-programs.source.link"])
  })

  it("Verify content on Pagos Concurrentes de Jubilación y de Discapacidad (CRDP) accordion is displaying correctly on Disability Spanish page", ()=> {
    pages.otherBenefitsUsaCardGroup().contains(EN_LIFE_EVENTS_DISABILITY["disability.title"]).click()
    pages.languageSwitcher().click()
    pages.accordions().contains(ES_DOD_RETIREMENT_AND_DISABILITY_PAYMENTS["dod-retirement-and-disability-payments.title"]).click()
    pages.retirementAndDisabilityPaymentsCard().should("contain", ES_DOD_RETIREMENT_AND_DISABILITY_PAYMENTS["dod-retirement-and-disability-payments.source.name"])
    .and("contain", ES_DOD_RETIREMENT_AND_DISABILITY_PAYMENTS["dod-retirement-and-disability-payments.summary"])
    .and("contain", ES_DOD_RETIREMENT_AND_DISABILITY_PAYMENTS["dod-retirement-and-disability-payments.criticalApplicationInformation"])
    .and("contain", ES_DOD_RETIREMENT_AND_DISABILITY_PAYMENTS["dod-retirement-and-disability-payments.eligibility.label"])
    .and("contain", ES_DOD_RETIREMENT_AND_DISABILITY_PAYMENTS["dod-retirement-and-disability-payments.eligibility.label1"])
    .and("contain", ES_DOD_RETIREMENT_AND_DISABILITY_PAYMENTS["dod-retirement-and-disability-payments.eligibility.acceptableValues1"])
    .and("contain", ES_DOD_RETIREMENT_AND_DISABILITY_PAYMENTS["dod-retirement-and-disability-payments.eligibility.acceptableValues2"])
  })

  it("Verify content on Thrift Savings Plan (TSP) accordion is displaying correctly on Retirement English page", ()=> {
    pages.otherBenefitsUsaCardGroup().contains(EN_LIFE_EVENTS_RETIREMENT["retirement.title"]).click()
    pages.accordions().contains(EN_DOD_THRIFT_SAVINGS_PLAN["dod-thrift-savings-plan.title"]).click()
    pages.thriftSavingsPlanCard().should("contain", EN_DOD_THRIFT_SAVINGS_PLAN["dod-thrift-savings-plan.source.name"])
    .and("contain", EN_DOD_THRIFT_SAVINGS_PLAN["dod-thrift-savings-plan.summary"])
    .and("contain", EN_DOD_THRIFT_SAVINGS_PLAN["dod-thrift-savings-plan.criticalApplicationInformation"])
    .and("contain", EN_DOD_THRIFT_SAVINGS_PLAN["dod-thrift-savings-plan.eligibility.label"])
    .and("contain", EN_DOD_THRIFT_SAVINGS_PLAN["dod-thrift-savings-plan.source.link"])
  })

  it("Verify content on Programa de mejoramiento de vivienda (HIP) accordion is displaying correctly on Retirement Spanish page", ()=> {
    pages.otherBenefitsUsaCardGroup().contains(EN_LIFE_EVENTS_RETIREMENT["retirement.title"]).click()
    pages.languageSwitcher().click()
    pages.accordions().contains(ES_DOI_HOUSING_IMPROVEMENT_PROGRAM["doi-housing-improvement-program.title"]).click()
    pages.housingImprovementProgramCard().should("contain", ES_DOI_HOUSING_IMPROVEMENT_PROGRAM["doi-housing-improvement-program.source.name"])
    .and("contain", ES_DOI_HOUSING_IMPROVEMENT_PROGRAM["doi-housing-improvement-program.summary"])
    .and("contain", ES_DOI_HOUSING_IMPROVEMENT_PROGRAM["doi-housing-improvement-program.eligibility.label"])
    .and("contain", ES_DOI_HOUSING_IMPROVEMENT_PROGRAM["doi-housing-improvement-program.source.link"])
  })

})
