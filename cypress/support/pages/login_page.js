/// <reference types="cypress"/>

const elements = {
    login: {
        inputEmail: '#user',
        inputPassword: 'input[id="password"]',
        btnLogin: 'button[id="btnLogin"]',
        msgSuccess: 'h2[id="swal2-title"]',
        msgWelcome: 'div[id="swal2-html-container"]',
        msgError: '.invalid_input',
        checkbox: '#materialUnchecked',
        linkCreateAccount: '#createAccount',
        titlePageRegister: '.account_form > h3'
    }
}

export default {
    fillLogin(email, senha) {
        if (email !== null) {
        cy.get(elements.login.inputEmail)
            .should('be.visible')
            .type(email, {log: false})
        }
        if (senha !== null) {
        cy.get(elements.login.inputPassword)
            .should('be.visible')
            .type(senha, {log: false})
        }
    },

    logIn() {
        cy.get(elements.login.btnLogin)
            .click()
    },

    selectCheckbox() {
        cy.get(elements.login.checkbox).check();
    },
    
    deselectCheckbox() {
        cy.get(elements.login.checkbox).uncheck();
    },

    clickLinkCreateAccount() {
        cy.get(elements.login.linkCreateAccount).click({force: true});        
    },

    checkMessage(message) {
        cy.get(elements.login.msgError)
            .should('have.text', message)
    },
    
    checkLoginSuccess(email) {
        cy.get(elements.login.msgSuccess)
            .should('have.text', 'Login realizado')
        
        cy.get(elements.login.msgWelcome, {timeout: 3000})
            .should('have.text', `Olá, kylian@teste.com`)
    },

    checkUrl(url) {
        cy.url()
            .should('include', url)
    },

    checkCheckbox() {
        cy.get(elements.login.checkbox)
            .should('be.checked')
    }
    ,
    checkCheckboxUncheck() {
        cy.get(elements.login.checkbox)
            .should('not.be.checked')
    },

    checkLinkRegistration() {
        cy.get(elements.login.titlePageRegister)
            .should('be.visible');
    },

    validatePageLogin(){ 
        cy.get(loc.login.titlePageLogin)
            .should('be.visible')
    }
}