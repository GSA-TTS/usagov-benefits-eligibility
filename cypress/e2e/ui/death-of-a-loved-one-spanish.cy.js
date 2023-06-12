/// <reference types="cypress"/>

describe("Death of a loved one Spanish page tests", ()=> {
    it("Verify UI is rendering content correctly instead of dot notation value on checkbox labels", ()=> {
        cy.visit('/es/death-of-a-loved-one')
        cy.get(".usa-checkbox__label").each(checkboxLabels => {
            cy.wrap(checkboxLabels).invoke('prop', 'innerText').should('not.contain', 'criteria.')
            cy.wrap(checkboxLabels).invoke('prop', 'innerText').should('not.contain', '.label')
        })
    })
})