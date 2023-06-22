/// <reference types="Cypress" />

import { footer } from "../../support/page-objects/footer.js"
import { header } from "../../support/page-objects/header.js"
import * as ES_DATA from "../../../locales/es/es.json"
import * as EN_DATA from "../../../locales/en/en.json"

const footerContentES = ES_DATA.beta.footer
const footerContentEN = EN_DATA.beta.footer
let LOC

describe("Footer Tests", () => {
  before(() => {
    cy.visit("/")
  })

  it(`Validate english footer content mapping`, () => {
    footer
      .primaryFooterHeading()
      .should("contain", footerContentEN.column1Title)
      .and("contain", "About Us")
      .and("contain", "For federal agencies")
      .and("contain", "For media")

    footer
      .primaryFooterLinks()
      .should("contain", "All topics and services")
      .and("contain", "Directory of U.S. government agencies and departments")
      .and("contain", "Branches of government")
      .and("contain", "About USAGov")
      .and("contain", "Privacy and security policies")
      .and("contain", "Accessibility policy")
      .and("contain", "Report a website issue")
      .and("contain", "Website usage data")
      .and("contain", "Partner with us")
      .and("contain", "Read our blog")
      .and("contain", "USAGov Outreach")
      .and("contain", "Feature articles")

    footer.signUpHeading().should("contain", "Sign up to receive email updates")
    footer.signUpEmailInputField().should("exist")
    footer.signUpButton().should("exist")

    footer.secondaryFooter().should("contain", "USAGov Contact Center")
    footer.secondaryFooter().should("contain", "Ask USA.gov a question at")
    footer.secondaryFooter().should("contain", "1-844-USAGOV1 (1-844-872-4681)")

    footer
      .secondaryFooterSocialMedia()
      .should("contain", "Instagram USAGov")
      .should("contain", "Facebook USAGov")
      .and("contain", "Twitter USAGov")
      .and("contain", "YouTube USAGov")
  })

  before(() => {
    header.languageSwitcher().click()
  })
  it(`Validate spanish footer content mapping`, () => {
    window.location.toString().includes("/es/")
    footer
      .primaryFooterHeading()
      .should("contain", footerContentES.column1Title)
      .and("contain", "Sobre nosotros")
      .and("contain", "Para agencias federales")
      .and("contain", "Para medios de comunicación")

    footer
      .primaryFooterLinks()
      .should("contain", "Todos los temas y servicios")
      .and("contain", "Directorios de agencias y departamentos del Gobierno de EE. UU.")
      .and("contain", "Ramas del Gobierno")
      .and("contain", "Acerca de USAGov en Español")
      .and("contain", "Políticas de privacidad y seguridad")
      .and("contain", "Reporte problemas en este sitio")
      .and("contain", "Colabore con nosotros")
      .and("contain", "Lea nuestro blog (en inglés)")
      .and("contain", "Promoción del programa USAGov")
      .and("contain", "Artículos de interés")

    footer.signUpHeading().should("contain", "Subscríbase para recibir información actualizada")
    footer.signUpEmailInputField().should("exist")
    footer.signUpButton().should("exist")

    footer.secondaryFooter().should("contain", "Centro de llamadas de USAGov")
    footer.secondaryFooter().should("contain", "Haga una pregunta a USAGov en Español al")
    footer.secondaryFooter().should("contain", "1-844-USAGOV1 (1-844-872-4681)")

    footer
      .secondaryFooterSocialMedia()
      .should("contain", "Instagram USAGov")
      .should("contain", "Facebook USAGov")
      .and("contain", "Twitter USAGov")
      .and("contain", "YouTube USAGov")
  })
})
