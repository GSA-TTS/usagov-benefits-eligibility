/// <reference types="cypress"/>

import { pages } from "../../support/page-objects/pages.js"
import * as EN_BENEFITS_COVID_19 from "../../../locales/en/benefits/fema-covid-19-funeral-assistance.json"
import * as ES_BENEFITS_VA_BURIAL_ALLOWANCE from "../../../locales/es/benefits/va-burial-allowance.json"
import * as EN_BENEFITS_IRS_TAX_HELP_DISABILITY from "../../../locales/en/benefits/irs-tax-help-disability.json"
import * as ES_BENEFITS_SSA_DISABILITY_INSURANCE_SPOUSE from "../../../locales/es/benefits/ssa-disability-insurance-spouse.json"
import * as EN_BENEFITS_VA_PENSION from "../../../locales/en/benefits/va-pension.json"
import * as ES_BENEFITS_SSA_RETIREMENT_BENEFITS_CHILD_DISABLED from "../../../locales/es/benefits/ssa-retirement-benefits-child-disabled.json"
import * as EN_LIFE_EVENTS_DISABILITY from "../../../locales/en/life-events/disability.json"
import * as EN_LIFE_EVENTS_RETIREMENT from "../../../locales/en/life-events/retirement.json"


describe("Validate opening and closing of accordion cards", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("Validate opening and closing of COVID 19 Funeral Assistance accordion card in Death of a loved one English page", () => {
    pages.accordions().contains(EN_BENEFITS_COVID_19["fema-covid-19-funeral-assistance.title"]).click()
    pages
      .accordions()
      .contains(EN_BENEFITS_COVID_19["fema-covid-19-funeral-assistance.title"])
      .invoke("prop", "ariaExpanded")
      .should("eq", "true")
    pages.accordions().contains(EN_BENEFITS_COVID_19["fema-covid-19-funeral-assistance.title"]).click()
    pages
      .accordions()
      .contains(EN_BENEFITS_COVID_19["fema-covid-19-funeral-assistance.title"])
      .invoke("prop", "ariaExpanded")
      .should("eq", "false")
  })

  it("Validate opening and closing of Veteran's Burial Allowance accordion card in Death of a loved one Spanish page", () => {
    pages.languageSwitcher().click()
    pages.accordions().contains(ES_BENEFITS_VA_BURIAL_ALLOWANCE["va-burial-allowance.title"]).click()
    pages
      .accordions()
      .contains(ES_BENEFITS_VA_BURIAL_ALLOWANCE["va-burial-allowance.title"])
      .invoke("prop", "ariaExpanded")
      .should("eq", "true")
    pages.accordions().contains(ES_BENEFITS_VA_BURIAL_ALLOWANCE["va-burial-allowance.title"]).click()
    pages
      .accordions()
      .contains(ES_BENEFITS_VA_BURIAL_ALLOWANCE["va-burial-allowance.title"])
      .invoke("prop", "ariaExpanded")
      .should("eq", "false")
  })

  it("Validate opening and closing of Tax Relief Programs for People with Disabilites accordion card in Disabilites English page", () => {
    pages.otherBenefitsUsaCardGroup().contains(EN_LIFE_EVENTS_DISABILITY["disability.title"]).click()
    pages.accordions().contains(EN_BENEFITS_IRS_TAX_HELP_DISABILITY["irs-tax-help-disability.title"]).click()
    pages
      .accordions()
      .contains(EN_BENEFITS_IRS_TAX_HELP_DISABILITY["irs-tax-help-disability.title"])
      .invoke("prop", "ariaExpanded")
      .should("eq", "true")
    pages.accordions().contains(EN_BENEFITS_IRS_TAX_HELP_DISABILITY["irs-tax-help-disability.title"]).click()
    pages
      .accordions()
      .contains(EN_BENEFITS_IRS_TAX_HELP_DISABILITY["irs-tax-help-disability.title"])
      .invoke("prop", "ariaExpanded")
      .should("eq", "false")
  })

  it("Validate opening and closing of Social Security Disability Insurance for Spouse accordion card in Disabilites Spanish page", () => {
    pages.otherBenefitsUsaCardGroup().contains(EN_LIFE_EVENTS_DISABILITY["disability.title"]).click()
    pages.languageSwitcher().click()
    pages.accordions().contains(ES_BENEFITS_SSA_DISABILITY_INSURANCE_SPOUSE["ssa-disability-insurance-spouse.title"]).click()
    pages
      .accordions()
      .contains(ES_BENEFITS_SSA_DISABILITY_INSURANCE_SPOUSE["ssa-disability-insurance-spouse.title"])
      .invoke("prop", "ariaExpanded")
      .should("eq", "true")
    pages.accordions().contains(ES_BENEFITS_SSA_DISABILITY_INSURANCE_SPOUSE["ssa-disability-insurance-spouse.title"]).click()
    pages
      .accordions()
      .contains(ES_BENEFITS_SSA_DISABILITY_INSURANCE_SPOUSE["ssa-disability-insurance-spouse.title"])
      .invoke("prop", "ariaExpanded")
      .should("eq", "false")
  })

  it("Validate opening and closing of Veteran's Pension accordion card in Retirement English page", () => {
    pages.otherBenefitsUsaCardGroup().contains(EN_LIFE_EVENTS_RETIREMENT["retirement.title"]).click()
    pages.accordions().contains(EN_BENEFITS_VA_PENSION["va-pension.title"]).click()
    pages
      .accordions()
      .contains(EN_BENEFITS_VA_PENSION["va-pension.title"])
      .invoke("prop", "ariaExpanded")
      .should("eq", "true")
    pages.accordions().contains(EN_BENEFITS_VA_PENSION["va-pension.title"]).click()
    pages
      .accordions()
      .contains(EN_BENEFITS_VA_PENSION["va-pension.title"])
      .invoke("prop", "ariaExpanded")
      .should("eq", "false")
  })

  it("Validate opening and closing of Retirement Benefits for Child with Disabilities accordion card in Retirement Spanish page", () => {
    pages.otherBenefitsUsaCardGroup().contains(EN_LIFE_EVENTS_RETIREMENT["retirement.title"]).click()
    pages.languageSwitcher().click()
    pages
      .accordions()
      .contains(ES_BENEFITS_SSA_RETIREMENT_BENEFITS_CHILD_DISABLED["ssa-retirement-benefits-child-disabled.title"])
      .click()
    pages
      .accordions()
      .contains(ES_BENEFITS_SSA_RETIREMENT_BENEFITS_CHILD_DISABLED["ssa-retirement-benefits-child-disabled.title"])
      .invoke("prop", "ariaExpanded")
      .should("eq", "true")
    pages
      .accordions()
      .contains(ES_BENEFITS_SSA_RETIREMENT_BENEFITS_CHILD_DISABLED["ssa-retirement-benefits-child-disabled.title"])
      .click()
    pages
      .accordions()
      .contains(ES_BENEFITS_SSA_RETIREMENT_BENEFITS_CHILD_DISABLED["ssa-retirement-benefits-child-disabled.title"])
      .invoke("prop", "ariaExpanded")
      .should("eq", "false")
  })
})
