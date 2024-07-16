/// <reference types="cypress"/>

let el = require('../elements/initialElements').initial

export default {
    accessInitialPage() {
        cy.visit('/')
            .get('.header-logo')
    },

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
    },

    fillNewsLetter(email) {
        cy.get(el.inputNewsLetter)
            .type(email)
    },

    clickSendMail() {
        cy.get(el.btnSendMail)
            .click()
    },

    checkMessages() {
        return cy.get(el.msgTitleSuccess).invoke("text").then((msgTitle) => {
            return cy.get(el.msgSuccess).invoke("text").then((msgSuccess) => {
                return [msgTitle.trim(), msgSuccess.trim()];
            })
        })
    },

    closeModal() {
        cy.get(el.btnOk)
            .click()
    }
}