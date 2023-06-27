/// <reference types="cypress"/>

import { pages } from "../../support/page-objects/pages.js"
import * as EN_CRITERIA from "../../../locales/en/criteria.json"
import * as EN_BENEFITS_COVID_19 from "../../../locales/en/benefits/fema-covid-19-funeral-assistance.json"

describe("Sort benefits accordion list using Covid 19 filter", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("Validate benefits are sorted by Relevance by default", () => {
    pages.checkboxLabels().contains(EN_CRITERIA["criteria.deceased_died_of_COVID.label"]).click()

    const benefitsList = []

    pages
      .accordions()
      .each(($el) => {
        benefitsList.push($el.text().trim())
      })
      .then(() => {
        expect(benefitsList[0]).to.include(EN_BENEFITS_COVID_19["fema-covid-19-funeral-assistance.title"])
      })
  })

  it("Validate benefits are sorted alphabetically when using benefit sorted by Title A-Z", () => {
    pages.benefitSortDropDown().select("Title (A-Z)")
    pages.checkboxLabels().contains(EN_CRITERIA["criteria.deceased_died_of_COVID.label"]).click()

    const benefitsList = []
    const benefitsListSorted = []

    pages
      .accordions()
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
    pages.checkboxLabels().contains(EN_CRITERIA["criteria.deceased_died_of_COVID.label"]).click()
    pages.benefitSortDropDown().select("Relevance")
    cy.wait(1500)

    const benefitsList = []

    pages
      .accordions()
      .each(($el) => {
        benefitsList.push($el.text().trim())
      })
      .then(() => {
        expect(benefitsList[0]).to.include(EN_BENEFITS_COVID_19["fema-covid-19-funeral-assistance.title"])
      })
  })
})
