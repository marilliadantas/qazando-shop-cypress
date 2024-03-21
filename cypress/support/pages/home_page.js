/// <reference types="cypress"/>

export default {
    accessLoginPage() {
        cy.visit('/')
        .get('.header-logo')

        cy.get('.fa-user')
        .click()

        cy.get('.account_form > h3')
        .should('be.visible')
    },

    accessRegisterPage() {
        cy.visit('/')
        .get('.header-logo')

        cy.get('.fa-lock')
        .click()

        cy.get('#user')
        .should('be.visible')
    }
}