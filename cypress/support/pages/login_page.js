/// <reference types="cypress"/>

let el = require('../elements/loginElements').login

export default {
    fillLogin(email, senha) {
        if (email !== null) {
        cy.get(el.inputEmail)
            .should('be.visible')
            .type(email, {log: false})
        }
        if (senha !== null) {
        cy.get(el.inputPassword)
            .should('be.visible')
            .type(senha, {log: false})
        }
    },

    logIn() {
        cy.get(el.btnLogin)
            .click()
    },

    selectCheckbox() {
        cy.get(el.checkbox).check();
    },
    
    deselectCheckbox() {
        cy.get(el.checkbox).uncheck();
    },

    clickLinkCreateAccount() {
        cy.get(el.linkCreateAccount).click({force: true});        
    },

    checkMessage(message) {
        cy.get(el.msgError)
            .should('have.text', message)
    },
    
    checkLoginSuccess() {
        cy.get(el.msgSuccess)
            .should('have.text', 'Login realizado')
        
        cy.get(el.msgWelcome, {timeout: 3000})
            .should('have.text', `Olá, kylian@teste.com`)
    },

    checkUrl(url) {
        cy.url()
            .should('include', url)
    },

    checkCheckbox() {
        cy.get(el.checkbox)
            .should('be.checked')
    }
    ,
    checkCheckboxUncheck() {
        cy.get(el.checkbox)
            .should('not.be.checked')
    },

    checkLinkRegistration() {
        cy.get(el.titlePageRegister)
            .should('be.visible');
    },

    validatePageLogin(){ 
        cy.get(el.titlePageLogin)
            .should('be.visible')
    }
}