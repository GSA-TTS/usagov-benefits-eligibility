/// <reference types="cypress"/>

const sitePages = require("../../fixtures/site-pages.json")

describe('Validate Open All button functionality', ()=> {
    sitePages.forEach(sitePage => {
        it(`Verify Open All button should open all accordion cards in ${sitePage.name}`, ()=> {
            cy.visit({ url: sitePage.route })
            cy.get('.flex-row .open-all').click()
            cy.get('.usa-accordion__heading .usa-accordion__button').each((accordion) => {
                cy.wrap(accordion).invoke("prop", "ariaExpanded").should('eq', 'true')
            })
        })
    });  
})

describe('Validate Close All button functionality', ()=> {
    sitePages.forEach(sitePage => {
        it(`Verify Close All button should close all accordion cards in ${sitePage.name}`, ()=> {
            cy.visit({ url: sitePage.route })
            cy.get('.flex-row .open-all').click()
            cy.get('.flex-row .close-all').click()
            cy.get('.usa-accordion__heading .usa-accordion__button').each((accordion) => {
                cy.wrap(accordion).invoke("prop", "ariaExpanded").should('eq', 'false')
            })
        })
        
    });  
})