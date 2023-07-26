// ***********************************************
// This commands.js contains custom commands

// please read more on custom commands here:
// https://on.cypress.io/custom-commands
// ***********************************************

import { pages } from "../support/page-objects/pages.js"

Cypress.Commands.add('enterApplicantDateOfBirth', (month, day, year) => {
    cy.wait(1000)
    pages.applicantDateOfBirthMonth().type(month)
    cy.wait(1000)
    pages.applicantDateOfBirthDay().type(day)
    pages.applicantDateOfBirthYear().type(year)
})